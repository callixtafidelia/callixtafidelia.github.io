import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Data Science Portfolio",
  description: "Portfolio website for a data science student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-500">
        <ThemeProvider defaultTheme="light">
          <div className="flex min-h-screen p-8 gap-10">
            <Sidebar />
            <main className="flex-1 ml-80">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
