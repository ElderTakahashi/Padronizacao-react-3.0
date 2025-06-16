import { Control, Controller, FieldError } from "react-hook-form"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"
import { Autocomplete } from "./Autocomplete"

interface AutocompleteFormProps<T> {
  name: string
  label?: string
  control: Control<any>
  error?: FieldError
  required?: boolean
  options: [T[], keyof T, keyof T]
  placeholder?: string
}

export const AutocompleteForm = <T extends object = any>({
  name,
  label,
  control,
  error,
  required,
  placeholder,
  options,
}: AutocompleteFormProps<T>) => {
  const [data, labelKey, valueKey] = options

  return (
    <div className="flex flex-col space-y-1.5">
      {label && <Label htmlFor={name} text={label} required={required} />}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => {
          const selected = data.find((opt) => opt[valueKey] === value) || null

          return (
            <Autocomplete
              ref={ref}
              id={name}
              options={data}
              value={selected}
              onChange={(item: T) => onChange(item[valueKey])}
              labelKey={labelKey}
              valueKey={valueKey}
              placeholder={placeholder}
            />
          )
        }}
      />
      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
