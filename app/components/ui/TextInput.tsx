import { Icon } from './Icon'
import { InputShad } from '~/components/ui/shadUi/ui/input'
import { LabelShad } from '~/components/ui/shadUi/ui/label'
import React, { useState } from 'react'

interface IProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: boolean
  label?: React.ReactNode
  helpText?: string
  password?: boolean
  disabled?: boolean
  name?: string
  noPadding?: boolean
  number?: boolean
  leadingText?: string
}

export const TextInput = ({
  value,
  onChange,
  placeholder,
  label,
  helpText,
  error,
  password,
  disabled,
  name,
  noPadding,
  number,
  leadingText,
}: IProps) => {
  const [showPassword, setShowPassword] = useState(true)
  return (
    <div className={`flex w-full flex-col ${noPadding ? '' : 'p-1'} `}>
      {label && (
        <LabelShad
          htmlFor={name}
          className={'text-s pb-1 pl-1 text-left font-semibold'}
        >
          {label}
        </LabelShad>
      )}
      <div
        className={`relative  rounded-md ${noPadding ? '' : 'p-1'}
        ${disabled && 'bg-neutral_200 text-neutral_500'}`}
      >
        <InputShad
          id={name}
          name={name}
          value={value}
          type={
            number ? 'number' : password && showPassword ? 'password' : 'text'
          }
          placeholder={placeholder}
          onChange={(value) => onChange(value.target.value)}
          disabled={disabled}
          className={`${error && ' border-destructive'}`}
        />
        {leadingText && (
          <div className="absolute inset-y-0 left-0 mr-2 flex h-full  items-center p-2">
            {leadingText}
          </div>
        )}
        {password && (
          <Icon
            onClick={() => {
              setShowPassword(!showPassword)
            }}
            className=" absolute inset-y-0 right-0 mr-2 flex h-full cursor-pointer items-center"
            icon={showPassword ? 'hide' : 'show'}
          />
        )}
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
