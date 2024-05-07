import type { CategoryPropertyType } from '@prisma/client'
import { prisma } from '../app/utils/prisma.server'

console.log('seeding started...')

const seedRolesData = [
  {
    roleName: 'Organisation Owner',
    organisationUpdate: true,
    organisationManageUsers: true,
    assetManage: true,
    inspectionManage: true,
    inspectionCarryOut: true,
    defectConfigure: true,
    defectRaise: true,
    defectCloseOut: true,
    maintenanceManage: true,
    maintenaceCarryOut: true,
    maintenanceAllocate: true,
  },
  {
    roleName: 'Organisation Admin',
    organisationUpdate: true,
    organisationManageUsers: true,
    assetManage: false,
    inspectionManage: false,
    inspectionCarryOut: false,
    defectConfigure: false,
    defectRaise: true,
    defectCloseOut: false,
    maintenanceManage: true,
    maintenaceCarryOut: true,
    maintenanceAllocate: false,
  },
  {
    roleName: 'Asset Manager',
    organisationUpdate: false,
    organisationManageUsers: false,
    assetManage: true,
    inspectionManage: false,
    inspectionCarryOut: false,
    defectConfigure: false,
    defectRaise: true,
    defectCloseOut: false,
    maintenanceManage: false,
    maintenaceCarryOut: false,
    maintenanceAllocate: false,
  },
  {
    roleName: 'Inspection Admin',
    organisationUpdate: false,
    organisationManageUsers: false,
    assetManage: false,
    inspectionManage: true,
    inspectionCarryOut: false,
    defectConfigure: false,
    defectRaise: true,
    defectCloseOut: false,
    maintenanceManage: false,
    maintenaceCarryOut: false,
    maintenanceAllocate: false,
  },
  {
    roleName: 'Inspector',
    organisationUpdate: false,
    organisationManageUsers: false,
    assetManage: false,
    inspectionManage: false,
    inspectionCarryOut: true,
    defectConfigure: false,
    defectRaise: true,
    defectCloseOut: false,
    maintenanceManage: false,
    maintenaceCarryOut: false,
    maintenanceAllocate: false,
  },
  {
    roleName: 'Defect Admin',
    organisationUpdate: false,
    organisationManageUsers: false,
    assetManage: false,
    inspectionManage: false,
    inspectionCarryOut: false,
    defectConfigure: true,
    defectRaise: true,
    defectCloseOut: false,
    maintenanceManage: false,
    maintenaceCarryOut: false,
    maintenanceAllocate: true,
  },
  {
    roleName: 'Maintenance Manager',
    organisationUpdate: false,
    organisationManageUsers: false,
    assetManage: false,
    inspectionManage: false,
    inspectionCarryOut: false,
    defectConfigure: false,
    defectRaise: true,
    defectCloseOut: false,
    maintenanceManage: true,
    maintenaceCarryOut: false,
    maintenanceAllocate: false,
  },
  {
    roleName: 'Maintenance Engineer',
    organisationUpdate: false,
    organisationManageUsers: false,
    assetManage: false,
    inspectionManage: false,
    inspectionCarryOut: false,
    defectConfigure: false,
    defectRaise: true,
    defectCloseOut: true,
    maintenanceManage: false,
    maintenaceCarryOut: true,
    maintenanceAllocate: false,
  },
]

const seedAssetCategoriesData: {
  category: string
  attributes: {
    label: string
    options: string[]
    type: CategoryPropertyType
    defaultValueString?: string
    placeholder?: string
  }[]
}[] = [
  {
    category: 'Default',
    attributes: [
      {
        label: 'Asset Name',
        options: [],
        type: 'STRING',
        placeholder: 'Asset name',
      },
      {
        label: 'Description',
        options: [],
        type: 'STRINGLONG',
        placeholder: 'Add a short description about your asset',
      },
      {
        label: 'Number of Assets',
        options: [],
        type: 'INTEGER',
        defaultValueString: '1',
        placeholder: 'Number',
      },
      {
        label: 'Created By',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Created Date',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Modified By',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Modified Date',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Status',
        options: ['active', 'inactive'],
        type: 'LIST',
        defaultValueString: 'active',
      },
      {
        label: 'Photo Gallery',
        options: [],
        type: 'IMAGE',
      },
      {
        label: 'Asset ID',
        options: [],
        type: 'STRING',
        placeholder: 'Unique Reference Asset ID',
      },
      {
        label: 'Platform ID',
        options: [],
        type: 'STRING',
      },
      {
        label: 'Value',
        options: [],
        type: 'MONEY',
        placeholder: 'xxx.xx',
      },
      {
        label: 'Latitude',
        options: [],
        type: 'COORDINATE',
      },
      {
        label: 'Longitude',
        options: [],
        type: 'COORDINATE',
      },
    ],
  },
  {
    category: 'Person',
    attributes: [
      {
        label: 'Asset Name',
        options: [],
        type: 'STRING',
        placeholder: 'Asset name',
      },
      {
        label: 'Description',
        options: [],
        type: 'STRINGLONG',
        placeholder: 'Add a short description about your asset',
      },
      {
        label: 'Created By',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Created Date',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Modified By',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Modified Date',
        options: [],
        type: 'INTERNAL',
      },
      {
        label: 'Status',
        options: ['active', 'inactive'],
        type: 'STRING',
        defaultValueString: 'active',
      },
      {
        label: 'Photo Gallery',
        options: [],
        type: 'IMAGE',
      },

      {
        label: 'Asset ID',
        options: [],
        type: 'STRING',
        placeholder: 'Unique Reference Asset ID',
      },
      {
        label: 'Platform ID',
        options: [],
        type: 'STRING',
      },
      {
        label: 'Latitude',
        options: [],
        type: 'COORDINATE',
      },
      {
        label: 'Longitude',
        options: [],
        type: 'COORDINATE',
      },
    ],
  },
]

