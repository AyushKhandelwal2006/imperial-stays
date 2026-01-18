import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import { AuthProvider } from "@/context/AuthContext"
import { BookingProvider } from "@/context/BookingContext"
import { ThemeProvider } from "@/context/ThemeContext"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <BookingProvider>
              <Navbar />
              {children}
            </BookingProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
