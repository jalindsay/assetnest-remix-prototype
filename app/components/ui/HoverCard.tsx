import {
  HoverCardContentShad,
  HoverCardShad,
  HoverCardTriggerShad,
} from '~/components/ui/shadUi/ui/hover-card'

interface IProps {
  trigger: React.ReactNode
  content: React.ReactNode
}
export const HoverCard = ({ trigger, content }: IProps) => {
  return (
    <HoverCardShad>
      <HoverCardTriggerShad>{trigger}</HoverCardTriggerShad>
      <HoverCardContentShad>{content}</HoverCardContentShad>
    </HoverCardShad>
  )
}
