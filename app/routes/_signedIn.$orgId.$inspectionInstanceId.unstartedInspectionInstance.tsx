import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from '@remix-run/react'
import { useEffect, useState } from 'react'
import { pageTitle } from '~/styles/typography'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { Map } from '~/components/ui/Map'
import { getStorageClient } from '~/utils/storageClient'
import type {
  TypeGetInspectionInstance} from '~/endpoints/inspectionInstance';
import {
  getInspectionInstance,
  updateInspectionInstance,
} from '~/endpoints/inspectionInstance'
import { getSession } from '~/cookies'
import { getMembershipWithUserAndOrganisation } from '~/endpoints/membership'
import { UnStartedInspectionInstanceOverviewPanel } from '~/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel'
import { UnStartedInspectionInstanceContentPanel } from '~/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel'

export async function action({ request, params }: ActionFunctionArgs) {
  const body = await request.formData()
  const formType = body.get('_action') as
    | 'changeSupportingFiles'
    | 'startInspection'
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  switch (formType) {
    case 'startInspection': {
      await updateInspectionInstance({
        id: parseInt(params.inspectionInstanceId ?? ''),
        updatedByUserID: userId ?? -1,
        Status: 'STARTED',
      })

      return redirect(
        '/' +
          (params.orgId ?? '') +
          '/' +
          params.inspectionInstanceId +
          '/doingInspectionInstance',
      )
    }
    case 'changeSupportingFiles': {
      const newFilePaths = body.get('newFilePaths') as string
      const newFileSizes = body.get('newFileSizes') as string
      const allFilesSizes = newFileSizes.split('////').filter((size) => size)
      const newSupportingFiles = newFilePaths
        .split('////')
        .filter((filePath) => filePath !== '')
        .map((filePath, index) => {
          return { filePath, fileSize: allFilesSizes[index] }
        })

      updateInspectionInstance({
        id: parseInt(params.inspectionInstanceId ?? ''),
        updatedByUserID: userId ?? -1,
        supportingFiles: newSupportingFiles,
      })
      console.log('newSupportingFiles', newSupportingFiles)
      const inspectionInstance = await getInspectionInstance({
        inspectionInstanceId: parseInt(params.inspectionInstanceId ?? ''),
      })

      return { inspectionInstance: inspectionInstance, time: new Date() }
    }
  }
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const inspectionInstance = await getInspectionInstance({
    inspectionInstanceId: parseInt(params.inspectionInstanceId ?? ''),
  })
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  const currentMembership = await getMembershipWithUserAndOrganisation({
    userId: userId ?? -1,
    orgId: parseInt(params.orgId ?? ''),
  })
  if (
    !currentMembership?.role.inspectionCarryOut &&
    !currentMembership?.role.inspectionManage
  ) {
    return redirect('/' + (params.orgId ?? '') + '/inspections/list')
  }

  if (
    inspectionInstance?.Status !== 'SCHEDULED' ||
    inspectionInstance?.organisationId !== parseInt(params.orgId ?? '')
  ) {
    return redirect('/' + (params.orgId ?? '') + '/inspections/list')
  }

  return {
    STORAGE_URL: process.env.STORAGE_URL ?? '',
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    mapApiKey: process.env.MAP_API_KEY ?? '',
    inspectionInstance: inspectionInstance,
    inspectionManage: currentMembership?.role.inspectionManage,
  }
}

