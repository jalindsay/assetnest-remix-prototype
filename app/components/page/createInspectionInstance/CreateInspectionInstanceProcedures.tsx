import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { secondaryText } from '~/styles/typography'
import { v4 as uuid } from 'uuid'
import { getStorageClient } from '~/utils/storageClient'
import { formatBytes } from '~/utils/formatFileSizes'
import { Spinner } from '~/components/ui/Spinner'
import { useRef } from 'react'

interface IProps {
  setFilesOnInstance: (
    newFileNames: {
      name: string
      size: string
      savedPath: string
      uploading: boolean
    }[],
  ) => void
  filesOnInstance: {
    name: string
    size: string
    savedPath: string
    uploading: boolean
  }[]
  SUPABASE_SERVICE_ROLE_KEY: string
  STORAGE_URL: string
}

export const CreateInspectionInstanceProcedures = ({
  filesOnInstance,
  setFilesOnInstance,
  SUPABASE_SERVICE_ROLE_KEY,
  STORAGE_URL,
}: IProps) => {
  const storageClient = getStorageClient(STORAGE_URL, SUPABASE_SERVICE_ROLE_KEY)
  const fileInputRef = useRef(null)
  return (
    <div>
      Add files and/or images of your inspection procedure here.
      <div className="pt-4 ">
        <Button
          onClick={() => {
            if (fileInputRef.current) {
              ;(fileInputRef.current as HTMLInputElement).click()
            }
          }}
          variant="outline"
          className="flex w-full justify-start md:w-32 md:justify-center  "
        >
          Add Files <Icon icon="addFolder" className="pl-2" />
        </Button>
      </div>
      <div className="hidden">
        <input
          ref={fileInputRef}
          id="file"
          type="file"
          accept=".png, .jpg, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
          name="imageData"
          onChange={async (e) => {
            if (e.target.files) {
              const toSaveStoragePaths: string[] = []
              const tempFilesOnInstance = [...filesOnInstance]
              const allFiles: File[] = []

              Array.from(e.target.files).map(async (file) => {
                const fileId = uuid()
                const pathToImage = 'files/' + fileId + '/' + file.name
                tempFilesOnInstance.push({
                  name: file.name,
                  size: formatBytes(file.size),
                  savedPath: pathToImage,
                  uploading: true,
                })
                toSaveStoragePaths.push(pathToImage)
                allFiles.push(file)
              })
              setFilesOnInstance(tempFilesOnInstance)
              const results = await Promise.all(
                tempFilesOnInstance.map(async (file, index) => {
                  await storageClient
                    .from('assetnest')
                    .upload(file.savedPath, allFiles[index])
                  file.uploading = false
                  return file
                }),
              )
              setFilesOnInstance(results)
            }
          }}
          multiple
          className=" invisible hover:cursor-pointer"
        />
      </div>
      <div className="flex w-full flex-col pt-8">
        {filesOnInstance?.map((file, index) => (
          <div
            className="flex w-full items-center  p-1 md:w-96"
            id={'file' + index}
            key={index}
          >
            <div className="pr-2">
              {file.uploading ? <Spinner /> : <Icon icon="Folder" />}
            </div>
            <div className="flex flex-col">
              <div>{file.name}</div>
              <div className={`${secondaryText}`}>{file.size}</div>
            </div>
            <Icon
              className="ml-auto pl-2"
              icon="bin"
              onClick={async () => {
                const newFilesOnInstance = [...filesOnInstance]
                newFilesOnInstance[index].uploading = true
                setFilesOnInstance(newFilesOnInstance)
                await storageClient.from('assetnest').remove([file.savedPath])
                const newerFilesOnInstance = [...newFilesOnInstance]
                newerFilesOnInstance.splice(index, 1)
                setFilesOnInstance(newerFilesOnInstance)
              }}
            />
            <input
              type="hidden"
              value={file.savedPath}
              name={'FilePathsToSave[]'}
            />
            <input type="hidden" value={file.size} name={'FileSizesToSave[]'} />
          </div>
        ))}
      </div>
    </div>
  )
}
