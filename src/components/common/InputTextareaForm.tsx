import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"
import { cn } from "@/lib/utils"

interface InputTextareaFormProps {
  name: string
  label?: string
  control?: Control<any>
  rules?: RegisterOptions
  error?: FieldError
  required?: boolean
  placeholder?: string
  rows?: number
  disabled?: boolean
}

export const InputTextareaForm = ({
  name,
  label,
  control,
  rules,
  error,
  required,
  placeholder,
  rows = 4,
  disabled,
}: InputTextareaFormProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <Label htmlFor={name} text={label} required={required} />}

      {control ? (
        <Controller
          name={name}
          control={control}
          rules={{ required, ...rules }}
          render={({ field }) => (
            <textarea
              id={name}
              {...field}
              rows={rows}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                "rounded-lg border px-3 py-2 text-sm shadow-sm transition resize-none focus:outline-none focus:ring-2 focus:ring-offset-2",
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary",
              )}
            />
          )}
        />
      ) : (
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "rounded-lg border px-3 py-2 text-sm shadow-sm transition resize-none focus:outline-none focus:ring-2 focus:ring-offset-2",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-primary",
          )}
        />
      )}

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
