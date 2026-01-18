"use client"

import { useState } from "react"

export default function HotelGallery({ images }) {
  const safeImages = Array.isArray(images) ? images : []
  const [active, setActive] = useState(0)

  if (safeImages.length === 0) {
    return (
      <div className="h-96 bg-gray-200 rounded flex items-center justify-center">
        No images available
      </div>
    )
  }

  return (
    <div>
      <img
        src={safeImages[active]}
        className="w-full h-96 object-cover rounded"
      />

      <div className="flex gap-3 mt-3">
        {safeImages.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            className={`h-20 w-24 object-cover rounded cursor-pointer ${
              active === i ? "ring-2 ring-primary" : ""
            }`}
          />
        ))}
      </div>
    </div>
  )
}
