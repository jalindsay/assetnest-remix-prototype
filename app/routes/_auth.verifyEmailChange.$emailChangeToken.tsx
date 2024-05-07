import Button from '~/components/ui/Button'
import type { LoaderFunctionArgs} from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import { Card } from '~/components/ui/Card'
import {
  getEmailChangeLogByToken,
  verifyEmailChangeLog,
} from '~/endpoints/emailChangeLog'
import AssetNestLogo from '~/assets/Logos/AssetNestLogoDark.svg'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const emailChangeLog = await getEmailChangeLogByToken(
    params.emailChangeToken ?? '',
  )
  if (emailChangeLog && !emailChangeLog.verified) {
    const email = emailChangeLog.newEmail.toLowerCase().trim()
    await verifyEmailChangeLog(emailChangeLog.id ?? -1, email)
  } else {
    return redirect('/logIn', {
      status: 302,
    })
  }

  return null
}

export default function VerifyEmailChange() {
  const navigation = useNavigate()

  return (
    <Card>
      <div className="flex w-full flex-col">
        <img className="p-4" src={AssetNestLogo} alt={'assetnest logo'} />
        <p className="text-center">Your new email has been verified.</p>
        <div className="w-full px-5 pt-4">
          <div className="p-1">
            <Button
              onClick={() => navigation('/login')}
              className="w-full"
              variant="default"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
