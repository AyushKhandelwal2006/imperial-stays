"use client"

import Link from "next/link"
import MotionWrapper from "@/components/ui/MotionWrapper"

const sections = [
  {
    image: "/images/hero-home-1.png",
    title: "Experience Royal Indian Hospitality",
    desc:
      "Discover heritage palaces, luxury resorts, and premium stays curated with warmth, elegance, and trust.",
    cta: true,
  },
  {
    image: "/images/hero-home-2.png",
    title: "Live Like Royalty in Heritage Palaces",
    desc:
      "From Jaipur to Udaipur, step into centuries-old palaces transformed into world-class luxury stays.",
  },
  {
    image: "/images/hero-home-3.png",
    title: "Serene Beach & Island Resorts",
    desc:
      "Unwind by turquoise waters, private beaches, and peaceful island retreats designed for pure relaxation.",
  },
  {
    image: "/images/hero-home-4.png",
    title: "Modern Luxury in Iconic Cities",
    desc:
      "Stay at premium city hotels in Mumbai, Delhi, Bangalore and more — where comfort meets class.",
  },
]

export default function HomePage() {
  return (
    <main>
      {sections.map((s, i) => (
        <section
          key={i}
          id={`section-${i}`}
          className="relative h-[90vh] overflow-hidden"
        >
          {/* PARALLAX BACKGROUND */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover scale-110"
            style={{ backgroundImage: `url('${s.image}')` }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <MotionWrapper>
                {i === 0 && (
                  <p className="text-gold tracking-[0.35em] text-sm mb-4">
                    ATITHI DEVO BHAVA
                  </p>
                )}

                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                  {s.title}
                </h1>

                <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10">
                  {s.desc}
                </p>

                {s.cta && (
                  <div className="flex justify-center gap-4">
                    <Link
                      href="/hotels"
                      className="px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
                    >
                      Explore Stays
                    </Link>

                    <Link
                      href="/signup"
                      className="px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition"
                    >
                      Join Imperial
                    </Link>
                  </div>
                )}
              </MotionWrapper>
            </div>
          </div>

          {/* 👇 SCROLL INDICATOR (not on last section) */}
          {i !== sections.length - 1 && (
            <a
              href={`#section-${i + 1}`}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white opacity-80 hover:opacity-100 transition"
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <span className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
              </div>
              <span className="mt-2 text-xs tracking-widest">
                SCROLL
              </span>
            </a>
          )}
        </section>
      ))}
    </main>
  )
}

