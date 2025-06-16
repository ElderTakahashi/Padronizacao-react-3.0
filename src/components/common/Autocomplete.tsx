import { forwardRef, useState, useEffect, useRef, useCallback } from "react"

interface AutocompleteProps<T> {
  id?: string
  value?: T | null
  onChange: (v: T) => void
  options: T[]
  labelKey: keyof T
  valueKey: keyof T
  placeholder?: string
  disabled?: boolean
}

export const Autocomplete = forwardRef<
  HTMLInputElement,
  AutocompleteProps<any>
>(
  (
    {
      id,
      value = null,
      onChange,
      options,
      labelKey,
      valueKey,
      placeholder,
      disabled,
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState("")
    const [filtered, setFiltered] = useState<any[]>([])
    const [show, setShow] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (value) {
        setInputValue(String(value[labelKey]))
      } else {
        setInputValue("")
      }
    }, [value, labelKey])

    useEffect(() => {
      const filteredOptions = inputValue
        ? options.filter((opt) =>
            String(opt[labelKey])
              .toLowerCase()
              .includes(inputValue.toLowerCase()),
          )
        : options

      setFiltered(filteredOptions)
    }, [inputValue, options, labelKey])

    const handleClickOutside = useCallback(
      (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setShow(false)
        }
      },
      [containerRef],
    )

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [handleClickOutside])

    return (
      <div ref={containerRef} className="relative w-full">
        <input
          id={id}
          ref={ref}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setShow(true)
          }}
          onFocus={() => setShow(true)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          autoComplete="off"
        />
        {show && filtered.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-40 overflow-auto rounded-lg shadow-lg">
            {filtered.map((opt, i) => (
              <li
                key={i}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(opt)
                  setInputValue(String(opt[labelKey]))
                  setShow(false)
                }}
              >
                {String(opt[labelKey])}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  },
)
