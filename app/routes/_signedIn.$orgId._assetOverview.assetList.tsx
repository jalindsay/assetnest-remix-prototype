import { useOutletContext, useSubmit, useNavigate } from '@remix-run/react'
import { CheckBox } from '~/components/ui/Checkbox'
import type { rowType } from '~/components/ui/Table';
import { Table } from '~/components/ui/Table'
import { useState } from 'react'
import { importantText, secondaryText, tableHeader } from '~/styles/typography'
import type { TypeGetAssetsWithOrgId} from '~/endpoints/asset';
import { deleteAsset } from '~/endpoints/asset'
import type { User } from '@prisma/client'
import { DropdownMenu } from '~/components/ui/DropdownMenu'
import { Icon } from '~/components/ui/Icon'
import { CircularProgressBar } from '~/components/ui/CircularProgressBar'
import {
  chip,
  chipGrayDarkColor,
  chipGreenColor,
  chipRedColor,
} from '~/styles/genericStyles'
import type { ActionFunctionArgs } from '@remix-run/node'
import Alert from '~/components/ui/Alert'
import Button from '~/components/ui/Button'
import { TableSelectBottomBar } from '~/components/ui/TableSelectBottomBar'

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const formType = body.get('_action') as 'deleteAsset' | 'deleteManyAssets'

  switch (formType) {
    case 'deleteAsset': {
      const assetId = body.get('assetId') as string
      await deleteAsset({ assetId: parseInt(assetId) })
      return null
    }
    case 'deleteManyAssets': {
      const assetIdsString = body.get('assetIds') as string
      const assetIdsStringArray = assetIdsString.split('£')
      await Promise.all(
        assetIdsStringArray.map(async (assetIdString) => {
          const assetId = parseInt(assetIdString)
          await deleteAsset({ assetId })
        }),
      )
      return null
    }
  }
  return null
}

