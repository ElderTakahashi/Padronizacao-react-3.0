import { InputHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Input } from "../ui/input"

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
  valid?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, iconLeft, iconRight, invalid, valid, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {iconLeft && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
            {iconLeft}
          </span>
        )}
        <Input
          ref={ref}
          className={cn(
            "w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2",
            invalid
              ? "border-red-500 focus:ring-red-500"
              : valid
                ? "border-green-500 focus:ring-green-500"
                : "border-gray-300 focus:ring-primary",
            iconLeft && "pl-10",
            iconRight && "pr-10",
            className,
          )}
          {...props}
        />
        {iconRight && (
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
            {iconRight}
          </span>
        )}
      </div>
    )
  },
)
