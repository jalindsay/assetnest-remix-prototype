import { getAsset } from '~/endpoints/asset'
import { getAssetsCategoriesData } from '~/endpoints/assetCategory'

interface IProps {
  assetId: number
  orgId: number
}

export const getAssetForForm = async ({ assetId, orgId }: IProps) => {
  const assetCategoriesData = await getAssetsCategoriesData()
  const asset = await getAsset({ assetId })

  if (asset?.organisationId !== orgId) {
    return 'Asset does not belong to this organisation'
  }

  const assetProperties: {
    [key: string]: string | number | boolean | string[] | null
  } = {}
  asset?.properties.forEach((property) => {
    const label = property.categoryProperty.label
    let data = null
    switch (property.categoryProperty.type) {
      case 'INTEGER':
        data = property.integerValue
        break
      case 'MONEY':
        data = property.floatValue
        break
      case 'STRING':
        data = property.stringValue
        break
      case 'STRINGLONG':
        data = property.stringValue
        break
      case 'LIST':
        data = property.stringValue
        break
      case 'INTERNAL':
        switch (label) {
          case 'Created By':
            data = property.integerValue
            break
          case 'Created Date':
            data = property.stringValue
            break
          case 'Modified By':
            data = property.integerValue
            break
          case 'Modified Date':
            data = property.stringValue
            break
          default:
            break
        }
        break
      case 'IMAGE':
        data = property.stringArrayValue
        break
      case 'COORDINATE':
        data = property.floatValue
        break
      default:
        data = null
    }

    assetProperties[label] = data
  })

  return {
    assetCategoryId: asset?.categoryId,
    assetProperties,
    assetCategoriesData,
  }
}
