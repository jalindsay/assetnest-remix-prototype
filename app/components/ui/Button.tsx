import { ButtonShad } from '~/components/ui/shadUi/ui/button'

interface ButtonProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'outlineGreen'
    | 'outlineRed'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  submit?: boolean
  noPadding?: boolean
  title?: string
  isPopoverTrigger?: boolean
  inactive?: boolean
}

const Button = ({
  variant,
  size,
  children,
  onClick,
  disabled = false,
  submit,
  className,
  noPadding,
  title,
  isPopoverTrigger, // have to add this as adding event handlers to the button breaks the popover
}: ButtonProps) => {
  return (
    <ButtonShad
      title={title}
      variant={variant}
      size={size}
      type={submit ? 'submit' : 'button'}
      onClick={
        isPopoverTrigger
          ? onClick
          : (event) => {
              event?.stopPropagation()
              onClick ? onClick() : undefined
            }
      }
      disabled={disabled}
      className={`${className} ${noPadding ? `p-0` : ''}`}
    >
      {children}
    </ButtonShad>
  )
}

export default Button
