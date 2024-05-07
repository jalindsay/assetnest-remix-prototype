import type { ActionFunctionArgs} from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { pageTitle } from '~/styles/typography'
import { v4 as uuid } from 'uuid'
import { getAssetsCategoriesData } from '~/endpoints/assetCategory'
import { getAssetWithAssetIdAndOrgId } from '~/endpoints/asset'
import { getSession } from '~/cookies'
import { getStorageClient } from '~/utils/storageClient'
import { CreateEditAsset } from '~/components/page/createEditAsset/CreateEditAsset'
import { createAssetFromForm } from '~/utils/assetActions/createAssetFromForm'

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

  await createAssetFromForm({
    body: body,
    userId: userId ?? -1,
    orgId: parseInt(params.orgId ?? ''),
  })

  return redirect('/' + (params.orgId ?? '') + '/assetList')
}

export const loader = async () => {
  const assetCategoriesData = await getAssetsCategoriesData();

  return {
    assetCategoriesData,
    STORAGE_URL: process.env.STORAGE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    mapApiKey: process.env.MAP_API_KEY,
  };
};

export default function CreateAsset() {
  const loaderData = useLoaderData<typeof loader>()
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
  }>({ 'Platform ID': uuid() })

  const [selectedAssetCategoryId, setSelectedAssetCategoryId] = useState(
    loaderData.assetCategoriesData.find(
      (assetCategory) => assetCategory.name === 'Default',
    )?.id,
  )
  const [imagesToDisplay, setImagesToDisplay] = useState<string[]>([])
  const [imagesStoragePathData, setImagesStorageString] = useState<string[]>([])
  return (
    <div className="self-start py-4 md:py-8">
      <div className=" text-gray-500">
        Asset / <span className=" font-semibold underline">New Asset</span>
      </div>
      <h1 className={`${pageTitle} p-1`}>New Asset</h1>
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
