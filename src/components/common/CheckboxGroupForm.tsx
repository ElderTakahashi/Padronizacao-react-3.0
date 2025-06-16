import {
  Control,
  Controller,
  RegisterOptions,
  FieldError,
} from "react-hook-form"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"

interface CheckboxGroupFormProps<T> {
  name: string
  label?: string
  options: [T[], keyof T, keyof T]
  control: Control<any>
  rules?: RegisterOptions
  error?: FieldError
  required?: boolean
  disabled?: boolean
  direction?: "row" | "column"
}

export const CheckboxGroupForm = <T extends object = any>({
  name,
  label,
  options,
  control,
  rules,
  error,
  required,
  disabled,
  direction = "column",
}: CheckboxGroupFormProps<T>) => {
  const [data, labelKey, valueKey] = options

  return (
    <div className="w-full">
      {label && <Label htmlFor={name} text={label} required={required} />}

      <Controller
        control={control}
        name={name}
        rules={{ required, ...rules }}
        defaultValue={[]}
        render={({ field }) => {
          const handleChange = (value: T[keyof T]) => {
            const currentValue = field.value || []
            if (currentValue.includes(value)) {
              field.onChange(currentValue.filter((v: any) => v !== value))
            } else {
              field.onChange([...currentValue, value])
            }
          }

          return (
            <div
              className={`flex gap-4 ${
                direction === "column" ? "flex-col" : "flex-row"
              }`}
            >
              {data.map((option, idx) => {
                const optionValue = option[valueKey]
                const optionLabel = option[labelKey]
                return (
                  <label key={idx} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={field.value?.includes(optionValue)}
                      onChange={() => handleChange(optionValue)}
                      disabled={disabled}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    {String(optionLabel)}
                  </label>
                )
              })}
            </div>
          )
        }}
      />

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
