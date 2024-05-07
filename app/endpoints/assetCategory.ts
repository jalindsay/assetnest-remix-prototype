import type { Prisma } from '@prisma/client'
import { prisma } from '~/utils/prisma.server'

export const getAssetsCategoriesData = async () => {
  return await prisma.assetCategory.findMany({
    include: {
      categoryProperties: true,
    },
  })
}

export const getAssetCategoryData = async (id: number) => {
  return await prisma.assetCategory.findUnique({
    where: {
      id,
    },
    include: {
      categoryProperties: true,
    },
  })
}

export type TypeGetAssetCategoryData = Prisma.PromiseReturnType<
  typeof getAssetCategoryData
>
