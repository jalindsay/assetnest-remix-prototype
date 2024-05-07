import {
  PopoverContentShad,
  PopoverShad,
  PopoverTriggerShad,
} from '~/components/ui/shadUi/ui/popover'

interface IProps {
  trigger: React.ReactNode //Trigger must have a onCLick event else dropdown will not work
  content: React.ReactNode
  contentClassName?: string
}

export const Popover = ({ trigger, content, contentClassName }: IProps) => {
  return (
    <PopoverShad>
      <PopoverTriggerShad>{trigger}</PopoverTriggerShad>
      <PopoverContentShad className={contentClassName}>
        {content}
      </PopoverContentShad>
    </PopoverShad>
  )
}
