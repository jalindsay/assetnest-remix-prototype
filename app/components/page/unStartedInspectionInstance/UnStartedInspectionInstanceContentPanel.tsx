import { useRef } from 'react'
import Button from '~/components/ui/Button'
import { Card } from '~/components/ui/Card'
import { Icon } from '~/components/ui/Icon'
import { Spinner } from '~/components/ui/Spinner'
import { Tabs } from '~/components/ui/Tabs'
import type { TypeGetInspectionInstance } from '~/endpoints/inspectionInstance'
import {
  chip,
  chipGrayDarkColor,
  chipGreenColor,
  chipRedColor,
} from '~/styles/genericStyles'
import { secondaryText, subPageTitle } from '~/styles/typography'
import { downloadFile } from '~/utils/downloadFile'
import { getTimeSinceDateInFormattedString } from '~/utils/getTimeSinceDateInFormattedString'
import type { StorageClient } from '@supabase/storage-js'
import { formatBytes } from '~/utils/formatFileSizes'
import { v4 as uuid } from 'uuid'

interface IProps {
  displayTab: string
  setDisplayTab: (value: string) => void
  saveFilePathsToBackEnd: (
    filePaths: {
      name: string
      size: string
      savedPath: string
      uploading: boolean
    }[],
  ) => void
  inspectionInstance: TypeGetInspectionInstance
  filesOnInstance: {
    name: string
    size: string
    savedPath: string
    uploading: boolean
  }[]
  setFilesOnInstance: (
    filesOnInstance: {
      name: string
      size: string
      savedPath: string
      uploading: boolean
    }[],
  ) => void
  storageClient: StorageClient
}

