import { Section, Text, Button } from '@react-email/components'
import { EmailLayout } from './emailLayout'

export const ChangeUserEmail = ({ token }: { token: string }) => {
  let emailLink: string

  switch (process.env.ENVIRONMENT) {
    case 'local':
      emailLink = 'http://localhost:3000/verifyemailchange/' + token
      break
    case 'staging':
      emailLink = 'http://staging.v2.assetnest.com/verifyemailchange/' + token
      break
    case 'production':
      emailLink = 'http://v2.assetnest.com/verifyemailchange/' + token
      break
    default:
      emailLink = 'http://v2.assetnest.com/verifyemailchange/' + token
      break
  }

  return (
    <EmailLayout>
      <>
        <Section style={content}>
          <Text style={{ ...paragraph, textAlign: 'center' }}>
            To confirm this new email address, please click the button below. If
            you have not requested this change, please ignore this email.
          </Text>
        </Section>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href={emailLink}>
            Verify Email
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
