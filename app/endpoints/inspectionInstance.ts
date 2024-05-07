import type { InspectionInstanceStatus, Prisma } from '@prisma/client'
import { prisma } from '~/utils/prisma.server'
import { getStorage } from '~/utils/storage.server'

export const getInspectionInstance = async ({
  inspectionInstanceId,
}: {
  inspectionInstanceId: number
}) => {
  return await prisma.inspectionInstance.findUnique({
    where: {
      id: inspectionInstanceId,
    },
    include: {
      asset: {
        include: {
          organisation: true,
          category: true,
          properties: { include: { categoryProperty: true } },
        },
      },
      inspectionForm: {
        include: {
          inspectionFormQuestion: true,
        },
      },
      organisation: true,
      createdBy: true,
      updatedBy: true,
      SupportingFiles: true,
    },
  })
}

export type TypeGetInspectionInstance = Prisma.PromiseReturnType<
  typeof getInspectionInstance
>

export const getInspectionInstanceWithInspectionIDAndOrgID = async ({
  inspectionId,
  orgId,
}: {
  orgId: number
  inspectionId: string
}) => {
  return await prisma.inspectionInstance.findMany({
    where: {
      AND: [{ InspectionOrgUniqueId: inspectionId }, { organisationId: orgId }],
    },
  })
}

export const createInspectionInstance = async ({
  inspectionReference,
  assetID,
  inspectionID,
  longitude,
  latitude,
  organisationId,
  inspectionFormId,
  platformID,
  createdByUserID,
  supportingFiles,
}: {
  inspectionReference: string
  assetID: number
  inspectionID: string
  longitude?: number
  latitude?: number
  organisationId: number
  inspectionFormId: number
  platformID: string
  createdByUserID: number
  supportingFiles: { filePath: string; fileSize: string }[]
}) => {
  const createDate = new Date()
  const supportingFilesToUpload = supportingFiles.map((supportingFiles) => {
    return {
      inspectionFileUrl: supportingFiles.filePath,
      inspectionFileSize: supportingFiles.fileSize,
    }
  })
  return await prisma.inspectionInstance.create({
    data: {
      InspectionOrgUniqueId: inspectionID,
      LocationLng: longitude,
      LocationLat: latitude,
      createdAt: createDate.toISOString(),
      updatedAt: createDate.toISOString(),
      PlatformID: platformID,
      inspectionReference: inspectionReference,
      SupportingFiles: { create: supportingFilesToUpload },
      asset: { connect: { id: assetID } },
      Status: 'SCHEDULED',
      organisation: { connect: { id: organisationId } },
      inspectionForm: { connect: { id: inspectionFormId } },
      createdBy: { connect: { id: createdByUserID } },
      updatedBy: { connect: { id: createdByUserID } },
    },
  })
}

export const getInspectionByOrgId = async ({ orgId }: { orgId: number }) => {
  return await prisma.inspectionInstance.findMany({
    where: {
      organisationId: orgId,
    },
    include: {
      asset: {
        include: {
          properties: {
            include: { categoryProperty: true },
          },
          category: true,
        },
      },
      completedBy: true,
      updatedBy: true,
      createdBy: true,
      startedBy: true,
      inspectionForm: true,
    },
  })
}

export type TypeGetInspectionByOrgId = Prisma.PromiseReturnType<
  typeof getInspectionByOrgId
>

export const updateInspectionInstance = async ({
  id,
  supportingFiles,
  inspectionReference,
  assetID,
  inspectionID,
  longitude,
  latitude,
  inspectionFormId,
  platformID,
  updatedByUserID,
  inspectionInstanceAnswers,
  Status,
  completedByUserID,
}: {
  inspectionReference?: string
  assetID?: number
  inspectionID?: string
  longitude?: number
  latitude?: number
  inspectionFormId?: number
  platformID?: string
  updatedByUserID: number
  completedByUserID?: number
  id: number
  Status?: InspectionInstanceStatus
  supportingFiles?: { filePath: string; fileSize: string }[]
  inspectionInstanceAnswers?: {
    stringValue?: string
    booleanValue?: boolean
    stringArrayValue?: string[]
    inspectionFormQuestionId: number
  }[]
}) => {
  const supportingFilesToUpload = supportingFiles?.map((supportingFiles) => {
    return {
      inspectionFileUrl: supportingFiles.filePath,
      inspectionFileSize: supportingFiles.fileSize,
    }
  })
  if (supportingFiles !== undefined) {
    //remove existing files if update supporting files
    await prisma.inspectionInstance.update({
      where: {
        id: id,
      },
      data: {
        SupportingFiles: { deleteMany: {} },
      },
    })
  }
  const updatedDate = new Date()

  const assetUpdate = assetID ? { connect: { id: assetID } } : undefined
  const inspectionFormUpdate = inspectionFormId
    ? { connect: { id: inspectionFormId } }
    : undefined
  const completedByUpdate = completedByUserID
    ? { connect: { id: completedByUserID } }
    : undefined

  return await prisma.inspectionInstance.update({
    where: {
      id: id,
    },
    data: {
      SupportingFiles: { create: supportingFilesToUpload },
      InspectionOrgUniqueId: inspectionID,
      LocationLng: longitude,
      LocationLat: latitude,
      Status: Status,
      inspectionReference: inspectionReference,
      asset: assetUpdate,
      inspectionForm: inspectionFormUpdate,
      PlatformID: platformID,
      updatedBy: { connect: { id: updatedByUserID } },
      updatedAt: updatedDate.toISOString(),
      completedBy: completedByUpdate,
      completedAt: completedByUserID ? updatedDate.toISOString() : undefined,
      InspectionInstanceAnswer: {
        createMany: {
          data:
            inspectionInstanceAnswers?.map((value) => {
              return {
                stringValue: value.stringValue,
                booleanValue: value.booleanValue,
                stringArrayValue: value.stringArrayValue ?? [],
                inspectionFormQuestionId: value.inspectionFormQuestionId,
              }
            }) ?? [],
        },
      },
    },
  })
}

export const deleteInspectionInstance = async ({
  inspectionId,
}: {
  inspectionId: number
}) => {
  //remove existing files if update supporting files
  const getInspectionInstanceSupportingFiles =
    await prisma.inspectionInstanceSupportingFiles.findMany({
      where: {
        inspectionInstanceId: inspectionId,
      },
    })

  Promise.all(
    getInspectionInstanceSupportingFiles.map(async (supportingFile) => {
      await getStorage()
        .from('assetnest')
        .remove([supportingFile.inspectionFileUrl])
    }),
  )

  await prisma.inspectionInstanceSupportingFiles.deleteMany({
    where: {
      inspectionInstanceId: inspectionId,
    },
  })

  return await prisma.inspectionInstance.delete({
    where: {
      id: inspectionId,
    },
  })
}

export type TypeDeleteInspectionInstance = Prisma.PromiseReturnType<
  typeof deleteInspectionInstance
>
