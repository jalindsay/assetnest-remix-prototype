import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import type { MembershipStatus } from '@prisma/client'
import { useActionData, useLoaderData, useSubmit } from '@remix-run/react'
import { useEffect, useState } from 'react'
import Alert from '~/components/ui/Alert'
import { Avatar } from '~/components/ui/Avatar'
import Button from '~/components/ui/Button'
import { CheckBox } from '~/components/ui/Checkbox'
import { Dialog } from '~/components/ui/Dialog'
import { DropdownMenu } from '~/components/ui/DropdownMenu'
import { Icon } from '~/components/ui/Icon'
import { Pagination } from '~/components/ui/Pagination'
import { Popover } from '~/components/ui/Popover'
import { SelectInput } from '~/components/ui/SelectInput'
import type { rowType } from '~/components/ui/Table';
import { Table } from '~/components/ui/Table'
import { TextInput } from '~/components/ui/TextInput'
import InviteUser from '~/components/page/inviteUser/inviteUser'
import { getSession } from '~/cookies'
import {
  deleteMembership,
  getMembershipWithUserAndOrganisation,
  getMembershipsWithOrganisationId,
  pauseUnpauseMembership,
  resendInvite,
  updateMembership,
} from '~/endpoints/membership'
import { getAllRoles } from '~/endpoints/role'
import {
  importantText,
  secondaryText,
  subPageTitle,
  tableHeader,
} from '~/styles/typography'
import { getStorage } from '~/utils/storage.server'
import { createUserWithInvite } from '~/endpoints/user'
import {
  chip,
  chipBlueColor,
  chipGrayDarkColor,
  chipGrayLightColor,
  chipGreenColor,
  chipRedColor,
  filterChip,
} from '~/styles/genericStyles'
import { Card } from '~/components/ui/Card'
import { TableSelectBottomBar } from '~/components/ui/TableSelectBottomBar'

