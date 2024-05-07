import { LabelShad } from '~/components/ui/shadUi/ui/label'
import {
  SelectContentShad,
  SelectGroupShad,
  SelectItemShad,
  SelectLabelShad,
  SelectShad,
  SelectTriggerShad,
  SelectValueShad,
} from '~/components/ui/shadUi/ui/select'

interface IProps {
  valueCurrent?: string
  onChange: (value: string) => void
  disabled?: boolean
  possibleValues?: { value?: string; valueLabel: string; label?: boolean }[]
  name?: string
  label?: string
  noPadding?: boolean
}

export const SelectInput = ({
  valueCurrent,
  disabled,
  onChange,
  possibleValues,
  name,
  label,
  noPadding,
}: IProps) => (
  <div className={`flex w-full flex-col ${noPadding ? '' : 'p-1'}`}>
    {label && (
      <LabelShad
        htmlFor={name}
        className={'text-s pb-1 pl-1 text-left font-semibold'}
      >
        {label}
      </LabelShad>
    )}
    <div className={`relative rounded-md ${noPadding ? '' : 'p-1'}`}>
      <SelectShad
        name={name}
        value={valueCurrent}
        disabled={disabled}
        onValueChange={onChange}
      >
        <SelectTriggerShad>
          <SelectValueShad />
        </SelectTriggerShad>
        <SelectContentShad
          ref={(ref) => {
            if (!ref) return
            ref.ontouchstart = (e) => {
              e.preventDefault()
            }
          }}
        >
          <SelectGroupShad>
            {possibleValues?.map((item) =>
              item.label ? (
                <SelectLabelShad key={item.valueLabel}>
                  {item.valueLabel}
                </SelectLabelShad>
              ) : (
                <SelectItemShad value={item.value ?? ''} key={item.valueLabel}>
                  {item.valueLabel}
                </SelectItemShad>
              ),
            )}
          </SelectGroupShad>
        </SelectContentShad>
      </SelectShad>
    </div>
  </div>
)
