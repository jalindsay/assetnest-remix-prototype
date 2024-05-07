import type { User } from '@prisma/client'
import { useLoaderData, useNavigate, useOutletContext } from '@remix-run/react'
import { Map } from '~/components/ui/Map'
import type { TypeGetAssetsWithOrgId } from '~/endpoints/asset'
import { useState } from 'react'
import Button from '~/components/ui/Button'
import { secondaryText, subPageTitle } from '~/styles/typography'
import {
  chip,
  chipGrayDarkColor,
  chipGreenColor,
  chipRedColor,
} from '~/styles/genericStyles'

export async function action() {}

export const loader = async () => {
  return { mapApiKey: process.env.MAP_API_KEY }
}

export default function AssetMap() {
  const {
    assets,
    imagePublicUrl,
  }: {
    assets: TypeGetAssetsWithOrgId
    assetManageRole: boolean
    imagePublicUrl: string
    assetUsers: { updatedUser: User; createUser: User }[]
  } = useOutletContext()
  const loaderData = useLoaderData<typeof loader>()
  const [selectedAsset, setSelectedAsset] =
    useState<TypeGetAssetsWithOrgId[number]>()
  const markerCoordinates = assets
    .map((asset) => {
      const lat = asset.properties.find(
        (property) => property.categoryProperty.label === 'Latitude',
      )?.floatValue
      const lng = asset.properties.find(
        (property) => property.categoryProperty.label === 'Longitude',
      )?.floatValue
      if (!lat || !lng) {
        return undefined
      }
      return {
        lat,
        lng,
        onClick: () => {
          setSelectedAsset(asset)
        },
      }
    })
    .filter((coordinates) => coordinates !== undefined) as {
    lng: number
    lat: number
  }[]
  const navigation = useNavigate()

  const selectedAssetStatus =
    selectedAsset?.properties.find(
      (property) => property.categoryProperty.label === 'Status',
    )?.stringValue ?? ''

  const AssetPopUp = () => (
    <>
      <div className="flex w-full overflow-auto">
        {selectedAsset?.properties
          .find(
            (property) => property.categoryProperty.label === 'Photo Gallery',
          )
          ?.stringArrayValue.map((image, index) => {
            return (
              <div
                className="w-32  md:w-72"
                key={index}
              >
                <img
                  className="h-auto max-h-32 w-auto max-w-xs md:max-h-60  md:max-w-sm"
                  src={imagePublicUrl + image}
                 alt={''}/>
              </div>
            )
          })}
      </div>
      <div className="p-6">
        <div className={`${subPageTitle} py-2`}>
          {
            selectedAsset?.properties.find(
              (property) => property.categoryProperty.label === 'Asset Name',
            )?.stringValue
          }
        </div>
        <div className="py-2">
          ID :{' '}
          {
            selectedAsset?.properties.find(
              (property) => property.categoryProperty.label === 'Asset ID',
            )?.stringValue
          }
        </div>

        <div
          className={`${
            selectedAssetStatus === 'active'
              ? chipGreenColor
              : selectedAssetStatus === 'inactive'
              ? chipGrayDarkColor
              : chipRedColor
          } ${chip}  text-xs`}
        >
          {selectedAssetStatus.charAt(0).toUpperCase() +
            selectedAssetStatus.slice(1)}
        </div>

        <div className={`${secondaryText} py-2`}>
          Updated :{' '}
          {new Date(
            selectedAsset?.properties.find(
              (property) => property.categoryProperty.label === 'Modified Date',
            )?.stringValue ?? '',
          ).toLocaleString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          } as const)}
        </div>
        <div className="py-2">
          {
            selectedAsset?.properties.find(
              (property) => property.categoryProperty.label === 'Description',
            )?.stringValue
          }
        </div>
        <Button
          className="w-full py-2"
          onClick={() =>
            navigation('../' + (selectedAsset?.id ?? '-1') + '/viewAsset', {
              relative: 'path',
            })
          }
        >
          See Full Asset Details
        </Button>
      </div>
    </>
  )

  return (
    <>
      <div
        className={`flex ${
          selectedAsset ? 'h-[calc(85vh-430px)]' : 'h-[calc(100vh-430px)]'
        } w-full flex-col md:h-[calc(100vh-350px)] md:flex-row`}
      >
        <Map
          doCluster
          apiKey={loaderData.mapApiKey ?? ''}
          markersCoordinates={markerCoordinates}
        ></Map>

        {selectedAsset && (
          <div className=" w-96 max-md:hidden">{<AssetPopUp />}</div>
        )}
      </div>

      {selectedAsset && (
        <div className=" w-full  md:hidden ">{<AssetPopUp />}</div>
      )}
    </>
  )
}
