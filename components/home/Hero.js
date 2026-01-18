"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const heroImages = [
  "/images/hero-home-1.png",
  "/images/hero-home-2.png",
  "/images/hero-home-3.png",
  "/images/hero-home-4.png"
]

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">

      {/* 🌄 MULTI IMAGE PARALLAX */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${img}')`,
            transform: `translateY(${scrollY * (0.12 + index * 0.05)}px)`,
            opacity: 1 - index * 0.18,
            zIndex: index,
          }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex h-full items-center justify-center text-center px-6">
        <div>
          <p className="text-gold tracking-[0.3em] mb-4 text-sm">
            ATITHI DEVO BHAVA
          </p>

          <h1 className="text-4xl md:text-6xl font-serif text-white mb-5">
            Experience Royal Indian Hospitality
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto mb-10">
            Discover heritage palaces, luxury resorts, and premium stays
            curated with warmth, elegance, and trust.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/hotels"
              className="bg-primary text-white px-8 py-3 rounded-md hover:bg-gold hover:text-charcoal transition"
            >
              Explore Stays
            </Link>

            <Link
              href="/signup"
              className="border border-gold text-gold px-8 py-3 rounded-md hover:bg-gold hover:text-charcoal transition"
            >
              Join Imperial
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

