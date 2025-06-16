import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"
import { cn } from "@/lib/utils"

interface InputSelectFormProps<T> {
  name: string
  label?: string
  options: [T[], keyof T, keyof T]
  control?: Control<any>
  rules?: RegisterOptions
  error?: FieldError
  required?: boolean
  placeholder?: string
  disabled?: boolean
}

export const InputSelectForm = <T extends object = any>({
  name,
  label,
  options,
  control,
  rules,
  error,
  required,
  placeholder = "Selecione...",
  disabled,
}: InputSelectFormProps<T>) => {
  const [data, labelKey, valueKey] = options

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <Label htmlFor={name} text={label} required={required} />}

      {control ? (
        <Controller
          name={name}
          control={control}
          rules={{ required, ...rules }}
          render={({ field }) => (
            <select
              id={name}
              {...field}
              disabled={disabled}
              className={cn(
                "rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2",
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary",
              )}
            >
              <option value="">{placeholder}</option>
              {data.map((opt, i) => (
                <option key={i} value={String(opt[valueKey])}>
                  {String(opt[labelKey])}
                </option>
              ))}
            </select>
          )}
        />
      ) : (
        <select
          id={name}
          disabled={disabled}
          className={cn(
            "rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-primary",
          )}
        >
          <option value="">{placeholder}</option>
          {data.map((opt, i) => (
            <option key={i} value={String(opt[valueKey])}>
              {String(opt[labelKey])}
            </option>
          ))}
        </select>
      )}

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
