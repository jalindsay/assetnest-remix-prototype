import {
  Outlet,
  useLoaderData,
  useMatches,
  useNavigate,
} from '@remix-run/react'
import { Card } from '~/components/ui/Card'
import { pageTitle } from '~/styles/typography'
import { Tabs } from '~/components/ui/Tabs'
import { TextInput } from '~/components/ui/TextInput'
import { Popover } from '~/components/ui/Popover'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { CheckBox } from '~/components/ui/Checkbox'
import { useState } from 'react'
import { SelectInput } from '~/components/ui/SelectInput'
import type { LoaderFunctionArgs } from '@remix-run/node'
import { getSession } from '~/cookies'
import { getMembershipWithUserAndOrganisation } from '~/endpoints/membership'
import { getAssetsWithOrgId } from '~/endpoints/asset'
import { getStorage } from '~/utils/storage.server'
import { getUserId } from '~/endpoints/user'
import { Pagination } from '~/components/ui/Pagination'
import { filterChip } from '~/styles/genericStyles'

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const storageClient = getStorage()
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  const user = await getMembershipWithUserAndOrganisation({
    userId: userId ?? -1,
    orgId: parseInt(params.orgId ?? '-1'),
  })
  const assetManageRole = user?.role.assetManage
  const assets = await getAssetsWithOrgId({
    orgId: parseInt(params.orgId ?? '-1'),
  })
  const imagePublicUrl = storageClient.from('assetnest').getPublicUrl('')

  const assetUsers = await Promise.all(
    assets.map(async (asset) => {
      return {
        updatedUser: await getUserId(
          asset.properties.find(
            (property) => property.categoryProperty.label === 'Modified By',
          )?.integerValue ?? -1,
        ),
        createUser: await getUserId(
          asset.properties.find(
            (property) => property.categoryProperty.label === 'Created By',
          )?.integerValue ?? -1,
        ),
      }
    }),
  )

  return {
    assetManageRole,
    assets,
    assetUsers,
    imagePublicUrl: imagePublicUrl.data.publicUrl,
    orgId: params.orgId ?? '-1'
  }
}
export default function AssetOverview() {
  const navigation = useNavigate()
  const loaderData = useLoaderData<typeof loader>()
  const matches = useMatches()
  const currentTabFromRoute = matches[matches.length - 1].pathname.split('/')[2]

  const [filterAssetsStatus, setFilterAssetsStatus] = useState<{
    [key: string]: boolean
  }>({})

  const [searchText, setSearchText] = useState('')
  const filterPopoverContent = (
    <div className="flex">
      <ul>
        <li>Status</li>
        <li key={1} className="p-2">
          <CheckBox
            uniqueName={'Active'}
            onChange={() => {
              setFilterAssetsStatus((filter) => {
                const newValue = { ...filter }
                newValue['active'] = !newValue['active']
                return newValue
              })
            }}
            checked={filterAssetsStatus['active']}
            label={'Active'}
          />
        </li>
        <li key={2} className="p-2">
          <CheckBox
            uniqueName={'inactive'}
            onChange={() => {
              setFilterAssetsStatus((filter) => {
                const newValue = { ...filter }
                newValue['inactive'] = !newValue['inactive']
                return newValue
              })
            }}
            checked={filterAssetsStatus['inactive']}
            label={'Inactive'}
          />
        </li>
      </ul>
    </div>
  )

  const assets = loaderData.assets
  const activeAssetsLength = assets.filter((asset) =>
    asset.properties.find(
      (property) =>
        property.categoryProperty.label === 'Status' &&
        property.stringValue === 'active',
    ),
  ).length

  const assetsFiltered = assets.filter((asset) => {
    const filterAssetsStatusKeys = Object.keys(filterAssetsStatus)
    const hasSearchQueryInName = asset.properties.find(
      (property) =>
        property.categoryProperty.label === 'Asset Name' &&
        property.stringValue?.includes(searchText),
    )
    let isStatusInFilter = true

    if (
      filterAssetsStatusKeys.filter((value) => filterAssetsStatus[value])
        .length !== 0
    ) {
      const assetStatus = asset.properties.find(
        (property) => property.categoryProperty.label === 'Status',
      )
      isStatusInFilter = !!filterAssetsStatusKeys.find(
        (key) => filterAssetsStatus[key] && assetStatus?.stringValue === key,
      )
    }
    return hasSearchQueryInName && isStatusInFilter
  })

  const [currentPage, setCurrentPage] = useState(0)
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] =
    useState(10)

  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage
  const endCurrentPageIndex =
    startCurrentPageIndex + numberRecordsToDisplayOnPage
  const assetsToDisplayOnList = assetsFiltered.slice(
    startCurrentPageIndex,
    endCurrentPageIndex,
  )
  return (
    <div>
      <div className="flex">
        <h1 className={`${pageTitle}`}>Assets</h1>{' '}
        {loaderData.assetManageRole && (
          <div className="ml-auto p-1 md:hidden">
            <Button
              noPadding
              size="icon"
              onClick={() => {
                navigation('../createAsset', {
                  relative: 'path',
                })
              }}
            >
              <Icon icon="add" color="white" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex w-full items-center py-5">
        <div className="mr-auto md:hidden">
          <span className=" text-xl font-bold">{assets.length}</span>{' '}
          <span className="">Total Assets</span>
        </div>
        <div className=" ml-auto md:hidden">
          <span className=" text-xl font-bold">{activeAssetsLength}</span>{' '}
          <span className="">Total Active</span>
        </div>
        <div className="pr-6 max-md:hidden">
          <span className=" text-xl font-bold">{assets.length}</span>{' '}
          <span className="">Total Assets</span>
        </div>
        <div className=" max-md:hidden">
          <span className=" text-xl font-bold">{activeAssetsLength}</span>{' '}
          <span className="">Total Active</span>
        </div>
      </div>
      <div className="flex w-full items-center ">
        <div className=" w-96">
          <TextInput
            value={searchText}
            onChange={(newValue) => {
              setSearchText(newValue)
            }}
            placeholder="Search Assets"
            noPadding
          />
        </div>
        <div className=" pl-4 max-md:hidden">
          <Popover
            trigger={
              <Button
                className="w-32"
                onClick={() => {}}
                variant="outline"
                isPopoverTrigger
              >
                <Icon icon="add" /> Add Filter
              </Button>
            }
            contentClassName={`w-[13rem]]`}
            content={filterPopoverContent}
          />
        </div>
        <div className="max-md:hidden">
          {Object.keys(filterAssetsStatus)
            .filter((key) => filterAssetsStatus[key])
            .map((key, index) => {
              return (
                <div
                  className="inline-block p-2 max-md:hidden"
                  key={index}
                >
                  <div
                    className={`${filterChip}`}
                    onClick={async () => {
                      setFilterAssetsStatus((filter) => {
                        const newValue = {...filter}
                        newValue[key] = false
                        return newValue
                      })
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                    <Icon icon="close" />
                  </div>
                </div>
              )
            })}
        </div>
        <div className="p-2 md:hidden">
          <Popover
            trigger={
              <Button
                noPadding
                className="w-12"
                onClick={() => {}}
                variant="outline"
                isPopoverTrigger
              >
                <Icon icon="filter" />
              </Button>
            }
            contentClassName={`w-[10rem]`}
            content={filterPopoverContent}
          />
        </div>

        {loaderData.assetManageRole && (
          <div className=" ml-auto max-md:hidden">
            <Button
              onClick={() => {
                navigation('/' + loaderData.orgId + '/createAsset', {
                  relative: 'path',
                })
              }}
            >
              Add New Asset
            </Button>
          </div>
        )}
      </div>
      <div className="flex items-center py-2">
        {currentTabFromRoute === 'assetList' && (
          <div className=" w-40 pr-3 max-md:hidden">
            <SelectInput
              noPadding
              valueCurrent={numberRecordsToDisplayOnPage.toString()}
              onChange={(newValue) => {
                setCurrentPage(0)
                setNumberRecordsToDisplayOnPage(parseInt(newValue))
              }}
              possibleValues={[
                { value: '10', valueLabel: '10' },
                { value: '50', valueLabel: '50' },
                { value: '100', valueLabel: '100' },
              ]}
            />
          </div>
        )}
        <div>Results: {assetsFiltered.length}</div>
      </div>
      <div className="flex">
        <Tabs
          defaultValue={currentTabFromRoute}
          className="w-full"
          onValueChange={(value: string) =>
            navigation('/' + loaderData.orgId + '/' + value, {
              relative: 'path',
            })
          }
          tabs={[
            { value: 'assetList', valueLabel: 'List View' },
            { value: 'assetMap', valueLabel: 'Map View' },
          ]}
        />
        <div className="w-20 pr-3 md:hidden ">
          {currentTabFromRoute === 'assetList' && (
            <SelectInput
              noPadding
              valueCurrent={numberRecordsToDisplayOnPage.toString()}
              onChange={(newValue) => {
                setCurrentPage(0)
                setNumberRecordsToDisplayOnPage(parseInt(newValue))
              }}
              possibleValues={[
                { value: '10', valueLabel: '10' },
                { value: '50', valueLabel: '50' },
                { value: '100', valueLabel: '100' },
              ]}
            />
          )}
        </div>
      </div>
      <Card innerClassName="w-full">
        <Outlet
          context={{
            assets:
              currentTabFromRoute === 'assetList'
                ? assetsToDisplayOnList
                : assetsFiltered,
            imagePublicUrl: loaderData.imagePublicUrl,
            assetManageRole: loaderData.assetManageRole,
            assetUsers: loaderData.assetUsers,
          }}
        />
      </Card>
      {currentTabFromRoute === 'assetList' &&
        Math.ceil(assetsFiltered.length / numberRecordsToDisplayOnPage) - 1 >
          1 && (
          <div className="flex items-center justify-center py-4">
            <Pagination
              totalNumberPages={
                Math.ceil(
                  assetsFiltered.length / numberRecordsToDisplayOnPage,
                ) - 1
              }
              selectedPage={currentPage}
              onPrevClick={() => {
                setCurrentPage((currentValue) =>
                  currentValue === 0 ? 0 : currentValue - 1,
                )
              }}
              onNextClick={() => {
                setCurrentPage((currentValue) => {
                  return currentValue ===
                    Math.ceil(
                      assetsFiltered.length / numberRecordsToDisplayOnPage,
                    ) -
                      1
                    ? 0
                    : currentValue + 1
                })
              }}
              goPage={(newPage) => {
                setCurrentPage(newPage)
              }}
            />
          </div>
        )}
      <div className="h-20" />
    </div>
  )
}
