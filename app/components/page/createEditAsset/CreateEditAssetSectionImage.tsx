import { Icon } from '~/components/ui/Icon'
import { v4 as uuid } from 'uuid'
import type { StorageClient } from '@supabase/storage-js'

interface IProps {
  imagesToDisplay: string[]
  imagesStoragePathData: string[]
  storageClient: StorageClient
  setImagesStorageString: (value: string[]) => void
  setImagesToDisplay: (value: string[]) => void
}

export const CreateAssetImageInput = ({
  imagesToDisplay,
  imagesStoragePathData,
  storageClient,
  setImagesStorageString,
  setImagesToDisplay,
}: IProps) => {
  return (
    <div className="max-sm:flex max-sm:flex-wrap max-sm:justify-center">
      {imagesToDisplay.map((imageToDisplay, index) => {
        return (
          <div key={index} className="inline-flex flex-wrap  p-2">
            <div
              className="z-0  h-20  w-20 cursor-pointer justify-center rounded border sm:h-40 sm:w-40"
              onClick={() => {
                const indexToRemove = index
                const newImagesStoragePathData = [...imagesStoragePathData]
                const newImagesToDisplay = [...imagesToDisplay]
                newImagesStoragePathData.splice(indexToRemove, 1)
                newImagesToDisplay.splice(indexToRemove, 1)
                setImagesStorageString([...newImagesStoragePathData])
                setImagesToDisplay([...newImagesToDisplay])
              }}
            >
              <input
                type="hidden"
                name={'images[]'}
                className=" hidden "
                value={imagesStoragePathData[index]}
              />
              <img className="h-full w-full" src={imageToDisplay}  alt={''}/>
            </div>
          </div>
        )
      })}
      <div className="inline-flex  justify-center p-2 align-bottom">
        <div className="z-0 h-20  w-20  justify-center rounded border bg-slate-300 hover:cursor-pointer sm:h-40 sm:w-40">
          <label htmlFor="file" className="flex h-full w-full">
            <div className=" flex w-full flex-col items-center justify-center hover:cursor-pointer">
              <Icon icon="add" className="h-10 w-10 p-1" />
              <div>Add More</div>
            </div>
          </label>
          <div className="invisible absolute rounded bg-slate-300 hover:cursor-pointer">
            <input
              id="file"
              type="file"
              accept=".png, .jpg"
              name="imageData"
              onChange={async (e) => {
                if (e.target.files) {
                  const toSaveDisplay: string[] = []
                  const toSaveStoragePaths: string[] = []
                  await Promise.all(
                    Array.from(e.target.files).map(async (file) => {
                      const newUrl = URL.createObjectURL(file)
                      toSaveDisplay.push(newUrl)
                      const imageID = uuid()
                      const pathToImage = 'asset/' + imageID
                      await storageClient
                        .from('assetnest')
                        .upload(pathToImage, file)
                      toSaveStoragePaths.push(pathToImage)
                    }),
                  )
                  setImagesStorageString([
                    ...imagesStoragePathData,
                    ...toSaveStoragePaths,
                  ])
                  setImagesToDisplay([...imagesToDisplay, ...toSaveDisplay])
                }
              }}
              multiple
              className=" invisible hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
