"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
  loginUser,
  registerUser,
  getCurrentUser,
} from "@/lib/auth"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 🔥 Check if user already logged in (via cookie)
  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await getCurrentUser()
        if (currentUser) {
          setUser(currentUser)
        }
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const signup = async (name, email, password) => {
    await registerUser({ name, email, password })
    await login(email, password)
  }

  const login = async (email, password) => {
    await loginUser({ email, password })

    const currentUser = await getCurrentUser()
    setUser(currentUser)
  }

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)