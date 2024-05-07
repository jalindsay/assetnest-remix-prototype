import {useCallback, useEffect, useRef, useState} from 'react'
import {emailValid} from '~/utils/emailValidator'

interface IReactMultiEmailProps {
  className?: string
  placeholder?: string | React.ReactNode
  id?: string
  emailsInput?: string[]
  onChange?: (emails: string[]) => void
  autoFocus?: boolean
  getLabel: (
    email: string,
    index: number,
    removeEmail: (index: number, isDisabled?: boolean) => void,
  ) => React.ReactNode
  validateEmail?: (email: string) => boolean | Promise<boolean>
}

/**
 * This function is an extracted version of the ReactMultiEmail component.
 * At some point this function will need to be refactored, or more likely re-written ourselves.
 * We may want to add features such as real time checks for existing user emails and
 * editing emails in place.
 */
export function ReactMultiEmail({
  className,
  placeholder,
  emailsInput,
  onChange,
  autoFocus,
  getLabel,
  validateEmail,
}: IReactMultiEmailProps) {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)
  const [emails, setEmails] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const [spinning, setSpinning] = useState(false)
  let delimiter = `[' ',;]`

  const initialEmailAddress = (emails?: string[]) => {
    if (typeof emails === 'undefined') return []

    return emails.filter((email) => emailValid(email))
  }

  const findEmailAddress = useCallback(
    async (value: string, isEnter?: boolean) => {
      const validEmails: string[] = []
      let inputValue = ''
      const re = new RegExp(delimiter, 'g')
      const isEmail = validateEmail || emailValid

      const addEmails = (email: string) => {
        validEmails.push(email)
        return true
      }

      if (value !== '') {
        if (re.test(value)) {
          const setArr = new Set(value.split(re).filter((n) => n))

          const arr = [...setArr]
          do {
            const validateResult = emailValid('' + arr[0].trim())

            if (validateResult) {
              addEmails('' + arr.shift())
            } else {
              inputValue = '' + arr.shift()
            }
          } while (arr.length)
        } else {
          if (isEnter) {
            const validateResult = isEmail(value)
            if (typeof validateResult === 'boolean') {
              if (validateResult) {
                addEmails(value)
              } else {
                inputValue = value
              }
            } else {
              // handle promise
              setSpinning(true)
              if ((await validateEmail?.(value)) === true) {
                addEmails(value)
                setSpinning(false)
              } else {
                inputValue = value
              }
            }
          } else {
            inputValue = value
          }
        }
      }

      setEmails([...emails, ...validEmails])
      setInputValue(inputValue)

      if (validEmails.length) {
        onChange?.([...emails, ...validEmails])
      }
    },
    [delimiter, emails, onChange, validateEmail],
  )

  const onChangeInputValue = useCallback(
    async (value: string) => {
      await findEmailAddress(value)
    },
    [findEmailAddress],
  )

  const removeEmail = useCallback(
    (index: number, isDisabled?: boolean) => {
      if (isDisabled) {
        return
      }

      const _emails = [...emails.slice(0, index), ...emails.slice(index + 1)]
      setEmails(_emails)
      onChange?.(_emails)
    },
    [emails, onChange],
  )

  const handleOnKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Enter':
          e.preventDefault()
          break
        case 'Backspace':
          if (!e.currentTarget.value) {
            removeEmail(emails.length - 1, false)
          }
          break
        default:
      }
    },
    [emails.length, removeEmail],
  )

  const handleOnKeyup = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Enter':
          await findEmailAddress(e.currentTarget.value, true)
          break
        default:
      }
    },
    [findEmailAddress],
  )

  const handleOnChange = useCallback(
    async (e: React.SyntheticEvent<HTMLInputElement>) =>
      await onChangeInputValue(e.currentTarget.value),
    [onChangeInputValue],
  )

  const handleOnBlur = useCallback(
    async () => {
      setFocused(false)
    },
    [],
  )

  useEffect(() => {
    setEmails(initialEmailAddress(emailsInput))
  }, [emailsInput])

  return (
    <div
      className={`${className} w-full ${'react-multi-email'} ${
        focused ? '@apply border border-input bg-white' : ''
      } ${inputValue === '' && emails.length === 0 ? 'empty' : ''}`}
      onClick={() => emailInputRef.current?.focus()}
    >
      {placeholder ? (
        <span
          data-placeholder=""
          className={
            '@apply absolute left-2 top-1/3 hidden px-2 py-1 leading-4'
          }
        >
          {placeholder}
        </span>
      ) : null}
      <div
        className={'data-labels'}
        style={{
          opacity: spinning ? 0.45 : 1.0,
          display: 'contents',
          flexWrap: 'inherit',
        }}
      >
        {emails.map((email: string, index: number) =>
          getLabel(email, index, removeEmail),
        )}
      </div>
      <input
        style={{ opacity: spinning ? 0.45 : 1.0 }}
        ref={emailInputRef}
        type="text"
        value={inputValue}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onKeyDown={handleOnKeydown}
        onKeyUp={handleOnKeyup}
        autoFocus={autoFocus}
        className={'border-0 border-none outline-none focus:ring-0'}
      />
    </div>
  )
}
