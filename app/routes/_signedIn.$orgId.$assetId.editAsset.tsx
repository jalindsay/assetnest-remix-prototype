import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { pageTitle } from '~/styles/typography'
import { getAsset, getAssetWithAssetIdAndOrgId } from '~/endpoints/asset'
import { getSession } from '~/cookies'
import { getStorageClient } from '~/utils/storageClient'
import { CreateEditAsset } from '~/components/page/createEditAsset/CreateEditAsset'
import type { CategoryPropertyType } from '@prisma/client'
import { editAssetFromForm } from '~/utils/assetActions/editAssetFromForm'
import { getAssetForForm } from '~/utils/assetActions/getAssetForForm'

export async function action({ request, params }: ActionFunctionArgs) {
  const body = await request.formData()
  const assetName = body.get('Asset Name') as string
  const assetID = body.get('Asset ID') as string

  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  let assetNameError = ''
  let assetIDError = ''
  const assetAlreadyExistWithThatAssetID = await getAssetWithAssetIdAndOrgId({
    assetId: assetID,
    orgId: parseInt(params.orgId ?? ''),
    currentAssetId: parseInt(params.assetId ?? ''),
  })

  const alreadyExistingAsset = await getAsset({
    assetId: parseInt(params.assetId ?? ''),
  })

  if (assetName === '') {
    assetNameError = 'Asset Name is required'
  }
  if (assetID === '') {
    assetIDError = 'Asset ID is required'
  } else if (assetAlreadyExistWithThatAssetID.length !== 0) {
    assetIDError = 'Asset ID must be unique'
  }

  if (assetNameError !== '' || assetIDError !== '') {
    return { assetNameError, assetIDError }
  }

  await editAssetFromForm({
    body,
    userId: userId ?? -1,
    alreadyExistingAsset,
  })
  return redirect('/' + (params.orgId ?? '') + '/assetList')
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const assetReadyForForm = await getAssetForForm({
    assetId: parseInt(params.assetId ?? ''),
    orgId: parseInt(params.orgId ?? ''),
  })
  if (assetReadyForForm === 'Asset does not belong to this organisation') {
    return redirect('/')
  }

  return {
    ...assetReadyForForm,
    STORAGE_URL: process.env.STORAGE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    mapApiKey: process.env.MAP_API_KEY,
  }
}

export default function EditAsset() {
  const loaderData = useLoaderData<{
    assetProperties: {
      [key: string]: string | number | boolean | string[] | null
    }
    assetCategoriesData: {
      categoryProperties: {
        id: number
        label: string
        options: string[]
        placeholder: string | null
        type: CategoryPropertyType
        defaultValueString: string | null
      }[]
      id: number
      name: string
    }[]
    STORAGE_URL: string
    SUPABASE_SERVICE_ROLE_KEY: string
    mapApiKey: string
    assetCategoryId: number
  }>()
  const actionData = useActionData<typeof action>() as {
    assetNameError?: string
    assetIDError?: string
  }
  const storageClient = getStorageClient(
    loaderData.STORAGE_URL ?? '',
    loaderData.SUPABASE_SERVICE_ROLE_KEY ?? '',
  )
  const [assetPropertyValues, setAssetPropertyValues] = useState<{
    [key: string]: string | number | boolean | string[] | null
  }>(loaderData.assetProperties ?? {})

  const [selectedAssetCategoryId, setSelectedAssetCategoryId] = useState(
    loaderData.assetCategoryId,
  )

  const [imagesToDisplay, setImagesToDisplay] = useState<string[]>(
    (loaderData.assetProperties['Photo Gallery'] as string[]).map(
      (image) =>
        storageClient.from('assetnest').getPublicUrl('').data.publicUrl + image,
    ),
  )

  const [imagesStoragePathData, setImagesStorageString] = useState<string[]>(
    loaderData.assetProperties['Photo Gallery'] as string[],
  )
  return (
    <div className="self-start py-4 md:py-8">
      <div className=" text-gray-500">
        Asset / {loaderData.assetProperties['Asset Name']} /
        <span className=" font-semibold underline">Edit Asset</span>
      </div>
      <h1 className={`${pageTitle} p-1`}>Edit Asset</h1>
      <CreateEditAsset
        assetCategoriesData={loaderData.assetCategoriesData}
        assetNameError={actionData?.assetNameError ?? ''}
        assetIDError={actionData?.assetIDError ?? ''}
        assetPropertyValues={assetPropertyValues}
        setAssetPropertyValues={setAssetPropertyValues}
        setSelectedAssetCategoryId={setSelectedAssetCategoryId}
        selectedAssetCategoryId={selectedAssetCategoryId}
        imagesToDisplay={imagesToDisplay}
        imagesStoragePathData={imagesStoragePathData}
        storageClient={storageClient}
        setImagesStorageString={setImagesStorageString}
        setImagesToDisplay={setImagesToDisplay}
        mapApiKey={loaderData.mapApiKey ?? ''}
      />
    </div>
  )
}
