import {
  AccordionContentShad,
  AccordionItemShad,
  AccordionShad,
  AccordionTriggerShad,
} from '~/components/ui/shadUi/ui/accordion'

interface IProps {
  rows: { content: React.ReactNode; trigger: React.ReactNode }[]
}

export function Accordion({ rows }: IProps) {
  return (
    <AccordionShad type="single" collapsible className="w-full">
      {rows.map((row, index) => (
        <AccordionItemShad value={'item-' + index} key={index}>
          <AccordionTriggerShad>{row.trigger}</AccordionTriggerShad>
          <AccordionContentShad>{row.content}</AccordionContentShad>
        </AccordionItemShad>
      ))}
    </AccordionShad>
  )
}
