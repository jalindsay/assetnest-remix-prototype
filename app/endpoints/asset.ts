import type { Prisma } from '@prisma/client'
import { prisma } from '~/utils/prisma.server'

export const getAsset = async ({ assetId }: { assetId: number }) => {
  return await prisma.asset.findUnique({
    where: { id: assetId },
    include: {
      organisation: true,
      category: true,
      properties: { include: { categoryProperty: true } },
    },
  })
}

export type TypeGetAssets = Prisma.PromiseReturnType<typeof getAsset>

export const getAssetWithAssetIdAndOrgId = async ({
  assetId,
  orgId,
  currentAssetId,
}: {
  orgId: number
  assetId: string
  currentAssetId?: number
}) => {
  return await prisma.asset.findMany({
    where: {
      AND: [
        {
          properties: {
            some: {
              AND: [
                { stringValue: assetId },
                { categoryProperty: { label: 'Asset ID' } },
              ],
              NOT: { assetId: currentAssetId },
            },
          },
        },
        { organisationId: orgId },
      ],
    },
  })
}

export const createAsset = async ({
  orgId,
  categoryId,
  properties,
}: {
  orgId: number
  categoryId: number
  properties: {
    booleanValue?: boolean
    floatValue?: number
    integerValue?: number
    stringValue?: string
    categoryPropertiesId: number
  }[]
}) => {
  return await prisma.asset.create({
    data: {
      organisation: { connect: { id: orgId } },
      category: { connect: { id: categoryId } },
      properties: { create: properties }, // make properties here
    },
  })
}

export const getAssetsWithOrgId = async ({ orgId }: { orgId: number }) => {
  return await prisma.asset.findMany({
    where: {
      organisationId: orgId,
    },
    include: {
      organisation: true,
      category: true,
      properties: { include: { categoryProperty: true } },
    },
  })
}

export type TypeGetAssetsWithOrgId = Prisma.PromiseReturnType<
  typeof getAssetsWithOrgId
>

export const deleteAsset = async ({ assetId }: { assetId: number }) => {
  await prisma.assetProperties.deleteMany({ where: { assetId } })
  await prisma.asset.delete({ where: { id: assetId } })
  return
}

export const getAssetWithId = async ({ assetId }: { assetId: number }) => {
  return await prisma.asset.findUnique({
    where: {
      id: assetId,
    },
    include: {
      organisation: true,
      category: true,
      properties: { include: { categoryProperty: true } },
    },
  })
}

export const updateAsset = async ({
  assetId,
  categoryId,
  properties,
}: {
  assetId: number
  categoryId: number
  properties: {
    booleanValue?: boolean
    floatValue?: number
    integerValue?: number
    stringValue?: string
    categoryPropertiesId: number
    stringArrayValue?: string[]
  }[]
}) => {
  await prisma.assetProperties.deleteMany({
    where: {
      AND: {
        assetId: { equals: assetId },
        categoryProperty: {
          category: { none: { id: categoryId } },
        },
      },
    },
  })

  await prisma.asset.update({
    where: { id: assetId },
    data: {
      category: { connect: { id: categoryId } },
    },
  })

  await Promise.all(
    properties.map(async (property) => {
      const doesValueExist = await prisma.assetProperties.findFirst({
        where: {
          AND: {
            assetId: assetId,
            categoryPropertiesId: property.categoryPropertiesId,
          },
        },
      })
      if (107 === property.categoryPropertiesId) {
        console.log(doesValueExist)
      }
      return await prisma.assetProperties.upsert({
        where: {
          id: doesValueExist?.id ?? -1,
        },
        update: {
          booleanValue: property.booleanValue,
          floatValue: property.floatValue,
          integerValue: property.integerValue,
          stringValue: property.stringValue,
          stringArrayValue: property.stringArrayValue,
        },
        create: {
          booleanValue: property.booleanValue,
          floatValue: property.floatValue,
          integerValue: property.integerValue,
          stringValue: property.stringValue,
          stringArrayValue: property.stringArrayValue,
          categoryProperty: {
            connect: {
              id: property.categoryPropertiesId,
            },
          },
          asset: {
            connect: {
              id: assetId,
            },
          },
        },
      })
    }),
  )
}
