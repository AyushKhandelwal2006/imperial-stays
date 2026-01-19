"use client"

import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import ThemeToggle from "@/components/theme/ThemeToggle"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-[#0b0e1a]/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="brand-text">
          Imperial Stays
        </Link>

        <nav className="flex items-center gap-3">

          <Link href="/hotels" className="nav-btn">
            Hotels
          </Link>

          {user && (
            <Link href="/bookings" className="nav-btn">
              My Bookings
            </Link>
          )}

          {user ? (
            <>
              <Link href="/profile" className="nav-btn">
                Profile
              </Link>
              <button onClick={logout} className="nav-btn">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="nav-login">
              Login
            </Link>
          )}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
