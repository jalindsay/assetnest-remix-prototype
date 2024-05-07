import { Card } from '~/components/ui/Card'
import AssetNestLogo from '~/assets/Logos/AssetNestLogoDark.svg'
import { TextInput } from '~/components/ui/TextInput'
import { useEffect, useState } from 'react'
import Button from '~/components/ui/Button'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import { type ActionFunctionArgs } from '@remix-run/node'
import { emailValid } from '~/utils/emailValidator'
import { generateUserNewResetPassword } from '~/endpoints/user'
import Alert from '~/components/ui/Alert'

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const email = body.get('email') as string
  let emailError = ''
  //double check email is valid
  if (email.length === 0) {
    emailError = 'An email address is required'
  } else if (!emailValid(email ?? '')) {
    emailError = 'Enter a valid email address'
  }

  if (emailError) {
    return {
      success: false,
      email: emailError,
    }
  }
  try {
    await generateUserNewResetPassword(email)
    return { success: true }
  } catch (error) {
    return { success: true }
  }
}

interface ActionData {
  success: boolean
  email: string
}

export default function ForgotPassword() {
  const navigation = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState<boolean>(false)
  const actionData = useActionData() as ActionData

  useEffect(() => {
    if (actionData?.success) {
      setDisplaySuccessAlert(!!actionData?.success ?? false)
      setTimeout(() => setDisplaySuccessAlert(false), 5000)
    }
  }, [actionData])

  return (
    <Card>
      {displaySuccessAlert && (
        <Alert
          variant="success"
          title={'Email Sent'}
          onClose={() => {
            setDisplaySuccessAlert(false)
          }}
        />
      )}
      <div className="flex w-full flex-col">
        <img className="p-4" src={AssetNestLogo} alt={'assetnest logo'} />
        <h1 className={' text-l text-brand_Teal p-1 text-center font-bold'}>
          Reset Your Password
        </h1>
        <div className="p flex justify-center text-center">
          <div className=" w-72 sm:w-96 ">
            Give us a email address associated with your assetnest account, and
            we will send you an email with a link to reset your password.
          </div>
        </div>
        <Form method="post" onSubmit={() => setDisplaySuccessAlert(false)}>
          <div>
            <TextInput
              name={'email'}
              onChange={(value) => {
                setEmail(value)
              }}
              value={email}
              placeholder="Email"
              label="Email"
              error={!!actionData?.email}
              helpText={actionData?.email}
            />

            <div className="w-full px-5 pt-4">
              <div className="p-1">
                <Button className="w-full" submit variant="default">
                  Reset Password
                </Button>
              </div>
            </div>
            <div className="w-full px-5 pt-4">
              <div className="p-1">
                <Button
                  className="w-full"
                  variant="default"
                  onClick={() => navigation('/logIn')}
                >
                  Log In
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Card>
  )
}