const seedData = async () => {
  // Start seeding.
  console.log('seeding roles...')

  await Promise.all(
    seedRolesData.map(async (seedRole) => {
      await prisma.role.upsert({
        where: { roleName: seedRole.roleName },
        create: {
          roleName: seedRole.roleName,
          organisationUpdate: seedRole.organisationUpdate,
          organisationManageUsers: seedRole.organisationManageUsers,
          assetManage: seedRole.assetManage,
          inspectionManage: seedRole.inspectionManage,
          inspectionCarryOut: seedRole.inspectionCarryOut,
          defectConfigure: seedRole.defectConfigure,
          defectRaise: seedRole.defectRaise,
          defectCloseOut: seedRole.defectCloseOut,
          maintenanceManage: seedRole.maintenanceManage,
          maintenaceCarryOut: seedRole.maintenaceCarryOut,
          maintenanceAllocate: seedRole.maintenanceAllocate,
        },
        update: {
          roleName: seedRole.roleName,
          organisationUpdate: seedRole.organisationUpdate,
          organisationManageUsers: seedRole.organisationManageUsers,
          assetManage: seedRole.assetManage,
          inspectionManage: seedRole.inspectionManage,
          inspectionCarryOut: seedRole.inspectionCarryOut,
          defectConfigure: seedRole.defectConfigure,
          defectRaise: seedRole.defectRaise,
          defectCloseOut: seedRole.defectCloseOut,
          maintenanceManage: seedRole.maintenanceManage,
          maintenaceCarryOut: seedRole.maintenaceCarryOut,
          maintenanceAllocate: seedRole.maintenanceAllocate,
        },
      })
    }),
  )
    .then(() => {
      console.log('Role seeded successfully')
    })
    .catch((error) => {
      console.error(`Error seeding Role: ${error}`)
    })

  console.log('seeding Asset Categories...')

  await Promise.all(
    seedAssetCategoriesData.map(async (data) => {
      const { category, attributes } = data

      // Upsert the AssetCategory
      const assetCategory = await prisma.assetCategory
        .upsert({
          where: { name: category },
          update: {},
          create: {
            name: category,
          },
        })
        .catch((error) => {
          console.error(`Error seeding assetCategory: ${category} Error: ${error}`)
        })

      // Upsert the CategoryProperties
      for (const attribute of attributes) {
        if (assetCategory) {
          await prisma.categoryProperties
            .upsert({
              where: { label: attribute.label },
              update: {
                label: attribute.label,
                type: attribute.type,
                options: attribute.options,
                defaultValueString: attribute.defaultValueString,
                placeholder: attribute.placeholder,
                category: {
                  connect: {
                    id: assetCategory.id,
                  },
                },
              },
              create: {
                label: attribute.label,
                type: attribute.type,
                defaultValueString: attribute.defaultValueString,
                placeholder: attribute.placeholder,
                category: {
                  connect: {
                    id: assetCategory.id,
                  },
                },
              },
            })
            .catch((error) => {
              console.error(
                `Error seeding categoryProperties: ${attribute.label} ERROR : ${error}`,
              )
            })
        } else {
          console.error(`Error seeding categoryProperties: ${attribute.label}`)
        }
      }
    }),
  )
    .then(() => {
      console.log('Asset Categories seeded successfully')
    })
    .catch((error) => {
      console.error(`Error seeding Asset Categories: ${error}`)
    })

  console.log('seeding Default InspectionForm...')
  await prisma.inspectionForm
    .upsert({
      where: { uniqueGlobalId: 'Default' },
      create: {
        name: 'Default',
        uniqueGlobalId: 'Default',
        global: true,
        version: 1,
        inspectionFormQuestion: {
          createMany: {
            data: [
              {
                id: 10,
                label: 'PassFail',
                questionType: 'PassFail',
              },
              {
                id: 11,
                label: 'Comment',
                questionType: 'StringLong',
              },
              {
                id: 12,
                label: 'Media',
                questionType: 'Images',
              },
            ],
          },
        },
      },

      update: {
        name: 'Default',
        global: true,
        version: 1,
        inspectionFormQuestion: {
          upsert: [
            {
              where: { id: 10 },
              create: {
                id: 10,
                label: 'PassFail',
                questionType: 'PassFail',
              },
              update: {
                id: 10,
                label: 'PassFail',
                questionType: 'PassFail',
              },
            },
            {
              where: { id: 11 },
              create: {
                id: 11,
                label: 'Comment',
                questionType: 'StringLong',
              },
              update: {
                id: 11,
                label: 'Comment',
                questionType: 'StringLong',
              },
            },
            {
              where: { id: 12 },
              create: {
                id: 12,
                label: 'Media',
                questionType: 'Images',
              },
              update: {
                id: 12,
                label: 'Media',
                questionType: 'Images',
              },
            },
          ],
        },
      },
    })
    .then(() => {
      console.log('Default InspectionForm seeded successfully')
    })
    .catch((error) => {
      console.error(`Error seeding Default InspectionForm : ${error}`)
    })
}

seedData()
