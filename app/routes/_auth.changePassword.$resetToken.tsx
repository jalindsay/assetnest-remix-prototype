import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
import Button from '~/components/ui/Button'
import { Card } from '~/components/ui/Card'
import { TextInput } from '~/components/ui/TextInput'
import { commitSession, getSession } from '~/cookies'
import { getUserPasswordResetToken, updateUser } from '~/endpoints/user'
import { generatePasswordHash } from '~/utils/passwordHashing.server'
import { passwordValid } from '~/utils/passwordValidator'

export async function action({ request, params }: ActionFunctionArgs) {
  const body = await request.formData()
  const session = await getSession(request.headers.get('Cookie'))

  const newPassword = body.get('newPassword') as string
  const newPasswordRepeat = body.get('newPasswordRepeat') as string
  let newPasswordError = ''
  let newPasswordRepeatError = ''

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

  if (newPasswordError || newPasswordRepeatError) {
    return {
      newPassword: newPasswordError,
      newPasswordRepeat: newPasswordRepeatError,
    }
  }

  const newPasswordHash = await generatePasswordHash(newPassword)
  const user = await getUserPasswordResetToken(params.resetToken ?? '')

  await updateUser({
    userId: user?.id ?? -1,
    passwordHash: newPasswordHash,
    passwordResetExpireDate: new Date(),
  })
  session.flash('resetPasswordFlash', true)

  return redirect('/logIn', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const user = await getUserPasswordResetToken(params.resetToken ?? '')
  if (
    user?.passwordResetExpireDate &&
    user.passwordResetExpireDate > new Date()
  ) {
    return null
  }
  return redirect(`/login`)
}

interface ActionData {
  newPassword?: string;
  newPasswordRepeat?: string;
}

export default function Profile() {
  const [newPassword, setNewPassword] = useState<string>('')
  const [newPasswordRepeat, setNewPasswordRepeat] = useState<string>('')
  const actionData = useActionData<ActionData>()
  return (
    <Card>
      <div className="flex w-full flex-col sm:w-96">
        <h1 className={' text-l text-brand_Teal p-1 text-center font-bold'}>
          Reset Your Password
        </h1>
        <Form method="post">
          <div className="p-1">
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
              placeholder="Confirm New Password"
              label="Confirm New Password"
              helpText={actionData?.newPasswordRepeat ?? ''}
              error={!!actionData?.newPasswordRepeat}
              password
            />
          </div>
          <div className=" flex w-full justify-center self-center p-3">
            <Button submit className="w-full" onClick={() => {}}>
              Confirm
            </Button>
          </div>
        </Form>
      </div>
    </Card>
  )
}
