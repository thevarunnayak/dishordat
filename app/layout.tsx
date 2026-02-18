import { ThemeProvider } from "@/components/utils/theme-provider"
import "./globals.css"
import Navbar from "@/components/shared/navBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
