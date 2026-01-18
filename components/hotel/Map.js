export default function Map({ lat, lng }) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`

  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold">Location</h3>
      <iframe
        src={src}
        className="w-full h-80 rounded border"
        loading="lazy"
      />
    </div>
  )
}
