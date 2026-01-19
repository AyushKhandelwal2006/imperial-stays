"use client"

export default function Filters({
  maxPrice,
  setMaxPrice,
  rating,
  setRating,
  type,
  setType,
  sort,
  setSort,
  amenities,
  setAmenities,
}) {
  const toggleAmenity = amenity => {
    setAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    )
  }

  return (
    <div className="space-y-6">


      <div>
        <label className="font-semibold block mb-1">Max Price</label>
        <input
          type="range"
          min="1000"
          max="100000"
          step="500"
          value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-500">₹{maxPrice}</p>
      </div>

  
      <div>
        <label className="font-semibold block mb-1">Minimum Rating</label>
        <select
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value={0}>All</option>
          <option value={4}>4+</option>
          <option value={4.5}>4.5+</option>
        </select>
      </div>

  
      <div>
        <label className="font-semibold block mb-1">Property Type</label>
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="All">All</option>
          <option value="Hotel">Hotel</option>
          <option value="Resort">Resort</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>

     
      <div>
        <label className="font-semibold block mb-2">Amenities</label>
        {["WiFi", "Pool", "Parking", "AC"].map(a => (
          <label key={a} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={amenities.includes(a)}
              onChange={() => toggleAmenity(a)}
            />
            {a}
          </label>
        ))}
      </div>

      <div>
        <label className="font-semibold block mb-1">Sort By</label>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="none">None</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="rating">Rating</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </div>
  )
}
