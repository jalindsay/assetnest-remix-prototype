import type { ActionFunctionArgs, LoaderFunctionArgs} from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { Card } from '~/components/ui/Card'
import { TextInput } from '~/components/ui/TextInput'
import {
  getMembershipByInviteToken,
  verifyUserViaMembershipInviteToken,
} from '~/endpoints/membership'
import AssetNestLogo from '~/assets/Logos/AssetNestLogoDark.svg'
import { passwordValid } from '~/utils/passwordValidator'
import { generatePasswordHash } from '~/utils/passwordHashing.server'
import { commitSession, getSession } from '~/cookies'
import Button from '~/components/ui/Button'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const getMembershipResult: any = await getMembershipByInviteToken(
    params.inviteToken,
  )

  if (getMembershipResult.user.passwordHash !== null) {
    console.log('user exists but is logged out, redirecting to login')
    return redirect('/login', {
      status: 302,
    })
  }
  return {
    email: getMembershipResult?.user.email ?? '',
    inviteToken: params.inviteToken,
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const email = (body.get('email') ?? '') as string
  const password = (body.get('password') ?? '') as string
  const repeatPassword = (body.get('repeatPassword') ?? '') as string
  const inviteToken = (body.get('inviteToken') ?? '') as string

  let emailError = ''
  let passwordError = ''
  let repeatPasswordError = ''

  if (password.length === 0) {
    passwordError = 'A password is required'
  } else if (!passwordValid(password)) {
    passwordError = 'Passwords must contain at least 12 characters'
  }

  if (repeatPassword.length === 0) {
    repeatPasswordError = 'A repeat password is required'
  } else if (repeatPassword !== password) {
    repeatPasswordError = 'Passwords do not match'
  }
  if (emailError || passwordError || repeatPasswordError) {
    return {
      email: emailError,
      password: passwordError,
      repeatPassword: repeatPasswordError,
    }
  }
  const passwordHash = await generatePasswordHash(password)
  const updateMembershipInviteResult = await verifyUserViaMembershipInviteToken(
    {
      inviteToken: inviteToken,
      email: email,
      passwordHash: passwordHash,
    },
  )

  // Store the userId in the cookie. This effectively logs the user in.
  const session = await getSession(request.headers.get('Cookie'))
  session.set('userId', updateMembershipInviteResult?.updatedUser.id ?? -1)

  const cookie = await commitSession(session)
  return redirect('/organisationList', {
    status: 302,
    headers: {
      'Set-Cookie': cookie,
    },
  })
}

export default function SignUp() {
  const loaderData = useLoaderData() as {
    email: string
    inviteToken: string
  }
  const email = loaderData.email
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const inviteToken = loaderData.inviteToken
  const actionData = useActionData() as {
    password: string
    repeatPassword: string
  }

  return (
    <div>
      <Card>
        <div className="flex w-full flex-col">
          <img className="p-4" src={AssetNestLogo} alt={'assetnest logo'} />
          <h1 className={' text-l text-brand_Teal p-1 text-center font-bold'}>
            Create your account
          </h1>
          <Form method="post">
            <TextInput
              name={'email'}
              value={email}
              onChange={() => {}}
              placeholder="Email"
              label="Email"
              disabled={true}
            />
            <TextInput
              name={'password'}
              onChange={(value) => {
                setPassword(value)
              }}
              value={password}
              placeholder="Password"
              label="Password"
              password
              error={!!actionData?.password}
              helpText={actionData?.password}
            />
            <TextInput
              name={'repeatPassword'}
              onChange={(value) => {
                setRepeatPassword(value)
              }}
              value={repeatPassword}
              placeholder="Repeat Password"
              label="Repeat Password"
              password
              error={!!actionData?.repeatPassword}
              helpText={actionData?.repeatPassword}
            />
            <input hidden name={'inviteToken'} value={inviteToken} readOnly />
            <Button className="w-full" submit variant="default">
              Create User
            </Button>
          </Form>
        </div>
      </Card>
    </div>
  )
}
