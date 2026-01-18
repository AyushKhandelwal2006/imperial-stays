"use client"

import { useEffect, useState } from "react"

const KEY = "recently_viewed_hotels"
const MAX = 3

export default function useRecentlyViewed() {
  const [recent, setRecent] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    if (stored) setRecent(JSON.parse(stored))
  }, [])

  const clearRecent = () => {
    localStorage.removeItem(KEY)
    setRecent([])
  }

  return { recent, clearRecent }
}

export function addRecentlyViewed(hotel) {
  if (!hotel) return

  const stored = JSON.parse(localStorage.getItem(KEY)) || []
  const filtered = stored.filter(h => h.id !== hotel.id)
  const updated = [hotel, ...filtered].slice(0, MAX)

  localStorage.setItem(KEY, JSON.stringify(updated))
}
