import { prisma } from '~/utils/prisma.server'

export const getAllRoles = async () => {
  return await prisma.role.findMany()
}

export const getRole = async (id: number) => {
  return await prisma.role.findUnique({
    where: { id },
  })
}
