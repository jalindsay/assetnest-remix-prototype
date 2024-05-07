import { SelectInput } from '~/components/ui/SelectInput'
import type { CategoryPropertyType } from '@prisma/client'
import { CreateAssetInputs } from './CreateEditAssetInputs'

interface IProps {
  assetCategoriesData: {
    categoryProperties: {
      id: number
      label: string
      options: string[]
      placeholder: string | null
      type: CategoryPropertyType
      defaultValueString: string | null
    }[]
    id: number
    name: string
  }[]
  assetNameError?: string
  assetIDError?: string
  assetPropertyValues: {
    [key: string]: string | number | boolean | string[] | null
  }
  setAssetPropertyValues: (value: {
    [key: string]: string | number | boolean | string[] | null
  }) => void
  setSelectedAssetCategoryId: (value: number) => void
  selectedAssetCategoryId?: number
}

export const CreateAssetDetailsSection = ({
  assetCategoriesData,
  assetNameError,
  assetIDError,
  assetPropertyValues,
  setAssetPropertyValues,
  setSelectedAssetCategoryId,
  selectedAssetCategoryId,
}: IProps) => {
  const getSortValue = (label: string) => {
    switch (label) {
      case 'Asset Name':
        return 1

      case 'Number of Assets':
        return 2

      case 'Asset ID':
        return 3

      case 'Platform ID':
        return 4

      case 'Value':
        return 5

      case 'Status':
        return 6

      case 'Description':
        return 7
      default:
        return 1000
    }
  }

  return (
    <div className="w-full">
      {assetCategoriesData
        .find(
          (assetCategoryData) =>
            assetCategoryData.id === selectedAssetCategoryId,
        )
        ?.categoryProperties.filter(
          (property) =>
            property.type === 'STRING' ||
            property.type === 'INTEGER' ||
            property.type === 'MONEY' ||
            property.type === 'LIST' ||
            property.type === 'STRINGLONG',
        )
        .sort((a, b) => {
          const aSortValue = getSortValue(a.label)
          const bSortValue = getSortValue(b.label)
          return aSortValue > bSortValue ? 1 : -1
        })

        .map((property, index) => {
          return (
            <CreateAssetInputs
              key={index}
              property={property}
              assetNameError={assetNameError}
              assetIDError={assetIDError}
              assetPropertyValues={assetPropertyValues}
              setAssetPropertyValues={setAssetPropertyValues}
            />
          )
        })}
      <SelectInput
        name="Category"
        onChange={(value) => {
          setSelectedAssetCategoryId(parseInt(value))
        }}
        label="Category"
        valueCurrent={selectedAssetCategoryId?.toString() ?? ''}
        possibleValues={assetCategoriesData.map((assetCategory) => {
          return {
            value: assetCategory.id.toString(),
            valueLabel: assetCategory.name,
          }
        })}
      />
    </div>
  )
}
