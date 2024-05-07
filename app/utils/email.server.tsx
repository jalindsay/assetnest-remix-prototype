import { Resend } from 'resend'
import { VerifyUserEmail } from './emailTemplates/verifyUserEmail.server'
import { ResetPasswordEmail } from './emailTemplates/resetPasswordEmail'
import { ChangeUserEmail } from './emailTemplates/changeUserEmail.server'
import { InviteUserEmail } from './emailTemplates/inviteUserEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (
  destinationEmails: string[],
  template:
    | { type: 'verifyUser'; inviteToken: string }
    | { type: 'resetPassword'; resetToken: string }
    | { type: 'changeEmail'; changeEmailToken: string }
    | {
        type: 'inviteUser'
        inviteToken: string
        orgName: string
        orgIcon?: string
      },
) => {
  try {
    switch (template.type) {
      case 'verifyUser':
        await resend.emails.send({
          from: 'Assetnest <noreply@v2.assetnest.com>',
          to: destinationEmails,
          subject: 'Verify your email address',
          react: <VerifyUserEmail token={template.inviteToken} />,
        })
        break
      case 'resetPassword':
        await resend.emails.send({
          from: 'Assetnest <noreply@v2.assetnest.com>',
          to: destinationEmails,
          subject: 'Reset Your Password',
          react: <ResetPasswordEmail token={template.resetToken} />,
        })
        break
      case 'changeEmail':
        await resend.emails.send({
          from: 'Assetnest <noreply@v2.assetnest.com>',
          to: destinationEmails,
          subject: 'Verify Your New Email',
          react: <ChangeUserEmail token={template.changeEmailToken} />,
        })
        break
      case 'inviteUser':
        await resend.emails.send({
          from: 'Assetnest <noreply@v2.assetnest.com>',
          to: destinationEmails,
          subject: 'You have been invited to AssetNest',
          react: (
            <InviteUserEmail
              token={template.inviteToken}
              orgName={template.orgName}
              orgIcon={template.orgIcon}
            />
          ),
        })
        break
    }
  } catch (error) {
    console.error(error)
  }
}
