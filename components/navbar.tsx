"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <div className="absolute inset-0 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
                JD
              </div>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">John Doe</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center">
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg px-4 py-2 border border-gray-800">
                <div className="flex space-x-6">
                  <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                    Projects
                  </Link>
                  <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                    Skills
                  </Link>
                  <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <>
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              {isMenuOpen && (
                <div className="absolute top-16 right-0 w-48 bg-black/80 backdrop-blur-md border border-gray-800 rounded-lg p-4 flex flex-col space-y-4">
                  <Link href="/" onClick={toggleMenu} className="px-4 py-2 hover:text-primary rounded-md">
                    Home
                  </Link>
                  <Link href="#projects" onClick={toggleMenu} className="px-4 py-2 hover:text-primary rounded-md">
                    Projects
                  </Link>
                  <Link href="#skills" onClick={toggleMenu} className="px-4 py-2 hover:text-primary rounded-md">
                    Skills
                  </Link>
                  <Link href="#about" onClick={toggleMenu} className="px-4 py-2 hover:text-primary rounded-md">
                    About
                  </Link>
                  <Link href="#contact" onClick={toggleMenu} className="px-4 py-2 hover:text-primary rounded-md">
                    Contact
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}
