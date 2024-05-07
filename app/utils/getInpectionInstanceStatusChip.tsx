import type { InspectionInstanceStatus } from '@prisma/client'
import { Icon } from '~/components/ui/Icon'
import {
  chip,
  chipBlueColor,
  chipGreenColor,
  chipYellowColor,
} from '~/styles/genericStyles'

export const getInspectionInstanceStatusChip = (
  status: InspectionInstanceStatus,
) => {
  switch (status) {
    case 'COMPLETED':
      return (
        <div className={`flex ${chipGreenColor} ${chip} w-fit`}>
          <Icon icon="success" className="pr-2" />
          Completed
        </div>
      )

    case 'SCHEDULED':
      return (
        <div className={`flex ${chipBlueColor} ${chip} w-fit `}>
          <div className="flex items-center justify-center px-2">
            <Icon icon="clock" className="pr-2" />
            Scheduled
          </div>
        </div>
      )
    case 'STARTED':
      return (
        <div className={`flex ${chipYellowColor} ${chip} w-fit`}>Started</div>
      )
  }
}
