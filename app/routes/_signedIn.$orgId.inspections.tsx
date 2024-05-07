import type { LoaderFunctionArgs } from '@remix-run/node'
import {
  Outlet,
  useLoaderData,
  useLocation,
  useMatches,
  useNavigate,
  json
} from '@remix-run/react'
import { useState } from 'react'
import Button from '~/components/ui/Button'
import { Card } from '~/components/ui/Card'
import { CheckBox } from '~/components/ui/Checkbox'
import { Icon } from '~/components/ui/Icon'
import { Pagination } from '~/components/ui/Pagination'
import { Popover } from '~/components/ui/Popover'
import { SelectInput } from '~/components/ui/SelectInput'
import { Tabs } from '~/components/ui/Tabs'
import { TextInput } from '~/components/ui/TextInput'
import { getSession } from '~/cookies'
import {
  getInspectionByOrgId,
} from '~/endpoints/inspectionInstance'
import { getMembershipWithUserAndOrganisation } from '~/endpoints/membership'
import { filterChip } from '~/styles/genericStyles'
import { pageTitle } from '~/styles/typography'

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  const membership = await getMembershipWithUserAndOrganisation({
    userId: userId ?? -1,
    orgId: parseInt(params.orgId ?? '-1'),
  })
  const inspections = await getInspectionByOrgId({
    orgId: parseInt(params.orgId ?? ''),
  })

  return json({
    inspections: inspections,
    inspectionManageRole: membership?.role.inspectionManage,
    orgId: params.orgId ?? '-1',
  })
}

