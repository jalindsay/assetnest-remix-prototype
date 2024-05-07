import { TabsShad, TabsListShad, TabsTriggerShad } from '~/components/ui/shadUi/ui/tabs'

interface IProps {
  defaultValue: string
  className?: string
  onValueChange: (newValue: string) => void
  tabs: { value: string; valueLabel: string }[]
  value?: string
}

export function Tabs({
  defaultValue,
  className,
  onValueChange,
  tabs,
  value,
}: IProps) {
  return (
    <TabsShad
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={className}
      value={value}
    >
      <TabsListShad>
        {tabs.map((item) => (
          <TabsTriggerShad value={item.value} key={item.value}>
            {item.valueLabel}
          </TabsTriggerShad>
        ))}
      </TabsListShad>
    </TabsShad>
  )
}
