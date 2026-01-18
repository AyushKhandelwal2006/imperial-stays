"use client"

import { createContext, useContext, useEffect, useState } from "react"

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem("bookings")
    if (saved) setBookings(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings))
  }, [bookings])

  const addBooking = booking => {
    setBookings(prev => [...prev, booking])
  }

  const cancelBooking = id => {
    setBookings(prev => prev.filter(b => b.id !== id))
  }

  const clearBookings = () => {
    setBookings([])
    localStorage.removeItem("bookings")
  }

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, cancelBooking, clearBookings }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => useContext(BookingContext)