export default function InspectionOverview() {
  const navigation = useNavigate()
  const location = useLocation()
  const defaultValue = location.pathname.split('/').pop() ?? ''
  const loaderData = useLoaderData<typeof loader>()
  const inspections = loaderData.inspections
  const orgId: any = loaderData.orgId
  const inspectionManageRole = loaderData.inspectionManageRole
  const [searchText, setSearchText] = useState('')
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] =
    useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [filterInspectionStatus, setFilterInspectionStatus] = useState<{
    [key: string]: boolean
  }>({})
  const matches = useMatches()
  const currentTabFromRoute = matches[matches.length - 1].pathname.split('/')[3]
  // Set the total inspections
  const totalInspections = inspections.length
  const completedInspections = inspections.filter((inspection) => {
    return inspection.Status.toLowerCase() === 'completed'
  }).length

  // Filter the inspection on asset name by the search text
  const filteredBySearchInspections = inspections.filter((inspection) =>
    inspection.asset?.properties
      .find((property) => property.categoryProperty.label === 'Asset Name')
      ?.stringValue?.toLowerCase()
      .includes(searchText.toLowerCase()),
  )

  // Filter inspections by status filter
  const filteredByStatusInspections = filteredBySearchInspections.filter(
    (inspection) => {
      const filterInspectionStatusKeys = Object.keys(filterInspectionStatus)
      let isStatusInFilter = true
      if (
        filterInspectionStatusKeys.filter(
          (value) => filterInspectionStatus[value],
        ).length !== 0
      ) {
        isStatusInFilter =
          filterInspectionStatus[inspection.Status.toLowerCase()] === true
      }
      return isStatusInFilter
    },
  )

  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage
  const endCurrentPageIndex =
    startCurrentPageIndex + numberRecordsToDisplayOnPage
  const inspectionsToDisplay = filteredByStatusInspections.slice(
    startCurrentPageIndex,
    endCurrentPageIndex,
  )

  const filterPopoverContent = (
    <div className="flex">
      <ul>
        <li>Status</li>
        <li key={1} className="p-2">
          <CheckBox
            uniqueName={'scheduled'}
            onChange={() => {
              setFilterInspectionStatus((filter) => {
                const newValue = { ...filter }
                newValue['scheduled'] = !newValue['scheduled']
                return newValue
              })
            }}
            checked={filterInspectionStatus['scheduled']}
            label={'Scheduled'}
          />
        </li>
        <li key={2} className="p-2">
          <CheckBox
            uniqueName={'started'}
            onChange={() => {
              setFilterInspectionStatus((filter) => {
                const newValue = { ...filter }
                newValue['started'] = !newValue['started']
                return newValue
              })
            }}
            checked={filterInspectionStatus['started']}
            label={'Started'}
          />
        </li>
        <li key={3} className="p-2">
          <CheckBox
            uniqueName={'completed'}
            onChange={() => {
              setFilterInspectionStatus((filter) => {
                const newValue = { ...filter }
                newValue['completed'] = !newValue['completed']
                return newValue
              })
            }}
            checked={filterInspectionStatus['completed']}
            label={'Completed'}
          />
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <h1 className={`${pageTitle}`}>Inspection Overview</h1>
      <div className="flex w-full items-center py-5">
        <div className="mr-auto md:mr-0 md:pr-6">
          <span className=" text-xl font-bold">{totalInspections}</span>{' '}
          <span className="">Total Inspections</span>
        </div>
        <div className="ml-auto md:ml-0">
          <span className="text-xl font-bold">{completedInspections}</span>{' '}
          <span className="">Total Completed</span>
        </div>
      </div>
      <div className="flex w-full items-center ">
        <div className="w-96">
          <TextInput
            value={searchText}
            onChange={(newValue) => {
              setSearchText(newValue)
            }}
            placeholder="Search Inspections"
            noPadding
          />
        </div>
        <div className="pl-4 max-md:hidden">
          <Popover
            trigger={
              <Button
                className="w-32"
                onClick={() => {}}
                variant="outline"
                isPopoverTrigger
              >
                <Icon icon="add" />
                Add Filter
              </Button>
            }
            contentClassName={`w-[13rem]`}
            content={filterPopoverContent}
          />
        </div>
        <div className="max-md:hidden">
          {Object.keys(filterInspectionStatus)
            .filter((key) => filterInspectionStatus[key])
            .map((key, index) => {
              return (
                <div
                  className="inline-block p-2 max-md:hidden"
                  key={index}
                >
                  <div
                    className={`${filterChip}`}
                    onClick={async () => {
                      setFilterInspectionStatus((filter) => {
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
        <div className=" ml-auto max-md:hidden">
          <Button
            onClick={() => {
              navigation('/' + loaderData.orgId + '/createInspectionInstance', {})
            }}
          >
            Create New Inspection
          </Button>
        </div>
      </div>
      <div className="flex items-center py-2">
        {currentTabFromRoute === 'list' && (
          <div className="w-40 pr-3 max-md:hidden">
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
        <div>Results: {filteredByStatusInspections.length}</div>
      </div>
      <div className="flex">
        <Tabs
          defaultValue={defaultValue}
          className="w-full py-4"
          onValueChange={(value: string) =>
            navigation('/' + loaderData.orgId + '/inspections/' + value, {
              relative: 'path',
            })
          }
          tabs={[
            { value: 'list', valueLabel: 'List View' },
            { value: 'map', valueLabel: 'Map View' },
          ]}
        />{' '}
        <div className="w-20 pr-3 md:hidden ">
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
      </div>
      <Card innerClassName="w-full">
        <Outlet
          context={{
            inspections:
              currentTabFromRoute === 'list'
                ? inspectionsToDisplay
                : filteredByStatusInspections,
            searchText: searchText,
            filterInspectionStatus: filterInspectionStatus,
            inspectionManageRole: inspectionManageRole,
            orgId: orgId,
          }}
        />
      </Card>

      {currentTabFromRoute === 'list' &&
        Math.ceil(
          filteredByStatusInspections.length / numberRecordsToDisplayOnPage,
        ) > 1 && (
          <div className="flex items-center justify-center py-4">
            <Pagination
              totalNumberPages={
                Math.ceil(
                  filteredByStatusInspections.length /
                    numberRecordsToDisplayOnPage,
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
                      filteredByStatusInspections.length /
                        numberRecordsToDisplayOnPage,
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
    </>
  )
}
