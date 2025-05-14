"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Parallax effect on scroll
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Typing effect
  const typingSpeed = 100
  const baseText = "Hello, I'm John Doe"
  const phrases = [
    " | Statistics Student",
    " | Data Analyst",
    " | Machine Learning Enthusiast",
    " | Visualization Expert",
  ]

  useEffect(() => {
    const currentFullText = baseText + phrases[currentPhrase]

    const handleTyping = () => {
      // If we're deleting and reached just the base text
      if (isDeleting && typedText === baseText) {
        setIsDeleting(false)
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        return
      }

      // If we're typing and reached the full text
      if (!isDeleting && typedText === currentFullText) {
        // Pause at the end of the phrase before starting to delete
        setTimeout(() => setIsDeleting(true), 1500)
        return
      }

      // Update the text one character at a time with consistent speed
      setTimeout(() => {
        setTypedText((prev) => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1)
          } else {
            return currentFullText.substring(0, prev.length + 1)
          }
        })
      }, typingSpeed)
    }

    handleTyping()
  }, [typedText, currentPhrase, isDeleting, phrases, baseText])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-24 md:py-32">
        <motion.div
          style={{ y: y1, opacity }}
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              Transforming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">data</span>{" "}
              into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                meaningful
              </span>{" "}
              <span className="relative">
                <span className="relative z-10">insights</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6 mt-8"
          >
            <p className="text-xl text-gray-300">
              {typedText}
              <span className="inline-block w-1 h-5 bg-blue-400 ml-1 animate-blink"></span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="bg-gray-900/80 hover:bg-gray-800 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-blue-300 rounded w-40 h-12"
                asChild
              >
                <a href="#contact">
                  Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                className="bg-gray-900/80 hover:bg-gray-800 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-blue-300 rounded w-40 h-12"
                asChild
              >
                <a href="#projects">
                  Projects <BarChart2 className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - centered */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
