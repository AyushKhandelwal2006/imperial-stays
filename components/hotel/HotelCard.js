"use client"

import Link from "next/link"

export default function HotelCard({ hotel }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={hotel.images?.[0] || "/images/placeholder.jpg"}
          alt={hotel.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Rating */}
        <span className="absolute top-4 left-4 bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
          ⭐ {hotel.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">
          {hotel.name}
        </h3>

        <p className="text-sm text-gray-500 mb-3">
          {hotel.city} • {hotel.type}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-rose-700">
            ₹{hotel.price}
            <span className="text-sm text-gray-500 font-normal"> / night</span>
          </p>

          <Link
            href={`/hotels/${hotel.id}`}
            className="px-4 py-2 rounded-full border border-rose-700 text-rose-700 text-sm font-semibold hover:bg-rose-700 hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
