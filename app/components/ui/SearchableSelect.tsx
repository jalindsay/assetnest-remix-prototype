import * as React from 'react'

import { Command as CommandPrimitive } from 'cmdk'

import { LabelShad } from '~/components/ui/shadUi/ui/label'
import {
  CommandGroupShad,
  CommandItemShad,
  CommandShad,
} from '~/components/ui/shadUi/ui/command'

interface IProps {
  label?: string
  placeholder?: string
  parentClassName?: string
  possibleValues: { value: string; label: string }[]
  onSelectedValueChange?: (newValue?: string) => void
  name?: string
  helpText?: string
  error?: boolean
  initialValue?: string
}

export const SearchableSelect = ({
  label = 'Select an item',
  placeholder = 'Select an item',
  name,
  possibleValues,
  onSelectedValueChange,
  helpText,
  error,
  initialValue,
}: IProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [selectedAValue, setSelectedAValue] = React.useState<boolean>(false)
  const [inputValue, setInputValue] = React.useState(initialValue ?? '')

  const handleKeyDown = React.useCallback(
    () => {
      const input = inputRef.current
      if (input) {
        setSelectedAValue(false)
        onSelectedValueChange && onSelectedValueChange(undefined)
      }
    },
    [onSelectedValueChange],
  )

  const valuesToDisplay = possibleValues
    .filter(
      (possibleValue) =>
        possibleValue.label
          .toLowerCase()
          ?.startsWith(inputValue.toLowerCase()) ||
        possibleValue.label === inputValue,
    )
    .sort((a, b) => a.label.localeCompare(b.label))
    .slice(0, 10)

  return (
    <div className={`flex w-full flex-col p-2`}>
      {label && (
        <LabelShad className={'text-s pb-1 text-left font-semibold'}>
          {label}
        </LabelShad>
      )}
      <CommandShad
        onKeyDown={handleKeyDown}
        className="overflow-visible bg-transparent"
      >
        {/* Avoid having the "Search" Icon */}
        <CommandPrimitive.Input
          ref={inputRef}
          name={name}
          value={inputValue}
          onValueChange={setInputValue}
          onBlur={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
              file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary
              disabled:cursor-not-allowed disabled:opacity-50 ${
                error && 'border-destructive'
              }`}
        />
        {helpText && (
          <div
            className={`h-8 pl-1 pt-1 text-sm font-medium ${
              error && 'text-destructive'
            }`}
          >
            {helpText}
          </div>
        )}

        <div className="relative mt-2">
          {open && !selectedAValue && valuesToDisplay.length > 0 ? (
            <div className="absolute top-0 z-40 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroupShad className="h-full overflow-auto">
                {valuesToDisplay.map((possibleValue) => {
                  return (
                    <CommandItemShad
                      key={possibleValue.value}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                      onSelect={() => {
                        setInputValue(possibleValue.label)
                        onSelectedValueChange &&
                          onSelectedValueChange(possibleValue.value)
                        setSelectedAValue(true)
                      }}
                    >
                      {possibleValue.label}
                    </CommandItemShad>
                  )
                })}
              </CommandGroupShad>
            </div>
          ) : null}
        </div>
      </CommandShad>
    </div>
  )
}
