import { redirect } from '@remix-run/node'
import { commitSession, getSession } from '~/cookies'

export const loader = async ({ request }: { request: Request }) => {
  // Read session from cookie
  const session = await getSession(request.headers.get('Cookie'))
  // Create new cookie string
  session.unset('userId')

  const cookie = await commitSession(session)
  return redirect('/profile', {
    status: 302,
    headers: {
      'Set-Cookie': cookie,
    },
  })
}

const SignOut = () => {
  return <></>
}

export default SignOut
