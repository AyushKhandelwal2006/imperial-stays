"use client"

import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import { useTheme } from "@/context/ThemeContext"

export default function Navbar() {
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-700">
          Imperial Stays
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/hotels">Hotels</Link>

          {user && <Link href="/bookings">My Bookings</Link>}
          {user && <Link href="/profile">Profile</Link>}

          {!user ? (
            <Link
              href="/login"
              className="px-4 py-2 bg-red-700 text-white rounded"
            >
              Login
            </Link>
          ) : (
            <button onClick={logout} className="text-red-600">
              Logout
            </button>
          )}

          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="border px-3 py-1 rounded"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  )
}
