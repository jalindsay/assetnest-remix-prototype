import { Form, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import Button from '~/components/ui/Button'
import { SelectInput } from '~/components/ui/SelectInput'
import { ReactMultiEmail } from '~/components/ui/ReactMultiEmail'
import type { Role } from '@prisma/client'
import { pageTitle, secondaryText } from '~/styles/typography'
import { LabelShad } from '~/components/ui/shadUi/ui/label'

interface InviteUserProps {
  onCloseFunction: (modalVisible: boolean) => void
}

interface LoaderData {
  roles: Role[];
}

export default function InviteUser({ onCloseFunction }: InviteUserProps) {
  const loaderData = useLoaderData() as LoaderData
  const possibleRoleValues = loaderData.roles.map((role: Role) => {
    return { value: role.roleName, valueLabel: role.roleName }
  })
  const [emails, setEmails] = useState<string[]>([])
  const [role, setRole] = useState(possibleRoleValues[0].value)

  return (
    <>
      <div className={`${pageTitle}`}>Invite User</div>
      <Form method="post">
        <div className={`${secondaryText} py-4`}>
          Enter the email addresses of the users you wish to invite to this
          organisation.
        </div>
        <LabelShad className={'text-s pb-1 pl-2 text-left font-semibold'}>
          Email Addresses
        </LabelShad>
        <div className={'pr-4'}>
          <ReactMultiEmail
            className={
              '@apply tap-highlight-color-transparent leading-14 align-content-start relative left-2 m-0 flex max-w-full flex-1 flex-wrap items-center rounded-md border bg-white px-2 py-2 text-left text-black shadow outline-none transition duration-100 ease-in-out'
            }
            placeholder="Enter emails to invite"
            emailsInput={emails}
            onChange={(_emails: string[]) => {
              setEmails(_emails)
            }}
            autoFocus={true}
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
        <SelectInput
          name="role"
          label="Role"
          valueCurrent={role}
          onChange={(value) => setRole(value)}
          possibleValues={possibleRoleValues}
        />
        <Button
          className={'ml-2 mr-4'}
          variant="outline"
          onClick={() => onCloseFunction(false)}
        >
          Cancel
        </Button>
        <Button className={'mr-4'} submit={true}>
          Invite
        </Button>
        <input type="hidden" name="_action" value="inviteUser" />
        <input type="hidden" name="emails" value={emails} />
      </Form>
    </>
  )
}
