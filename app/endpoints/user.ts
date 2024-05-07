import {prisma} from '~/utils/prisma.server'
import {v4 as uuid} from 'uuid'
import {sendEmail} from '~/utils/email.server'
import {getStorage} from '~/utils/storage.server'

export const getUserEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email: email.toLowerCase() } })
}

export const getUserId = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
  })
}

export const getUserInviteToken = async (inviteToken: string) => {
  return await prisma.user.findUnique({
    where: {verifyToken: inviteToken},
  })
}

export const getUserPasswordResetToken = async (passwordResetToken: string) => {
  return await prisma.user.findUnique({
    where: {passwordResetToken: passwordResetToken},
  })
}

export const createUser = async ({
  email,
  passwordHash,
  firstName,
  lastName,
}: {
  email: string
  firstName?: string
  lastName?: string
  passwordHash: string
}) => {
  const inviteToken = uuid()
  await prisma.user.create({
    data: {
      email: email.toLowerCase(),
      firstName,
      lastName,
      passwordHash,
      verifyToken: inviteToken,
    },
  })
  await sendEmail([email.toLowerCase()], {
    type: 'verifyUser',
    inviteToken: inviteToken,
  })
  return inviteToken
}

export const createUserWithInvite = async ({
  email,
  role,
  orgId,
}: {
  email: string
  role: string
  orgId: number
}) => {
  const inviteToken = uuid()

  const ownerRole = await prisma.role.findFirst({
    where: { roleName: role },
  })

  // Check if membership for this org and user already exists. If so, return error.
  const membershipExistsForOrg = await prisma.membership.findFirst({
    where: { user: { email: email.toLowerCase() }, orgId: orgId },
  })
  if (membershipExistsForOrg) {
    return {
      user: null,
      membership: null,
      error: 'User already has a membership for this organisation',
    }
  }

  const organisation = await prisma.organisation.findUnique({
    where: { id: orgId },
  })
  const orgName = organisation?.name

  let orgIcon = ''
  if (organisation?.icon) {
    const orgPictureUrlObject = getStorage()
      .from('assetnest')
      .getPublicUrl('organisations/' + organisation?.icon ?? '')
    orgIcon = orgPictureUrlObject?.data?.publicUrl ?? ''
  }

  // Check if users email already exists in the system.
  // If so, just create a new membership for the user.
  if (await getUserEmail(email)) {
    const createMembershipResult = await prisma.membership.create({
      data: {
        org: { connect: { id: orgId } },
        role: { connect: { id: ownerRole?.id } },
        status: 'PENDING',
        inviteSentAt: new Date(),
        inviteToken: inviteToken,
        user: { connect: { email: email.toLowerCase() } },
      },
    })
    sendEmail([email.toLowerCase()], {
      type: 'inviteUser',
      inviteToken: inviteToken,
      orgName: orgName ?? '',
      orgIcon: orgIcon,
    })
    return { user: null, membership: createMembershipResult, error: null }
  }

  // Create placeholder User with pending Membership
  const createdUser = await prisma.user
    .create({
      data: {
        email: email.toLowerCase(),
        verified: false,
        memberships: {
          create: {
            org: { connect: { id: orgId } },
            role: { connect: { id: ownerRole?.id } },
            status: 'PENDING',
            inviteSentAt: new Date(),
            inviteToken: inviteToken,
          },
        },
      },
    })
    .catch((err) => {
      return {
        user: null,
        error: err,
      }
    })

  sendEmail([email.toLowerCase()], {
    type: 'inviteUser',
    inviteToken: inviteToken,
    orgName: orgName ?? '',
    orgIcon,
  })

  return { user: createdUser, membership: null, error: null }
}

export const updateUser = async ({
  userId,
  firstName,
  lastName,
  passwordHash,
  image,
  signature,
  passwordResetExpireDate,
}: {
  userId: number
  firstName?: string
  lastName?: string
  passwordHash?: string
  image?: string
  signature?: string
  passwordResetExpireDate?: Date
}) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      firstName,
      lastName,
      passwordHash,
      image,
      signature,
      passwordResetExpireDate,
    },
  })
}

export const verifyUser = async ({ userId }: { userId: number }) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      verified: true,
    },
  })
}

export const generateUserNewResetPassword = async (email: string) => {
  const today = new Date()
  const tomorrow = new Date().setDate(today.getDate() + 1)
  const passwordRestToken = uuid()
  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      passwordResetToken: passwordRestToken,
      passwordResetExpireDate: new Date(tomorrow),
    },
  })

  sendEmail([email], { type: 'resetPassword', resetToken: passwordRestToken })
}
