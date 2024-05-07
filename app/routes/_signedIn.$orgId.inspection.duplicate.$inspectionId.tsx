import type { ActionFunctionArgs, LoaderFunctionArgs} from '@remix-run/node';
import { redirect } from '@remix-run/node'
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
} from '@remix-run/react'
import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Button from '~/components/ui/Button'
import { Card } from '~/components/ui/Card'
import { CreateInspectionInstanceDetails } from '~/components/page/createInspectionInstance/CreateInspectionInstanceDetails'
import { CreateInspectionInstanceMap } from '~/components/page/createInspectionInstance/CreateInspectionInstanceMap'
import { CreateInspectionInstanceProcedures } from '~/components/page/createInspectionInstance/CreateInspectionInstanceProcedures'
import { getSession } from '~/cookies'
import { getAssetsWithOrgId } from '~/endpoints/asset'
import { getPublicInspectionForms } from '~/endpoints/inspectionForm'
import {
  createInspectionInstance,
  getInspectionInstance,
  getInspectionInstanceWithInspectionIDAndOrgID,
} from '~/endpoints/inspectionInstance'
import { pageTitle, subPageTitle } from '~/styles/typography'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const inspectionToDuplicate = await getInspectionInstance({
    inspectionInstanceId: parseInt(params.inspectionId ?? ''),
  })
  const publicInspectionForms = await getPublicInspectionForms()
  const orgsAssets = await getAssetsWithOrgId({
    orgId: parseInt(params.orgId ?? '-1'),
  })
  return {
    inspection: inspectionToDuplicate,
    mapsApiKey: process.env.MAP_API_KEY,
    publicInspectionForms,
    orgsAssets,
    STORAGE_URL: process.env.STORAGE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  const body = await request.formData()
  const inspectionReference = body.get('Inspection Reference') as string
  const assetID = body.get('AssetId') as string
  const inspectionID = body.get('Inspection Id') as string
  const longitude = body.get('Longitude') as string
  const latitude = body.get('Latitude') as string
  const platformID = body.get('Platform ID') as string
  const inspectionFormId = body.get('Category') as string
  const filePathsToSave = body.getAll('FilePathsToSave[]') as string[]
  const fileSizesToSave = body.getAll('FileSizesToSave[]') as string[]
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  let inspectionReferenceError = ''
  let assetError = ''
  let inspectionIDError = ''
  const inspectionWithSameInspectionID =
    await getInspectionInstanceWithInspectionIDAndOrgID({
      inspectionId: inspectionID,
      orgId: parseInt(params.orgId ?? ''),
    })

  if (inspectionReference === '') {
    inspectionReferenceError = 'Inspection Reference is required'
  }
  if (assetID === '') {
    assetError = 'Asset is required'
  }
  if (inspectionID === '') {
    inspectionIDError = 'Inspection Id'
  } else if (inspectionWithSameInspectionID.length !== 0) {
    inspectionIDError = 'Inspection Id must be unique'
  }

  if (
    inspectionIDError !== '' ||
    assetError !== '' ||
    inspectionReferenceError !== ''
  ) {
    return { inspectionIDError, assetError, inspectionReferenceError }
  }

  // Create inspection
  await createInspectionInstance({
    inspectionReference,
    assetID: parseInt(assetID),
    inspectionID,
    longitude: parseFloat(longitude),
    latitude: parseFloat(latitude),
    organisationId: parseInt(params.orgId ?? ''),
    inspectionFormId: parseInt(inspectionFormId),
    platformID: platformID,
    createdByUserID: userId ?? -1,
    supportingFiles: filePathsToSave
      .map((filePath, index) => {
        return { filePath, fileSize: fileSizesToSave[index] }
      })
      .filter(
        (value, index, array) =>
          array.findIndex((target) => target.filePath === value.filePath) ===
          index,
      ),
  })
  return redirect('/' + (params.orgId ?? '') + '/inspections/list')
}

