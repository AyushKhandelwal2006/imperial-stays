"use client"

import { useState } from "react"

export default function RoomSelector({ rooms, pricePerNight, onConfirm }) {
  const [roomType, setRoomType] = useState(rooms[0].type)
  const [roomCount, setRoomCount] = useState(1)
  const [guests, setGuests] = useState(2)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  const selectedRoom = rooms.find(r => r.type === roomType)
  const totalPrice =
    roomCount * selectedRoom.priceMultiplier * pricePerNight

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl space-y-5 shadow">

      <h3 className="text-2xl font-semibold">Select Room</h3>

      {/* Room Type */}
      <select
        className="w-full border rounded-lg p-2"
        value={roomType}
        onChange={e => setRoomType(e.target.value)}
      >
        {rooms.map(r => (
          <option key={r.type} value={r.type}>
            {r.type}
          </option>
        ))}
      </select>

      {/* Rooms Count */}
      <div>
        <label className="block text-sm mb-1">Number of Rooms</label>
        <input
          type="number"
          min="1"
          value={roomCount}
          onChange={e => setRoomCount(Number(e.target.value))}
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Guests */}
      <div>
        <label className="block text-sm mb-1">Guests</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={e => setGuests(Number(e.target.value))}
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          value={checkIn}
          onChange={e => setCheckIn(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="date"
          value={checkOut}
          onChange={e => setCheckOut(e.target.value)}
          className="border p-2 rounded-lg"
        />
      </div>

      {/* Price */}
      <div className="text-xl font-bold">
        Total: ₹ {totalPrice}
      </div>

      {/* Book */}
      <button
        onClick={() =>
          onConfirm({
            roomType,
            roomCount,
            guests,
            checkIn,
            checkOut,
            totalPrice,
          })
        }
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
      >
        Confirm Booking
      </button>
    </div>
  )
}

