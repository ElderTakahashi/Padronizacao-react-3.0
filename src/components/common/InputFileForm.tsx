import { Control, Controller, FieldError } from "react-hook-form"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"

interface InputFileFormProps {
  name: string
  label?: string
  control: Control<any>
  error?: FieldError
  required?: boolean
  accept?: string
}

export const InputFileForm = ({
  name,
  label,
  control,
  error,
  required,
  accept,
}: InputFileFormProps) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {label && <Label htmlFor={name} text={label} required={required} />}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, ref } }) => (
          <input
            type="file"
            id={name}
            ref={ref}
            accept={accept}
            onChange={(e) => onChange(e.target.files?.[0])}
            className="file-input"
          />
        )}
      />
      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