export default function AssetList() {
  const {
    assets,
    assetManageRole,
    imagePublicUrl,
    assetUsers,
  }: {
    assets: TypeGetAssetsWithOrgId
    assetManageRole: boolean
    imagePublicUrl: string
    assetUsers: { updatedUser: User; createUser: User }[]
  } = useOutletContext()

  const [selectAll, setSelectAll] = useState(false)
  const [displayAlert, setDisplayAlert] = useState(false)
  const submit = useSubmit()
  const navigation = useNavigate()

  const [selectedRowsId, setSelectedRowsId] = useState<number[]>([])

  const rowsToDisplay: rowType[] = assets.map((asset, index) => {
    const status =
      asset.properties.find(
        (property) => property.categoryProperty.label === 'Status',
      )?.stringValue ?? ''

    const dateOptions = {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    } as const;

    const createdDate = new Date(
      asset.properties.find(
        (property) => property.categoryProperty.label === 'Created Date',
      )?.stringValue ?? '',
    ).toLocaleString('en-GB', dateOptions)

    const modifiedDate = new Date(
      asset.properties.find(
        (property) => property.categoryProperty.label === 'Modified Date',
      )?.stringValue ?? '',
    ).toLocaleString('en-GB', dateOptions)

    const assetNonInternalProperties = asset.properties.filter(
      (property) => property.categoryProperty.type !== 'INTERNAL',
    )

    const totalNumberProperties = assetNonInternalProperties?.length ?? -1
    const numberPropertiesWithValues =
      assetNonInternalProperties?.filter(
        (property) =>
          property.stringValue ||
          property.floatValue ||
          property.integerValue ||
          property.booleanValue ||
          property.latitudeValue ||
          property.longitudeValue ||
          property.stringArrayValue.length !== 0,
      ).length ?? -1

    const percent = (
      (numberPropertiesWithValues / totalNumberProperties) *
      100
    ).toFixed(0)
    return {
      onClick: () => {
        navigation('../' + asset.id + '/viewAsset', {
          relative: 'path',
        })
      },
      content: [
        {
          content: assetManageRole ? (
            <CheckBox
              uniqueName={'all'}
              checked={selectedRowsId.includes(asset.id)}
              onChange={() => {
                setSelectedRowsId((currentSelectedAssets) => {
                  setSelectAll(false)
                  if (selectedRowsId.includes(asset.id)) {
                    return currentSelectedAssets.filter(
                      (selectedAssetId) => selectedAssetId !== asset.id,
                    )
                  } else {
                    return [...currentSelectedAssets, asset.id]
                  }
                })
              }}
            />
          ) : (
            <div />
          ),
        },
        {
          content: (
            <div className="flex items-center">
              {asset.properties.find(
                (property) =>
                  property.categoryProperty.label === 'Photo Gallery',
              )?.stringArrayValue[0] && (
                <img
                  className="h-auto max-h-10 w-auto max-w-[2.5rem] pr-4 "
                  src={
                    imagePublicUrl +
                    asset.properties.find(
                      (property) =>
                        property.categoryProperty.label === 'Photo Gallery',
                    )?.stringArrayValue[0]
                  }
                  alt={''}
                />
              )}
              <div className={`${importantText}`}>
                {
                  asset.properties.find(
                    (property) =>
                      property.categoryProperty.label === 'Asset Name',
                  )?.stringValue
                }
              </div>
            </div>
          ),
        },
        {
          content: (
            <div>
              {
                asset.properties.find(
                  (property) => property.categoryProperty.label === 'Asset ID',
                )?.stringValue
              }
            </div>
          ),
        },
        {
          content: (
            <div>
              {
                asset.properties.find(
                  (property) =>
                    property.categoryProperty.label === 'Number of Assets',
                )?.integerValue
              }
            </div>
          ),
          align: 'right',
        },
        {
          content: (
            <div>
              <div
                className={`${
                  status === 'active'
                    ? chipGreenColor
                    : status === 'inactive'
                    ? chipGrayDarkColor
                    : chipRedColor
                } ${chip}`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </div>
            </div>
          ),
        },
        {
          content: <div>{asset.category.name}</div>,
        },
        {
          content: (
            <div className="flex">
              <div className="pr-4">
                {assetUsers[index].updatedUser.firstName +
                  ' ' +
                  assetUsers[index].updatedUser.lastName}
              </div>
              <div className={`${secondaryText}`}>{modifiedDate}</div>
            </div>
          ),
        },
        {
          content: (
            <div className="flex">
              <div className="pr-4">
                {assetUsers[index].createUser.firstName +
                  ' ' +
                  assetUsers[index].createUser.lastName}
              </div>
              <div className={`${secondaryText}`}>{createdDate}</div>
            </div>
          ),
        },
        {
          content: (
            <div className=" text-right">
              {asset.properties.find(
                (property) => property.categoryProperty.label === 'Value',
              )?.floatValue
                ? '£' +
                  asset.properties.find(
                    (property) => property.categoryProperty.label === 'Value',
                  )?.floatValue
                : ''}
            </div>
          ),
        },
        {
          content: (
            <div className="pl-4">
              <CircularProgressBar percent={parseInt(percent)} />
            </div>
          ),
        },
        {
          content: assetManageRole ? (
            <DropdownMenu
              triggerClassName="w-7"
              trigger={
                <Icon
                  className="w-7"
                  onClick={() => {}}
                  icon="threeDotsVertical"
                />
              }
              dropdownMenuContent={[
                {
                  displayText: (
                    <div className="flex">
                      <Icon icon="edit" className="pr-2" />
                      Edit
                    </div>
                  ),
                  onClick: () => {
                    navigation('../' + asset.id + '/editAsset', {
                      relative: 'path',
                    })
                  },
                },
                {
                  displayText: (
                    <div className="flex">
                      <Icon icon="copy" className="pr-2" />
                      Duplicate
                    </div>
                  ),
                  onClick: () => {
                    navigation('../' + asset.id + '/duplicateAsset', {
                      relative: 'path',
                    })
                  },
                },
                {
                  displayText: (
                    <div className="flex">
                      <Icon icon="share" className="pr-2" />
                      Share
                    </div>
                  ),
                  onClick: () => {
                    const pureUrl = window.location.href.replace(
                      'assetList',
                      '',
                    )
                    navigator.clipboard.writeText(
                      pureUrl + asset.id + '/viewAsset',
                    )

                    setDisplayAlert(true)
                    setTimeout(() => setDisplayAlert(false), 5000)
                  },
                },
                {
                  displayText: (
                    <div className="flex">
                      <Icon icon="bin" className="pr-2" />
                      Delete
                    </div>
                  ),
                  onClick: () => {
                    const formData = new FormData()
                    formData.set('_action', 'deleteAsset')
                    formData.set('assetId', asset.id.toString())
                    submit(formData, { method: 'post' })
                  },
                },
              ]}
            />
          ) : (
            <div />
          ),
        },
      ],
    }
  })

  const headers = [
    assetManageRole ? (
      <CheckBox
        key={'all-checkbox'}
        uniqueName={'all'}
        checked={selectAll}
        onChange={(value) => {
          setSelectAll(value)
          setSelectedRowsId(
            value
              ? assets.map((row) => row.id)
              : [],
          )
        }}
      />
    ) : (
      <div key={'empty-div'}></div>
    ),
    <div key={'asset-name'} className={`${tableHeader}`}>Asset Name</div>,
    <div key={'asset-id'} className={`${tableHeader}`}>Asset ID</div>,
    <div key={'count'} className={`${tableHeader} text-right`}>Count</div>,
    <div key={'status'} className={`${tableHeader} pl-4`}>Status</div>,
    <div key={'category'} className={`${tableHeader}`}>Category</div>,
    <div key={'last-update'} className={`${tableHeader}`}>Last Update</div>,
    <div key={'created'} className={`${tableHeader}`}>Created</div>,
    <div key={'value'} className={`${tableHeader} text-right`}>Value</div>,
    <div key={'complete'} className={`${tableHeader}`}>Complete</div>,
    <div key={'empty-div-2'}></div>,
  ].filter((header) => header);

  return (
    <>
      {displayAlert && (
        <Alert
          variant="default"
          title={'Copied Link To Clipboard'}
          onClose={() => {
            setDisplayAlert(false)
          }}
        />
      )}
      <Table headers={headers} rows={rowsToDisplay} />
      {selectedRowsId.length > 0 && (
        <TableSelectBottomBar numberSelected={selectedRowsId.length}>
          <div className=" p-2">
            <Button
              variant="outline"
              onClick={() => {
                const formData = new FormData()
                formData.set('_action', 'deleteManyAssets')
                formData.set('assetIds', selectedRowsId.join('£'))
                submit(formData, { method: 'post' })
                setSelectedRowsId([])
              }}
            >
              <Icon icon="bin" className="pr-2" />
              Delete
            </Button>
          </div>
        </TableSelectBottomBar>
      )}
    </>
  )
}
