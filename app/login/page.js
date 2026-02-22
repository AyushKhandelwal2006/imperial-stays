"use client"

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const submit = async e => {
    e.preventDefault()
    try {
      await login(username, password)
      router.push("/profile")
    } catch {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm space-y-4 border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          placeholder="Username"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {/* ✅ FIXED LOGIN BUTTON */}
        <button
          type="submit"
          className="login-submit-btn w-full py-2 rounded-md font-semibold"
        >
          Login
        </button>

        <p className="text-center text-sm">
          No account?{" "}
          <Link href="/signup" className="underline font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

