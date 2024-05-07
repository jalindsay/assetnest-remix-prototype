import { useLoaderData, useNavigate } from '@remix-run/react'
import { Card } from '~/components/ui/Card'
import {
  importantText,
  pageTitle,
  secondaryText,
  subPageTitle,
} from '~/styles/typography'
import { Tabs } from '~/components/ui/Tabs'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { useState } from 'react'
import type { LoaderFunctionArgs } from '@remix-run/node'
import { getAssetWithId } from '~/endpoints/asset'
import { getStorage } from '~/utils/storage.server'
import { getUserId } from '~/endpoints/user'
import { CircularProgressBar } from '~/components/ui/CircularProgressBar'
import { Map } from '~/components/ui/Map'
import { getTimeSinceDateInFormattedString } from '~/utils/getTimeSinceDateInFormattedString'
import Alert from '~/components/ui/Alert'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const assetId = params.assetId
  const asset = await getAssetWithId({ assetId: parseInt(assetId ?? '') })
  const imagePaths = asset?.properties
    .find((property) => property.categoryProperty.label === 'Photo Gallery')
    ?.stringArrayValue.map((image) => {
      return getStorage().from('assetnest').getPublicUrl(image)
    })

  const createdBy = await getUserId(
    asset?.properties.find(
      (property) => property.categoryProperty.label === 'Created By',
    )?.integerValue ?? -1,
  )
  const modifiedBy = await getUserId(
    asset?.properties.find(
      (property) => property.categoryProperty.label === 'Modified By',
    )?.integerValue ?? -1,
  )
  return {
    asset,
    imagePaths,
    mapApiKey: process.env.MAP_API_KEY,
    createdBy,
    modifiedBy,
  }
}
export default function AssetView() {
  const loaderData = useLoaderData<typeof loader>()
  const [displayTab, setDisplayTab] = useState('Details')
  const navigation = useNavigate()
  const assetNonInternalProperties = loaderData.asset?.properties.filter(
    (property) => property.categoryProperty.type !== 'INTERNAL',
  )
  const totalNumberProperties = assetNonInternalProperties?.length ?? -1
  const numberPropertiesWithValues =
    assetNonInternalProperties?.filter(
      (property) =>
        property.stringValue ||
        property.floatValue ||
        property.integerValue ||
        property.booleanValue ||
        property.latitudeValue ||
        property.longitudeValue ||
        property.stringArrayValue.length !== 0,
    ).length ?? -1
  const percent = (
    (numberPropertiesWithValues / totalNumberProperties) *
    100
  ).toFixed(0)
  const latitude = loaderData.asset?.properties.find(
    (property) => property.categoryProperty.label === 'Latitude',
  )?.floatValue as number
  const longitude = loaderData.asset?.properties.find(
    (property) => property.categoryProperty.label === 'Longitude',
  )?.floatValue as number
  const location = [
    {
      lat: latitude,
      lng: longitude,
    },
  ]

  const detailProperties =
    loaderData.asset?.properties
      .filter(
        (property) =>
          !(
            property.categoryProperty.type === 'COORDINATE' ||
            property.categoryProperty.type === 'IMAGE' ||
            property.categoryProperty.label === 'Asset Name' ||
            property.categoryProperty.label === 'Asset ID' ||
            property.categoryProperty.label === 'Description'
          ),
      )
      .sort((a, b) =>
        a.categoryProperty.label > b.categoryProperty.label ? 1 : -1,
      ) ?? []

  const [displayAlert, setDisplayAlert] = useState(false)

  return (
    <div>
      <div className=" text-gray-500">
        Asset /{' '}
        <span className=" font-semibold underline">
          {
            loaderData.asset?.properties.find(
              (property) => property.categoryProperty.label === 'Asset Name',
            )?.stringValue
          }
        </span>
      </div>
      {displayAlert && (
        <Alert
          variant="default"
          title={'Copied Link To Clipboard'}
          onClose={() => {
            setDisplayAlert(false)
          }}
        />
      )}
      <h1 className={`${pageTitle} p-1`}>Asset</h1>
      <div className="flex p-2 pb-4 md:w-[calc(100vw-120px)]">
        <div className="ml-auto flex max-md:hidden">
          <div className="px-2">
            <Button
              className=" w-44 "
              variant="outline"
              onClick={() => {
                navigation('../' + loaderData.asset?.id + '/editAsset')
              }}
            >
              Edit
            </Button>
          </div>
          <Button
            className=" w-44 "
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
              setDisplayAlert(true)
              setTimeout(() => setDisplayAlert(false), 5000)
            }}
          >
            Share
          </Button>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-full overflow-auto">
          {loaderData.imagePaths?.map((image, index) => {
            return (
              <div key={index} className="p-2">
                <div className="max-w-72 h-72 max-h-72 w-72">
                  <img
                    className=" max-w-96 h-auto max-h-60  w-auto"
                    src={image.data.publicUrl}
                   alt={''}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-col py-2 pr-2 md:w-1/2">
          <div className={subPageTitle}>
            {
              loaderData.asset?.properties.find(
                (property) => property.categoryProperty.label === 'Asset Name',
              )?.stringValue
            }
          </div>
          <div className="py-2">
            ID{' '}
            {
              loaderData.asset?.properties.find(
                (property) => property.categoryProperty.label === 'Asset ID',
              )?.stringValue
            }
          </div>
          <div className="flex items-center py-2 ">
            <CircularProgressBar percent={parseInt(percent)} />
            <div className={`p-2 ${secondaryText}`}> Complete</div>
          </div>
          <div className="py-2">
            {
              loaderData.asset?.properties.find(
                (property) => property.categoryProperty.label === 'Description',
              )?.stringValue
            }
          </div>

          <div className="flex w-full justify-center space-x-4 p-2 pb-4 md:hidden">
            <Button
              className=" flex  w-1/2  justify-center"
              variant="outline"
              onClick={() => {
                navigation('../' + loaderData.asset?.id + '/editAsset')
              }}
            >
              <Icon icon="edit" className="p-2" />
              Edit
            </Button>

            <Button
              className=" flex w-1/2 justify-center"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setDisplayAlert(true)
                setTimeout(() => setDisplayAlert(false), 5000)
              }}
            >
              <Icon icon="share3Dots" color="white" className="p-2" /> Share
            </Button>
          </div>

          <div className="py-2">
            <Tabs
              defaultValue={'assetList'}
              className="w-full"
              onValueChange={(value: string) => setDisplayTab(value)}
              value={displayTab}
              tabs={[
                { value: 'Details', valueLabel: 'Details' },
                { value: 'Linked Assets', valueLabel: 'Linked Assets' },
              ]}
            />
            <Card innerClassName={'p-4 w-full'}>
              {displayTab === 'Details' ? (
                <div className="w-full">
                  <div className={`${importantText} pb-2 text-lg`}>Details</div>
                  {detailProperties.map((property, index) => {
                    let value
                    if (property.categoryProperty.type === 'STRING') {
                      value = property.stringValue ?? ''
                    } else if (property.categoryProperty.type === 'MONEY') {
                      value = '£' + property.floatValue ?? ''
                    } else if (property.categoryProperty.type === 'INTEGER') {
                      value = property.integerValue ?? ''
                    } else if (property.categoryProperty.type === 'LIST') {
                      value = (
                        <div key={index}>
                          {(property.stringValue?.charAt(0).toUpperCase() ??
                            '') + (property.stringValue?.slice(1) ?? '')}
                        </div>
                      )
                    } else if (
                      property.categoryProperty.label === 'Modified By'
                    ) {
                      value =
                        loaderData.modifiedBy?.firstName +
                        ' ' +
                        loaderData.modifiedBy?.lastName
                    } else if (
                      property.categoryProperty.label === 'Created By'
                    ) {
                      value =
                        loaderData.createdBy?.firstName +
                        ' ' +
                        loaderData.createdBy?.lastName
                    } else if (
                      property.categoryProperty.label === 'Modified Date' ||
                      property.categoryProperty.label === 'Created Date'
                    ) {
                      value = getTimeSinceDateInFormattedString(
                        new Date(property.stringValue ?? ''),
                      )
                    }
                    if (value === '') {
                      return <></>
                    }
                    return (
                      <div key={index} className="flex">
                        <div className={`w-40 ${importantText}`}>
                          {property.categoryProperty.label}
                        </div>
                        <div className=" w-80">{value}</div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div>Coming Soon</div>
              )}
            </Card>
          </div>
        </div>
        {location[0].lat !== null || location[0].lng !== null ? (
          <div className="h-auto min-h-[20rem] w-full max-md:grid">
            <Map
              apiKey={loaderData.mapApiKey ?? ''}
              markersCoordinates={location}
            />
          </div>
        ) : (
          <div className="flex w-full items-center justify-center">
            No map location set{' '}
          </div>
        )}
      </div>
      <div className="h-9"></div>
    </div>
  )
}
