export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-gray-500">No reviews yet</p>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Guest Reviews</h3>

      {reviews.map(r => (
        <div
          key={r.id}
          className="border rounded p-4 space-y-1"
        >
          <p className="font-medium">
            {r.name} • {r.rating} ★
          </p>
          <p className="text-sm text-gray-600">
            {r.comment}
          </p>
        </div>
      ))}
    </div>
  )
}
