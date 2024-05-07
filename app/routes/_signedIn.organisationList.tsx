import type {MembershipStatus} from '@prisma/client'
import type {ActionFunctionArgs} from '@remix-run/node'
import {useLoaderData, useNavigate, useSubmit} from '@remix-run/react'
import {useState} from 'react'
import {Avatar} from '~/components/ui/Avatar'
import Button from '~/components/ui/Button'
import {Icon} from '~/components/ui/Icon'
import {Pagination} from '~/components/ui/Pagination'
import {SelectInput} from '~/components/ui/SelectInput'
import {getSession} from '~/cookies'
import {deleteMembership, getUsersMemberships, updateMembership,} from '~/endpoints/membership'
import {
  chip,
  chipBlueColor,
  chipGrayDarkColor,
  chipGrayLightColor,
  chipGreenColor,
  chipRedColor,
} from '~/styles/genericStyles'
import {importantText, pageTitle, secondaryText} from '~/styles/typography'
import {getTimeSinceDateInFormattedString} from '~/utils/getTimeSinceDateInFormattedString'
import {getStorage} from '~/utils/storage.server'

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const formType = body.get('_action') as string
  switch (formType) {
    case 'acceptInvite': {
      console.log('acceptInvite')
      const membershipId = body.get('membershipId') as string
      await updateMembership({
        membershipId: parseInt(membershipId),
        status: 'ACTIVE',
      })
      break
    }
    case 'declineInvite': {
      const membershipId = body.get('membershipId') as string
      await deleteMembership({ membershipId: parseInt(membershipId) })
      break
    }
  }
  return null
}

