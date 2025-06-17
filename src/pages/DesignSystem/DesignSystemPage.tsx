import { Card, CardContent } from "@/components/ui/card"
import { colorVars, fontSizes, grays } from "./DesignSystemInfo"
import { useEffect, useRef, useState } from "react"

// Array para a seção de espaçamentos
const spacers = Array.from({ length: 11 }, (_, i) => `--spacer-${i}`)

export const DesignSystemPage = () => {
  const [computedFontSizes, setComputedFontSizes] = useState<
    Record<string, string>
  >({})
  const [computedSpacers, setComputedSpacers] = useState<
    Record<string, string>
  >({})
  const refs = useRef<Record<string, HTMLDivElement | null>>({})

  const rootFontSizePx = 16

  useEffect(() => {
    // Font sizes
    const fontSizeResults: Record<string, string> = {}
    fontSizes.forEach(({ label }) => {
      const el = refs.current[label]
      if (el) {
        const computedPx = window.getComputedStyle(el).fontSize
        const pxValue = parseFloat(computedPx)
        const remValue = (pxValue / rootFontSizePx).toFixed(3)
        fontSizeResults[label] = `${remValue}rem`
      }
    })
    setComputedFontSizes(fontSizeResults)

    // Spacers
    const spacerResults: Record<string, string> = {}
    spacers.forEach((spacer) => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(spacer)
        .trim()
      spacerResults[spacer] = value
    })
    setComputedSpacers(spacerResults)
  }, [])

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <h1 className="text-4xl font-extrabold border-b pb-4 mb-8 text-gray-900">
        Design System
      </h1>

      {/* COLORS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {colorVars.map((color) => (
            <Card
              key={color}
              className="shadow-md rounded-lg overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div
                className="h-20"
                style={{ backgroundColor: `var(--${color})` }}
              />
              <CardContent className="p-3 text-center text-xs font-mono text-gray-700 select-all">
                --{color}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GRAYS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Tons de Cinza
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {grays.map((gray) => {
            const isLight = gray === "gray-0" || gray === "gray-50"
            const textColor = isLight ? "#000" : "#fff"
            const bgColor = `var(--${gray})`
            const value = getComputedStyle(document.documentElement)
              .getPropertyValue(`--${gray}`)
              .trim()

            return (
              <div
                key={gray}
                className="flex items-center justify-between rounded-md border border-gray-300 shadow-sm p-4 transition-transform hover:scale-[1.03] cursor-default"
                style={{ backgroundColor: bgColor }}
              >
                <span
                  className="font-mono text-sm"
                  style={{ color: textColor }}
                >
                  --{gray}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: textColor }}
                >
                  {value}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* FONT SIZES */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Tamanhos de Fonte
        </h2>
        <div className="space-y-4">
          {fontSizes.map(({ label, var: variable }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-md border border-gray-300 px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                ref={(el) => {
                  refs.current[label] = el
                }}
                style={{
                  fontSize: `var(${variable})`,
                  fontFamily: "var(--font-family-sans-serif)",
                }}
                className="text-gray-900 font-medium select-none"
              >
                {label.replace("font-size-", "").toUpperCase()}
              </div>
              <code className="font-mono text-sm text-gray-700 select-all">
                {computedFontSizes[label] ?? `var(${variable})`}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* SPACERS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Espaçamentos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {spacers.map((spacer) => {
            const value = computedSpacers[spacer] ?? "—"
            const numericValue = parseFloat(value)
            const boxHeight = numericValue

            return (
              <Card
                key={spacer}
                className="shadow-md rounded-lg overflow-hidden transition-shadow hover:shadow-lg flex flex-col items-center p-4"
              >
                <div
                  className="w-full rounded bg-gray-200 mb-3"
                  style={{
                    height: `${boxHeight}px`,
                    maxWidth: "100%",
                  }}
                />
                <CardContent className="p-0 text-center text-xs font-mono text-gray-700 select-all">
                  <div>{spacer}</div>
                  <div>{value}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
