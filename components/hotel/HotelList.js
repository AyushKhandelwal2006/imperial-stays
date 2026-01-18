import HotelCard from "./HotelCard"

export default function HotelList({ hotels }) {
  return (
    <div className="space-y-4">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
}
