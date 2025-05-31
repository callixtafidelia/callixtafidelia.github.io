"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 transform-gpu hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
      ) : (
        <Sun className="h-4 w-4 text-slate-600 dark:text-slate-400" />
      )}
    </button>
  )
}
