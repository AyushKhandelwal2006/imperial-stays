"use client"

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by city..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full md:w-72 p-2 border rounded"
    />
  )
}
