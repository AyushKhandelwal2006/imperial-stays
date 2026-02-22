"use client"

import { useAuth } from "@/context/AuthContext"
import { useBooking } from "@/context/BookingContext"

export default function ProfilePage() {
  const { user } = useAuth()
  const { bookings } = useBooking()

  return (
    <main className="bg-[#faf7f2] min-h-screen">

      
      <section className="relative h-[60vh] overflow-hidden">

        
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero-profile.jpg')",
          }}
        />

       
        <div className="absolute inset-0 bg-black/50" />

       
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            My Profile
          </h1>
          <p className="text-gray-200">
            Personal details and booking summary
          </p>
        </div>
      </section>

     
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Username:</span>{" "}
            {user?.username || "Guest"}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Total Bookings:</span>{" "}
            {bookings.length}
          </p>
        </div>
      </section>
    </main>
  )
}
