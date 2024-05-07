import { Section, Text, Button, Heading, Img } from '@react-email/components'
import { EmailLayout } from './emailLayout'

export const InviteUserEmail = ({
  token,
  orgName,
  orgIcon,
}: {
  token: string
  orgName: string
  orgIcon?: string
}) => {
  let emailLink: string

  switch (process.env.ENVIRONMENT) {
    case 'local':
      emailLink = 'http://localhost:3000/signUpInvite/' + token
      break
    case 'staging':
      emailLink = 'http://staging.v2.assetnest.com/signUpInvite/' + token
      break
    case 'production':
      emailLink = 'http://v2.assetnest.com/signUpInvite/' + token
      break
    default:
      emailLink = 'http://v2.assetnest.com/signUpInvite/' + token
      break
  }

  return (
    <EmailLayout>
      <>
        <Section style={content}>
          <Heading style={{ ...heading, textAlign: 'center' }}>
            You have been invited!
          </Heading>
          <Img
            src={orgIcon}
            style={{
              maxWidth: '100px',
              display: 'block',
              margin: '0 auto',
              borderRadius: '4px',
            }}
          />
          <Text style={{ ...paragraph, textAlign: 'center' }}>
            {orgName} has invited you to join their team.
          </Text>
        </Section>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href={emailLink}>
            Join Now
          </Button>
        </Section>
      </>
    </EmailLayout>
  )
}

const heading = {
  fontSize: 24,
  fontWeight: 600,
  marginBottom: 20,
  color: '#00465E',
}

const paragraph = {
  lineHeight: 1.5,
  fontSize: 16,
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
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '1rem',
}
