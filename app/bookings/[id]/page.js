"use client"

import { hotels } from "@/data/hotels"
import { useSearchParams } from "next/navigation"
import BookingForm from "@/components/booking/BookingForm"

export default function BookingPage({ params }) {
  const search = useSearchParams()
  const roomId = search.get("room")

  const hotel = hotels.find(h => h.id === params.id)
  const room = hotel.rooms.find(r => r.id === roomId)

  return (
    <section className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{hotel.name}</h1>
      <p>{room.name}</p>

      <BookingForm hotel={hotel} room={room} />
    </section>
  )
}
