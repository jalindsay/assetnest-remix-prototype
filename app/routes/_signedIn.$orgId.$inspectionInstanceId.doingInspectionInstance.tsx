import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { secondaryText, subPageTitle } from '~/styles/typography'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import type {
  TypeGetInspectionInstance} from '~/endpoints/inspectionInstance';
import {
  getInspectionInstance,
  updateInspectionInstance,
} from '~/endpoints/inspectionInstance'
import { getSession } from '~/cookies'
import { getMembershipWithUserAndOrganisation } from '~/endpoints/membership'
import { Card } from '~/components/ui/Card'
import { Tabs } from '~/components/ui/Tabs'
import { downloadFile } from '~/utils/downloadFile'
import { getStorageClient } from '~/utils/storageClient'
import { v4 as uuid } from 'uuid'
import { TextArea } from '~/components/ui/TextArea'
import SignatureCanvas from 'react-signature-canvas'
import { getUserId, updateUser } from '~/endpoints/user'
import { getStorage } from '~/utils/storage.server'

export async function action({ request, params }: ActionFunctionArgs) {
  const body = await request.formData()
  const formType = body.get('_action') as 'newSignature' | 'completeInspection'
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  switch (formType) {
    case 'newSignature': {
      const storageClient = getStorage()
      let signatureData = body.get('signatureData') as any
      signatureData = Buffer.from(signatureData.split(',')[1], 'base64')
      const options = { type: 'image/png' }
      signatureData = new Blob([signatureData], options)
      const signatureUuid = uuid()
      await storageClient
        .from('assetnest')
        .upload('signature/' + signatureUuid, signatureData)
      await updateUser({
        userId: userId ?? -1,
        signature: signatureUuid,
      })
      const newSignatureUrl = storageClient
        .from('assetnest')
        .getPublicUrl('signature/' + signatureUuid ?? '')
      return { newSignatureUrl: newSignatureUrl.data.publicUrl }
    }
    case 'completeInspection': {
      const passFailString = body.get('passFail') as string
      const passFail = passFailString === 'true'
      const comment = body.get('comment') as string
      const imagesStoragePathData = body.getAll('images[]') as string[]

      await updateInspectionInstance({
        id: parseInt(params.inspectionInstanceId ?? ''),
        updatedByUserID: userId ?? -1,
        completedByUserID: userId ?? -1,
        Status: 'COMPLETED',

        inspectionInstanceAnswers: [
          {
            booleanValue: passFail,
            inspectionFormQuestionId: 10,
          },
          {
            stringValue: comment,
            inspectionFormQuestionId: 11,
          },
          {
            stringArrayValue: imagesStoragePathData,
            inspectionFormQuestionId: 12,
          },
        ],
      })
      return null
    }
  }
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const inspectionInstance = await getInspectionInstance({
    inspectionInstanceId: parseInt(params.inspectionInstanceId ?? ''),
  })
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  const storageClient = getStorage()
  const currentMembership = await getMembershipWithUserAndOrganisation({
    userId: userId ?? -1,
    orgId: parseInt(params.orgId ?? ''),
  })
  if (!currentMembership?.role.inspectionCarryOut) {
    return redirect('/' + (params.orgId ?? '') + '/inspections/list')
  }

  const currentUser = await getUserId(userId ?? -1)
  const signatureUrlData = currentUser?.signature
    ? storageClient
        .from('assetnest')
        .getPublicUrl('signature/' + currentUser.signature ?? '') ?? ''
    : undefined

  const signatureImg = signatureUrlData?.data?.publicUrl
  if (
    inspectionInstance?.Status !== 'STARTED' ||
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
    signatureImg,
  }
}

