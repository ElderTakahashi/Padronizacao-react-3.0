import {
  Controller,
  Control,
  RegisterOptions,
  FieldError,
} from "react-hook-form"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"

interface RadioGroupFormProps<T> {
  name: string
  control: Control<any>
  label?: string
  options: [T[], keyof T, keyof T]
  rules?: RegisterOptions
  error?: FieldError
  required?: boolean
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
}

export const RadioGroupForm = <T extends object = any>({
  name,
  control,
  label,
  options,
  rules,
  error,
  required,
  disabled,
  orientation = "vertical",
}: RadioGroupFormProps<T>) => {
  const [data, labelKey, valueKey] = options

  return (
    <div className="flex flex-col space-y-1.5">
      {label && <Label htmlFor={name} text={label} required={required} />}

      <Controller
        name={name}
        control={control}
        rules={{ required, ...rules }}
        render={({ field }) => (
          <div
            className={`flex ${
              orientation === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
            }`}
          >
            {data.map((option, idx) => {
              const optionValue = option[valueKey]
              const optionLabel = option[labelKey]

              return (
                <label key={idx} className="flex items-center space-x-2 ">
                  <input
                    type="radio"
                    value={String(optionValue)}
                    checked={field.value === optionValue}
                    onChange={() => field.onChange(optionValue)}
                    disabled={disabled}
                    className="accent-primary h-4 w-4"
                  />
                  <span>{String(optionLabel)}</span>
                </label>
              )
            })}
          </div>
        )}
      />

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
