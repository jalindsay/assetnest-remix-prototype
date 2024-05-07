import { type ActionFunctionArgs } from '@remix-run/node'
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit,
} from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import Alert from '~/components/ui/Alert'
import { Avatar } from '~/components/ui/Avatar'
import Button from '~/components/ui/Button'
import { TextInput } from '~/components/ui/TextInput'
import { getSession } from '~/cookies'
import { createChangeEmailLog } from '~/endpoints/emailChangeLog'
import { getUserEmail, getUserId, updateUser } from '~/endpoints/user'
import { emailValid } from '~/utils/emailValidator'
import { comparePasswords } from '~/utils/passwordHashing.server'
import { v4 as uuidv4 } from 'uuid'
import SignatureCanvas from 'react-signature-canvas'
import { getStorage } from '~/utils/storage.server'
import { resizeImage } from '~/utils/resizeImage.server'
import { pageTitle } from '~/styles/typography'

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const formType = body.get('_action') as string
  const firstName = body.get('firstName') as string
  const lastName = body.get('lastName') as string
  const email = body.get('email') as string
  const password = body.get('password') as string

  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  const imageData = body.get('imageData') as any
  let signatureData = body.get('signatureData') as any
  let imageUuid = undefined
  let signatureUuid = undefined

  const storageClient = getStorage()

  if (formType === 'removeImage') {
    await updateUser({
      userId: userId ?? -1,
      image: '',
    })
    return {
      success: new Date().getUTCMilliseconds(),
    }
  }

  const user = await getUserId(userId ?? -1)
  let updateEmailError = ''
  let passwordError = ''
  let emailUpdated = false
  if (user?.email !== email) {
    const emailAlreadyUsed = await getUserEmail(email)
    if (email.length === 0) {
      updateEmailError = 'A email is required'
    } else if (!emailValid(email ?? '')) {
      updateEmailError = 'Enter a valid email'
    } else if (emailAlreadyUsed) {
      updateEmailError = 'Email already in use'
    }

    if (!password) {
      passwordError = 'You must enter your password to change your email'
    } else {
      const passwordsMatch = await comparePasswords(
        password,
        user?.passwordHash ?? '',
      )

      if (!passwordsMatch) {
        passwordError = 'Password is incorrect'
      }
    }

    if (updateEmailError || passwordError) {
      return {
        email: updateEmailError,
        password: passwordError,
      }
    }

    await createChangeEmailLog(userId ?? -1, email)
    emailUpdated = true
  }

  // Saving the profile picture
  if (imageData !== null && imageData.size > 0) {
    const resizedImage = (await resizeImage(imageData)) as any
    imageUuid = uuidv4()
    await storageClient
      .from('assetnest')
      .upload('profile-picture/' + imageUuid, resizedImage)
  }

  // Saving the signature
  if (signatureData !== null && signatureData.includes('data:image/png')) {
    signatureData = Buffer.from(signatureData.split(',')[1], 'base64')
    const options = { type: 'image/png' }
    signatureData = new Blob([signatureData], options)
    signatureUuid = uuidv4()
    await storageClient
      .from('assetnest')
      .upload('signature/' + signatureUuid, signatureData)
  }

  // return success action data
  await updateUser({
    userId: userId ?? -1,
    firstName,
    lastName,
    image: imageUuid,
    signature: signatureUuid,
  })

  return {
    emailSuccess: emailUpdated && new Date().getUTCMilliseconds(),
    success: new Date().getUTCMilliseconds(),
  }
}

export const loader = async ({ request }: { request: Request }) => {
  const storageClient = getStorage()
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  const currentUser = await getUserId(userId ?? -1)

  const imageName = currentUser?.image ?? ''
  const profilePicUrlObject =
    storageClient
      .from('assetnest')
      .getPublicUrl('profile-picture/' + imageName) ?? ''
  const imageUrl = profilePicUrlObject?.data?.publicUrl ?? ''

  const signatureName = currentUser?.signature ?? ''
  const signatureUrlData =
    storageClient
      .from('assetnest')
      .getPublicUrl('signature/' + signatureName) ?? ''
  let signatureUrl = signatureUrlData?.data?.publicUrl ?? ''

  const fileName = signatureUrl.split('signature/')[1]
  if (!fileName) {
    signatureUrl = ''
  }

  return {
    email: currentUser?.email,
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    imageName: currentUser?.image,
    image: imageUrl,
    signatureName: currentUser?.signature,
    signature: signatureUrl,
  }
}

