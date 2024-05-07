import { redirect, type ActionFunctionArgs } from '@remix-run/node'
import { Form, Link, useActionData, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import Button from '~/components/ui/Button'
import { Card } from '~/components/ui/Card'
import { Dialog } from '~/components/ui/Dialog'
import { Icon } from '~/components/ui/Icon'
import { ProgressBar } from '~/components/ui/ProgressBar'
import { CreateOrgPageBaseInfo } from '~/components/page/createOrg/CreateOrgPageBaseInfo'
import { CreateOrgPageLogo } from '~/components/page/createOrg/CreateOrgPageLogo'
import { CreateOrgPageInviteUsers } from '~/components/page/createOrg/CreateOrgPageInviteUsers'
import { CreateOrgPageOverview } from '~/components/page/createOrg/CreateOrgPageOverview'
import { pageTitle, secondaryText, subPageTitle } from '~/styles/typography'
import { getSession } from '~/cookies'
import { createOrganisation } from '~/endpoints/organisation'
import type { country } from '~/utils/arrayOfAllCountries'
import { getAllRoles, getRole } from '~/endpoints/role'
import { createUserWithInvite } from '~/endpoints/user'

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()

  const name = body.get('name') as string
  const description = body.get('description') as string
  const address = body.get('address') as string
  const city = body.get('city') as string
  const country = body.get('country') as string
  const postcode = body.get('postcode') as string

  const createdMemberEmails = body.getAll('createdMemberEmails[]') as string[]
  const createdMemberRoleIds = body.getAll('createdMemberRoles[]') as string[]

  const icon = body.get('icon') as File

  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  const newOrg = await createOrganisation({
    name,
    description,
    address,
    city,
    country,
    postcode,
    ownerUserId: userId ?? 0 - 1,
    icon,
  })

  //create memberships here
  await Promise.all(
    createdMemberEmails.map(async (emails, index) => {
      return await Promise.all(
        emails.split('£').map(async (email) => {
          const role = await getRole(parseInt(createdMemberRoleIds[index]))
          return createUserWithInvite({
            email,
            orgId: newOrg.id ?? -1,
            role: role?.roleName ?? 'No role',
          })
        }),
      )
    }),
  )

  return redirect(`/organisationList`)
}
export const loader = async () => {
  const roles = await getAllRoles()
  return {
    roles: roles.sort((roleA, roleB) =>
      roleA.roleName > roleB.roleName ? 1 : -1,
    ),
  }
}

