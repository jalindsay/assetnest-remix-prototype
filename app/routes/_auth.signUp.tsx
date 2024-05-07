import { Card } from '~/components/ui/Card'
import AssetNestLogo from '~/assets/Logos/AssetNestLogoDark.svg'
import { TextInput } from '~/components/ui/TextInput'
import { useState } from 'react'
import Button from '~/components/ui/Button'
import { Form, Link, useActionData } from '@remix-run/react'
import { redirect, type ActionFunctionArgs } from '@remix-run/node'
import { emailValid } from '~/utils/emailValidator'
import { passwordValid } from '~/utils/passwordValidator'
import { generatePasswordHash } from '~/utils/passwordHashing.server'
import { createUser, getUserEmail } from '~/endpoints/user'
import { commitSession, getSession } from '~/cookies'

type ActionData = {
  email?: string;
  password?: string;
  repeatPassword?: string;
};

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const email = (body.get('email') ?? '') as string
  const password = (body.get('password') ?? '') as string
  const repeatPassword = (body.get('repeatPassword') ?? '') as string

  let emailError = ''
  let passwordError = ''
  let repeatPasswordError = ''

  const emailAlreadyUsed = await getUserEmail(email)
  if (email.length === 0) {
    emailError = 'A email is required'
  } else if (!emailValid(email ?? '')) {
    emailError = 'Enter a valid email'
  } else if (emailAlreadyUsed) {
    emailError = 'Email already in use'
  }

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
  const inviteToken = await createUser({
    email: email,
    passwordHash: passwordHash,
  })

  const session = await getSession(request.headers.get('Cookie'))
  session.flash('signUpFlash', { email, inviteToken })
  return redirect('/logIn', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

const Index = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')

  const actionData = useActionData<ActionData>();

  return (
    <Card>
      <div className="flex w-full flex-col">
        <img className="p-4" src={AssetNestLogo} alt={'assetnest logo'} />
        <h1 className={' text-l text-brand_Teal p-1 text-center font-bold'}>
          Create your account
        </h1>
        <Form method="post">
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
            <div className="p-1 pt-4">
              <div className="p-1">
                <Button className="w-full" submit variant="default">
                  Create Account
                </Button>
              </div>
              <div className="p-1">
                Already Have a Account?{' '}
                <Link
                  className=" text-primary underline hover:text-primaryHover"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Card>
  )
}

export default Index