export const loader = async ({ request }: { request: Request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId') ?? -1
  const memberships = await getUsersMemberships({ userId })
  memberships.map((membership) => {
    if (membership.org.icon === null) {
      membership.org.icon = ''
      return membership
    }
    const storageObject = getStorage()
      .from('assetnest')
      .getPublicUrl('organisations/' + membership.org.icon)
    membership.org.icon = storageObject?.data?.publicUrl ?? ''
    return membership
  })
  return { memberships }
}

export default function Profile() {
  const navigation = useNavigate()
  const [typeOfRecordToDisplay, setTypeOfRecordToDisplay] = useState<
    'All' | MembershipStatus
  >('All')
  const loaderData = useLoaderData<typeof loader>()
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] =
    useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const submit = useSubmit()

  const membershipsAllValid = loaderData.memberships
    .filter((membership) =>
      typeOfRecordToDisplay === 'All'
        ? true
        : membership.status === typeOfRecordToDisplay,
    )
    .sort((membership1, membership2) => {
      return membership1.status === 'PENDING' &&
        membership2.status !== 'PENDING'
        ? -1
        : membership1.org.name > membership2.org.name
        ? 1
        : -1
    })

  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage
  const endCurrentPageIndex =
    startCurrentPageIndex + numberRecordsToDisplayOnPage
  const membershipsToDisplay = membershipsAllValid.slice(
    startCurrentPageIndex,
    endCurrentPageIndex,
  )

  return (
    <div className="max-h-screen w-full self-start overflow-auto p-5">
      <div className="flex flex-col">
        <div className="flex py-4">
          <div className={`w-1/2 p-2 ${pageTitle}`}>Organisations</div>
          <div className="flex w-1/2 flex-row-reverse p-1 pt-8">
            {loaderData.memberships.length !== 0 && (
              <Button onClick={() => navigation('/createOrganisation')}>
                <div className="max-md:hidden"> Create Organisation </div>
                <div className="md:hidden"> + </div>
              </Button>
            )}
          </div>
        </div>
        {loaderData.memberships.length !== 0 && (
          <div className="flex py-4">
            <div className="w-40 py-2">
              <SelectInput
                valueCurrent={typeOfRecordToDisplay}
                onChange={(newValue) => {
                  setCurrentPage(0)
                  setTypeOfRecordToDisplay(newValue as 'All' | MembershipStatus)
                }}
                possibleValues={[
                  { value: 'All', valueLabel: 'View All' },
                  { value: 'PENDING', valueLabel: 'Pending' },
                  { value: 'ACTIVE', valueLabel: 'Active' },
                  { value: 'INACTIVE', valueLabel: 'Inactive' },
                  { value: 'PAUSED', valueLabel: 'Paused' },
                ]}
              />
            </div>
            <div className="w-20 p-2">
              <SelectInput
                valueCurrent={numberRecordsToDisplayOnPage.toString()}
                onChange={(newValue) => {
                  setCurrentPage(0)
                  setNumberRecordsToDisplayOnPage(parseInt(newValue))
                }}
                possibleValues={[
                  { value: '10', valueLabel: '10' },
                  { value: '50', valueLabel: '50' },
                  { value: '100', valueLabel: '100' },
                ]}
              />
            </div>
          </div>
        )}
        <div className="flex w-full flex-col items-center justify-center">
          {loaderData.memberships.length === 0 ? (
            <div className="w-full flex-col rounded bg-white p-10 text-center md:flex md:h-[30rem] md:justify-center">
              <h1 className="flex justify-center p-4 text-center text-3xl font-bold md:text-4xl ">
                Welcome to Organisations!
              </h1>
              <div className="pt-5 md:pt-8">
                Here, you can take control of all your assets across multiple
                groups. To get started, simply create a new organisation.
              </div>
              <div className="py-5 md:py-8">
                <Button onClick={() => navigation('/createOrganisation')}>
                  Create Organisation
                </Button>
              </div>
            </div>
          ) : membershipsToDisplay.length === 0 ? (
            <div className="flex w-full flex-col flex-nowrap gap-y-1">
              <div className="flex w-full flex-col flex-nowrap justify-center rounded bg-white p-12 text-center sm:flex-row">
                <div className=" p-2 sm:mr-auto sm:p-0">No results</div>
                <div
                  className=" text-center text-primary hover:cursor-pointer hover:underline sm:ml-auto"
                  onClick={() => {
                    setTypeOfRecordToDisplay('All')
                  }}
                >
                  Show all Organisations
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full flex-col flex-nowrap gap-y-1">
              {membershipsToDisplay.map((membership) => (
                <div
                  key={membership.org.id}
                  className={`flex w-full flex-nowrap rounded  p-2 hover:cursor-pointer hover:shadow ${
                    membership.status === 'PENDING' ? 'bg-slate-50' : 'bg-white'
                  }`}
                  onClick={() => {
                    navigation(`/${membership.org.id}/orgPage`)
                  }}
                >
                  <div className="w-15 flex items-center break-words p-1 ">
                    <Avatar
                      className="h-14 w-14"
                      imageSrc={membership.org.icon ?? ''}
                      fallbackText={membership.org.name[0]}
                    />
                  </div>
                  <div
                    style={{ wordBreak: 'break-word' }}
                    className={`flex  items-center  p-1 text-left  max-md:hidden md:w-2/6 ${importantText}`}
                  >
                    {membership.org.name}
                  </div>
                  <div className="flex items-center break-words p-1 text-center max-md:hidden md:w-1/6  ">
                    {membership.role.roleName}
                  </div>

                  <div className="flex w-full flex-col  items-center truncate  sm:w-3/5 md:hidden ">
                    <div
                      className={`  w-full truncate break-words p-1 text-left ${importantText}`}
                    >
                      {membership.org.name}
                    </div>
                    <div className="w-full break-words p-1 text-left">
                      {membership.role.roleName}
                    </div>
                  </div>
                  <div className="flex items-center justify-start text-left max-md:hidden md:w-1/4 ">
                    <div
                      className={`${
                        membership.status === 'ACTIVE'
                          ? chipGreenColor
                          : membership.status === 'PENDING'
                          ? chipBlueColor
                          : membership.status === 'PAUSED'
                          ? chipGrayLightColor
                          : membership.status === 'INACTIVE'
                          ? chipGrayDarkColor
                          : chipRedColor
                      } ${chip}`}
                    >
                      {membership.status.charAt(0).toUpperCase() +
                        membership.status.slice(1).toLowerCase()}
                    </div>
                    <div
                      className={`flex items-center p-2 pl-10 text-center ${secondaryText}`}
                    >
                      {' '}
                      {membership.status === 'PENDING' &&
                        getTimeSinceDateInFormattedString(
                          new Date(membership.inviteSentAt ?? ''),
                        )}{' '}
                    </div>
                  </div>
                  <div
                    className={`md:w-15 ml-auto flex items-center justify-center break-words p-1`}
                  >
                    <div
                      className={` flex w-48 flex-row-reverse max-md:hidden`}
                    >
                      <div
                        className={`flex  ${
                          membership.status !== 'PENDING' && 'hidden'
                        }`}
                      >
                        <div className="p-2">
                          <Button
                            variant="outline"
                            onClick={() => {
                              const formData = new FormData()
                              formData.append('_action', 'declineInvite')
                              formData.append(
                                'membershipId',
                                `${membership.id}`,
                              )
                              submit(formData, {
                                method: 'post',
                              })
                            }}
                          >
                            Decline
                          </Button>
                        </div>
                        <div className="py-2 pl-2">
                          <Button
                            onClick={() => {
                              const formData = new FormData()
                              formData.append('_action', 'acceptInvite')
                              formData.append(
                                'membershipId',
                                `${membership.id}`,
                              )
                              submit(formData, {
                                method: 'post',
                              })
                            }}
                          >
                            Accept
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-7 w-24 flex-row-reverse  items-center justify-center md:hidden">
                      <div className="flex items-center justify-center">
                        {membership.status == 'PENDING' ? (
                          <div className={`flex flex-col ${secondaryText}`}>
                            {getTimeSinceDateInFormattedString(
                              new Date(membership.inviteSentAt ?? ''),
                            )}
                            <div className="flex items-center justify-center">
                              <div className="px-2">
                                <Icon
                                  className="rounded-full border hover:cursor-pointer hover:bg-secondary"
                                  icon="close"
                                  onClick={() => {}}
                                />
                              </div>
                              <div className="px-2">
                                <Icon
                                  className="rounded-full border hover:cursor-pointer hover:bg-secondary"
                                  icon="success"
                                  onClick={() => {}}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`${
                              membership.status === 'ACTIVE'
                                ? chipGreenColor
                                : membership.status === 'PAUSED'
                                ? chipGrayLightColor
                                : membership.status === 'INACTIVE'
                                ? chipGrayDarkColor
                                : chipRedColor
                            } ${chip}`}
                          >
                            {membership.status.charAt(0).toUpperCase() +
                              membership.status.slice(1).toLowerCase()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {membershipsToDisplay.length !== 0 &&
          membershipsAllValid.length - numberRecordsToDisplayOnPage > 0 ? (
            <div className="h-40 p-2 pt-12">
              <Pagination
                totalNumberPages={
                  membershipsAllValid.length / numberRecordsToDisplayOnPage - 1
                }
                selectedPage={currentPage}
                onPrevClick={() => {
                  setCurrentPage((currentValue) =>
                    currentValue === 0 ? 0 : currentValue - 1,
                  )
                }}
                onNextClick={() => {
                  setCurrentPage((currentValue) => {
                    return currentValue ===
                      membershipsAllValid.length /
                        numberRecordsToDisplayOnPage -
                        1
                      ? 0
                      : currentValue + 1
                  })
                }}
                goPage={(newPage) => {
                  setCurrentPage(newPage)
                }}
              />
            </div>
          ) : (
            <div className="h-40" />
          )}
        </div>
      </div>
    </div>
  )
}
