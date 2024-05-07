import { useLoaderData, useNavigate, useOutletContext } from '@remix-run/react'
import { Map } from '~/components/ui/Map'
import { useState } from 'react'
import type { TypeGetInspectionByOrgId } from '~/endpoints/inspectionInstance'
import { subPageTitle } from '~/styles/typography'
import { getInspectionInstanceStatusChip } from '~/utils/getInpectionInstanceStatusChip'
import Button from '~/components/ui/Button'
import type { LoaderFunctionArgs } from '@remix-run/node'

export async function action() {}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return {
    mapApiKey: process.env.MAP_API_KEY,
    orgId: parseInt(params.orgId ?? ''),
  }
}

export default function AssetMap() {
  const {
    inspections,
  }: {
    inspections: TypeGetInspectionByOrgId
  } = useOutletContext()
  const navigation = useNavigate()
  const loaderData = useLoaderData<typeof loader>()
  const [selectedInspectionInstance, setSelectedInspectionInstance] =
    useState<TypeGetInspectionByOrgId[number]>()
  const [possibleInspectionInstances, setPossibleInspectionInstances] =
    useState<TypeGetInspectionByOrgId>()
  const uniqueMarkerCoordinates = inspections
    .map((inspection) => {
      const lat = inspection.LocationLat
      const lng = inspection.LocationLng
      if (!lat || !lng) {
        return undefined
      }
      return {
        lat,
        lng,
        onClick: () => {
          setSelectedInspectionInstance(undefined)
          setPossibleInspectionInstances(
            inspections.filter(
              (inspection) =>
                inspection.LocationLat === lat &&
                inspection.LocationLng === lng,
            ),
          )
        },
      }
    })
    .filter(
      (valueA, index, array) =>
        valueA !== undefined &&
        array.findIndex(
          (valueB) => valueB?.lat === valueA.lat && valueB?.lng === valueA.lng,
        ) === index,
    ) as {
    lng: number
    lat: number
  }[]

  const InspectionPopUp = () => (
    <>
      <div className="flex w-full flex-col overflow-auto">
        {selectedInspectionInstance ? (
          <>
            <div className="p-6">
              <div className={`${subPageTitle} py-2`}>
                {selectedInspectionInstance?.inspectionReference}
              </div>
              <div className="py-2">
                Asset :{' '}
                <span
                  className=" hover: text-sky-400 hover:cursor-pointer hover:underline"
                  onClick={() => {
                    navigation(
                      '/' +
                        loaderData.orgId +
                        '/' +
                        selectedInspectionInstance?.asset?.id +
                        '/viewAsset',
                    )
                  }}
                >
                  {selectedInspectionInstance?.asset?.properties.find(
                    (property) =>
                      property.categoryProperty.label === 'Asset Name',
                  )?.stringValue ?? ''}
                </span>
              </div>
              <div className="py-2">
                {getInspectionInstanceStatusChip(
                  selectedInspectionInstance.Status,
                )}
              </div>
              <Button
                className="w-full py-2"
                onClick={() => {
                  switch (selectedInspectionInstance.Status) {
                    case 'SCHEDULED':
                      navigation(
                        '/' +
                          loaderData.orgId +
                          '/' +
                          selectedInspectionInstance.id +
                          '/unstartedInspectionInstance',
                      )
                      break
                    case 'STARTED':
                      navigation(
                        '/' +
                          loaderData.orgId +
                          '/' +
                          selectedInspectionInstance.id +
                          '/doingInspectionInstance',
                      )
                      break
                    default:
                      break
                  }
                }}
              >
                See Full Inspection Details
              </Button>
            </div>
          </>
        ) : (
          possibleInspectionInstances?.map((inspectionInstance, index) => (
            <div
              key={index}
              className="border border-border  p-2 hover:cursor-pointer hover:bg-authBackground"
              onClick={() => {
                setSelectedInspectionInstance(inspectionInstance)
              }}
            >
              {inspectionInstance.inspectionReference}
            </div>
          ))
        )}
      </div>
    </>
  )

  return (
    <>
      <div
        className={`flex ${
          selectedInspectionInstance
            ? 'h-[calc(85vh-430px)]'
            : 'h-[calc(100vh-430px)]'
        } w-full flex-col md:h-[calc(100vh-350px)] md:flex-row`}
      >
        <Map
          doCluster
          apiKey={loaderData.mapApiKey ?? ''}
          markersCoordinates={uniqueMarkerCoordinates}
        ></Map>

        {(selectedInspectionInstance || possibleInspectionInstances) && (
          <div className=" w-96 max-md:hidden">{<InspectionPopUp />}</div>
        )}
      </div>

      {(selectedInspectionInstance || possibleInspectionInstances) && (
        <div className=" w-full  md:hidden ">{<InspectionPopUp />}</div>
      )}
    </>
  )
}
