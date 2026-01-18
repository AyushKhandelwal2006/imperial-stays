"use client"

import { useTheme } from "@/context/ThemeContext"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-3 py-1 rounded bg-primary text-white"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  )
}
