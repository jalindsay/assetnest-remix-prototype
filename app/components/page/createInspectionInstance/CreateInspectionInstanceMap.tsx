import Button from '~/components/ui/Button'
import { Map } from '~/components/ui/Map'
import type { TypeGetAssetsWithOrgId } from '~/endpoints/asset'

interface IProps {
  setInspectionLat(newValue: number | undefined): void
  setInspectionLng(newValue: number | undefined): void
  selectAsset: TypeGetAssetsWithOrgId[number] | undefined
  inspectionLng: number | undefined
  inspectionLat: number | undefined
  mapsApiKey: string
}

export const CreateInspectionInstanceMap = ({
  setInspectionLat,
  setInspectionLng,
  selectAsset,
  inspectionLng,
  inspectionLat,
  mapsApiKey,
}: IProps) => {
  return (
    <>
      <div className="h-96 w-full">
        <input type="hidden" name="Longitude" value={inspectionLng} />
        <input type="hidden" name="Latitude" value={inspectionLat} />
        <Map
          markersCoordinates={
            inspectionLat && inspectionLng
              ? [
                  {
                    lat: inspectionLat,
                    lng: inspectionLng,
                  },
                ]
              : []
          }
          apiKey={mapsApiKey ?? ''}
          onClick={(event) => {
            setInspectionLng(event.latLng?.lng())
            setInspectionLat(event.latLng?.lat())
          }}
          recenterMapOnMarkerChange
        />
      </div>
      <div className="flex justify-center p-4">
        <Button
          variant="outline"
          onClick={() => {
            setInspectionLat(
              selectAsset
                ? selectAsset?.properties.find(
                    (property) =>
                      property.categoryProperty.label === 'Latitude',
                  )?.floatValue ?? undefined
                : undefined,
            )
            setInspectionLng(
              selectAsset
                ? selectAsset?.properties.find(
                    (property) =>
                      property.categoryProperty.label === 'Longitude',
                  )?.floatValue ?? undefined
                : undefined,
            )
          }}
        >
          {selectAsset ? 'Reset Location to Asset' : 'Clear Map Location'}
        </Button>
      </div>
    </>
  )
}
