import { Card } from '~/components/ui/Card'
import AssetNestLogo from '~/assets/Logos/AssetNestLogoDark.svg'
import { TextInput } from '~/components/ui/TextInput'
import { useState, useRef, useEffect } from 'react'
import Button from '~/components/ui/Button'
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
} from '@remix-run/react'
import { redirect, type ActionFunctionArgs, json } from '@remix-run/node'
import { commitSession, getSession } from '~/cookies'
import { emailValid } from '~/utils/emailValidator'
import { comparePasswords } from '~/utils/passwordHashing.server'
import { getUserEmail } from '~/endpoints/user'
import { sendEmail } from '~/utils/email.server'
import { Dialog } from '~/components/ui/Dialog'
import { Icon } from '~/components/ui/Icon'
import { pageTitle } from '~/styles/typography'
import Alert from '~/components/ui/Alert'

interface ActionData {
  email?: string;
  password?: string;
  verificationError?: boolean;
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()

  const resendVerification = body.get('resendVerification') as string
  if (resendVerification) {
    const email = body.get('email') as string
    const inviteToken = body.get('inviteToken') as string
    await sendEmail([email], {type: 'verifyUser', inviteToken: inviteToken})
    return null
  }

  const email = body.get('email') as string
  const password = body.get('password') as string

  let emailError = ''
  let passwordError = ''
  if (email.length === 0) {
    emailError = 'A email is required'
  } else if (!emailValid(email ?? '')) {
    emailError = 'Enter a valid email'
  }

  if (password.length === 0) {
    passwordError = 'A password is required'
  }

  if (emailError || passwordError) {
    return {
      email: emailError,
      password: passwordError,
    }
  }
  const emailExistsToAUser = await getUserEmail(email)
  const passwordsMatch = comparePasswords(
    password,
    emailExistsToAUser?.passwordHash ?? '',
  )
  if (!emailExistsToAUser || !passwordsMatch || !emailExistsToAUser?.verified) {
    emailError = 'Invalid login details given'
  }

  if (emailExistsToAUser && !emailExistsToAUser?.verified) {
    await sendEmail([emailExistsToAUser.email.toLowerCase()], {
      type: 'verifyUser',
      inviteToken: emailExistsToAUser.verifyToken ?? '',
    })
    emailError = 'Account is not verified. Verification email has been resent'
  }

  if (emailError || passwordError) {
    return {
      email: emailError,
      password: passwordError,
      verificationError: !emailExistsToAUser?.verified,
    }
  }

  const session = await getSession(request.headers.get('Cookie'))
  session.set('userId', emailExistsToAUser?.id ?? -1)

  const cookie = await commitSession(session)
  return redirect('/organisationList', {
    status: 302,
    headers: {
      'Set-Cookie': cookie,
    },
  })
}

export const loader = async ({ request }: { request: Request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const signUpFlash = session.get('signUpFlash')
  const resetPasswordFlash = session.get('resetPasswordFlash')

  return json(
    { signUpFlash, resetPasswordFlash },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  )
}

export default function Index() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigation = useNavigate()
  const loaderData = useLoaderData<typeof loader>() as {
    signUpFlash?: { email: string; inviteToken: string }
    resetPasswordFlash?: boolean
  }

  const [displaySignUpModel, setDisplaySignUpModel] = useState(
    !!loaderData?.signUpFlash,
  )

  const actionData = useActionData<ActionData>();
  const emailResendRef = useRef<HTMLFormElement>(null)

  const [displayResetPasswordFlashAlert, setDisplayResetPasswordFlashAlert] =
    useState<boolean>(loaderData?.resetPasswordFlash ?? false)

  useEffect(() => {
    if (loaderData?.resetPasswordFlash) {
      setDisplayResetPasswordFlashAlert(loaderData?.resetPasswordFlash ?? false)
      setTimeout(() => setDisplayResetPasswordFlashAlert(false), 5000)
    }
  }, [loaderData?.resetPasswordFlash])

  return (
    <Card>
      <div className="flex w-full flex-col ">
        {displayResetPasswordFlashAlert && (
          <Alert variant="success" title="Password Reset Successfully" />
        )}
        <Dialog
          open={displaySignUpModel}
          onClose={() => setDisplaySignUpModel(false)}
        >
          <Form method="post" ref={emailResendRef} className="p-2">
            <input type="hidden" name="resendVerification" value={'true'} />
            <input
              type="hidden"
              name="email"
              value={loaderData.signUpFlash?.email ?? ''}
            />
            <input
              type="hidden"
              name="inviteToken"
              value={loaderData.signUpFlash?.inviteToken ?? ''}
            />
            <div className="flex items-center justify-center p-2">
              <Icon icon="email"></Icon>
            </div>
            <div className={`${pageTitle} p-2 text-center`}>
              Verification Email Sent
            </div>
            <div className="divide-y">
              <div className={`p-2 text-center text-gray-500`}>
                Please click the link in the email to activate your account. It
                may take a few moments to arrive.
              </div>
              <div className={`p-4 text-center text-gray-500`}>
                If you haven’t received anything, you can{' '}
                <span
                  onClick={() => {
                    emailResendRef.current?.submit()
                  }}
                  className=" font-semibold text-gray-600 hover:cursor-pointer hover:underline  "
                >
                  Resend Email
                </span>
              </div>
            </div>
          </Form>
        </Dialog>
        <img className="p-4" src={AssetNestLogo} alt={'assetnest logo'} />
        <h1 className={' text-l text-brand_Teal p-1 text-center font-bold'}>
          Log in to your account
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
            <div className="px-2 text-primary">
              <div
                onClick={() => navigation('/forgotPassword')}
                className="  hover:cursor-pointer hover:underline"
              >
                Forgotten your password?
              </div>
            </div>
            <div className="w-full pt-4">
              <div className="p-1 px-2">
                <Button className="w-full" submit variant="default">
                  Log In
                </Button>
              </div>
            </div>
            <div className="w-full pt-4">
              <div className="p-1 px-2">
                <Button
                  className="w-full"
                  onClick={() => navigation('/signUp')}
                  variant="outline"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Card>
  )
}
