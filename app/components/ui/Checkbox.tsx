import { CheckboxShad } from '~/components/ui/shadUi/ui/checkbox'

interface IProps {
  uniqueName: string
  checked: boolean
  label?: string
  onChange: (value: boolean) => void
  disabled?: boolean
}
export const CheckBox = ({
  uniqueName,
  label,
  onChange,
  checked,
  disabled,
}: IProps) => {
  return (
    <div className="flex items-center space-x-2">
      <CheckboxShad
        id={uniqueName}
        checked={checked}
        onClick={(e) => {
          e.stopPropagation()
          onChange(!checked)
        }}
        disabled={disabled}
      />
      <label
        htmlFor={uniqueName}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
}