export default function UnStartedInspectionInstance() {
  const loaderData = useLoaderData() as {
    STORAGE_URL: string
    SUPABASE_SERVICE_ROLE_KEY: string
    mapApiKey: string
    inspectionInstance: TypeGetInspectionInstance
    inspectionManage: boolean
  }

  const submit = useSubmit()
  const actionData = useActionData() as
    | { inspectionInstance: TypeGetInspectionInstance }
    | undefined

  useEffect(() => {
    setInspectionInstance(loaderData.inspectionInstance)
    setFilesOnInstance(
      loaderData.inspectionInstance?.SupportingFiles.map((file) => {
        const name =
          file.inspectionFileUrl.split('/')[
            file.inspectionFileUrl.split('/').length - 1
          ]
        const savedPath = file.inspectionFileUrl
        const fileSize = file.inspectionFileSize
        return { name, savedPath, size: fileSize, uploading: false }
      }) ?? [],
    )
  }, [loaderData])

  useEffect(() => {
    if (actionData?.inspectionInstance) {
      setInspectionInstance(actionData.inspectionInstance)

      setFilesOnInstance(
        actionData.inspectionInstance?.SupportingFiles.map((file) => {
          const name =
            file.inspectionFileUrl.split('/')[
              file.inspectionFileUrl.split('/').length - 1
            ]
          const savedPath = file.inspectionFileUrl
          const fileSize = file.inspectionFileSize
          return { name, savedPath, size: fileSize, uploading: false }
        }) ?? [],
      )
    }
  }, [actionData])

  const storageClient = getStorageClient(
    loaderData.STORAGE_URL,
    loaderData.SUPABASE_SERVICE_ROLE_KEY,
  )
  const [inspectionInstance, setInspectionInstance] =
    useState<TypeGetInspectionInstance>()
  const [displayTab, setDisplayTab] = useState('Detail')
  const [filesOnInstance, setFilesOnInstance] =
    useState<
      { name: string; size: string; savedPath: string; uploading: boolean }[]
    >()

  const navigation = useNavigate()
  return (
    <div className="self-start py-4 md:py-8">
      <div className=" text-gray-500">
        Inspections /{' '}
        <span className=" font-semibold underline">
          {inspectionInstance?.inspectionReference}
        </span>
      </div>
      <h1 className={`${pageTitle} p-1`}>Inspections</h1>
      <div className="hidden justify-end md:flex">
        <div className="pr-8">
          {loaderData.inspectionManage && (
            <Button
              className=" w-44"
              onClick={() => {
                navigation('../editInspectionInstance', { relative: 'path' })
              }}
            >
              Edit
            </Button>
          )}
        </div>
        <Button
          className=" w-44"
          onClick={() => {
            const formData = new FormData()
            formData.set('_action', 'startInspection')
            submit(formData, { method: 'post' })
          }}
          variant="outline"
        >
          Start Inspection
        </Button>
      </div>
      <div className="flex justify-end md:hidden">
        {loaderData.inspectionManage && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              navigation('../editInspectionInstance', { relative: 'path' })
            }}
          >
            <Icon icon="edit" />
          </Button>
        )}
      </div>
      <div className="flex w-full flex-col md:hidden ">
        <UnStartedInspectionInstanceOverviewPanel
          inspectionInstance={inspectionInstance ?? null}
        />
        <div className="h-96 w-full">
          <Map
            apiKey={loaderData.mapApiKey}
            markersCoordinates={[
              {
                lng: inspectionInstance?.LocationLng ?? 0,
                lat: inspectionInstance?.LocationLat ?? 0,
              },
            ]}
            stopMovingMap
          />
        </div>
        <div className="pt-4">
          <Button variant="default" className="w-full " onClick={() => {}}>
            Start Inspection
          </Button>
        </div>
        <UnStartedInspectionInstanceContentPanel
          displayTab={displayTab}
          setDisplayTab={setDisplayTab}
          inspectionInstance={inspectionInstance ?? null}
          filesOnInstance={filesOnInstance ?? []}
          storageClient={storageClient}
          saveFilePathsToBackEnd={(newFiles) => {}}
          setFilesOnInstance={setFilesOnInstance}
        />
      </div>
      <div className="hidden md:flex ">
        <div className="w-1/2 p-2">
          <UnStartedInspectionInstanceOverviewPanel
            inspectionInstance={inspectionInstance ?? null}
          />
        </div>
      </div>
      <div className="hidden md:flex ">
        <div className="w-1/2 p-2">
          <UnStartedInspectionInstanceContentPanel
            displayTab={displayTab}
            setDisplayTab={setDisplayTab}
            inspectionInstance={inspectionInstance ?? null}
            filesOnInstance={filesOnInstance ?? []}
            storageClient={storageClient}
            saveFilePathsToBackEnd={(newFiles) => {
              const filePaths = newFiles.map((file) => file.savedPath)
              const fileSizes = newFiles.map((file) => file.size)
              const formData = new FormData()
              formData.set('_action', 'changeSupportingFiles')
              formData.set('newFilePaths', filePaths.join('////'))
              formData.set('newFileSizes', fileSizes.join('////'))
              submit(formData, { method: 'post' })
            }}
            setFilesOnInstance={setFilesOnInstance}
          />
        </div>
        <div className="w-1/2 p-2 pt-[4.25rem]">
          <div className="h-96 w-full">
            <Map
              apiKey={loaderData.mapApiKey}
              markersCoordinates={[
                {
                  lng: inspectionInstance?.LocationLng ?? 0,
                  lat: inspectionInstance?.LocationLat ?? 0,
                },
              ]}
              stopMovingMap
            />
          </div>
        </div>
      </div>
    </div>
  )
}
