import { Controller, Control, FieldError } from "react-hook-form"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"
import { Input } from "@/components/ui/input"

interface DatePickerFormProps {
  name: string
  label?: string
  control: Control<any>
  error?: FieldError
  required?: boolean
}

export const DatePickerForm = ({
  name,
  label,
  control,
  error,
  required,
}: DatePickerFormProps) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {label && <Label htmlFor={name} text={label} required={required} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input type="date" id={name} {...field} />}
      />
      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