export default function UnStartedInspectionInstance() {
  const loaderData = useLoaderData() as {
    STORAGE_URL: string
    SUPABASE_SERVICE_ROLE_KEY: string
    mapApiKey: string
    inspectionInstance: TypeGetInspectionInstance
    inspectionManage: boolean
    signatureImg: string
  }

  const actionData = useActionData<typeof action>()
  const submit = useSubmit()

  useEffect(() => {
    setSignatureUrl(actionData?.newSignatureUrl ?? undefined)
  }, [actionData?.newSignatureUrl])

  const [displayTab, setDisplayTab] = useState('Inspection')
  const [filesOnInstance, setFilesOnInstance] =
    useState<{ name: string; size: string; savedPath: string }[]>()
  const navigation = useNavigate()

  const storageClient = getStorageClient(
    loaderData.STORAGE_URL,
    loaderData.SUPABASE_SERVICE_ROLE_KEY,
  )
  const [imagesToDisplay, setImagesToDisplay] = useState<string[]>([])
  const [passFail, setPassFail] = useState<boolean>()
  const [comment, setComment] = useState<string>('')
  const [imagesStoragePathData, setImagesStorageString] = useState<string[]>([])
  const [openCanvas, setOpenCanvas] = useState(false)
  const sigCanvas = useRef<SignatureCanvas>(null)
  const [signatureUrl, setSignatureUrl] = useState<string | undefined>(
    loaderData.signatureImg,
  )
  useEffect(() => {
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

  return (
    <div className="self-start py-4 md:py-8">
      <div className=" text-gray-500 ">
        <span
          className="hover:cursor-pointer hover:underline"
          onClick={() => {
            navigation('../inspections/list')
          }}
        >
          Close
        </span>
      </div>

      <div className="flex w-full flex-col ">
        <Card innerClassName="p-4 md:p-8  w-full">
          <div className={`${subPageTitle}`}>
            {loaderData.inspectionInstance?.inspectionReference}
          </div>
          <div className="py-2">
            Asset:{' '}
            <span
              className=" text-sky-400 hover:cursor-pointer hover:underline"
              onClick={() => {
                navigation(
                  '../' +
                    loaderData.inspectionInstance?.asset?.id +
                    '/viewAsset',
                )
              }}
            >
              {loaderData.inspectionInstance?.asset?.properties.find(
                (property) => property.categoryProperty.label === 'Asset Name',
              )?.stringValue ?? ''}
            </span>
          </div>
        </Card>
        <Tabs
          defaultValue={'assetList'}
          className="w-full"
          onValueChange={(value: string) => setDisplayTab(value)}
          value={displayTab}
          tabs={[
            { value: 'Inspection', valueLabel: 'Inspection' },
            { value: 'Defects', valueLabel: 'Defects' },
            { value: 'Procedures', valueLabel: 'Procedures' },
          ]}
        />

        {displayTab === 'Inspection' && (
          <div>
            {loaderData.inspectionInstance?.inspectionForm.inspectionFormQuestion.find(
              (question) => question.questionType === 'PassFail',
            ) && (
              <Card innerClassName="p-4 w-full">
                <div className="flex w-full flex-col md:w-80">
                  <div className="w-full pb-2  md:w-80">
                    <Button
                      className="w-full"
                      variant={passFail ? 'outlineGreen' : 'outline'}
                      onClick={() => {
                        setPassFail(true)
                      }}
                    >
                      Pass
                    </Button>
                  </div>
                  <div className="w-full md:w-80">
                    <Button
                      className="w-full"
                      variant={passFail === false ? 'outlineRed' : 'outline'}
                      onClick={() => {
                        setPassFail(false)
                      }}
                    >
                      Fail
                    </Button>
                  </div>
                </div>
              </Card>
            )}
            <Card innerClassName="p-4 w-full">
              <div className="w-full">
                <div className={subPageTitle}>Media</div>
                <div className={secondaryText}>
                  Add images of your inspection here. Defects should be reported
                  under the defect tab.
                </div>
                <div className="z-0 w-full justify-center rounded border-2 hover:cursor-pointer  md:w-80 ">
                  <label htmlFor="file" className="flex w-full">
                    <div className=" flex w-full flex-row items-center justify-center p-1 hover:cursor-pointer">
                      <Icon icon="addMediaImage" className="p-1" />
                      <div>Add Photos</div>
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
                              const pathToImage =
                                'inspectionInstance/' + imageID
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
                          setImagesToDisplay([
                            ...imagesToDisplay,
                            ...toSaveDisplay,
                          ])
                        }
                      }}
                      multiple
                      className=" invisible hover:cursor-pointer"
                    />
                  </div>
                </div>
                <div className="max-sm:flex max-sm:flex-wrap max-sm:justify-center">
                  {imagesToDisplay.map((imageToDisplay, index) => {
                    return (
                      <div key={index} className="inline-flex flex-wrap  p-2">
                        <div
                          className="z-0  h-20  w-20 cursor-pointer justify-center rounded border sm:h-40 sm:w-40"
                          onClick={() => {
                            const indexToRemove = index
                            const newImagesStoragePathData = [
                              ...imagesStoragePathData,
                            ]
                            const newImagesToDisplay = [...imagesToDisplay]
                            const pathToImage =
                              newImagesStoragePathData[indexToRemove]
                            newImagesStoragePathData.splice(indexToRemove, 1)
                            newImagesToDisplay.splice(indexToRemove, 1)
                            storageClient
                              .from('assetnest')
                              .remove([pathToImage])
                            setImagesStorageString([
                              ...newImagesStoragePathData,
                            ])
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
                </div>
              </div>
              <div className="w-full  md:w-80">
                <div className={subPageTitle}>Comments</div>
                <TextArea
                  noPadding
                  onChange={(newValue) => {
                    setComment(newValue)
                  }}
                  value={comment}
                />
              </div>
              <div>
                <div className={subPageTitle}>Signature</div>
                <div className={secondaryText}>
                  To verify your identity, add your signature below. This will
                  be saved to your profile and allow for more efficient
                  inspections.
                </div>
                {signatureUrl ? (
                  <div className="h-52 w-full  border md:w-80 ">
                    <img
                      src={signatureUrl}
                      alt="signature"
                      className="max-h-52"
                    />
                  </div>
                ) : openCanvas ? (
                  <div className="w-full  md:w-80">
                    <div className=" h-52 ">
                      <SignatureCanvas
                        penColor="black"
                        canvasProps={{
                          className:
                            'bg-white border border-gray-300 rounded-md h-full w-full',
                        }}
                        ref={sigCanvas}
                      />
                    </div>
                    <div className="flex justify-center space-x-4 py-8">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setOpenCanvas(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => sigCanvas?.current?.clear()}
                      >
                        Clear
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => {
                          const URL = sigCanvas?.current
                            ?.getCanvas()
                            .toDataURL('image/png')
                          const formData = new FormData()
                          formData.set('_action', 'newSignature')
                          formData.set('signatureData', URL ?? '')
                          submit(formData, { method: 'post' })
                        }}
                      >
                        Create
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex  h-52 w-full items-center justify-center border md:w-80 ">
                    <Button
                      variant="outline"
                      onClick={() => setOpenCanvas(true)}
                    >
                      Create Signature
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}
        {displayTab === 'Defects' && <>Defects Coming Soon</>}
        {displayTab === 'Procedures' && (
          <Card innerClassName="p-8 w-full">
            {filesOnInstance && filesOnInstance.length > 0 ? (
              filesOnInstance?.map((file, index) => (
                <div
                  key={index}
                  className="flex w-full items-center  p-1  md:w-80"
                  id={'file' + index}
                >
                  <div className="pr-2">
                    <Icon icon="Folder" />
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
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full items-center  p-1  md:w-80">
                <div>No files attached to this inspection</div>
              </div>
            )}
          </Card>
        )}
      </div>
      <div className="flex justify-center p-2">
        <Button
          disabled={passFail === undefined}
          className=" w-full md:w-80"
          onClick={() => {
            const formData = new FormData()
            formData.set('_action', 'completeInspection')
            formData.set('passFail', passFail?.toString() ?? '')
            formData.set('comment', comment)
            imagesStoragePathData.forEach((imageStoragePath) => {
              formData.set('images[]', imageStoragePath)
            })
            submit(formData, { method: 'post' })
          }}
        >
          Complete Inspection
        </Button>
      </div>
    </div>
  )
}
