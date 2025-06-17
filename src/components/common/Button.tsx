import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { Loader2 } from "lucide-react"

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "danger"
export type ButtonSize = "sm" | "md" | "lg"

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
}

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonBaseProps) => {
  const variantClasses = {
    primary: "button-primary",
    secondary: "button-secondary",
    tertiary: "button-tertiary",
    ghost: "button-ghost",
    danger: "button-danger",
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      className={`btn-base ${cn(variantClasses[variant], sizeClasses[size])} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : leftIcon ? (
        <span className="mr-2">{leftIcon}</span>
      ) : null}

      {children}

      {rightIcon && !loading ? <span className="ml-2">{rightIcon}</span> : null}
    </button>
  )
}