export const UnStartedInspectionInstanceContentPanel = ({
  displayTab,
  setDisplayTab,
  inspectionInstance,
  filesOnInstance,
  storageClient,
  setFilesOnInstance,
  saveFilePathsToBackEnd,
}: IProps) => {
  const inspectionAssetStatus =
    inspectionInstance?.asset?.properties.find(
      (property) => property.categoryProperty.label === 'Status',
    )?.stringValue ?? ''
  const fileInputRef = useRef(null)
  return (
    <>
      <Tabs
        defaultValue={displayTab}
        className="w-full pt-4"
        onValueChange={(value: string) => setDisplayTab(value)}
        value={displayTab}
        tabs={[
          { value: 'Detail', valueLabel: 'Detail' },
          { value: 'Procedures', valueLabel: 'Procedures' },
          { value: 'Series', valueLabel: 'Series' },
        ]}
      />
      <Card innerClassName={'p-4 w-full'}>
        {displayTab === 'Detail' ? (
          <div>
            <div className={`${subPageTitle}`}>Detail</div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold">Platform ID :</div>
              <div className=" break-normal	">
                {inspectionInstance?.PlatformID}
              </div>
            </div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold"> Count : </div>
              {inspectionInstance?.asset?.properties.find(
                (property) =>
                  property.categoryProperty.label === 'Number of Assets',
              )?.integerValue ?? 0}
            </div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold"> Status : </div>
              <div
                className={`${
                  inspectionAssetStatus === 'active'
                    ? chipGreenColor
                    : inspectionAssetStatus === 'inactive'
                    ? chipGrayDarkColor
                    : chipRedColor
                } ${chip}`}
              >
                {inspectionAssetStatus.charAt(0).toUpperCase() +
                  inspectionAssetStatus.slice(1)}
              </div>
            </div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold"> Category : </div>
              <div>{inspectionInstance?.inspectionForm.name}</div>
            </div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold"> Last Updated :</div>
              <div className="flex flex-col">
                <div>
                  {inspectionInstance?.updatedBy.firstName +
                    ' ' +
                    inspectionInstance?.updatedBy.lastName}
                </div>
                <div className={`${secondaryText}`}>
                  {getTimeSinceDateInFormattedString(
                    new Date(inspectionInstance?.updatedAt ?? ''),
                  )}
                </div>
              </div>
            </div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold"> Created :</div>
              <div className="flex flex-col">
                <div>
                  {inspectionInstance?.createdBy.firstName +
                    ' ' +
                    inspectionInstance?.createdBy.lastName}
                </div>
                <div className={`${secondaryText}`}>
                  {getTimeSinceDateInFormattedString(
                    new Date(inspectionInstance?.createdAt ?? ''),
                  )}
                </div>
              </div>
            </div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold">Longitude : </div>{' '}
              {inspectionInstance?.LocationLng}
            </div>
            <div className="flex py-2">
              <div className=" w-44 font-semibold">Latitude : </div>{' '}
              {inspectionInstance?.LocationLat}
            </div>
          </div>
        ) : displayTab === 'Procedures' ? (
          <div>
            <div className={`${subPageTitle}`}>Procedures</div>
            <div className="flex w-full flex-col pt-2">
              <div className=" ml-auto  ">
                <div className="hidden md:flex">
                  <Button
                    onClick={() => {
                      if (fileInputRef.current) {
                        ;(fileInputRef.current as HTMLInputElement).click()
                      }
                    }}
                    variant="outline"
                    className="flex w-full justify-start"
                  >
                    Add Files <Icon icon="addFolder" className="pl-2" />
                  </Button>
                </div>
                <div className="flex md:hidden">
                  <Button
                    onClick={() => {
                      if (fileInputRef.current) {
                        ;(fileInputRef.current as HTMLInputElement).click()
                      }
                    }}
                    variant="outline"
                    size="icon"
                  >
                    <Icon icon="addFolder" />
                  </Button>
                </div>
              </div>
              <div className="hidden">
                <input
                  ref={fileInputRef}
                  id="file"
                  type="file"
                  accept=".png, .jpg, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
                  name="imageData"
                  onChange={async (e) => {
                    // add form submition that uploads file and adds it to the list on backend
                    if (e.target.files) {
                      const toSaveStoragePaths: string[] = []
                      const newFilesOnInstance: {
                        name: string
                        size: string
                        savedPath: string
                        uploading: boolean
                      }[] = []
                      const allFiles: File[] = []
                      Array.from(e.target.files).map(async (file) => {
                        const fileId = uuid()
                        const pathToImage = 'files/' + fileId + '/' + file.name
                        newFilesOnInstance.push({
                          name: file.name,
                          size: formatBytes(file.size),
                          savedPath: pathToImage,
                          uploading: true,
                        })
                        toSaveStoragePaths.push(pathToImage)
                        allFiles.push(file)
                      })
                      setFilesOnInstance([
                        ...filesOnInstance,
                        ...newFilesOnInstance,
                      ])
                      const results = await Promise.all(
                        newFilesOnInstance.map(async (file, index) => {
                          if (file.uploading) {
                            await storageClient
                              .from('assetnest')
                              .upload(file.savedPath, allFiles[index])
                          }
                          file.uploading = false
                          return file
                        }),
                      )
                      saveFilePathsToBackEnd([...filesOnInstance, ...results])
                    }
                  }}
                  multiple
                  className=" invisible hover:cursor-pointer"
                />
              </div>
              {filesOnInstance.map((file, index) => (
                <div
                  className="flex w-full items-center  p-1 "
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
                  <div className="ml-auto flex flex-row items-end">
                    <div className="pl-2">
                      <Icon
                        className=" hover:cursor-pointer"
                        icon="download"
                        onClick={async () => {
                          await downloadFile(
                            storageClient,
                            file.savedPath,
                            file.name,
                          )
                        }}
                      />
                    </div>
                    <div className="pl-2">
                      <Icon
                        className=" hover:cursor-pointer"
                        icon="bin"
                        onClick={async () => {
                          // do submit and remove this file from the list
                          const newFilesOnInstance = [...filesOnInstance]
                          newFilesOnInstance[index].uploading = true
                          setFilesOnInstance(newFilesOnInstance)
                          await storageClient
                            .from('assetnest')
                            .remove([file.savedPath])
                          const newerFilesOnInstance = [...newFilesOnInstance]
                          newerFilesOnInstance.splice(index, 1)
                          saveFilePathsToBackEnd(newerFilesOnInstance)
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={`${subPageTitle}`}>Series</div> Coming Soon
          </div>
        )}
      </Card>
    </>
  )
}
