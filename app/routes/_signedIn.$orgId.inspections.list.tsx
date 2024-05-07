import {useNavigate, useOutletContext, useSubmit} from '@remix-run/react'
import {Icon} from '~/components/ui/Icon'
import {Table} from '~/components/ui/Table'
import {secondaryText, tableHeader} from '~/styles/typography'
import type {TypeGetInspectionByOrgId} from '~/endpoints/inspectionInstance'
import {deleteInspectionInstance} from '~/endpoints/inspectionInstance'
import {CheckBox} from '~/components/ui/Checkbox'
import {useState} from 'react'
import {DropdownMenu} from '~/components/ui/DropdownMenu'
import type {ActionFunctionArgs} from '@remix-run/node'
import {TableSelectBottomBar} from '~/components/ui/TableSelectBottomBar'
import Button from '~/components/ui/Button'
import {getInspectionInstanceStatusChip} from '~/utils/getInpectionInstanceStatusChip'
import Alert from '~/components/ui/Alert'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const action = formData.get('_action') as
    | 'deleteInspectionInstance'
    | 'deleteManyInspectionInstances'
    | null

  switch (action) {
    case 'deleteInspectionInstance':
      const inspectionInstanceId = formData.get(
        'inspectionInstanceId',
      ) as string
      if (inspectionInstanceId) {
        return await deleteInspectionInstance({
          inspectionId: parseInt(inspectionInstanceId),
        })
      }
      break
    case 'deleteManyInspectionInstances':
      const inspectionInstanceIds = formData.get(
        'inspectionInstanceIds',
      ) as string
      return Promise.all(
        inspectionInstanceIds.split('£').map(async (inspectionId) => {
          return await deleteInspectionInstance({
            inspectionId: parseInt(inspectionId),
          })
        }),
      )
    default:
      return null
  }
}

