import { LabelShad } from '~/components/ui/shadUi/ui/label'
import { TextareaShad } from '~/components/ui/shadUi/ui/textarea'

interface IProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: boolean
  label?: string
  helpText?: string
  disabled?: boolean
  name?: string
  noPadding?: boolean
  className?: string
}

export const TextArea = ({
  value,
  onChange,
  placeholder,
  label,
  helpText,
  error,
  disabled,
  name,
  noPadding,
  className,
}: IProps) => {
  return (
    <div
      className={`left-0 top-0 flex w-full flex-col ${
        noPadding ? '' : 'p-1'
      } ${className}`}
    >
      <LabelShad
        htmlFor={name}
        className={'text-s pb-1 pl-1 text-left font-semibold'}
      >
        {label}
      </LabelShad>
      <div
        className={`relative  rounded-md ${noPadding ? '' : 'p-1'}
       
        ${disabled && 'bg-neutral_200 text-neutral_500'}`}
      >
        <TextareaShad
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(value) => onChange(value.target.value)}
          disabled={disabled}
          className={`${error && ' border-destructive'} resize-none`}
        />
      </div>
      {helpText && (
        <div
          className={`h-8 pl-1 pt-1 text-sm font-medium ${
            error && 'text-destructive'
          }`}
        >
          {helpText}
        </div>
      )}
    </div>
  )
}