export default function Profile() {
  const navigation = useNavigation()
  const sigCanvas = useRef<SignatureCanvas>(null)
  const loaderData = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>() as
    | {
        firstName?: string
        lastName?: string
        success: boolean | number
        emailSuccess: boolean | number
        email?: string
        password?: string
      }
    | undefined
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>(
    loaderData?.firstName ?? '',
  )
  const [lastName, setLastName] = useState<string>(loaderData?.lastName ?? '')
  const [fileName] = useState<string>(loaderData?.imageName ?? '')
  const [email, setEmail] = useState<string>(loaderData?.email ?? '')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [image, setImage] = useState<string>(loaderData?.image ?? '')
  const [openCanvas, setOpenCanvas] = useState(false)
  const [signatureFileName] = useState<string>(
    loaderData?.signatureName ?? '',
  )
  const [signatureImage, setSignatureImage] = useState(
    loaderData?.signature ?? '',
  )
  const [formChanged, setFormChanged] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string>('')
  const submit = useSubmit()
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (actionData?.emailSuccess) {
      setSuccessMessage('Verification Email Sent')
      setDisplaySuccessAlert(!!actionData?.emailSuccess ?? false)
      setTimeout(() => setDisplaySuccessAlert(false), 5000)
    } else if (actionData?.success) {
      setSuccessMessage('Profile Saved')
      setDisplaySuccessAlert(!!actionData?.success ?? false)
      setTimeout(() => setDisplaySuccessAlert(false), 5000)
    }
  }, [actionData])

  const createSignature = async () => {
    const URL = sigCanvas?.current?.getCanvas().toDataURL('image/png')
    setSignatureImage(URL ?? '')
    setOpenCanvas(false)
    setFormChanged(true)
  }

  const initials =
    (loaderData?.firstName?.charAt(0) ?? '') +
    (loaderData?.lastName?.charAt(0) ?? '')

  return (
    <div className={'fixed flex w-full flex-col items-center justify-center'}>
      <div className={'fixed h-full w-full self-start overflow-scroll p-5'}>
        <h1 className={`${pageTitle} p-4`}>My Profile</h1>
        {displaySuccessAlert && (
          <Alert
            variant="success"
            title={successMessage}
            onClose={() => {
              setDisplaySuccessAlert(false)
            }}
          />
        )}
        <div className="flex w-full flex-col p-2 pb-12 md:w-96">
          <Form
            method="post"
            encType="multipart/form-data"
            onChange={() => setFormChanged(true)}
            onSubmit={() => setDisplaySuccessAlert(false)}
          >
            <div>
              <div className="flex w-full flex-grow">
                <label htmlFor="file" className="w-full flex-grow">
                  <div className="flex w-full flex-grow justify-start px-2 py-4">
                    <Avatar
                      fallbackText={initials}
                      imageSrc={image}
                      imageAltText="avatar"
                      className="z-10 flex h-36 w-36 cursor-pointer items-center justify-center rounded-xl bg-primary text-6xl text-white"
                    />
                  </div>
                </label>
                <div className="flex w-full flex-col justify-center pl-2">
                  <Button
                    className="mb-4 p-2 text-red-500"
                    variant="outline"
                    onClick={() => {
                      setImage('')
                      const formData = new FormData()
                      formData.set('_action', 'removeImage')
                      submit(formData, { method: 'post' })
                    }}
                  >
                    Remove Image
                  </Button>
                  <Button
                    variant="outline"
                    isPopoverTrigger={true}
                    className="w-full p-2"
                    onClick={() => {
                      // Using a htmlFor label to trigger the file input doesn't work because of the onClick event in the button.
                      // This is a workaround that uses a reference to the file input and triggers a click event on it.
                      if (fileInputRef.current) {
                        ;(fileInputRef.current as HTMLInputElement).click()
                      }
                    }}
                  >
                    Change Image
                  </Button>
                </div>
                <div className="absolute w-24">
                  <input
                    ref={fileInputRef}
                    id="file"
                    type="file"
                    accept=".png, .jpg"
                    name="imageData"
                    onChange={async (e) => {
                      if (e.target.files && e.target.files[0]) {
                        setImage(URL.createObjectURL(e.target.files[0]))
                      }
                    }}
                    className="invisible h-24 w-24"
                  />
                </div>
              </div>
              <TextInput
                onChange={(value) => {
                  if (value !== loaderData?.email) {
                    setEmail(value)
                    setShowPassword(true)
                  } else {
                    setEmail(value)
                    setPassword('')
                    setShowPassword(false)
                  }
                }}
                name={'email'}
                value={email}
                placeholder="Email"
                label="Email"
                error={!!actionData?.email}
                helpText={actionData?.email}
              />
              {showPassword && (
                <TextInput
                  onChange={(value) => {
                    setPassword(value)
                  }}
                  password={true}
                  name={'password'}
                  value={password}
                  placeholder="Password"
                  label="Confirm Password"
                  error={!!actionData?.password}
                  helpText={actionData?.password}
                />
              )}
              <TextInput
                name={'firstName'}
                onChange={(value) => {
                  setFirstName(value)
                }}
                value={firstName}
                placeholder="First Name"
                label="First Name"
                error={!!actionData?.firstName}
                helpText={actionData?.firstName ?? ''}
              />
              <TextInput
                name={'lastName'}
                onChange={(value) => {
                  setLastName(value)
                }}
                value={lastName}
                placeholder="Last Name"
                label="Last Name"
                error={!!actionData?.lastName}
                helpText={actionData?.lastName ?? ''}
              />
              <input type="hidden" name="fileName" value={fileName}></input>
              <input
                type="hidden"
                name="signatureFileName"
                value={signatureFileName}
              />
              <input
                id="signatureData"
                type="hidden"
                name="signatureData"
                value={signatureImage}
              />
              <div className="flex w-full flex-col p-1">
                <label
                  htmlFor={'signature'}
                  className={'text-s pb-1 pl-1 text-left font-semibold'}
                >
                  Signature
                </label>
                <div
                  className="h-52 w-full border"
                  hidden={openCanvas || !signatureImage}
                >
                  <img
                    src={signatureImage}
                    alt="signature"
                    className="max-h-52"
                  />
                </div>
              </div>
              {openCanvas && (
                <>
                  <div className="m-auto h-52">
                    <SignatureCanvas
                      penColor="black"
                      canvasProps={{
                        className:
                          'bg-white border border-gray-300 rounded-md h-full w-full',
                      }}
                      ref={sigCanvas}
                    />
                  </div>
                  <div className="flex justify-center space-x-4 py-8">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpenCanvas(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => sigCanvas?.current?.clear()}
                    >
                      Clear
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={createSignature}
                    >
                      Create
                    </Button>
                  </div>
                </>
              )}
            </div>
            <div className="w-full p-1 pt-4">
              <div className="p-1">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => setOpenCanvas(true)}
                >
                  Create Signature
                </Button>
              </div>
              <div className="p-1 pt-4">
                <Link to="/changePassword">
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => {}}
                  >
                    Change Password
                  </Button>
                </Link>
              </div>
              <div className="p-1 pt-8">
                <Button className="w-1/2" submit={true} disabled={!formChanged}>
                  {navigation.state === 'submitting'
                    ? 'Saving'
                    : 'Save Changes'}
                </Button>
              </div>
              <Link
                to="/signOut"
                className="text-l p-1 text-center text-primary hover:underline"
              >
                Sign Out
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
