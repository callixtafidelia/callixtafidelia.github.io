"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GitBranch, FileText, ExternalLink } from "lucide-react"
import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"

interface ProjectData {
  id: number
  title: string
  description: string
  category: string
  image: string
  tools: string[]
  link: string
  chartType: "bar" | "line" | "pie" | "scatter"
  chartData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor?: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
      fill?: boolean
    }[]
  }
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "COVID-19 Data Analysis",
    description: "Statistical analysis of COVID-19 trends across different regions using time series forecasting.",
    category: "Data Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "ggplot2", "Time Series"],
    link: "#",
    chartType: "line",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Cases",
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  },
  {
    id: 2,
    title: "Customer Segmentation",
    description: "Used clustering algorithms to segment customers based on purchasing behavior.",
    category: "Machine Learning",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Python", "scikit-learn", "Matplotlib"],
    link: "#",
    chartType: "scatter",
    chartData: {
      labels: ["Segment 1", "Segment 2", "Segment 3", "Segment 4"],
      datasets: [
        {
          label: "Customer Distribution",
          data: [30, 25, 15, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    id: 3,
    title: "Predictive Sales Analysis",
    description: "Built regression models to predict future sales based on historical data and external factors.",
    category: "Predictive Modeling",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "Python", "Regression Analysis"],
    link: "#",
    chartType: "bar",
    chartData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Actual Sales",
          data: [65, 59, 80, 81],
          backgroundColor: "rgba(54, 162, 235, 0.7)",
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 1,
        },
        {
          label: "Predicted Sales",
          data: [63, 60, 82, 85],
          backgroundColor: "rgba(255, 99, 132, 0.7)",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
      ],
    },
  },
  {
    id: 4,
    title: "Healthcare Outcomes Analysis",
    description: "Analyzed patient data to identify factors affecting treatment outcomes.",
    category: "Data Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["SPSS", "Survival Analysis", "Logistic Regression"],
    link: "#",
    chartType: "pie",
    chartData: {
      labels: ["Improved", "No Change", "Declined"],
      datasets: [
        {
          label: "Patient Outcomes",
          data: [65, 25, 10],
          backgroundColor: ["rgba(75, 192, 192, 0.7)", "rgba(255, 206, 86, 0.7)", "rgba(255, 99, 132, 0.7)"],
          borderWidth: 1,
        },
      ],
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [filter, setFilter] = useState("all")
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category.toLowerCase() === filter.toLowerCase())

  useEffect(() => {
    if (selectedProject && chartRef.current) {
      // Destroy previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: selectedProject.chartType,
          data: selectedProject.chartData,
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
        chartInstance.current = null
      }
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            A showcase of my statistical analysis and data science projects
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="data-analysis" onClick={() => setFilter("Data Analysis")}>
              Data Analysis
            </TabsTrigger>
            <TabsTrigger value="machine-learning" onClick={() => setFilter("Machine Learning")}>
              Machine Learning
            </TabsTrigger>
            <TabsTrigger value="predictive-modeling" onClick={() => setFilter("Predictive Modeling")}>
              Predictive Modeling
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Dialog
                    onOpenChange={(open) => {
                      if (open) setSelectedProject(project)
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.category}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <canvas ref={chartRef} />
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Project Description</h4>
                          <p>{project.description}</p>
                          <h4 className="font-semibold">Methodology</h4>
                          <p>
                            This project utilized {project.tools.join(", ")} to analyze the data and derive meaningful
                            insights. The analysis involved data cleaning, exploratory data analysis, and statistical
                            modeling.
                          </p>
                          <h4 className="font-semibold">Tools Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, i) => (
                              <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <GitBranch className="h-4 w-4" />
                              Repository
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a
                              href={`${project.link}/report`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <FileText className="h-4 w-4" />
                              Report
                            </a>
                          </Button>
                          <Button asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
