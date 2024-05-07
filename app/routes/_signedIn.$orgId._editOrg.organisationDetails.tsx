import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useLoaderData } from '@remix-run/react'
import { useEffect, useState } from 'react'
import Alert from '~/components/ui/Alert'
import { Avatar } from '~/components/ui/Avatar'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { TextArea } from '~/components/ui/TextArea'
import { TextInput } from '~/components/ui/TextInput'
import { getSession } from '~/cookies'
import { getMembershipWithUserAndOrganisation } from '~/endpoints/membership'
import { updateOrganisation } from '~/endpoints/organisation'
import { getStorage } from '~/utils/storage.server'
import { v4 as uuidv4 } from 'uuid'
import { resizeImage } from '~/utils/resizeImage.server'
import { LabelShad } from '~/components/ui/shadUi/ui/label'
import { secondaryText } from '~/styles/typography'

export async function action({ params, request }: ActionFunctionArgs) {
  const body = await request.formData()
  const name = body.get('organisationName') as string
  const description = body.get('description') as string
  const orgPicture = body.get('orgPicture') as any
  const removeOrgPicture = body.get('removeOrgPicture') as 'false' | 'true'

  let orgNameError = ''
  if (!name || name.trim() === '') {
    orgNameError = 'Organisation name is required'
    return {
      success: false,
      orgNameError: orgNameError,
    }
  }

  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId') ?? -1
  const orgId = parseInt(params.orgId ?? '-1')

  // Saving the org picture
  let imageUuid = undefined
  if (orgPicture !== null && orgPicture.size > 0) {
    const resizedImage = await resizeImage(orgPicture)
    imageUuid = uuidv4()
    await getStorage()
      .from('assetnest')
      .upload('organisations/' + imageUuid, resizedImage)
  }

  const org = await updateOrganisation({
    userId,
    orgId,
    name,
    description,
    icon: removeOrgPicture === 'true' ? '' : imageUuid,
  })

  return {
    success: org,
  }
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId') ?? -1
  const orgId = parseInt(params.orgId ?? '-1')

  const membership = await getMembershipWithUserAndOrganisation({
    userId,
    orgId,
    status: 'ACTIVE',
  })

  if (!membership) {
    return null
  }
  const updatePermission = membership?.role?.organisationUpdate ?? false
  const orgDetails = membership?.org

  if (orgDetails?.icon !== null) {
    const orgPictureUrlObject = getStorage()
      .from('assetnest')
      .getPublicUrl('organisations/' + orgDetails?.icon ?? '')
    orgDetails.icon = orgPictureUrlObject?.data?.publicUrl ?? ''
  }

  return {
    organisationName: orgDetails?.name ?? '',
    description: orgDetails?.description ?? '',
    updatePermission: updatePermission,
    orgPicture: orgDetails?.icon ?? '',
  }
}

export default function EditOrgDetails() {
  const loaderData = useLoaderData<typeof loader>()
  const [organisationName, setOrganisationName] = useState<string>(
    loaderData?.organisationName ?? '',
  )
  const [description, setDescription] = useState<string>(
    loaderData?.description ?? '',
  )
  const [orgPicture, setOrgPicture] = useState<string>(
    loaderData?.orgPicture ?? '',
  )
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState<boolean>(false)

  const actionData = useActionData<typeof action>() as
    | {
        success: boolean
        orgNameError?: string
      }
    | undefined

  useEffect(() => {
    if (actionData?.success) {
      setDisplaySuccessAlert(!!actionData?.success ?? false)
      setTimeout(() => setDisplaySuccessAlert(false), 5000)
    }
  }, [actionData])

  return (
    <div className="flex w-full flex-col space-y-1.5 p-4 ">
      {displaySuccessAlert && (
        <Alert
          variant="success"
          title={'Organisation Details Saved'}
          onClose={() => {
            setDisplaySuccessAlert(false)
          }}
        />
      )}
      <p className={`ps-2 ${secondaryText}`}>
        Make changes to your organisation here. Click save when you're done.
      </p>
      <div className="md:w-96">
        <Form method="post" encType="multipart/form-data">
          <div className={'p-2 '}>
            <LabelShad className={'text-s pb-1 pl-1 text-left font-semibold'}>
              Organisation Icon
            </LabelShad>
            <div className="pt-2">
              <label htmlFor="file" className={''}>
                <Avatar
                  fallbackText={organisationName?.at(0)?.toUpperCase() ?? ''}
                  imageSrc={orgPicture}
                  imageAltText="Organisation Image"
                  className="z-10 flex h-36 w-36 cursor-pointer items-center justify-center rounded-xl bg-primary text-6xl text-white"
                />

                <div className="relative bottom-6 left-28 z-20 flex h-6 w-6 cursor-pointer items-center justify-center ">
                  <Button
                    className="pointer-events-none absolute z-10 mt-[-1.2rem] h-8 w-8"
                    variant="outline"
                    noPadding
                  >
                    <Icon icon="edit" className=" h-5 w-6" />
                  </Button>
                </div>
                <div className="absolute w-24">
                  <input
                    id="file"
                    type="file"
                    accept=".png, .jpg"
                    name="orgPicture"
                    onChange={async (e) => {
                      if (e.target.files && e.target.files[0]) {
                        setOrgPicture(URL.createObjectURL(e.target.files[0]))
                      }
                    }}
                    className="hidden  h-24 w-24"
                  />
                  <input
                    type="hidden"
                    name="removeOrgPicture"
                    value={orgPicture === '' ? 'true' : 'false'}
                    className="hidden  h-24 w-24"
                  />
                </div>
              </label>
            </div>
          </div>
          {orgPicture && (
            <div className="p-1 pb-4 pt-2">
              <Button variant="outline" onClick={() => setOrgPicture('')}>
                Remove Icon
              </Button>
            </div>
          )}
          <TextInput
            name={'organisationName'}
            onChange={(value) => {
              setOrganisationName(value)
            }}
            value={organisationName}
            placeholder="Organisation Name"
            label="Organisation Name"
            error={!!actionData?.orgNameError}
            helpText={actionData?.orgNameError}
            disabled={!loaderData?.updatePermission}
          />
          <TextArea
            name={'description'}
            onChange={(value) => {
              setDescription(value)
            }}
            value={description}
            placeholder="Description"
            label="Description"
            disabled={!loaderData?.updatePermission}
          />
          <Button
            className="btn btn-primary ms-2"
            submit={true}
            disabled={!loaderData?.updatePermission}
          >
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  )
}
