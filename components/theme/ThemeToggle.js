"use client"

import { useTheme } from "@/context/ThemeContext"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="theme-select"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="royal">Royal</option>
    </select>
  )
}
