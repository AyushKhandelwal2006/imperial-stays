"use client"

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const { signup } = useAuth()
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const submit = async e => {
    e.preventDefault()
    try {
      await signup(name, email, password)
      router.push("/profile")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="h-[70vh] flex items-center justify-center">
      <form className="w-80 space-y-4 border p-6 rounded" onSubmit={submit}>
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  )
}
