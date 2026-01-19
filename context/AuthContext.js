"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem("auth_user")
    if (stored) {
      setUser(JSON.parse(stored))
    }
  }, [])

  const signup = (username, password) => {
    const users =
      JSON.parse(localStorage.getItem("users")) || []

    const exists = users.find(
      u => u.username === username
    )

    if (exists) {
      throw new Error("User already exists")
    }

    const newUser = { username, password }

    localStorage.setItem(
      "users",
      JSON.stringify([...users, newUser])
    )

    localStorage.setItem(
      "auth_user",
      JSON.stringify(newUser)
    )

    setUser(newUser)
  }

  const login = (username, password) => {
    const users =
      JSON.parse(localStorage.getItem("users")) || []

    const found = users.find(
      u =>
        u.username === username &&
        u.password === password
    )

    if (!found) {
      throw new Error("Invalid credentials")
    }

    localStorage.setItem(
      "auth_user",
      JSON.stringify(found)
    )

    setUser(found)
  }

  const logout = () => {
    localStorage.removeItem("auth_user")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
