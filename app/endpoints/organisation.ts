import {prisma} from '~/utils/prisma.server'
import {getStorage} from '~/utils/storage.server'
import {v4 as uuidv4} from 'uuid'
import {getMembershipWithUserAndOrganisation} from './membership'

export const getOrganisation = async (id: number) => {
  return await prisma.organisation.findUnique({ where: { id } })
}

export const createOrganisation = async ({
  name,
  description,
  address,
  city,
  country,
  postcode,
  icon,
  ownerUserId,
}: {
  name: string
  ownerUserId: number
  description?: string
  address?: string
  city?: string
  country?: string
  postcode?: string
  icon?: File
}) => {
  const ownerRole = await prisma.role.findFirst({
    where: { roleName: 'Organisation Owner' },
  })

  const storageClient = getStorage()

  let uniqueId = ''
  if (icon?.size !== 0) {
    uniqueId = uuidv4()
    const iconFilePath = 'organisations/' + uniqueId
    const {error: errorIcon } = await storageClient
      .from('assetnest')
      .upload(iconFilePath, icon ?? '')

    if (errorIcon) {
      return { errorIcon, id: undefined }
    }
    storageClient
      .from('assetnest')
      .getPublicUrl(iconFilePath);
  }

  return await prisma.organisation.create({
    data: {
      name,
      description,
      address,
      city,
      country,
      postcode,
      icon: uniqueId,
      memberships: {
        create: {
          role: { connect: { id: ownerRole?.id } },
          user: { connect: { id: ownerUserId } },
          status: 'ACTIVE',
        },
      },
    },
  })
}

export const updateOrganisation = async ({
  userId,
  orgId,
  name,
  description,
  address,
  city,
  country,
  postcode,
  icon,
}: {
  userId: number
  orgId: number
  name?: string
  description?: string
  address?: string
  city?: string
  country?: string
  postcode?: string
  icon?: string
}) => {
  const membership = await getMembershipWithUserAndOrganisation({
    userId,
    orgId,
    status: 'ACTIVE',
  })

  const updatePermission = membership?.role?.organisationUpdate ?? false

  if (!membership || !updatePermission) {
    return null
  }

  return await prisma.organisation.update({
    where: {id: orgId},
    data: {
      name,
      description,
      address,
      city,
      country,
      postcode,
      icon,
    },
  })
}
