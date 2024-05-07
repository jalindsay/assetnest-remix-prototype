import {MembershipStatus} from '@prisma/client'
import {sendEmail} from '~/utils/email.server'
import {prisma} from '~/utils/prisma.server'
import {getStorage} from '~/utils/storage.server'

export const getMembershipWithUserAndOrganisation = async ({
  userId,
  orgId,
  status,
}: {
  userId: number
  orgId: number
  status?: MembershipStatus
}) => {
  return await prisma.membership.findFirst({
    where: {
      userId,
      orgId,
      status,
    },
    include: {
      role: true,
      org: true,
      user: true,
    },
  })
}

export const getMembershipsWithOrganisationId = async ({
  orgId,
}: {
  orgId: number
}) => {
  return await prisma.membership.findMany({
    where: {
      orgId,
    },
    include: {
      user: true,
      role: true,
    },
  })
}

export const getUsersMemberships = async ({ userId }: { userId: number }) => {
  return await prisma.membership.findMany({
    where: {userId},
    include: {
      org: true,
      role: true,
    },
  })
}

export const updateMembership = async ({
  membershipId,
  status,
  roleId,
}: {
  membershipId: number
  status?: MembershipStatus
  roleId?: number
}) => {
  const data: any = {}
  if (status) {
    data.status = status
  }
  if (roleId) {
    data.roleId = roleId
  }

  return await prisma.membership.update({
    where: {id: membershipId},
    data,
  })
}

export const pauseUnpauseMembership = async ({
  membershipId,
}: {
  membershipId: number
  status?: MembershipStatus
}) => {
  const membership = await prisma.membership.findFirst({
    where: { id: membershipId },
    include: {
      user: true,
    },
  })

  await prisma.membership.update({
    where: { id: membershipId },
    data: {
      status:
        membership?.status === MembershipStatus.PAUSED
          ? membership?.user.verified
            ? MembershipStatus.ACTIVE
            : MembershipStatus.PENDING
          : MembershipStatus.PAUSED,
    },
  })
}

export const deleteMembership = async ({
  membershipId,
}: {
  membershipId: number
}) => {
  await prisma.membership.delete({
    where: {
      id: membershipId,
    },
  })
}

export const getMembershipByInviteToken = async (
  inviteToken: string | undefined,
) => {
  return await prisma.membership.findFirst({
    where: {
      inviteToken,
    },
    include: {
      org: true,
      role: true,
      user: true,
    },
  })
}

export const verifyUserViaMembershipInviteToken = async ({
  inviteToken,
  passwordHash,
}: {
  inviteToken: string
  email: string
  passwordHash: string
}) => {
  const membership = await getMembershipByInviteToken(inviteToken)

  const updatedMembership = await prisma.membership.update({
    where: { id: membership?.id },
    data: { status: 'ACTIVE' },
  })

  const updatedUser = await prisma.user.update({
    where: { id: membership?.userId },
    data: { verified: true, passwordHash },
  })

  return { updatedMembership, updatedUser }
}

export const resendInvite = async ({
  membershipId,
}: {
  membershipId: number
}) => {
  const membership = await prisma.membership.findUnique({
    where: { id: membershipId },
    include: {
      org: true,
      user: true,
    },
  })

  let orgIcon = ''
  if (membership?.org?.icon) {
    const orgPictureUrlObject = getStorage()
      .from('assetnest')
      .getPublicUrl('organisations/' + membership?.org?.icon ?? '')
    orgIcon = orgPictureUrlObject?.data?.publicUrl ?? ''
  }

  await sendEmail([membership?.user?.email ?? ''], {
    type: 'inviteUser',
    inviteToken: membership?.inviteToken ?? '',
    orgName: membership?.org.name ?? '',
    orgIcon,
  })

  return null
}
