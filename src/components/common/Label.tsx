interface LabelProps {
  htmlFor?: string
  text: string
  required?: boolean
}

export const Label = ({ htmlFor, text, required }: LabelProps) => (
  <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
    {text} {required && <span className="text-red-500">*</span>}
  </label>
)
