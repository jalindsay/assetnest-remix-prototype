import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
} from '@remix-run/react'
import { Card } from '~/components/ui/Card'
import { pageTitle, subPageTitle } from '~/styles/typography'
import type {
  TypeGetPublicInspectionForms} from '~/endpoints/inspectionForm';
import {
  getPublicInspectionForms,
} from '~/endpoints/inspectionForm'
import { useState } from 'react'
import type { TypeGetAssetsWithOrgId} from '~/endpoints/asset';
import { getAssetsWithOrgId } from '~/endpoints/asset'
import Button from '~/components/ui/Button'
import { getSession } from '~/cookies'
import type {
  TypeGetInspectionInstance} from '~/endpoints/inspectionInstance';
import {
  getInspectionInstance,
  getInspectionInstanceWithInspectionIDAndOrgID,
  updateInspectionInstance,
} from '~/endpoints/inspectionInstance'
import { CreateInspectionInstanceDetails } from '~/components/page/createInspectionInstance/CreateInspectionInstanceDetails'
import { CreateInspectionInstanceMap } from '~/components/page/createInspectionInstance/CreateInspectionInstanceMap'
import { CreateInspectionInstanceProcedures } from '~/components/page/createInspectionInstance/CreateInspectionInstanceProcedures'
import { getMembershipWithUserAndOrganisation } from '~/endpoints/membership'

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
  } else if (
    inspectionWithSameInspectionID.length !== 0 &&
    inspectionWithSameInspectionID[0].id.toString() !==
      params.inspectionInstanceId
  ) {
    inspectionIDError = 'Inspection Id must be unique'
  }

  if (
    inspectionIDError !== '' ||
    assetError !== '' ||
    inspectionReferenceError !== ''
  ) {
    return { inspectionIDError, assetError, inspectionReferenceError }
  }

  await updateInspectionInstance({
    id: parseInt(params.inspectionInstanceId ?? ''),
    inspectionReference,
    assetID: parseInt(assetID),
    inspectionID,
    longitude: parseFloat(longitude),
    latitude: parseFloat(latitude),
    inspectionFormId: parseInt(inspectionFormId),
    platformID: platformID,
    updatedByUserID: userId ?? -1,
    supportingFiles: filePathsToSave
      .map((filePath, index) => {
        return { filePath, fileSize: fileSizesToSave[index] }
      })
      .filter(
        (value, index, array) =>
          array.findIndex((target) => target.filePath === value.filePath) ===
          index,
      ), //for some reason am getting duplicates so filtering those values out
  })
  return redirect(
    '/' +
      (params.orgId ?? '') +
      '/' +
      (params.inspectionInstanceId ?? '') +
      '/unstartedInspectionInstance',
  )
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const publicInspectionForms = await getPublicInspectionForms()
  //get current inspection
  const currentInspectionInstance = await getInspectionInstance({
    inspectionInstanceId: parseInt(params.inspectionInstanceId ?? ''),
  })
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  if (userId) {
    const currentMembership = await getMembershipWithUserAndOrganisation({
      userId,
      orgId: parseInt(params.orgId ?? ''),
    })
    if (!currentMembership?.role.inspectionManage) {
      return redirect('/' + (params.orgId ?? '') + '/inspections/list')
    }
  }

  if (
    currentInspectionInstance?.Status !== 'SCHEDULED' ||
    currentInspectionInstance?.organisationId !== parseInt(params.orgId ?? '')
  ) {
    return redirect('/' + (params.orgId ?? '') + '/inspections/list')
  }

  const orgsAssets = await getAssetsWithOrgId({
    orgId: parseInt(params.orgId ?? '-1'),
  })

  return {
    mapsApiKey: process.env.MAP_API_KEY,
    STORAGE_URL: process.env.STORAGE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    publicInspectionForms,
    orgsAssets,
    currentInspectionInstance,
  }
}

