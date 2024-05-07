import type { TypeGetAssets} from '~/endpoints/asset';
import { updateAsset } from '~/endpoints/asset'
import { getAssetCategoryData } from '~/endpoints/assetCategory'

interface IProps {
  body: FormData
  userId: number
  alreadyExistingAsset: TypeGetAssets
}

export const editAssetFromForm = async ({
  body,
  userId,
  alreadyExistingAsset,
}: IProps) => {
  const categoryId = body.get('Category') as string

  const category = await getAssetCategoryData(parseInt(categoryId))
  const createDate = new Date()
  const propertiesToLoadInToAsset: {
    booleanValue?: boolean
    floatValue?: number
    integerValue?: number
    stringValue?: string
    categoryPropertiesId: number
  }[] =
    category?.categoryProperties.map((property) => {
      if (property.type === 'INTEGER') {
        const rowData = body.get(property.label) as string
        const rowDataAsInt = parseInt(rowData) ? parseInt(rowData) : undefined
        return { integerValue: rowDataAsInt, categoryPropertiesId: property.id }
      } else if (property.type === 'MONEY') {
        const rowData = body.get(property.label) as string
        const rowDataAsFloat = parseFloat(rowData)
          ? parseFloat(rowData)
          : undefined
        return { floatValue: rowDataAsFloat, categoryPropertiesId: property.id }
      } else if (property.type === 'STRING') {
        const rowData = body.get(property.label) as string
        return { stringValue: rowData, categoryPropertiesId: property.id }
      } else if (property.type === 'STRINGLONG') {
        const rowData = body.get(property.label) as string
        return { stringValue: rowData, categoryPropertiesId: property.id }
      } else if (property.type === 'LIST') {
        const rowData = body.get(property.label) as string
        return { stringValue: rowData, categoryPropertiesId: property.id }
      } else if (property.type === 'INTERNAL') {
        switch (property.label) {
          case 'Created By':
            const oldCreatedBy = alreadyExistingAsset?.properties
              .filter((property) => property.categoryProperty.label === 'Created By')
              .map((property) => ({
                integerValue: userId,
                categoryPropertiesId: property.id,
              }));
            return {
              integerValue: oldCreatedBy?.[0]?.integerValue ?? undefined,
              categoryPropertiesId: property.id,
            }
          case 'Created Date':
            const oldCreatedDate = alreadyExistingAsset?.properties
              .filter((property) => property.categoryProperty.label === 'Created Date')
              .map((property) => ({
                stringValue: property.stringValue,
                categoryPropertiesId: property.id,
              }));
            return {
              stringValue: oldCreatedDate?.[0]?.stringValue ?? undefined,
              categoryPropertiesId: property.id,
            }
          case 'Modified By':
            return { integerValue: userId, categoryPropertiesId: property.id }
          case 'Modified Date':
            return {
              stringValue: createDate.toString(),
              categoryPropertiesId: property.id,
            }
          default:
            break
        }
      } else if (property.type === 'IMAGE') {
        const allImagePaths = body.getAll('images[]')
        return {
          stringArrayValue: allImagePaths,
          categoryPropertiesId: property.id,
        }
      } else if (property.type === 'COORDINATE') {
        const rowData = body.get(property.label) as string
        return {
          floatValue: parseFloat(rowData),
          categoryPropertiesId: property.id,
        }
      }

      return { stringValue: '', categoryPropertiesId: property.id }
    }) ?? []

  return await updateAsset({
    assetId: alreadyExistingAsset?.id ?? -1,
    categoryId: parseInt(categoryId),
    properties: propertiesToLoadInToAsset,
  })
}
