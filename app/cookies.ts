import { createCookieSessionStorage } from '@remix-run/node'

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<{
    userId: number
    orgId: number
    signUpFlash?: { email: string; inviteToken: string }
    resetPasswordFlash?: boolean
  }>({
    cookie: {
      name: '__session',
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: ['s3cret1'],
      secure: true,
    },
  })
