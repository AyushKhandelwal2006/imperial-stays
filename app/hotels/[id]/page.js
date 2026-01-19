"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { hotels } from "@/data/hotels"
import { useBooking } from "@/context/BookingContext"
import { useAuth } from "@/context/AuthContext"
import HotelParallax from "@/components/parallax/HotelParallax"

export default function HotelDetailsPage() {
  const { id } = useParams()
  const router = useRouter()

  const hotel = hotels.find(h => String(h.id) === String(id))
  const { addBooking } = useBooking()
  const { user } = useAuth()

  const [room, setRoom] = useState(hotel?.rooms[0])
  const [roomsCount, setRoomsCount] = useState(1)
  const [guests, setGuests] = useState(2)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [success, setSuccess] = useState(false)
  const [loginError, setLoginError] = useState("")

  if (!hotel) {
    return <div className="text-center mt-20">Hotel not found</div>
  }

  const nights =
    checkIn && checkOut && new Date(checkOut) > new Date(checkIn)
      ? Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) /
            (1000 * 60 * 60 * 24)
        )
      : 0

  const totalPrice = nights * room.price * roomsCount

  const handleBooking = () => {
    if (!user) {
      setLoginError("Please login or signup to book this hotel")
      return
    }

    if (!checkIn || !checkOut || nights <= 0) return

    addBooking({
      id: Date.now(),
      hotel,
      room: room.type,
      rooms: roomsCount,
      guests,
      checkIn,
      checkOut,
      nights,
      price: totalPrice,
    })

    setLoginError("")
    setSuccess(true)

    setTimeout(() => {
      router.push("/bookings")
    }, 1200)
  }

  return (
    <div className="space-y-20">

      <HotelParallax images={hotel.images} title={hotel.name} />

      <div className="max-w-5xl mx-auto px-4 space-y-12">

        <div>
          <h2 className="text-4xl font-bold">{hotel.name}</h2>
          <p className="text-gray-500">
            {hotel.city} • {hotel.type}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
          <div className="flex flex-wrap gap-3">
            {hotel.amenities.map((a, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">Room Type</label>
            <select
              className="w-full border p-3 rounded"
              value={room.type}
              onChange={e =>
                setRoom(
                  hotel.rooms.find(r => r.type === e.target.value)
                )
              }
            >
              {hotel.rooms.map((r, i) => (
                <option key={i} value={r.type}>
                  {r.type} — ₹{r.price}/night
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Number of Rooms</label>
            <input
              type="number"
              min="1"
              value={roomsCount}
              onChange={e => setRoomsCount(Number(e.target.value))}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={e => setGuests(Number(e.target.value))}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={e => {
                setCheckIn(e.target.value)
                setCheckOut("")
              }}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Check-out</label>
            <input
              type="date"
              min={checkIn}
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              className="w-full border p-3 rounded"
            />
          </div>

        </div>

        {nights > 0 && (
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl space-y-2">
            <p>Nights: {nights}</p>
            <p>Room: {room.type}</p>
            <p>Rooms: {roomsCount}</p>
            <p>Guests: {guests}</p>
            <p className="text-xl font-semibold">
              Total: ₹{totalPrice}
            </p>
          </div>
        )}

        <div className="flex flex-col items-end">

          {loginError && (
            <p className="text-red-600 text-sm mb-2">
              {loginError}
            </p>
          )}

          <button
            onClick={handleBooking}
            disabled={!checkIn || !checkOut || nights <= 0}
            className="bg-red-600 text-white px-8 py-3 rounded-lg disabled:opacity-50"
          >
            Book Now
          </button>

          {success && (
            <p className="text-green-600 mt-2">
              ✅ Booking successful! Redirecting…
            </p>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Location</h3>
          <iframe
            src={`https://maps.google.com/maps?q=${hotel.location.lat},${hotel.location.lng}&z=14&output=embed`}
            className="w-full h-72 rounded-xl"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Guest Reviews</h3>
          {hotel.reviews.map((r, i) => (
            <div key={i} className="border p-4 rounded-lg mb-3">
              <p className="font-semibold">
                {r.user} ⭐ {r.rating}
              </p>
              <p className="text-gray-600">{r.comment}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
