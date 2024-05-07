import { prisma } from '~/utils/prisma.server'
import { v4 as uuid } from 'uuid'
import { sendEmail } from '~/utils/email.server'

export const createChangeEmailLog = async (
  userId: number,
  newEmail: string,
) => {
  const changeEmailToken = uuid()
  await prisma.emailChangeLog.create({
    data: {
      userId,
      newEmail: newEmail.toLowerCase(),
      changeEmailToken,
    },
  })
  await sendEmail([newEmail.toLowerCase()], {
    type: 'changeEmail',
    changeEmailToken,
  })
}

export const getEmailChangeLogByToken = async (changeEmailToken: string) => {
  return await prisma.emailChangeLog.findFirst({
    where: {
      changeEmailToken,
    },
  })
}

export const verifyEmailChangeLog = async (id: number, email: string) => {
  await prisma.emailChangeLog.update({
    where: {
      id,
    },
    data: {
      verified: true,
      user: {
        update: {
          email,
        },
      },
    },
  })
}
