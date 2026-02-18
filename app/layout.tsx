import { ThemeProvider } from "@/components/utils/theme-provider"
import "./globals.css"
import Navbar from "@/components/shared/navBar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dishordat",
  description: "Discover and compare restaurants with Dishordat - your ultimate dining companion. Explore menus, read reviews, and find the perfect spot for your next meal. Whether you're craving local flavors or international cuisine, Dishordat helps you make informed dining decisions with ease.",
}
 
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
