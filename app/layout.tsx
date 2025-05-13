import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SpaceBackground } from "@/components/space-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Callixta | Statistics Portfolio",
  description: "Portfolio of a statistics student specializing in data analysis and visualization",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative min-h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20 z-0"></div>
            <SpaceBackground />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
