"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext"

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const { user } = useAuth()
  const [bookings, setBookings] = useState([])

  // 🔄 Load bookings when user changes
  useEffect(() => {
    if (!user) {
      setBookings([])
      return
    }

    const stored = localStorage.getItem(
      `bookings_${user.username}`
    )

    setBookings(stored ? JSON.parse(stored) : [])
  }, [user])

  const saveBookings = updated => {
    if (!user) return
    setBookings(updated)
    localStorage.setItem(
      `bookings_${user.username}`,
      JSON.stringify(updated)
    )
  }

  const addBooking = booking => {
    const updated = [...bookings, booking]
    saveBookings(updated)
  }

  const cancelBooking = id => {
    const updated = bookings.filter(b => b.id !== id)
    saveBookings(updated)
  }

  const clearBookings = () => {
    saveBookings([])
  }

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking,
        clearBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => useContext(BookingContext)
