import { Section, Text, Button } from '@react-email/components'
import { EmailLayout } from './emailLayout'

export const VerifyUserEmail = ({ token }: { token: string }) => {
  let emailLink: string

  switch (process.env.ENVIRONMENT) {
    case 'local':
      emailLink = 'http://localhost:3000/verify/' + token
      break
    case 'staging':
      emailLink = 'http://staging.v2.assetnest.com/verify/' + token
      break
    case 'production':
      emailLink = 'http://v2.assetnest.com/verify/' + token
      break
    default:
      emailLink = 'http://v2.assetnest.com/verify/' + token
      break
  }

  return (
    <EmailLayout>
      <>
        <Section style={content}>
          <Text style={paragraph}>
            Thanks for signing up to AssetNest. Click the button below to verify
            your account
          </Text>
        </Section>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href={emailLink}>
            Click Here to Verify Your Account
          </Button>
        </Section>
      </>
    </EmailLayout>
  )
}

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
}

const content = {
  padding: '5px 50px 10px 60px',
}

const btnContainer = {
  textAlign: 'center' as const,
  padding: '5px 50px 10px 60px',
}

const button = {
  backgroundColor: '#00465E',
  borderRadius: '1rem',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '1rem',
}