export default function InspectionDuplicate() {
  const loaderData = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>() as
    | {
        inspectionIDError?: string
        assetError?: string
        inspectionReferenceError?: string
      }
    | undefined
  const [inspectionLat, setInspectionLat] = useState<number | undefined>(
    loaderData?.inspection?.LocationLat ?? 0,
  )
  const [inspectionLng, setInspectionLng] = useState<number | undefined>(
    loaderData?.inspection?.LocationLng ?? 0,
  )
  const [selectAsset, setSelectAsset] = useState(loaderData.inspection?.asset)
  const [filesOnInstance, setFilesOnInstance] =
    useState<
      { name: string; size: string; savedPath: string; uploading: boolean }[]
    >()
  const [currentCategoryId, setCurrentCategoryId] = useState<string>(
    loaderData?.inspection?.inspectionFormId.toString() ?? '',
  )
  const [inspectionReference, setInspectionReference] = useState<string>(
    loaderData?.inspection?.inspectionReference ?? '',
  )
  const [platformID] = useState(uuid())
  const [inspectionId, setInspectionId] = useState<string>(
    loaderData?.inspection?.InspectionOrgUniqueId ?? '',
  )
  const navigate = useNavigate()

// Map the files on the inspection to the file state on first load
  useEffect(() => {
    loaderData?.inspection?.SupportingFiles.forEach((file) => {
      const newFilesOnInstance = [...(filesOnInstance ?? [])];
      newFilesOnInstance.push({
        name: file.inspectionFileUrl.split('/')[2],
        size: file.inspectionFileSize,
        savedPath: file.inspectionFileUrl,
        uploading: false,
      });
      setFilesOnInstance(newFilesOnInstance);
    });
  }, [filesOnInstance, loaderData?.inspection?.SupportingFiles]);

  return (
    <>
      <div className="self-start py-4 md:py-8">
        <Form method="post">
          <div className="text-gray-500">
            Inspection / {loaderData.inspection?.inspectionReference} /{' '}
            <span className=" font-semibold underline">Duplicate</span>
          </div>
          <h1 className={`${pageTitle} p-1`}>Duplicate Inspection</h1>
          {/* TODO: Refactor this section to be its own component */}
          <div className="flex flex-col md:hidden">
            <Card outerClassName={'overflow-auto py-1'}>
              <CreateInspectionInstanceDetails
                inspectionReferenceError={actionData?.inspectionReferenceError}
                inspectionReference={inspectionReference}
                setInspectionReference={setInspectionReference}
                publicInspectionForms={loaderData.publicInspectionForms}
                currentCategoryId={currentCategoryId}
                setCurrentCategoryId={setCurrentCategoryId}
                assetError={actionData?.assetError}
                orgsAssets={loaderData?.orgsAssets}
                selectAsset={selectAsset ?? undefined}
                inspectionIDError={actionData?.inspectionIDError}
                inspectionId={inspectionId}
                setInspectionId={setInspectionId}
                platformID={platformID}
                haveSelectedAAsset={(newId) => {
                  const selectedAsset = loaderData.orgsAssets.find(
                    (asset) => asset.id.toString() === newId,
                  )
                  setSelectAsset(selectedAsset)
                  if (selectedAsset) {
                    setInspectionLat(
                      selectedAsset?.properties.find(
                        (property) =>
                          property.categoryProperty.label === 'Latitude',
                      )?.floatValue ?? undefined,
                    )
                    setInspectionLng(
                      selectedAsset?.properties.find(
                        (property) =>
                          property.categoryProperty.label === 'Longitude',
                      )?.floatValue ?? undefined,
                    )
                  }
                }}
              />
              <div className={`${subPageTitle} py-4`}>Location</div>
              <CreateInspectionInstanceMap
                setInspectionLat={setInspectionLat}
                setInspectionLng={setInspectionLng}
                selectAsset={selectAsset ?? undefined}
                inspectionLng={inspectionLng}
                inspectionLat={inspectionLat}
                mapsApiKey={loaderData.mapsApiKey ?? ''}
              />
              <div className={`${subPageTitle} py-4`}> Procedures</div>
              <CreateInspectionInstanceProcedures
                setFilesOnInstance={setFilesOnInstance}
                filesOnInstance={filesOnInstance ?? []}
                STORAGE_URL={loaderData.STORAGE_URL ?? ''}
                SUPABASE_SERVICE_ROLE_KEY={
                  loaderData.SUPABASE_SERVICE_ROLE_KEY ?? ''
                }
              />
            </Card>
          </div>
          <div className="hidden flex-col md:flex">
            <div className="flex">
              <div className="w-3/5 p-2">
                <div className={`${subPageTitle}`}>Details</div>
                <Card innerClassName="p-8 w-full">
                  <CreateInspectionInstanceDetails
                    inspectionReferenceError={
                      actionData?.inspectionReferenceError
                    }
                    inspectionReference={inspectionReference}
                    setInspectionReference={setInspectionReference}
                    publicInspectionForms={loaderData.publicInspectionForms}
                    currentCategoryId={currentCategoryId}
                    setCurrentCategoryId={setCurrentCategoryId}
                    assetError={actionData?.assetError}
                    orgsAssets={loaderData?.orgsAssets}
                    selectAsset={selectAsset ?? undefined}
                    inspectionIDError={actionData?.inspectionIDError}
                    inspectionId={inspectionId}
                    setInspectionId={setInspectionId}
                    platformID={platformID}
                    haveSelectedAAsset={(newId) => {
                      const selectedAsset = loaderData.orgsAssets.find(
                        (asset) => asset.id.toString() === newId,
                      )
                      setSelectAsset(selectedAsset)
                      if (selectedAsset) {
                        setInspectionLat(
                          selectedAsset?.properties.find(
                            (property) =>
                              property.categoryProperty.label === 'Latitude',
                          )?.floatValue ?? undefined,
                        )
                        setInspectionLng(
                          selectedAsset?.properties.find(
                            (property) =>
                              property.categoryProperty.label === 'Longitude',
                          )?.floatValue ?? undefined,
                        )
                      }
                    }}
                  />
                </Card>
              </div>
              <div className=" w-2/5 p-2">
                <div className={`${subPageTitle}`}>Location</div>
                <Card innerClassName="p-8 h-full w-full">
                  <CreateInspectionInstanceMap
                    setInspectionLat={setInspectionLat}
                    setInspectionLng={setInspectionLng}
                    selectAsset={selectAsset ?? undefined}
                    inspectionLng={inspectionLng}
                    inspectionLat={inspectionLat}
                    mapsApiKey={loaderData.mapsApiKey ?? ''}
                  />
                </Card>
              </div>
            </div>
            <div className="w-full p-2">
              <div className={`${subPageTitle}`}> Procedures</div>
              <Card innerClassName="p-8 h-full w-full">
                <CreateInspectionInstanceProcedures
                  setFilesOnInstance={setFilesOnInstance}
                  filesOnInstance={filesOnInstance ?? []}
                  STORAGE_URL={loaderData.STORAGE_URL ?? ''}
                  SUPABASE_SERVICE_ROLE_KEY={
                    loaderData.SUPABASE_SERVICE_ROLE_KEY ?? ''
                  }
                />
              </Card>
            </div>
            <div className="w-full p-2">
              <div className="flex">
                <Button
                  className="w-40 text-left hover:underline"
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
                <div className="ml-auto">
                  <Button
                    submit
                    className="w-40"
                    disabled={
                      !!filesOnInstance?.find((file) => file.uploading === true)
                    }
                  >
                    Save Inspection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}
