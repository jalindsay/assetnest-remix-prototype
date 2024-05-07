import { HoverCard } from '~/components/ui/HoverCard'
import { Icon } from '~/components/ui/Icon'
import { SearchableSelect } from '~/components/ui/SearchableSelect'
import { SelectInput } from '~/components/ui/SelectInput'
import { TextInput } from '~/components/ui/TextInput'
import type { TypeGetAssetsWithOrgId } from '~/endpoints/asset'
import type { TypeGetPublicInspectionForms } from '~/endpoints/inspectionForm'
import { importantText, secondaryText } from '~/styles/typography'

interface IProps {
  inspectionReferenceError?: string
  inspectionReference: string
  setInspectionReference: (newValue: string) => void
  publicInspectionForms: TypeGetPublicInspectionForms
  setCurrentCategoryId: (newValue: string) => void
  currentCategoryId: string
  assetError?: string
  orgsAssets: TypeGetAssetsWithOrgId
  selectAsset: TypeGetAssetsWithOrgId[number] | undefined
  inspectionIDError?: string
  inspectionId: string
  setInspectionId: (newValue: string) => void
  platformID: string
  haveSelectedAAsset: (newId?: string) => void
}

export const CreateInspectionInstanceDetails = ({
  inspectionReferenceError,
  inspectionReference,
  setInspectionReference,
  publicInspectionForms,
  setCurrentCategoryId,
  currentCategoryId,
  assetError,
  orgsAssets,
  selectAsset,
  inspectionIDError,
  inspectionId,
  setInspectionId,
  platformID,
  haveSelectedAAsset,
}: IProps) => {
  return (
    <>
      <TextInput
        name="Inspection Reference"
        label="Inspection Reference *"
        value={inspectionReference}
        onChange={(value) => setInspectionReference(value)}
        placeholder="Inspection Reference"
        error={!!inspectionReferenceError}
        helpText={inspectionReferenceError}
      />
      <SelectInput
        name="Category"
        label="Category *"
        possibleValues={publicInspectionForms?.map((form) => {
          return {
            valueLabel: form.name,
            value: form.id.toString(),
          }
        })}
        onChange={(newValue) => {
          setCurrentCategoryId(newValue)
        }}
        valueCurrent={currentCategoryId}
      />
      <SearchableSelect
        error={!!assetError}
        helpText={assetError}
        label="Asset *"
        possibleValues={
          orgsAssets?.map((asset) => {
            return {
              label:
                asset.properties.find(
                  (property) =>
                    property.categoryProperty.label === 'Asset Name',
                )?.stringValue ?? '',
              value: asset.id.toString(),
            }
          }) ?? []
        }
        initialValue={
          selectAsset?.properties.find(
            (property) => property.categoryProperty.label === 'Asset Name',
          )?.stringValue ?? ''
        }
        onSelectedValueChange={haveSelectedAAsset}
      />
      <input
        type="hidden"
        value={selectAsset?.id.toString()}
        name={'AssetId'}
      />
      <TextInput
        error={!!inspectionIDError}
        helpText={inspectionIDError}
        name="Inspection Id"
        label="Inspection Id *"
        value={inspectionId}
        onChange={(value) => setInspectionId(value)}
        placeholder="Unique Reference Inspection ID"
      />
      <TextInput
        label={
          <div className="flex items-center">
            <div className="pr-2">Platform ID</div>
            <HoverCard
              trigger={<Icon icon="help" />}
              content={
                <div>
                  <div className={`${importantText} text-base`}>
                    Platform ID
                  </div>
                  <div className={`${secondaryText} font-normal leading-5`}>
                    Each asset is automatically assigned a unique alphanumeric
                    code. This identifier ensure that no two assets are
                    confused, even if they have similar names or
                    characteristics.
                  </div>
                </div>
              }
            />
          </div>
        }
        value={platformID}
        disabled
        onChange={() => {}}
      />
      <input type="hidden" value={platformID} name={'Platform ID'}></input>
    </>
  )
}
