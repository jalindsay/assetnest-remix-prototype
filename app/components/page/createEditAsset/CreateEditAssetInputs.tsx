import type {CategoryPropertyType} from '@prisma/client'
import {HoverCard} from '~/components/ui/HoverCard'
import {Icon} from '~/components/ui/Icon'
import {SelectInput} from '~/components/ui/SelectInput'
import {TextArea} from '~/components/ui/TextArea'
import {TextInput} from '~/components/ui/TextInput'
import {importantText, secondaryText} from '~/styles/typography'

interface IProps {
  property: {
    id: number
    label: string
    options: string[]
    placeholder: string | null
    type: CategoryPropertyType
    defaultValueString: string | null
  }
  assetNameError?: string
  assetIDError?: string
  assetPropertyValues: {
    [key: string]: string | number | boolean | string[] | null
  }
  setAssetPropertyValues: (value: {
    [key: string]: string | number | boolean | string[] | null
  }) => void
}

export const CreateAssetInputs = ({
  property,
  assetNameError,
  assetIDError,
  assetPropertyValues,
  setAssetPropertyValues,
}: IProps) => {
  switch (property.type) {
    case 'STRING':
      let errorText = ''
      if (property.label === 'Asset Name') {
        errorText = assetNameError ?? ''
      } else if (property.label === 'Asset ID') {
        errorText = assetIDError ?? ''
      }

      if (property.label === 'Platform ID') {
        return (
          <TextInput
            name={property.label}
            placeholder={property.placeholder ?? ''}
            label={
              <div className="flex items-center">
                <div className="pr-2">{property.label}</div>
                <HoverCard
                  trigger={<Icon icon="help" />}
                  content={
                    <div>
                      <div className={`${importantText} text-base`}>
                        Platform ID
                      </div>
                      <div className={`${secondaryText} font-normal leading-5`}>
                        Each asset is automatically assigned a unique
                        alphanumeric code. This identifier ensure that no two
                        assets are confused, even if they have similar names or
                        characteristics.
                      </div>
                    </div>
                  }
                />
              </div>
            }
            value={assetPropertyValues[property.label]?.toString() ?? ''}
            onChange={() => {}}
            error={!!errorText}
            helpText={errorText}
          />
        )
      }

      return (
        <TextInput
          name={property.label}
          placeholder={property.placeholder ?? ''}
          label={property.label}
          value={assetPropertyValues[property.label]?.toString() ?? ''}
          onChange={(newValue) => {
            const newAssetProps = { ...assetPropertyValues }
            newAssetProps[property.label] = newValue
            setAssetPropertyValues(newAssetProps)
          }}
          error={!!errorText}
          helpText={errorText}
        />
      )

    case 'INTEGER':
      return (
        <TextInput
          name={property.label}
          placeholder={property.placeholder ?? ''}
          number
          label={property.label}
          value={assetPropertyValues[property.label]?.toString() ?? ''}
          onChange={(newValue) => {
            const newAssetProps = { ...assetPropertyValues }
            const numericRegex = /[^0-9]/g
            newAssetProps[property.label] = newValue.replace(numericRegex, '')
            setAssetPropertyValues(newAssetProps)
          }}
        />
      )
    case 'STRINGLONG':
      return (
        <TextArea
          name={property.label}
          placeholder={property.placeholder ?? ''}
          label={property.label}
          value={assetPropertyValues[property.label]?.toString() ?? ''}
          onChange={(newValue) => {
            const newAssetProps = { ...assetPropertyValues }
            newAssetProps[property.label] = newValue
            setAssetPropertyValues(newAssetProps)
          }}
        />
      )
    case 'LIST':
      return (
        <SelectInput
          name={property.label}
          label={property.label}
          valueCurrent={
            assetPropertyValues[property.label]?.toString() ??
            property.options[0]
          }
          possibleValues={property.options.map((option) => {
            return {
              value: option,
              valueLabel: option.charAt(0).toUpperCase() + option.slice(1),
            }
          })}
          onChange={(newValue) => {
            const newAssetProps = { ...assetPropertyValues }
            newAssetProps[property.label] = newValue
            setAssetPropertyValues(newAssetProps)
          }}
        />
      )
    case 'MONEY':
      return (
        <TextInput
          leadingText="£"
          name={property.label}
          placeholder={property.placeholder ?? ''}
          number
          label={property.label}
          value={assetPropertyValues[property.label]?.toString() ?? ''}
          onChange={(newValue) => {
            const newAssetProps = { ...assetPropertyValues }
            newAssetProps[property.label] = newValue
            setAssetPropertyValues(newAssetProps)
          }}
        />
      )
    default:
      break
  }
}
