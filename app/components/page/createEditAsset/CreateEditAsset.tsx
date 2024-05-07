import { Form, useNavigate } from '@remix-run/react'
import { Card } from '~/components/ui/Card'
import { subPageTitle } from '~/styles/typography'
import { CreateAssetDetailsSection } from './CreateEditAssetSectionDetails'
import { CreateAssetImageInput } from './CreateEditAssetSectionImage'
import { CreateAssetMapSection } from './CreateEditAssetSectionMap'
import type { CategoryPropertyType } from '@prisma/client'
import type { StorageClient } from '@supabase/storage-js'
import Button from '~/components/ui/Button'

interface IProps {
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
  assetNameError?: string
  assetIDError?: string
  assetPropertyValues: {
    [key: string]: string | number | boolean | string[] | null
  }
  setAssetPropertyValues: (value: {
    [key: string]: string | number | boolean | string[] | null
  }) => void
  setSelectedAssetCategoryId: (value: number) => void
  selectedAssetCategoryId?: number
  imagesToDisplay: string[]
  imagesStoragePathData: string[]
  storageClient: StorageClient
  setImagesStorageString: (value: string[]) => void
  setImagesToDisplay: (value: string[]) => void
  mapApiKey: string
}

export const CreateEditAsset = ({
  assetCategoriesData,
  assetNameError,
  assetIDError,
  assetPropertyValues,
  setAssetPropertyValues,
  setSelectedAssetCategoryId,
  selectedAssetCategoryId,
  imagesToDisplay,
  imagesStoragePathData,
  storageClient,
  setImagesStorageString,
  setImagesToDisplay,
  mapApiKey,
}: IProps) => {
  const navigate = useNavigate()
  return (
    <>
      {' '}
      <div className=" max-md:hidden">
        <Form method="post" encType="multipart/form-data" onSubmit={() => {}}>
          <div className="flex ">
            <div className="w-3/5 p-2">
              <div className={`${subPageTitle} p-1`}>Details</div>

              <Card innerClassName="p-8 w-full">
                <CreateAssetDetailsSection
                  assetCategoriesData={assetCategoriesData}
                  assetNameError={assetNameError}
                  assetIDError={assetIDError}
                  assetPropertyValues={assetPropertyValues}
                  setAssetPropertyValues={setAssetPropertyValues}
                  setSelectedAssetCategoryId={setSelectedAssetCategoryId}
                  selectedAssetCategoryId={selectedAssetCategoryId}
                />
              </Card>
              <div className={`${subPageTitle} p-1`}>Image Gallery</div>
              <Card innerClassName="p-8 w-full">
                <CreateAssetImageInput
                  imagesToDisplay={imagesToDisplay}
                  imagesStoragePathData={imagesStoragePathData}
                  storageClient={storageClient}
                  setImagesStorageString={setImagesStorageString}
                  setImagesToDisplay={setImagesToDisplay}
                />
              </Card>
            </div>
            <div className=" w-2/5 p-2">
              <div className={`${subPageTitle} p-1`}>Location</div>
              <Card innerClassName="p-8 h-full w-full">
                <CreateAssetMapSection
                  assetPropertyValues={assetPropertyValues}
                  setAssetPropertyValues={setAssetPropertyValues}
                  mapApiKey={mapApiKey}
                />
              </Card>
            </div>
          </div>

          <div className="flex">
            <Button
              className="w-40 text-left hover:underline"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <div className="ml-auto">
              <Button submit className="w-40">
                Save Asset
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <div className=" md:hidden">
        <Form method="post" encType="multipart/form-data">
          <div>
            <Card innerClassName="p-4 md:p-8 w-full">
              <div className={`${subPageTitle} p-1`}>Details</div>
              <CreateAssetDetailsSection
                assetCategoriesData={assetCategoriesData}
                assetNameError={assetNameError ?? ''}
                assetIDError={assetIDError ?? ''}
                assetPropertyValues={assetPropertyValues}
                setAssetPropertyValues={setAssetPropertyValues}
                setSelectedAssetCategoryId={setSelectedAssetCategoryId}
                selectedAssetCategoryId={selectedAssetCategoryId}
              />
              <div className={`${subPageTitle} p-1`}>Image Gallery</div>
              <CreateAssetImageInput
                imagesToDisplay={imagesToDisplay}
                imagesStoragePathData={imagesStoragePathData}
                storageClient={storageClient}
                setImagesStorageString={setImagesStorageString}
                setImagesToDisplay={setImagesToDisplay}
              />
              <div className={`${subPageTitle} p-1`}>Location</div>
              <div>
                <CreateAssetMapSection
                  assetPropertyValues={assetPropertyValues}
                  setAssetPropertyValues={setAssetPropertyValues}
                  mapApiKey={mapApiKey}
                />
              </div>
            </Card>
          </div>

          <div className="flex pt-4">
            <Button
              className="w-28 text-left hover:underline sm:w-24"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <div className="ml-auto">
              <Button submit className="w-28">
                Save Asset
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}
