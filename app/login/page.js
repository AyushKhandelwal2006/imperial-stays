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
    <div className="h-[70vh] flex items-center justify-center">
      <form className="w-80 space-y-4 border p-6 rounded" onSubmit={submit}>
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          placeholder="Username"
          className="w-full p-2 border rounded"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-primary text-white py-2 rounded">
          Login
        </button>

        <p className="text-center text-sm">
          No account?{" "}
          <Link href="/signup" className="text-primary">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}
