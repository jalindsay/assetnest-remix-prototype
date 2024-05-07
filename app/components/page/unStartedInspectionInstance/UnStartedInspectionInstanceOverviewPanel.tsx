import { useNavigate } from '@remix-run/react'
import { Card } from '~/components/ui/Card'
import type { TypeGetInspectionInstance } from '~/endpoints/inspectionInstance'
import { subPageTitle } from '~/styles/typography'
import { getInspectionInstanceStatusChip } from '~/utils/getInpectionInstanceStatusChip'

interface IProps {
  inspectionInstance: TypeGetInspectionInstance
}

export const UnStartedInspectionInstanceOverviewPanel = ({
  inspectionInstance,
}: IProps) => {
  const navigation = useNavigate()
  return (
    <Card innerClassName="p-4 md:p-8  w-full">
      <div className={`${subPageTitle}`}>
        {inspectionInstance?.inspectionReference}
      </div>
      <div className="py-2">
        Asset:{' '}
        <span
          className=" hover: text-sky-400 hover:cursor-pointer hover:underline"
          onClick={() => {
            navigation('../' + inspectionInstance?.asset?.id + '/viewAsset')
          }}
        >
          {inspectionInstance?.asset?.properties.find(
            (property) => property.categoryProperty.label === 'Asset Name',
          )?.stringValue ?? ''}
        </span>
      </div>
      <div className="pt-2">
        {inspectionInstance &&
          getInspectionInstanceStatusChip(inspectionInstance.Status)}
      </div>
    </Card>
  )
}
