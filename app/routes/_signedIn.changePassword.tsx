import { redirect, type ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import { useState } from 'react'
import Button from '~/components/ui/Button'
import { Card } from '~/components/ui/Card'
import { TextInput } from '~/components/ui/TextInput'
import { getSession } from '~/cookies'
import { getUserId, updateUser } from '~/endpoints/user'
import {
  comparePasswords,
  generatePasswordHash,
} from '~/utils/passwordHashing.server'
import { passwordValid } from '~/utils/passwordValidator'

interface ActionData {
  oldPassword?: string;
  newPassword?: string;
  newPasswordRepeat?: string;
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  const oldPassword = body.get('oldPassword') as string
  const newPassword = body.get('newPassword') as string
  const newPasswordRepeat = body.get('newPasswordRepeat') as string
  let oldPasswordError = ''
  let newPasswordError = ''
  let newPasswordRepeatError = ''

  const user = await getUserId(userId ?? -1)

  if (oldPassword.length === 0) {
    oldPasswordError = 'This field is required'
  } else if (!(comparePasswords(oldPassword, user?.passwordHash ?? ''))) {
    oldPasswordError = 'Current Password is incorrect'
  }

  if (newPassword.length === 0) {
    newPasswordError = 'This field is required'
  } else if (!passwordValid(newPassword)) {
    newPasswordError = 'Passwords must contain at least 12 characters'
  }

  if (newPasswordRepeat.length === 0) {
    newPasswordRepeatError = 'This field is required'
  } else if (newPasswordRepeat !== newPassword) {
    newPasswordRepeatError = 'New Passwords must match'
  }

  if (oldPasswordError || newPasswordError || newPasswordRepeatError) {
    return {
      oldPassword: oldPasswordError,
      newPassword: newPasswordError,
      newPasswordRepeat: newPasswordRepeatError,
    }
  }

  const newPasswordHash = await generatePasswordHash(newPassword)
  await updateUser({ userId: userId ?? -1, passwordHash: newPasswordHash })

  return redirect('/profile')
}

export default function Profile() {
  const navigation = useNavigate()
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [newPasswordRepeat, setNewPasswordRepeat] = useState<string>('')

  const actionData = useActionData<ActionData>();
  return (
    <Card>
      <div className="flex w-96 flex-col p-4">
        <h1 className={' text-l text-brand_Teal p-1 text-center font-bold'}>
          Change Password
        </h1>
        <Form method="post">
          <div className="p-1">
            <TextInput
              onChange={(value) => {
                setOldPassword(value)
              }}
              name={'oldPassword'}
              value={oldPassword}
              placeholder="Current Password"
              label="Current Password"
              helpText={actionData?.oldPassword ?? ''}
              error={!!actionData?.oldPassword}
              password
            />
            <TextInput
              name={'newPassword'}
              onChange={(value) => {
                setNewPassword(value)
              }}
              value={newPassword}
              placeholder="New Password"
              label="New Password"
              helpText={actionData?.newPassword ?? ''}
              error={!!actionData?.newPassword}
              password
            />
            <TextInput
              name={'newPasswordRepeat'}
              onChange={(value) => {
                setNewPasswordRepeat(value)
              }}
              value={newPasswordRepeat}
              placeholder="New Password Repeat"
              label="New Password Repeat"
              helpText={actionData?.newPasswordRepeat ?? ''}
              error={!!actionData?.newPasswordRepeat}
              password
            />
          </div>
          <div className="flex">
            <div className=" flex w-1/2 justify-center self-center p-2">
              <Button variant="outline" onClick={() => navigation('/logIn')}>
                Cancel
              </Button>
            </div>
            <div className=" flex w-1/2 justify-center self-center p-2">
              <Button submit onClick={() => {}}>
                Confirm
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Card>
  )
}
