"use client"

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const { signup } = useAuth()
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = e => {
    e.preventDefault()
    signup(username, password)
    router.push("/profile")
  }

  return (
    <div className="h-[70vh] flex items-center justify-center">
      <form className="w-80 space-y-4 border p-6 rounded" onSubmit={submit}>
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

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
          Create Account
        </button>
      </form>
    </div>
  )
}