export async function action({ params, request }: ActionFunctionArgs) {
  const body = await request.formData()
  const orgId = parseInt(params.orgId ?? '-1')
  const formType = body.get('_action') as
    | 'inviteUser'
    | 'deleteMembership'
    | 'deleteManyMemberships'
    | 'pauseUnpauseMembership'
    | 'pauseUnpauseManyMemberships'
    | 'changeMembersRole'
    | 'resendInvite'

  switch (formType) {
    case 'inviteUser':
      const role = body.get('role') as string
      const emails = body.get('emails') as string

      const errorArray: { inviteError: string; email: string }[] = []
      let allSuccess = true
      await Promise.all(
        emails?.split(',').map(async (email) => {
          console.log('email', email)
          const createUserResult: any = await createUserWithInvite({
            email,
            role,
            orgId,
          })
          if (createUserResult.error !== null) {
            errorArray.push({
              inviteError: createUserResult.error,
              email: email,
            })
            allSuccess = false
          }
        }),
      )
      return { inviteSuccess: allSuccess, errorArray: errorArray }
    case 'deleteMembership': {
      const membershipIdString = body.get('membershipId') as string
      const membershipId = parseInt(membershipIdString)
      await deleteMembership({ membershipId })
      return null
    }
    case 'deleteManyMemberships': {
      const membershipIdsString = body.get('membershipIds') as string
      const membershipIdArray = membershipIdsString.split('£')
      await Promise.all(
        membershipIdArray.map(async (membershipIdString) => {
          const membershipId = parseInt(membershipIdString)
          await deleteMembership({ membershipId })
        }),
      )
      return null
    }
    case 'pauseUnpauseMembership': {
      const membershipId = body.get('membershipId') as string
      await pauseUnpauseMembership({
        membershipId: parseInt(membershipId),
      })
      return null
    }
    case 'pauseUnpauseManyMemberships': {
      const membershipIdsString = body.get('membershipIds') as string
      await Promise.all(
        membershipIdsString.split('£').map(async (membershipIdString) => {
          const membershipId = parseInt(membershipIdString)
          await pauseUnpauseMembership({ membershipId })
        }),
      )
      return null
    }
    case 'changeMembersRole': {
      const membershipIdsString = body.get('membershipIds') as string
      const membershipIds = membershipIdsString
        .split(',')
        .map((id) => parseInt(id))
      const newRoleId = body.get('newRoleId') as string
      await Promise.all(
        membershipIds.map(async (membershipId) => {
          await updateMembership({
            membershipId: membershipId,
            roleId: parseInt(newRoleId),
          })
        }),
      )
      return null
    }
    case 'resendInvite': {
      const membershipId = body.get('membershipId') as string
      await resendInvite({ membershipId: parseInt(membershipId) })
      return null
    }
  }
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  const membershipOfCurrentUser = await getMembershipWithUserAndOrganisation({
    userId: userId ?? -1,
    orgId: parseInt(params.orgId ?? '-1'),
  })

  const memberships = await getMembershipsWithOrganisationId({
    orgId: parseInt(params.orgId ?? '-1'),
  })

  const membershipTableData = await Promise.all(
    memberships.map(async (membership) => {
      const imageName = membership.user?.image ?? ''
      let imageUrl = ''
      if (imageName) {
        const profilePicUrlObject =
          getStorage()
            .from('assetnest')
            .getPublicUrl('profile-picture/' + imageName) ?? ''
        imageUrl = profilePicUrlObject?.data?.publicUrl ?? ''
      }

      const firstName = membership.user?.firstName ?? ''
      const lastName = membership.user?.lastName ?? ''
      const initials = firstName[0] + lastName[0]

      return {
        membershipId: membership.id,
        userImage: imageUrl,
        userName: firstName + ' ' + lastName,
        userInitials: initials,
        roleName: membership.role.roleName,
        userEmail: membership.user?.email,
        membershipStatus: membership.status,
      }
    }),
  )

  const roles = await getAllRoles()

  return {
    membershipTableData,
    userCanManageUsers: membershipOfCurrentUser?.role.organisationManageUsers,
    currentUserEmail: membershipOfCurrentUser?.user.email,
    roles: roles
      .filter(
        (role) =>
          !(
            role.roleName === 'Organisation Owner' &&
            membershipOfCurrentUser?.role.roleName !== 'Organisation Owner'
          ),
      )
      .sort((a, b) => {
        return a.roleName > b.roleName ? 1 : -1
      }),
  }
}

