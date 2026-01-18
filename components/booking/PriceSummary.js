export default function PriceSummary({ nights, price, guests }) {
  const base = nights * price
  const guestCharge = guests > 1 ? (guests - 1) * 500 * nights : 0
  const subTotal = base + guestCharge

  const discount =
    nights >= 3 ? Math.round(subTotal * 0.1) : 0

  const taxableAmount = subTotal - discount
  const taxes = Math.round(taxableAmount * 0.12)
  const total = taxableAmount + taxes

  return (
    <div className="border p-4 rounded space-y-2">
      <h3 className="font-semibold">Price Summary</h3>
      <p>Base ({nights} nights): ₹{base}</p>

      {guestCharge > 0 && (
        <p>Extra Guests: ₹{guestCharge}</p>
      )}

      {discount > 0 && (
        <p className="text-green-600">
          Discount (10%): -₹{discount}
        </p>
      )}

      <p>Taxes (12%): ₹{taxes}</p>

      <p className="font-bold text-lg">
        Total: ₹{total}
      </p>
    </div>
  )
}
