import { Button } from "@headlessui/react"
import { useEffect, useState } from "react"

export const ThemeToggleButton = () => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      document.body.classList.add("light-mode")
      setIsLight(true)
    }
  }, [])

  const toggleTheme = () => {
    document.body.classList.toggle("light-mode")
    const newTheme = !isLight
    setIsLight(newTheme)

    localStorage.setItem("theme", newTheme ? "light" : "dark")
  }

  return (
    <button className={"button-success"} onClick={toggleTheme}>
      {isLight ? "Modo Escuro" : "Modo Claro"}
    </button>
  )
}
