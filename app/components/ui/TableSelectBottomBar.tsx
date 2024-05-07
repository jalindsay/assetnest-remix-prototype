import { CheckBox } from './Checkbox'

interface IProps {
  children?: React.ReactNode
  numberSelected?: number
}

export const TableSelectBottomBar = ({ children, numberSelected }: IProps) => {
  return (
    <div className=" shadow-[0 2px 8px rgba(0, 0, 0, 0.2)] absolute bottom-20 left-0 z-30 flex w-full items-center bg-slate-300 p-2 md:bottom-0 md:left-24 md:w-[calc(100%-6rem)]">
      {numberSelected && (
        <div className="pl-20">
          <CheckBox
            uniqueName="selectAllBar"
            onChange={() => {}}
            checked
            disabled
            label={`Selected (${numberSelected})`}
          />
        </div>
      )}
      <div className="ml-auto flex">{children}</div>
    </div>
  )
}