export default function CreateOrg() {
  const [page, setPage] = useState(0)
  const loaderData = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>() as
    | {
        name?: string
        description?: string
        address?: string
        city?: string
        postcode?: string
      }
    | undefined

  const [showCloseModal, setShowCloseModal] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postcode, setPostcode] = useState('')
  const [country, setCountry] = useState<country>({
    name: 'United Kingdom',
    code: 'GB',
  })
  const [iconPathLocal, setIconPathLocal] = useState('')
  const [emailInvites, setEmailInvites] = useState<
    { roleId: string; emails: string[] }[]
  >([{ roleId: loaderData.roles[0].id.toString(), emails: [] }])

  const updateOrgIcon = async (event: any) => {
    if (event === '') {
      setIconPathLocal('')
      return
    }

    const reader = new FileReader()
    reader.onload = async (e: any) => {
      setIconPathLocal(e.target.result) //image path on local machine
    }
    reader.readAsDataURL(event.target.files[0])
  }

  const canGoNextPage = () => {
    if (page === 0) {
      return name.length !== 0
    } else if (page === 1) {
      return true
    } else if (page === 2) {
      return true
    } else if (page === 3) {
      return true
    }
  }
  const progress = (page + 1) * 25
  return (
    <div className="self-start py-4 md:py-8">
      <Card innerClassName="p-4 md:p-8">
        {/* !TODO: Refactor this for a11y */}
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
        <a id="top" />
        <div className="pt-1">
          <ProgressBar progress={progress > 100 ? 100 : progress} />
        </div>
        <div className="flex h-8 w-full items-center justify-end py-2 text-end">
          {(page === 1 || page === 2) && (
            <div
              className="w-fit text-primary hover:cursor-pointer hover:underline"
              onClick={() => setPage((page) => page + 1)}
            >
              Skip
            </div>
          )}
        </div>
        <div className="flex w-full flex-col p-2 md:w-[45rem] lg:w-[50rem] ">
          <h1 className={`${pageTitle} py-4`}>Create a new organisation</h1>

          <Form method="post" encType="multipart/form-data">
            <div className={page === 0 ? '' : ' hidden'}>
              <CreateOrgPageBaseInfo
                name={name}
                setName={setName}
                nameError={actionData?.name}
                setDescription={setDescription}
                description={description}
                descriptionError={actionData?.description}
                setAddress={setAddress}
                address={address}
                addressError={actionData?.address}
                setCity={setCity}
                city={city}
                cityError={actionData?.city}
                setCountry={setCountry}
                country={country}
                setPostcode={setPostcode}
                postcode={postcode}
                postcodeError={actionData?.postcode}
              />
            </div>

            <div className={page === 1 ? '' : ' hidden'}>
              <CreateOrgPageLogo
                updateOrgIconImage={updateOrgIcon}
                iconPathLocal={iconPathLocal}
              />
            </div>

            <div className={page === 2 ? '' : ' hidden'}>
              <CreateOrgPageInviteUsers
                possibleRoles={loaderData.roles.map((role) => {
                  return {
                    value: role.id.toString(),
                    valueLabel: role.roleName,
                  }
                })}
                emailInvites={emailInvites}
                setMemberEmails={(value, index) => {
                  setEmailInvites((oldValue) => {
                    const tempValue = [...oldValue]
                    tempValue[index].emails = value
                    return [...tempValue]
                  })
                }}
                setMembersRoles={(value, index) => {
                  setEmailInvites((oldValue) => {
                    const tempValue = [...oldValue]
                    tempValue[index].roleId = value
                    return [...tempValue]
                  })
                }}
                addNewEmailRole={(newEmailInvites) => {
                  setEmailInvites(newEmailInvites)
                }}
              />
            </div>
            <div className={page === 3 ? '' : ' hidden'}>
              <CreateOrgPageOverview
                name={name}
                description={description}
                goPage={(number: number) => setPage(number)}
                imagePathLocal={iconPathLocal}
                emails={emailInvites.reduce((currentTotal, emailInvite) => {
                  return [...currentTotal, ...emailInvite.emails]
                }, [] as string[])}
              />
            </div>
            <div className=" flex w-full p-1 pt-12">
              <div className="p-1 pl-10">
                {page === 0 ? (
                  <>
                    <Button
                      onClick={() => setShowCloseModal(true)}
                      variant="outline"
                      className="w-full"
                    >
                      Cancel
                    </Button>
                    <Dialog
                      open={showCloseModal}
                      onClose={() => {
                        setShowCloseModal(false)
                      }}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <Icon className="h-11 w-11" icon="warning" />
                        <div className={`${subPageTitle} p-2`}>
                          Are you sure you want to cancel?
                        </div>
                        <div className={`${secondaryText} py-2`}>
                          Any content created will be deleted.
                        </div>
                        <div className="flex py-5">
                          <div>
                            <Link to="/organisationList">
                              <Button variant="destructive">Yes, delete</Button>
                            </Link>
                          </div>
                          <div>
                            <Button
                              variant="ghost"
                              onClick={() => setShowCloseModal(false)}
                            >
                              No, keep editing
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      document.getElementById('top')?.scrollIntoView()
                      setPage((page) => page - 1)
                    }}
                    submit={false}
                  >
                    Back
                  </Button>
                )}
              </div>
              <div className=" ml-auto p-1 pr-10">
                <Button
                  className={`w-full ${page !== 3 && 'hidden'}`}
                  disabled={!canGoNextPage()}
                  submit
                >
                  Finish
                </Button>

                <Button
                  className={`w-full ${page === 3 && 'hidden'}`}
                  onClick={() => {
                    document.getElementById('top')?.scrollIntoView()
                    setPage((page) => (page === 3 ? page : page + 1))
                  }}
                  disabled={!canGoNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  )
}
