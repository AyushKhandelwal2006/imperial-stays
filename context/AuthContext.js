"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem("user")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const signup = (username, password) => {
    const newUser = { username }
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser)
  }

  const login = (username, password) => {
    const stored = JSON.parse(localStorage.getItem("user"))
    if (!stored || stored.username !== username) {
      alert("Invalid credentials")
      return
    }
    setUser(stored)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
