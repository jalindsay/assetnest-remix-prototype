import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

interface IProps {
  children?: React.ReactNode
}

export const EmailLayout = ({ children }: IProps) => (
  <Html>
    <Head />
    <Preview>Verify your assetnest account</Preview>
    <Body style={main}>
      <Container style={containerLogo}>
        <Section style={logo}>
          <Img
            src="https://hmhdlfbybqpvhqqxjhql.supabase.co/storage/v1/object/public/assetnest-public/icons/assetnest.png"
            alt="assetnest logo"
          />
        </Section>
      </Container>
      <Container style={container}>{children} </Container>
      <Section style={footer}>
        <Text
          style={{ textAlign: 'center', fontSize: '18px', color: '#00465E' }}
        >
          assetnest.com
        </Text>
        <Container style={containerSocialMedia}>
          <Section>
            <Row>
              <Column style={{ width: '25%' }}></Column>
              <Column>
                <Row>
                  <Column align="center" style={{ padding: '5px' }}>
                    <Link href="https://www.facebook.com/people/Assetnest/100095453896853/">
                      <Img
                        src="https://hmhdlfbybqpvhqqxjhql.supabase.co/storage/v1/object/public/assetnest-public/icons/mdi_facebook.png"
                        alt="facebook"
                      />
                    </Link>
                  </Column>
                  <Column align="center" style={{ padding: '5px' }}>
                    <Link href="https://www.instagram.com/assetnest/">
                      <Img
                        src="https://hmhdlfbybqpvhqqxjhql.supabase.co/storage/v1/object/public/assetnest-public/icons/mdi_instagram.png"
                        alt="instagram"
                      />
                    </Link>
                  </Column>
                  <Column align="center" style={{ padding: '5px' }}>
                    <Link href="https://twitter.com/theassetnest">
                      <Img
                        src="https://hmhdlfbybqpvhqqxjhql.supabase.co/storage/v1/object/public/assetnest-public/icons/x_logo.png"
                        alt="x"
                      />
                    </Link>
                  </Column>
                  <Column align="center" style={{ padding: '5px' }}>
                    <Link href="https://www.linkedin.com/showcase/assetnest/">
                      <Img
                        src="https://hmhdlfbybqpvhqqxjhql.supabase.co/storage/v1/object/public/assetnest-public/icons/mdi_linkedin.png"
                        alt="linkedin"
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
              <Column style={{ width: '25%' }}></Column>
            </Row>
          </Section>
        </Container>
        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
          +44 (0)2030 867 430
        </Text>
        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
          sales@assetnest.com
        </Text>
        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
          Pole Star Dominion House Woodbridge Road Guildford GU1 4PU
        </Text>
      </Section>
    </Body>
  </Html>
)

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif'

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
}

const containerLogo = {
  width: '580px',
  margin: '30px auto',
  paddingBottom: '30px',
}

const container = {
  width: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
}

const footer = {
  width: '580px',
  margin: '0 auto',
}

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 30,
  textAlign: 'center' as const,
}

const containerSocialMedia = {
  width: '200px',
  margin: '20px auto',
  paddingBottom: '5px',
}
