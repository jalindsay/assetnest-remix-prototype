import {
  DropdownMenuContentShad,
  DropdownMenuItemShad,
  DropdownMenuLabelShad,
  DropdownMenuPortalShad,
  DropdownMenuSeparatorShad,
  DropdownMenuShad,
  DropdownMenuSubContentShad,
  DropdownMenuSubShad,
  DropdownMenuSubTriggerShad,
  DropdownMenuTriggerShad,
} from '~/components/ui/shadUi/ui/dropdown-menu'

interface DropdownMenuProps {
  displayText?: React.ReactNode
  onClick?: () => void
  separator?: boolean
  label?: boolean
  disabled?: boolean
  subMenu?: { trigger: string; content: DropdownMenuProps[] }
}

interface IProps {
  trigger: React.ReactNode //Trigger must have a onCLick event else dropdown will not work
  dropdownMenuContent: DropdownMenuProps[]
  triggerClassName?: string
}

export function DropdownMenu({
  trigger,
  dropdownMenuContent,
  triggerClassName,
}: IProps) {
  return (
    <DropdownMenuShad>
      <DropdownMenuTriggerShad className={triggerClassName}>
        {trigger}
      </DropdownMenuTriggerShad>
      <DropdownMenuContentShad className="w-56">
        {dropdownMenuContent.map((item, index) => {
          if (item.label) {
            return (
              <DropdownMenuLabelShad
                key={index}
                onClick={(event) => {
                  event.stopPropagation()
                  item.onClick && item.onClick()
                }}
                className={`${item.onClick ? 'cursor-pointer' : ''}`}
              >
                {item.displayText}
              </DropdownMenuLabelShad>
            )
          }
          if (item.separator) {
            return (
              <DropdownMenuSeparatorShad
                key={index}
                onClick={item.onClick}
                className={`${item.onClick ? 'cursor-pointer' : ''}`}
              />
            )
          }

          if (item.subMenu) {
            return (
              <DropdownMenuSubShad key={index}>
                <DropdownMenuSubTriggerShad>
                  {item.subMenu.trigger}
                </DropdownMenuSubTriggerShad>
                <DropdownMenuPortalShad>
                  <DropdownMenuSubContentShad>
                    {item.subMenu.content.map((subItem, index) => {
                      if (subItem.label) {
                        return (
                          <DropdownMenuLabelShad
                            key={index}
                            onClick={(event) => {
                              event.stopPropagation()
                              item.onClick && item.onClick()
                            }}
                            className={`${
                              item.onClick ? 'cursor-pointer' : ''
                            }`}
                          >
                            {subItem.displayText}
                          </DropdownMenuLabelShad>
                        )
                      }
                      if (subItem.separator) {
                        return (
                          <DropdownMenuSeparatorShad
                            key={index}
                            onClick={(event) => {
                              event.stopPropagation()
                              item.onClick && item.onClick()
                            }}
                            className={`${
                              item.onClick ? 'cursor-pointer' : ''
                            }`}
                          />
                        )
                      }

                      return (
                        <DropdownMenuItemShad
                          key={index}
                          onClick={(event) => {
                            event.stopPropagation()
                            item.onClick && item.onClick()
                          }}
                          className={`${item.onClick ? 'cursor-pointer' : ''}`}
                          disabled={item.disabled}
                        >
                          {item.displayText}
                        </DropdownMenuItemShad>
                      )
                    })}
                  </DropdownMenuSubContentShad>
                </DropdownMenuPortalShad>
              </DropdownMenuSubShad>
            )
          }

          return (
            <DropdownMenuItemShad
              key={index}
              className={`${item.onClick ? 'cursor-pointer' : ''}`}
              onClick={(event) => {
                event.stopPropagation()
                item.onClick && item.onClick()
              }}
              disabled={item.disabled}
            >
              {item.displayText}
            </DropdownMenuItemShad>
          )
        })}
      </DropdownMenuContentShad>
    </DropdownMenuShad>
  )
}
