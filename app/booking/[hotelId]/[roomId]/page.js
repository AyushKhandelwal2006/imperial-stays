"use client"

import { hotels } from "@/data/hotels"
import BookingForm from "@/components/booking/BookingForm"

export default function BookingPage({ params }) {
  const { hotelId, roomId } = params

  const hotel = hotels.find(h => h.id === hotelId)
  const room = hotel?.rooms.find(r => r.id === roomId)

  if (!hotel || !room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Invalid booking details</p>
      </div>
    )
  }

  return (
    <main className="bg-ivory min-h-screen">
      {/* 🌄 TOP BANNER */}
      <section
        className="relative h-[45vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${hotel.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-10">
            <p className="text-gold tracking-[0.3em] text-sm mb-2">
              SECURE BOOKING
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-white">
              Complete Your Reservation
            </h1>
            <p className="text-gray-200 mt-2">
              {hotel.name} • {room.name}
            </p>
          </div>
        </div>
      </section>

      {/* 🧾 BOOKING CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT FORM */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gold/40 p-8">
              <h2 className="text-2xl font-serif text-primary mb-6">
                Guest & Stay Details
              </h2>

              <BookingForm hotel={hotel} room={room} />
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-lg border border-gold/40 p-6">
              <h3 className="text-xl font-serif mb-4">
                Your Stay
              </h3>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Hotel:</span>{" "}
                  {hotel.name}
                </p>
                <p>
                  <span className="font-medium">Room:</span>{" "}
                  {room.name}
                </p>
                <p>
                  <span className="font-medium">City:</span>{" "}
                  {hotel.city}
                </p>
              </div>

              <div className="border-t border-gold/30 my-4" />

              <p className="text-xs text-gray-500">
                Taxes, discounts, and final price will be calculated
                before confirmation.
              </p>

              <p className="text-gold text-xs mt-3">
                🔒 100% Secure Booking
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
