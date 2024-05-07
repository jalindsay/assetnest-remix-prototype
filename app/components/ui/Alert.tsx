import { Icon } from './Icon'
import {
  AlertShad,
  AlertShadDescription,
  AlertShadTitle,
} from '~/components/ui/shadUi/ui/alert'

interface AlertProps {
  title?: string
  description?: string
  variant?: 'default' | 'success' | 'destructive'
  onClose?: () => void
}

const Alert = ({ title, description, variant, onClose }: AlertProps) => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <div className="flex w-full content-center justify-center p-10">
        <AlertShad className="flex w-96 self-center" variant={variant}>
          {variant === 'success' && (
            <Icon className="justify-center p-1" icon="success" />
          )}
          {variant === 'destructive' && (
            <Icon className="justify-center p-1" icon="warning" />
          )}
          <div className="flex w-full flex-col justify-center">
            {title && <AlertShadTitle>{title}</AlertShadTitle>}
            {description && (
              <AlertShadDescription>{description}</AlertShadDescription>
            )}
          </div>
          {onClose && (
            <div className="flex w-full flex-row-reverse">
              <Icon onClick={onClose} icon="close" />
            </div>
          )}
        </AlertShad>
      </div>
    </div>
  )
}

export default Alert
