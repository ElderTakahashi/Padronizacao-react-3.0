import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form"
import { InputBase } from "./InputBase"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"

interface InputFormControlProps {
  name: string
  label?: string
  control?: Control<any>
  rules?: RegisterOptions
  error?: FieldError
  required?: boolean
  disabled?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onClear?: () => void
  mask?: (value: string) => string
  defaultValue?: string
  placeholder?: string
}

export const InputForm = ({
  name,
  label,
  control,
  rules,
  error,
  required,
  disabled,
  iconLeft,
  iconRight,
  onClear,
  mask,
  defaultValue = "",
  placeholder,
}: InputFormControlProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <Label htmlFor={name} text={label} required={required} />}

      {control ? (
        <Controller
          name={name}
          control={control}
          rules={{ required, ...rules }}
          defaultValue={defaultValue}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputBase
              id={name}
              name={name}
              ref={ref}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                if (mask) {
                  onChange(mask(e.target.value))
                } else {
                  onChange(e.target.value)
                }
              }}
              onBlur={onBlur}
              iconLeft={iconLeft}
              iconRight={
                onClear ? <button onClick={onClear}>×</button> : iconRight
              }
              invalid={!!error}
              disabled={disabled}
            />
          )}
        />
      ) : (
        <InputBase
          name={name}
          placeholder={placeholder}
          iconLeft={iconLeft}
          iconRight={iconRight}
          invalid={!!error}
          disabled={disabled}
        />
      )}

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
