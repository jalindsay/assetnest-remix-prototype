import type { Prisma } from '@prisma/client'
import { prisma } from '~/utils/prisma.server'

export const getPublicInspectionForms = async () => {
  return await prisma.inspectionForm.findMany({ where: { global: true } })
}

export type TypeGetPublicInspectionForms = Prisma.PromiseReturnType<
  typeof getPublicInspectionForms
>
