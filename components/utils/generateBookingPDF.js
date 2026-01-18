import jsPDF from "jspdf"

/* 🔥 convert image to base64 (required by jsPDF) */
async function getBase64Image(src) {
  const response = await fetch(src)
  const blob = await response.blob()

  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}

export async function generateBookingPDF(booking) {
  const doc = new jsPDF("p", "mm", "a4")

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()

  /* 🌄 LOAD WATERMARK IMAGE SAFELY */
  const bgImage = await getBase64Image("/images/pdf-watermark.png")

  /* 🌄 BACKGROUND IMAGE WITH VISIBLE COLORS */
  doc.setGState(new doc.GState({ opacity: 0.22 }))
  doc.addImage(
    bgImage,
    "PNG",
    0,
    0,
    pageWidth,
    pageHeight
  )

  /* RESET OPACITY */
  doc.setGState(new doc.GState({ opacity: 1 }))

  /* 🏨 HEADER */
  doc.setFont("times", "bold")
  doc.setFontSize(22)
  doc.text("Imperial Stays", pageWidth / 2, 28, { align: "center" })

  doc.setFont("times", "normal")
  doc.setFontSize(12)
  doc.text("Booking Confirmation", pageWidth / 2, 36, {
    align: "center",
  })

  doc.line(30, 40, pageWidth - 30, 40)

  /* 🧾 CONTENT CARD */
  doc.setFillColor(255, 255, 255)
  doc.roundedRect(25, 48, pageWidth - 50, 110, 6, 6, "F")

  let y = 65
  const gap = 10

  const row = (label, value) => {
    doc.setFont("times", "bold")
    doc.text(label, 35, y)
    doc.setFont("times", "normal")
    doc.text(String(value ?? "-"), 95, y)
    y += gap
  }

  row("Hotel:", booking.hotel?.name)
  row("City:", booking.hotel?.city)
  row("Room Type:", booking.room)
  row("Rooms:", booking.rooms)
  row("Guests:", booking.guests)
  row("Check-in:", booking.checkIn)
  row("Check-out:", booking.checkOut)
  row("Nights:", booking.nights)
  row("Total Amount:", `₹${booking.price}`)

  /* FOOTER */
  doc.setFontSize(10)
  doc.setTextColor(90)
  doc.text(
    "Atithi Devo Bhava • Thank you for choosing Imperial Stays",
    pageWidth / 2,
    pageHeight - 20,
    { align: "center" }
  )

  doc.save(`Imperial-Stays-Booking-${booking.id}.pdf`)
}
