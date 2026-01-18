"use client"

export default function HotelParallax({ images, title }) {
  return (
    <div className="space-y-24">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative h-[70vh] overflow-hidden rounded-2xl"
        >
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${img})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            {index === 0 && (
              <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
                {title}
              </h1>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
