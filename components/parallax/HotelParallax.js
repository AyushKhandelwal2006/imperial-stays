"use client"

import { useRef } from "react"

export default function HotelParallax({ images, title }) {
  const ref = useRef(null)

  return (
    <section className="relative overflow-hidden">
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 py-10"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] h-[55vh] rounded-3xl overflow-hidden relative"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-4xl font-serif drop-shadow-lg">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-80">
        ← Swipe to explore rooms →
      </div>
    </section>
  )
}

