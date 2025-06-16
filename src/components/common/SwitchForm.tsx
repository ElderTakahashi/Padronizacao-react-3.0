import {
  Controller,
  Control,
  RegisterOptions,
  FieldError,
} from "react-hook-form"
import { Switch } from "@/components/ui/switch"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"

interface SwitchFormProps {
  name: string
  label?: string
  control: Control<any>
  rules?: RegisterOptions
  error?: FieldError
  disabled?: boolean
  required?: boolean
  description?: string
}

export const SwitchForm = ({
  name,
  label,
  control,
  rules,
  error,
  disabled,
  required,
  description,
}: SwitchFormProps) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {label && <Label htmlFor={name} text={label} required={required} />}

      <Controller
        name={name}
        control={control}
        rules={{ required, ...rules }}
        defaultValue={false}
        render={({ field }) => (
          <div className="flex items-center gap-2">
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              id={name}
            />
            {description && (
              <span className="text-sm text-muted-foreground">
                {description}
              </span>
            )}
          </div>
        )}
      />

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
