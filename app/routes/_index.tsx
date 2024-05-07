import { redirect } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { Layout } from '~/components/ui/Layout'
import { getSession } from '~/cookies'
import { getUserId } from '~/endpoints/user'

export const loader = async ({ request }: { request: Request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  if (userId) {
    const loggedInUser = await getUserId(userId)
    if (loggedInUser) {
      return redirect(`/profile`)
    }
  }

  return redirect(`/logIn`)
}

export default function _auth() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
