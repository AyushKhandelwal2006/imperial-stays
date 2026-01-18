"use client"

import { useEffect, useRef, useState } from "react"
import { hotels as allHotels } from "@/data/hotels"

import SearchBar from "@/components/search/SearchBar"
import HotelGrid from "@/components/hotel/HotelGrid"
import HotelList from "@/components/hotel/HotelList"
import Filters from "@/components/filters/Filters"
import Skeleton from "@/components/ui/Skeleton"

import useRecentlyViewed from "@/hooks/useRecentlyViewed"
import useDebounce from "@/hooks/useDebounce"

const LOAD_COUNT = 3

export default function HotelsPage() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search)

  const [view, setView] = useState("grid")
  const [maxPrice, setMaxPrice] = useState(100000)
  const [rating, setRating] = useState(0)
  const [type, setType] = useState("All")
  const [sort, setSort] = useState("none")
  const [amenities, setAmenities] = useState([])

  const [visibleCount, setVisibleCount] = useState(LOAD_COUNT)
  const [loading, setLoading] = useState(false)

  const loaderRef = useRef(null)
  const { recent, clearRecent } = useRecentlyViewed()

  let filtered = allHotels
    .filter(h =>
      h.city.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter(h => h.price <= maxPrice)
    .filter(h => h.rating >= rating)
    .filter(h => (type === "All" ? true : h.type === type))
    .filter(h =>
      amenities.length === 0
        ? true
        : amenities.every(a => h.amenities.includes(a))
    )

  if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price)
  if (sort === "priceHigh") filtered.sort((a, b) => b.price - a.price)
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating)
  if (sort === "popular")
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount)

  const visibleHotels = filtered.slice(0, visibleCount)

  useEffect(() => {
    setVisibleCount(LOAD_COUNT)
  }, [debouncedSearch, maxPrice, rating, type, sort, amenities])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && visibleCount < filtered.length) {
        setLoading(true)
        setTimeout(() => {
          setVisibleCount(v => v + LOAD_COUNT)
          setLoading(false)
        }, 500)
      }
    })
    if (loaderRef.current) observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [visibleCount, filtered.length])

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      {recent.length > 0 && (
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold">Recently Viewed</h2>
            <button
              onClick={clearRecent}
              className="text-sm text-red-600 underline"
            >
              Clear
            </button>
          </div>
          <HotelGrid hotels={recent} />
        </div>
      )}

      <div className="flex gap-8">
        <aside className="w-72">
          <Filters
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            rating={rating}
            setRating={setRating}
            type={type}
            setType={setType}
            sort={sort}
            setSort={setSort}
            amenities={amenities}
            setAmenities={setAmenities}
          />
        </aside>

        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />

          {view === "grid" ? (
            <HotelGrid hotels={visibleHotels} />
          ) : (
            <HotelList hotels={visibleHotels} />
          )}

          {loading && <Skeleton />}
          <div ref={loaderRef} className="h-10" />
        </div>
      </div>
    </main>
  )
}
