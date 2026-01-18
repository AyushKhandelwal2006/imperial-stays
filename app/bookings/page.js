"use client"

import { useBooking } from "@/context/BookingContext"
import { generateBookingPDF } from "@/components/utils/generateBookingPDF"

export default function BookingsPage() {
  const { bookings, cancelBooking, clearBookings } = useBooking()

  return (
    <main className="bg-[#faf7f2] min-h-screen">

      {/* 🌄 HERO PARALLAX */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center bg-fixed"
        style={{
          backgroundImage: "url('/images/hero-bookings.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-3">
            My Bookings
          </h1>
          <p className="text-gray-200">
            All your stays, reservations and memories in one place
          </p>
        </div>
      </section>

      {/* 📦 CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">

        {bookings.length === 0 && (
          <p className="text-center text-gray-500">
            No bookings yet
          </p>
        )}

        {bookings.length > 0 && (
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Your Reservations
            </h2>
            <button
              onClick={clearBookings}
              className="text-sm text-red-600 hover:underline"
            >
              Clear All
            </button>
          </div>
        )}

        {bookings.map(b => (
          <div
            key={b.id}
            className="bg-white dark:bg-gray-900 border rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6 shadow-sm"
          >
            <div>
              <h3 className="text-xl font-semibold">
                {b.hotel?.name ?? b.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {b.room ?? "Standard Room"} •{" "}
                {b.checkIn ?? "-"} → {b.checkOut ?? "-"}
              </p>

              <p className="mt-3 font-semibold text-lg">
                ₹{b.price}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <button
                onClick={() => generateBookingPDF(b)}
                className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Download PDF
              </button>

              <button
                onClick={() => cancelBooking(b.id)}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