export default function EditInspectionInstance() {
  const loaderData = useLoaderData() as {
    publicInspectionForms: TypeGetPublicInspectionForms
    orgsAssets: TypeGetAssetsWithOrgId
    mapsApiKey: string
    STORAGE_URL: string
    SUPABASE_SERVICE_ROLE_KEY: string
    currentInspectionInstance: TypeGetInspectionInstance
  }
  const actionData = useActionData<typeof action>() as
    | {
        inspectionIDError?: string
        assetError?: string
        inspectionReferenceError?: string
      }
    | undefined
  const navigate = useNavigate()
  const [currentCategoryId, setCurrentCategoryId] = useState(
    loaderData.publicInspectionForms[0].id.toString(),
  )
  const [platformID] = useState(
    loaderData.currentInspectionInstance?.PlatformID ?? '',
  )
  const [inspectionReference, setInspectionReference] = useState(
    loaderData.currentInspectionInstance?.inspectionReference,
  )
  const [inspectionId, setInspectionId] = useState(
    loaderData.currentInspectionInstance?.InspectionOrgUniqueId,
  )
  const [selectAsset, setSelectAsset] = useState(
    loaderData.currentInspectionInstance?.asset,
  )

  const [inspectionLng, setInspectionLng] = useState(
    loaderData.currentInspectionInstance?.LocationLng,
  )
  const [inspectionLat, setInspectionLat] = useState(
    loaderData.currentInspectionInstance?.LocationLat,
  )

  const [filesOnInstance, setFilesOnInstance] = useState<
    { name: string; size: string; savedPath: string; uploading: boolean }[]
  >(
    loaderData.currentInspectionInstance?.SupportingFiles.map((file) => {
      const name =
        file.inspectionFileUrl.split('/')[
          file.inspectionFileUrl.split('/').length - 1
        ]
      const savedPath = file.inspectionFileUrl
      const fileSize = file.inspectionFileSize
      return { name, savedPath, size: fileSize, uploading: false }
    }) ?? [],
  )

  return (
    <div className="self-start py-4 md:py-8">
      <Form method="post">
        <div className=" text-gray-500">
          Inspections /{' '}
          <span className=" font-semibold underline">Edit Inspection</span>
        </div>
        <h1 className={`${pageTitle} p-1`}>Edit Inspection</h1>
        <div className="flex flex-col md:hidden">
          <Card outerClassName={'overflow-auto py-1'}>
            <CreateInspectionInstanceDetails
              inspectionReferenceError={actionData?.inspectionReferenceError}
              inspectionReference={inspectionReference ?? ''}
              setInspectionReference={setInspectionReference}
              publicInspectionForms={loaderData.publicInspectionForms}
              setCurrentCategoryId={setCurrentCategoryId}
              currentCategoryId={currentCategoryId}
              assetError={actionData?.assetError}
              orgsAssets={loaderData.orgsAssets}
              selectAsset={selectAsset ?? undefined}
              inspectionIDError={actionData?.inspectionIDError}
              inspectionId={inspectionId ?? ''}
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
              inspectionLng={inspectionLng ?? undefined}
              inspectionLat={inspectionLat ?? undefined}
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
        <div className="hidden  flex-col md:flex">
          <div className="flex">
            <div className="w-3/5 p-2">
              <div className={`${subPageTitle}`}>Details</div>
              <Card innerClassName="p-8 w-full">
                <CreateInspectionInstanceDetails
                  inspectionReferenceError={
                    actionData?.inspectionReferenceError
                  }
                  inspectionReference={inspectionReference ?? ''}
                  setInspectionReference={setInspectionReference}
                  publicInspectionForms={loaderData.publicInspectionForms}
                  setCurrentCategoryId={setCurrentCategoryId}
                  currentCategoryId={currentCategoryId}
                  assetError={actionData?.assetError}
                  orgsAssets={loaderData.orgsAssets}
                  selectAsset={selectAsset ?? undefined}
                  inspectionIDError={actionData?.inspectionIDError}
                  inspectionId={inspectionId ?? ''}
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
                  inspectionLng={inspectionLng ?? undefined}
                  inspectionLat={inspectionLat ?? undefined}
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
  )
}
