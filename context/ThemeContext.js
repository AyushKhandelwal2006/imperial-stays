"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark", "royal")

    if (theme === "dark") {
      root.classList.add("dark")
    } else if (theme === "royal") {
      root.classList.add("royal")
    } else {
      root.classList.add("light")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
