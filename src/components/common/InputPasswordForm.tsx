import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Label } from "./Label"
import { ErrorMessage } from "./ErrorMessage"
import { cn } from "@/lib/utils"

interface InputPasswordFormProps {
  name: string
  label?: string
  control?: Control<any>
  rules?: RegisterOptions
  error?: FieldError
  required?: boolean
  placeholder?: string
  disabled?: boolean
}

export const InputPasswordForm = ({
  name,
  label,
  control,
  rules,
  error,
  required,
  placeholder = "Digite sua senha",
  disabled,
}: InputPasswordFormProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev)

  return (
    <div className="flex flex-col gap-1 w-full relative">
      {label && <Label htmlFor={name} text={label} required={required} />}

      {control ? (
        <Controller
          name={name}
          control={control}
          rules={{ required, ...rules }}
          render={({ field }) => (
            <div className="relative">
              <input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                disabled={disabled}
                id={name}
                className={cn(
                  "w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 pr-10",
                  error
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary",
                )}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}
        />
      ) : (
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 pr-10",
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-primary",
            )}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      )}

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