export default function Members() {
  const loaderData = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>() as
    | {
        inviteSuccess: boolean
        errorArray: { inviteError: string; email: string }[]
      }
    | undefined
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(0)
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] =
    useState(10)
  const submit = useSubmit()
  const [selectedMembershipIds, setSelectedMembershipIds] = useState<number[]>(
    [],
  )
  const [selectAll, setSelectAll] = useState(false)
  const [inviteModalVisible, setInviteModalVisible] = useState(false)
  const [displayAlert, setDisplayAlert] = useState<boolean>(false)
  const [newRoleId, setNewRoleId] = useState(loaderData.roles[0].id)
  const [selectedRowMembershipId, setSelectedRowMembershipId] = useState(-1)
  const [displayEditRoleDialog, setDisplayEditRoleDialog] = useState(false)
  const [alertMessage, setAlertMessage] = useState<{
    message: string
    type: 'default' | 'success' | 'destructive' | undefined
  }>({ message: '', type: 'default' })

  useEffect(() => {
    if (actionData?.inviteSuccess === true) {
      setInviteModalVisible(false)
      setAlertMessage({ message: 'Users invited', type: 'success' })
      setDisplayAlert(true)
      setTimeout(() => setDisplayAlert(false), 5000)
    } else if (actionData?.inviteSuccess === false) {
      const errorEmails = actionData.errorArray.map((item) => item.email)
      setAlertMessage({
        message: `Error inviting the following: ${errorEmails}`,
        type: 'destructive',
      })
      setDisplayAlert(true)
      setTimeout(() => setDisplayAlert(false), 5000)
    }
  }, [actionData])

  const headers = [
    loaderData.userCanManageUsers ? (
      <CheckBox
        key="selectAllCheckbox"
        uniqueName={'all'}
        checked={selectAll}
        onChange={(value) => {
          setSelectAll(value);
          setSelectedMembershipIds(
            value
              ? allRowsData
                .filter(
                  (membership) =>
                    membership.userEmail !== loaderData.currentUserEmail,
                )
                .map((row) => row.membershipId)
              : [],
          );
        }}
      />
    ) : false,
    <div key="accountHeader" className={`${tableHeader}`}>
      Account
    </div>,
    <div key="roleHeader" className={`${tableHeader}`}>
      Role
    </div>,
    <div key="emailHeader" className={`${tableHeader}`}>
      Email
    </div>,
    <div key="statusHeader" className={`${tableHeader} pl-4`}>
      Status
    </div>,
    <div key="emptyDiv" />,
  ].filter((header) => header);

  const [filterRole, setFilterRole] = useState<{ [key: string]: boolean }>({});
  const [filterStatus, setFilterStatus] = useState<{ [key: string]: boolean }>(
    {},
  );

  const filterPopoverContent = (
    <div className="flex">
      <ul>
        <li>ROLES</li>
        {loaderData.roles.map((role) => {
          return (
            <li key={role.roleName} className="p-2">
              <CheckBox
                uniqueName={role.roleName}
                onChange={() => {
                  setFilterRole((filter) => {
                    const newValue = { ...filter }
                    newValue[role.roleName] = !newValue[role.roleName]
                    return newValue
                  })
                }}
                checked={filterRole[role.roleName]}
                label={role.roleName}
              />{' '}
            </li>
          )
        })}
      </ul>
      <ul>
        <li>STATUS</li>
        <li className=" p-2">
          <CheckBox
            uniqueName="ACTIVE"
            onChange={() => {
              setFilterStatus((filter) => {
                const newValue = { ...filter }
                newValue['ACTIVE'] = !newValue['ACTIVE']
                return newValue
              })
            }}
            checked={filterStatus['ACTIVE']}
            label={'Active'}
          />
        </li>
        <li className=" p-2">
          <CheckBox
            uniqueName="INACTIVE"
            onChange={() => {
              setFilterStatus((filter) => {
                const newValue = { ...filter }
                newValue['INACTIVE'] = !newValue['INACTIVE']
                return newValue
              })
            }}
            checked={filterStatus['INACTIVE']}
            label={'Inactive'}
          />
        </li>
        <li className=" p-2">
          <CheckBox
            uniqueName="PENDING"
            onChange={() => {
              setFilterStatus((filter) => {
                const newValue = { ...filter }
                newValue['PENDING'] = !newValue['PENDING']
                return newValue
              })
            }}
            checked={filterStatus['PENDING']}
            label={'Pending'}
          />
        </li>
      </ul>
    </div>
  )

  const allRowsData: {
    membershipId: number
    userImage: string
    userName: string
    userInitials: string
    roleName: string
    userEmail: string
    membershipStatus: MembershipStatus
  }[] = loaderData.membershipTableData
    .filter((membership) => {
      const searchTermClear = searchTerm.toLowerCase()
      if (
        !membership.userName.toLowerCase().includes(searchTermClear) &&
        !membership.userEmail.toLowerCase().includes(searchTermClear)
      ) {
        return false
      }
      const filterRoleKeys = Object.keys(filterRole)
      let useRoleFilter = false
      let membershipHasFilteredRole = false
      filterRoleKeys.some((key) => {
        if (filterRole[key] && membership.roleName === key) {
          useRoleFilter = true;
          membershipHasFilteredRole = true;
          return true;
        }
        return false;
      });

      if (useRoleFilter && !membershipHasFilteredRole) {
        return false
      }

      const filterStatusKeys = Object.keys(filterStatus)
      let useStatusFilter = false
      let membershipHasFilteredStatus = false
      filterStatusKeys.some((key) => {
        if (filterStatus[key]) {
          useStatusFilter = true;
          if (membership.membershipStatus === key) {
            membershipHasFilteredStatus = true;
            return true;
          }
        }
        return false;
      });

      return !(useStatusFilter && !membershipHasFilteredStatus);
    })
    .sort((aMembership, bMembership) =>
      aMembership.userEmail > bMembership.userEmail ? 1 : -1,
    )

  const allRowsDataElements: rowType[] = allRowsData.map((membership) => {
    const membershipPending = membership.membershipStatus === 'PENDING'
    const userProfile = (
      <div className="flex items-center">
        <Avatar
          className="h-11 w-11 bg-primary"
          imageSrc={!membershipPending ? membership.userImage : ''}
          fallbackText={!membershipPending ? membership.userInitials : ''}
        />
        <div
          className={`${importantText} max-w-xs overflow-hidden text-ellipsis whitespace-nowrap pl-2 md:max-w-md`}
        >
          {!membershipPending ? membership.userName : ''}
        </div>
      </div>
    )
    return {
      onClick: () => {},
      content: [
        {
          content: loaderData.userCanManageUsers ? (
            loaderData.currentUserEmail !== membership.userEmail ? (
              <CheckBox
                uniqueName={membership.userEmail}
                checked={selectedMembershipIds.includes(
                  membership.membershipId,
                )}
                onChange={() => {
                  setSelectedMembershipIds((currentSelectedUsers) => {
                    setSelectAll(false)
                    if (
                      selectedMembershipIds.includes(membership.membershipId)
                    ) {
                      return currentSelectedUsers.filter(
                        (userEmail) => userEmail !== membership.membershipId,
                      )
                    } else {
                      return [...currentSelectedUsers, membership.membershipId]
                    }
                  })
                }}
              />
            ) : (
              <div />
            )
          ) : false,
        },
        {
          content: userProfile,
        },
        {
          content: (
            <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap md:max-w-md">
              {membership.roleName}
            </div>
          ),
        },
        {
          content: (
            <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap md:max-w-md">
              {membership.userEmail}
            </div>
          ),
        },
        {
          content: (
            <div
              className={`${
                membership.membershipStatus === 'ACTIVE'
                  ? chipGreenColor
                  : membership.membershipStatus === 'PENDING'
                  ? chipBlueColor
                  : membership.membershipStatus === 'PAUSED'
                  ? chipGrayLightColor
                  : membership.membershipStatus === 'INACTIVE'
                  ? chipGrayDarkColor
                  : chipRedColor
              } ${chip}`}
            >
              {membership.membershipStatus}
            </div>
          ),
        },
        {
          content:
            loaderData.userCanManageUsers &&
            loaderData.currentUserEmail !== membership.userEmail ? (
              <DropdownMenu
                triggerClassName="w-7"
                trigger={
                  <Icon
                    className="w-7"
                    onClick={() => {}}
                    icon="threeDotsVertical"
                  />
                }
                dropdownMenuContent={[
                  {
                    displayText: 'Pause / unpause',
                    onClick: () => {
                      const formData = new FormData()
                      formData.set('_action', 'pauseUnpauseMembership')
                      formData.set(
                        'membershipId',
                        membership.membershipId.toString(),
                      )
                      submit(formData, { method: 'post' })
                    },
                  },
                  {
                    displayText: 'Edit Role',
                    onClick: () => {
                      setDisplayEditRoleDialog(true)
                      setSelectedRowMembershipId(membership.membershipId)
                    },
                  },
                  {
                    displayText: 'Delete',
                    onClick: () => {
                      const formData = new FormData()
                      formData.set('_action', 'deleteMembership')
                      formData.set(
                        'membershipId',
                        membership.membershipId.toString(),
                      )
                      submit(formData, { method: 'post' })
                    },
                  },
                  {
                    displayText:
                      membership.membershipStatus === 'PENDING'
                        ? 'Resend Invite'
                        : 'noDisplay',
                    onClick: () => {
                      const formData = new FormData()
                      formData.set('_action', 'resendInvite')
                      formData.set(
                        'membershipId',
                        membership.membershipId.toString(),
                      )
                      submit(formData, { method: 'post' })
                    },
                  },
                ].filter((item) => item.displayText !== 'noDisplay')}
              />
            ) : (
              <div></div>
            ),
        },
      ].filter((header) => header.content),
    }
  })

  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage
  const endCurrentPageIndex =
    startCurrentPageIndex + numberRecordsToDisplayOnPage
  const rowsToDisplay = allRowsDataElements.slice(
    startCurrentPageIndex,
    endCurrentPageIndex,
  )

  return (
    <>
      {displayAlert && (
        <Alert
          variant={alertMessage.type}
          title={alertMessage.message}
          onClose={() => {
            setDisplayAlert(false)
          }}
        />
      )}
      <Dialog
        open={displayEditRoleDialog}
        onClose={() => {
          setSelectedRowMembershipId(-1)
          setDisplayEditRoleDialog(false)
        }}
      >
        <div className=" max-md:w-64 ">
          <div className={`${subPageTitle} pb-2`}> Select a New Role </div>
          <SelectInput
            possibleValues={loaderData.roles.map((role) => {
              return { value: role.id.toString(), valueLabel: role.roleName }
            })}
            onChange={(value) => {
              setNewRoleId(parseInt(value))
            }}
            valueCurrent={newRoleId.toString()}
            noPadding
          />
          <div className="flex w-full py-2">
            <div className="p-2">
              <Button
                className=" w-20 "
                variant="outline"
                onClick={() => {
                  setDisplayEditRoleDialog(false)
                  setSelectedRowMembershipId(-1)
                }}
              >
                Cancel
              </Button>
            </div>
            <div className="ml-auto p-2">
              <Button
                className=" w-20"
                onClick={() => {
                  const formData = new FormData()
                  formData.set('_action', 'changeMembersRole')
                  formData.set(
                    'membershipIds',
                    selectedRowMembershipId === -1
                      ? selectedMembershipIds.join(',')
                      : selectedRowMembershipId.toString(),
                  )
                  formData.set('newRoleId', newRoleId.toString())
                  submit(formData, { method: 'post' })
                  setSelectedRowMembershipId(-1)
                  setDisplayEditRoleDialog(false)
                  setNewRoleId(loaderData.roles[0].id)
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        onClose={() => setInviteModalVisible(false)}
        open={inviteModalVisible}
      >
        <InviteUser onCloseFunction={setInviteModalVisible} />
      </Dialog>
      <div className="flex w-full flex-col space-y-1.5  ">
        <div className="p-4">
          <div className={`ps-2  ${secondaryText}`}>
            Find all your team members and their associated roles here.
          </div>
          <div className="flex w-full py-1">
            <div className="flex h-20 w-96 items-center ">
              <TextInput
                value={searchTerm}
                placeholder="Search Team"
                onChange={(newValue) => setSearchTerm(newValue)}
              />
            </div>
            <div className=" flex h-20 items-center pl-4 max-md:hidden">
              <Popover
                trigger={
                  <Button className="  w-32" variant="ghost" isPopoverTrigger>
                    <Icon icon="add" /> Add Filter
                  </Button>
                }
                contentClassName={`w-[27rem]`}
                content={filterPopoverContent}
              />
            </div>
            <div className="w-1/3 pt-3 max-md:hidden lg:w-1/2">
              {Object.keys(filterRole)
                .filter((key) => filterRole[key])
                .map((key, index) => {
                  return (
                    <div className="inline-block p-2" key={`filterRole-${index}`}>
                      <div
                        className={`${filterChip}`}
                        onClick={() => {
                          setFilterRole((filter) => {
                            const newValue = { ...filter };
                            newValue[key] = false;
                            return newValue;
                          });
                        }}
                      >
                        {key} <Icon icon="close" />
                      </div>
                    </div>
                  );
                })}
              {Object.keys(filterStatus)
                .filter((key) => filterStatus[key])
                .map((key, index) => {
                  const lowerCase = key.toLowerCase();
                  const formattedText =
                    lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
                  return (
                    <div className="inline-block p-2" key={`filterStatus-${index}`}>
                      <div
                        className={`${filterChip}`}
                        onClick={() => {
                          setFilterStatus((filter) => {
                            const newValue = { ...filter };
                            newValue[key] = false;
                            return newValue;
                          });
                        }}
                      >
                        {formattedText} <Icon icon="close" />
                      </div>
                    </div>
                  );
                })}
            </div>

            {loaderData.userCanManageUsers && (
              <div className="ml-auto flex h-20 w-32 items-center ">
                <Button
                  className={''}
                  onClick={() => setInviteModalVisible(true)}
                >
                  Invite People
                </Button>
              </div>
            )}
          </div>
          <div className="p-2 py-1">Results: {allRowsData.length}</div>
          <div className="flex items-center pb-4 pt-1">
            <div className=" flex w-20 items-center p-2 md:w-40">
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
                noPadding
              />
            </div>
            <div className="p-2 md:hidden">
              <Popover
                trigger={
                  <Button
                    noPadding
                    className="w-12"
                    onClick={() => {}}
                    variant="outline"
                  >
                    <Icon icon="filter" />
                  </Button>
                }
                contentClassName={`w-[20rem]`}
                content={filterPopoverContent}
              />
            </div>
          </div>
        </div>
        <Card outerClassName={'overflow-auto py-1'} innerClassName="w-full">
          <Table headers={headers} rows={rowsToDisplay} />
        </Card>
        {Math.ceil(allRowsData.length / numberRecordsToDisplayOnPage) - 1 >
          0 && (
          <div className="flex items-center justify-center py-4">
            <Pagination
              totalNumberPages={
                Math.ceil(allRowsData.length / numberRecordsToDisplayOnPage) - 1
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
                    Math.ceil(
                      allRowsData.length / numberRecordsToDisplayOnPage,
                    ) -
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
        )}
        {selectedMembershipIds.length > 0 && (
          <TableSelectBottomBar numberSelected={selectedMembershipIds.length}>
            <div className=" p-2">
              <Button
                onClick={() => {
                  const formData = new FormData()
                  formData.set('_action', 'pauseUnpauseManyMemberships')
                  formData.set('membershipIds', selectedMembershipIds.join('£'))
                  submit(formData, { method: 'post' })
                }}
                variant="outline"
              >
                <Icon icon="pause" className="pr-2" />
                Pause
              </Button>
            </div>
            <div className=" p-2">
              <Button
                onClick={() => setDisplayEditRoleDialog(true)}
                variant="outline"
              >
                <Icon icon="edit" className="pr-2" />
                Edit Role
              </Button>
            </div>
            <div className=" p-2">
              <Button
                variant="outline"
                onClick={() => {
                  const formData = new FormData()
                  formData.set('_action', 'deleteManyMemberships')
                  formData.set('membershipIds', selectedMembershipIds.join('£'))
                  submit(formData, { method: 'post' })
                  setSelectedMembershipIds([])
                }}
              >
                <Icon icon="bin" className="pr-2" />
                Delete
              </Button>
            </div>
          </TableSelectBottomBar>
        )}
      </div>
    </>
  )
}
