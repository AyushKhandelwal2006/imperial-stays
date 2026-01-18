"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useBooking } from "@/context/BookingContext"
import PriceSummary from "./PriceSummary"

export default function BookingForm({ hotel, room }) {
  const { addBooking } = useBooking()

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(1)

  const submit = e => {
    e.preventDefault()

    addBooking({
      id: Date.now(),
      hotel: hotel.name,
      room: room.name,
      checkIn,
      checkOut,
      guests,
      nights: 1,
      bookedAt: new Date().toISOString()
    })

    alert("Booking Confirmed")
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={submit}
      className="space-y-4"
    >
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={checkIn}
        onChange={e => setCheckIn(e.target.value)}
      />

      <input
        type="date"
        className="w-full p-2 border rounded"
        value={checkOut}
        onChange={e => setCheckOut(e.target.value)}
      />

      <select
        className="w-full p-2 border rounded"
        value={guests}
        onChange={e => setGuests(Number(e.target.value))}
      >
        {[1, 2, 3, 4].map(n => (
          <option key={n} value={n}>
            {n} Guest{n > 1 ? "s" : ""}
          </option>
        ))}
      </select>

      <PriceSummary nights={1} price={room.price} guests={guests} />

      <button className="w-full bg-primary text-white py-2 rounded hover:scale-[1.02] transition">
        Confirm Booking
      </button>
    </motion.form>
  )
}
