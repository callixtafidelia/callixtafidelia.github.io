"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">StatPortfolio</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col space-y-4">
                <Link href="#about" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  About
                </Link>
                <Link href="#skills" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Skills
                </Link>
                <Link href="#projects" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Projects
                </Link>
                <Link href="#contact" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Contact
                </Link>
                <ModeToggle />
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  )
}
