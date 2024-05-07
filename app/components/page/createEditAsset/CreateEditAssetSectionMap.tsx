import { Map } from '~/components/ui/Map'
import { TextInput } from '~/components/ui/TextInput'

interface IProps {
  assetPropertyValues: {
    [key: string]: string | number | boolean | string[] | null
  }
  setAssetPropertyValues: (value: {
    [key: string]: string | number | boolean | string[] | null
  }) => void
  mapApiKey: string
}

export const CreateAssetMapSection = ({
  assetPropertyValues,
  setAssetPropertyValues,
  mapApiKey,
}: IProps) => {
  return (
    <>
      <div className="h-96 w-full">
        <Map
          apiKey={mapApiKey}
          markersCoordinates={
            assetPropertyValues['Latitude']
              ? [
                  {
                    lat:
                      (assetPropertyValues['Latitude'] as number) ?? undefined,
                    lng:
                      (assetPropertyValues['Longitude'] as number) ?? undefined,
                  },
                ]
              : []
          }
          onClick={(event) => {
            const lat = event.latLng?.lat()
            const lng = event.latLng?.lng()
            const newAssetProps = { ...assetPropertyValues }
            newAssetProps['Longitude'] = lng ?? ''
            newAssetProps['Latitude'] = lat ?? ''
            setAssetPropertyValues(newAssetProps)
          }}
        />
      </div>
      <div className="py-2">
        <TextInput
          number
          name={'Longitude'}
          label={'Longitude'}
          value={assetPropertyValues['Longitude']?.toString() ?? ''}
          onChange={(newValue) => {
            const newAssetProps = { ...assetPropertyValues }
            newAssetProps['Longitude'] = newValue
            setAssetPropertyValues(newAssetProps)
          }}
        />
        <TextInput
          number
          name={'Latitude'}
          label={'Latitude'}
          value={assetPropertyValues['Latitude']?.toString() ?? ''}
          onChange={(newValue) => {
            const newAssetProps = { ...assetPropertyValues }
            newAssetProps['Latitude'] = newValue
            setAssetPropertyValues(newAssetProps)
          }}
        />
      </div>
    </>
  )
}
