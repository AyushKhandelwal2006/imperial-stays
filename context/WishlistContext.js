"use client"

import { createContext, useContext, useEffect, useState } from "react"

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("wishlist")
    if (stored) setWishlist(JSON.parse(stored))
  }, [])

  const toggleWishlist = hotel => {
    const exists = wishlist.find(h => h.id === hotel.id)

    let updated
    if (exists) {
      updated = wishlist.filter(h => h.id !== hotel.id)
    } else {
      updated = [...wishlist, hotel]
    }

    setWishlist(updated)
    localStorage.setItem("wishlist", JSON.stringify(updated))
  }

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
