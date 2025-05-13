"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PhotoSlide {
  image: string
  caption: string
}

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const photoSlides: PhotoSlide[] = [
    {
      image: "/placeholder.svg?height=300&width=300",
      caption: "Working on statistical analysis projects",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      caption: "Presenting research findings at a conference",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      caption: "Collaborating with team members on data visualization",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      caption: "Teaching statistics to undergraduate students",
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photoSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, photoSlides.length])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev + 1) % photoSlides.length)
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev - 1 + photoSlides.length) % photoSlides.length)
  }

  return (
    <section id="about" className="relative py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Photo slider - takes 4 columns on desktop (smaller) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="relative w-full max-w-[220px] mx-auto">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-100">
                {photoSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={`Photo ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 hover:bg-black/70 z-10 h-8 w-8 rounded-full"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 hover:bg-black/70 z-10 h-8 w-8 rounded-full"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-2 text-center text-sm text-gray-400">{photoSlides[currentSlide].caption}</div>

              <div className="flex justify-center mt-2 space-x-2">
                {photoSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-gray-600"}`}
                    onClick={() => {
                      setAutoplay(false)
                      setCurrentSlide(index)
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text content - takes 8 columns on desktop (bigger) and aligned to top */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-8 flex items-start" // Changed from items-center to items-start
          >
            <p className="text-gray-400 text-left">
              My academic journey and professional experience in statistics and data analysis. My research interests
              include predictive modeling, Bayesian statistics, and the application of machine learning in healthcare
              data. I'm passionate about using data to solve real-world problems and improve decision-making processes.
              Outside of academics, I enjoy participating in data science competitions, contributing to open-source
              statistical packages, and mentoring junior students in statistics.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12"
        >
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 backdrop-blur-md rounded-lg p-1 border border-gray-800">
              <TabsTrigger value="education" className="rounded">
                Education
              </TabsTrigger>
              <TabsTrigger value="experience" className="rounded">
                Experience
              </TabsTrigger>
              <TabsTrigger value="interests" className="rounded">
                Interests
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="education"
              className="p-4 mt-4 bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold">Bachelor of Science in Statistics</h4>
                  <p className="text-sm text-gray-400">University of Data Science, 2019-2023</p>
                  <p className="text-gray-300">
                    Focused on statistical methods, data analysis, and machine learning algorithms. Completed coursework
                    in regression analysis, time series forecasting, and experimental design.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold">Minor in Computer Science</h4>
                  <p className="text-sm text-gray-400">University of Data Science, 2019-2023</p>
                  <p className="text-gray-300">
                    Studied programming fundamentals, data structures, algorithms, and database management systems.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="experience"
              className="p-4 mt-4 bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold">Data Analysis Intern</h4>
                  <p className="text-sm text-gray-400">Tech Solutions Inc., Summer 2022</p>
                  <p className="text-gray-300">
                    Analyzed customer behavior data using R and Python. Created visualizations and reports that informed
                    marketing strategies.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold">Research Assistant</h4>
                  <p className="text-sm text-gray-400">University Statistics Department, 2021-2023</p>
                  <p className="text-gray-300">
                    Assisted faculty with research projects involving statistical modeling and data collection.
                    Co-authored a paper on predictive analytics.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="interests"
              className="p-4 mt-4 bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800"
            >
              <p className="text-gray-300">
                My research interests include predictive modeling, Bayesian statistics, and the application of machine
                learning in healthcare data. I'm passionate about using data to solve real-world problems and improve
                decision-making processes.
              </p>
              <p className="mt-2 text-gray-300">
                Outside of academics, I enjoy participating in data science competitions, contributing to open-source
                statistical packages, and mentoring junior students in statistics.
              </p>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