export default function InspectionList() {
  const {
    inspections,
    inspectionManageRole,
    orgId,
  }: {
    inspections: TypeGetInspectionByOrgId
    inspectionManageRole: boolean
    orgId: string
  } = useOutletContext()
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRowsId, setSelectedRowsId] = useState<number[]>([])
  const submit = useSubmit()
  const [displayAlert, setDisplayAlert] = useState(false)
  const navigation = useNavigate()
  const headers = [
    inspectionManageRole ? (
      <CheckBox
        key="selectAllCheckbox"
        uniqueName={'all'}
        checked={selectAll}
        onChange={(value) => {
          setSelectAll(value);
          setSelectedRowsId(
            value
              ? inspections.map((row) => {
                return row.id;
              })
              : [],
          );
        }}
      />
    ) : (
      <div key="emptyDiv" />
    ),
    <div key="inspectionReferenceHeader" className={`${tableHeader}`}>
      Inspection Reference
    </div>,
    <div key="idHeader" className={`${tableHeader}`}>
      ID
    </div>,
    <div key="assetHeader" className={`${tableHeader}`}>
      Asset
    </div>,
    <div key="statusHeader" className={`${tableHeader}`}>
      Status
    </div>,
    <div key="categoryHeader" className={`${tableHeader}`}>
      Category
    </div>,
    <div key="lastUpdateHeader" className={`${tableHeader}`}>
      Last Update
    </div>,
    <div key="createdHeader" className={`${tableHeader}`}>
      Created
    </div>,
    <div key="startedHeader" className={`${tableHeader}`}>
      Started
    </div>,
    <div key="completedHeader" className={`${tableHeader}`}>
      Completed
    </div>,
  ];

  const dateOptions = {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  } as const;

  const rowsToDisplay = inspections.map((inspection) => {
    const formattedUpdatedByName =
      inspection.updatedBy.firstName || inspection.updatedBy.lastName
        ? (inspection.updatedBy.firstName !== null
            ? inspection.updatedBy.firstName
            : '') +
          ' ' +
          (inspection.updatedBy.lastName !== null
            ? inspection.updatedBy.lastName
            : '')
        : inspection.updatedBy.email

    const formattedCreatedByName =
      inspection.createdBy.firstName || inspection.createdBy.lastName
        ? (inspection.createdBy.firstName !== null
            ? inspection.createdBy.firstName
            : '') +
          ' ' +
          (inspection.createdBy.lastName !== null
            ? inspection.createdBy.lastName
            : '')
        : inspection.createdBy.email

    const formattedStartedByName = inspection.startedBy
      ? inspection.startedBy.firstName || inspection.startedBy.lastName
        ? (inspection.startedBy.firstName !== null
            ? inspection.startedBy.firstName
            : '') +
          ' ' +
          (inspection.startedBy.lastName !== null
            ? inspection.startedBy.lastName
            : '')
        : inspection.startedBy.email
      : undefined

    const formattedCompletedByName = inspection.completedBy
      ? inspection.completedBy.firstName || inspection.completedBy.lastName
        ? (inspection.completedBy.firstName !== null
            ? inspection.completedBy.firstName
            : '') +
          ' ' +
          (inspection.completedBy.lastName !== null
            ? inspection.completedBy.lastName
            : '')
        : inspection.completedBy.email
      : undefined

    return {
      onClick: () => {
        switch (inspection.Status) {
          case 'SCHEDULED':
            navigation(
              '/' +
                orgId +
                '/' +
                inspection.id +
                '/unstartedInspectionInstance',
            )
            break
          case 'STARTED':
            navigation(
              '/' + orgId + '/' + inspection.id + '/doingInspectionInstance',
            )
            break
          default:
            break
        }
      },
      content: [
        {
          content: inspectionManageRole ? (
            <CheckBox
              uniqueName={'all'}
              checked={selectedRowsId.includes(inspection.id)}
              onChange={() => {
                setSelectedRowsId((currentSelectedInspections) => {
                  setSelectAll(false)
                  if (selectedRowsId.includes(inspection.id)) {
                    return currentSelectedInspections.filter(
                      (selectedAssetId) => selectedAssetId !== inspection.id,
                    )
                  } else {
                    return [...currentSelectedInspections, inspection.id]
                  }
                })
              }}
            />
          ) : (
            <div />
          ),
        },
        { content: <div>{inspection.inspectionReference}</div> },
        { content: <div>{inspection.InspectionOrgUniqueId}</div> },
        {
          content: (
            <div>
              {
                inspection.asset?.properties.find(
                  (property) =>
                    property.categoryProperty.label === 'Asset Name',
                )?.stringValue
              }
            </div>
          ),
        },
        {
          content: getInspectionInstanceStatusChip(inspection.Status),
        },
        { content: <div>{inspection.inspectionForm.name}</div> },
        {
          content: (
            <div className="flex">
              <div className="pr-2">{formattedUpdatedByName}</div>
              <div className={`${secondaryText}`}>
                {new Date(inspection.updatedAt ?? '').toLocaleString(
                  'en-GB',
                  dateOptions,
                )}
              </div>
            </div>
          ),
        },
        {
          content: (
            <div className="flex">
              <div className="pr-2">{formattedCreatedByName}</div>
              <div className={`${secondaryText}`}>
                {new Date(inspection.createdAt ?? '').toLocaleString(
                  'en-GB',
                  dateOptions,
                )}
              </div>
            </div>
          ),
        },
        {
          content: (
            <>
              {formattedStartedByName && (
                <div className="flex">
                  <div className="pr-2">{formattedStartedByName}</div>
                  <div className={`${secondaryText}`}>
                    {new Date(inspection.startedAt ?? '').toLocaleString(
                      'en-GB',
                      dateOptions,
                    )}
                  </div>
                </div>
              )}
            </>
          ),
        },
        {
          content: (
            <>
              {formattedCompletedByName && (
                <div className="flex">
                  <div className="pr-2">{formattedCompletedByName}</div>
                  <div className={`${secondaryText}`}>
                    {new Date(inspection.completedAt ?? '').toLocaleString(
                      'en-GB',
                      dateOptions,
                    )}
                  </div>
                </div>
              )}
            </>
          ),
        },
        {
          content: inspectionManageRole ? (
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
                      <Icon icon="copy" className="pr-2" />
                      Duplicate
                    </div>
                  ),
                  onClick: () => {
                    navigation('../../inspection/duplicate/' + inspection.id, {
                      relative: 'path',
                    })
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
                    formData.set('_action', 'deleteInspectionInstance')
                    formData.set(
                      'inspectionInstanceId',
                      inspection.id.toString(),
                    )
                    submit(formData, { method: 'post' })
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
                      'inspections/list',
                      '',
                    )
                    switch (inspection.Status) {
                      case 'SCHEDULED':
                        navigator.clipboard.writeText(
                          pureUrl +
                            inspection.id +
                            '/unstartedInspectionInstance',
                        )
                        break
                      case 'STARTED':
                        navigator.clipboard.writeText(
                          pureUrl + inspection.id + '/doingInspectionInstance',
                        )
                        break
                      default:
                        break
                    }
                    setDisplayAlert(true)
                    setTimeout(() => setDisplayAlert(false), 5000)
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
                formData.set('_action', 'deleteManyInspectionInstances')
                formData.set('inspectionInstanceIds', selectedRowsId.join('£'))
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
