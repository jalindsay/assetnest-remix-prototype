import { Card } from '~/components/ui/Card'
import AssetNestLogo from '~/assets/Logos/AssetNestLogoDark.svg'
import Button from '~/components/ui/Button'
import { Form, useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs , ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { getUserInviteToken, verifyUser } from '~/endpoints/user'

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const userId = body.get('userID') as string

  await verifyUser({ userId: parseInt(userId) })
  return redirect('/logIn', {
    status: 302,
  })
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const user = await getUserInviteToken(params.inviteToken ?? '')
  if (user && !user.verified) {
    return user.id
  }
  return redirect(`/login`)
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>() as number | undefined

  return (
    <Card>
      <div className="flex w-full flex-col">
        <img className="p-4" src={AssetNestLogo} alt={'assetnest logo'} />
        <h1 className={' text-l text-brand_Teal p-1 text-center font-bold'}>
          Welcome to Assetnest
        </h1>
        <Form method="post">
          <input type="hidden" name="userID" value={loaderData ?? -1}></input>
          <div className="w-full px-5 pt-4">
            <div className="p-1">
              <Button submit className="w-full" variant="default">
                Click here to verify your account
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Card>
  )
}
