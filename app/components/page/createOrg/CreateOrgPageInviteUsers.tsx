import { useState } from 'react'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { ReactMultiEmail } from '~/components/ui/ReactMultiEmail'
import { SelectInput } from '~/components/ui/SelectInput'
import { LabelShad } from '~/components/ui/shadUi/ui/label'
import { subPageTitle, textRegular } from '~/styles/typography'
import { OrgRolesDialog } from './OrgRolesDialog'

interface IProps {
  setMemberEmails(value: string[], index: number): void
  setMembersRoles(value: string, index: number): void
  emailInvites: { roleId: string; emails: string[] }[]
  possibleRoles: { value: string; valueLabel: string }[]
  addNewEmailRole: (
    newEmailInvites: { roleId: string; emails: string[] }[],
  ) => void
}

export const CreateOrgPageInviteUsers = ({
  setMemberEmails,
  setMembersRoles,
  emailInvites,
  possibleRoles,
  addNewEmailRole,
}: IProps) => {
  const [openHelpDialog, setOpenHelpDialog] = useState(false)

  return (
    <>
      <OrgRolesDialog
        openDialog={openHelpDialog}
        setOpenDialog={setOpenHelpDialog}
      />
      <h2 className={`${subPageTitle} `}>Team Members</h2>
      <div className={`${textRegular} pb-2`}>
        Share the workload by adding team members to your organisation and
        assigning them a role.
      </div>
      <div className={`${textRegular} `}>
        They will create an account linked to the email address given below.
      </div>
      <Button variant="ghost" noPadding onClick={() => setOpenHelpDialog(true)}>
        <div className=" flex items-center underline hover:font-semibold">
          <Icon className="p-1 " icon="help" />
          <div>User Roles Explained</div>
        </div>
      </Button>
      {emailInvites.map((emailInvite, index) => (
        <div
          className="pb-6"
          key={index}
        >
          <div className="w-52  py-2">
            <SelectInput
              name="createdMemberRoles[]"
              label="Role"
              valueCurrent={emailInvite.roleId}
              onChange={(newValue) => setMembersRoles(newValue, index)}
              possibleValues={possibleRoles}
              noPadding
            />
          </div>
          <LabelShad className={'text-s pb-1 pl-1 text-left font-semibold'}>
            Add team members by email
          </LabelShad>
          <input
            type="hidden"
            name="createdMemberEmails[]"
            value={emailInvite.emails.join('£')}
          />
          <ReactMultiEmail
            className={
              'tap-highlight-color-transparent leading-14 align-content-start relative flex  flex-1 flex-wrap items-center rounded-md border border-input bg-white px-2 py-2  text-left text-black shadow outline-none transition duration-100 ease-in-out'
            }
            placeholder="Enter emails to invite"
            emailsInput={emailInvite.emails}
            onChange={(_emails: string[]) => {
              setMemberEmails(_emails, index)
            }}
            getLabel={(email, index, removeEmail) => {
              return (
                <div
                  className={
                    '@apply m-1 flex max-w-full items-center justify-start rounded-md border-transparent bg-gray-200 bg-none p-1.5 align-baseline text-sm font-semibold leading-4 text-gray-600 transition duration-100 ease-in-out'
                  }
                  key={index}
                >
                  <div
                    data-tag-item=""
                    className={'@apply max-w-full overflow-hidden'}
                  >
                    {email}
                  </div>
                  <span
                    data-tag-handle=""
                    className={'ml-2 cursor-pointer'}
                    onClick={() => removeEmail(index)}
                  >
                    ×
                  </span>
                </div>
              )
            }}
          />
        </div>
      ))}
      <div className="py-4">
        <Button
          onClick={() => {
            const newEmailInvites = [...emailInvites]
            newEmailInvites.push({ roleId: possibleRoles[0].value, emails: [] })
            addNewEmailRole(newEmailInvites)
          }}
          className="w-full"
          variant="outline"
        >
          Add More
        </Button>
      </div>
    </>
  )
}
