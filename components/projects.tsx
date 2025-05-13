"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GitBranch, FileText, ExternalLink, Code, BarChart } from "lucide-react"
import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"
import CodeDisplay from "./code-display"
import { codeExamples } from "@/data/code-examples"

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
      data: number[] | { x: number; y: number; r: number }[]
      backgroundColor?: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
      fill?: boolean
      tension?: number
      borderDash?: number[]
    }[]
  }
  codeKey?: keyof typeof codeExamples
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "COVID-19 Time Series Analysis",
    description:
      "Applied ARIMA and Prophet models to analyze COVID-19 case trends across different regions, identifying seasonal patterns and predicting future outbreaks with 87% accuracy.",
    category: "Time Series Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "Prophet", "ARIMA", "ggplot2"],
    link: "#",
    chartType: "line",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "Actual Cases",
          data: [1200, 1900, 3000, 5000, 4100, 3600, 2800, 4200],
          fill: false,
          borderColor: "rgb(59, 130, 246)",
          tension: 0.1,
        },
        {
          label: "Predicted Cases",
          data: [1300, 2100, 3200, 4800, 4000, 3400, 3000, 4500],
          fill: false,
          borderColor: "rgb(239, 68, 68)",
          tension: 0.1,
          borderDash: [5, 5],
        },
      ],
    },
    codeKey: "timeSeriesAnalysis",
  },
  {
    id: 2,
    title: "Customer Segmentation for E-commerce",
    description:
      "Implemented K-means and hierarchical clustering to segment 50,000+ customers based on purchasing behavior, RFM analysis, and demographic data, resulting in 5 distinct customer personas that increased marketing ROI by 23%.",
    category: "Cluster Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Python", "scikit-learn", "K-means", "Hierarchical Clustering"],
    link: "#",
    chartType: "scatter",
    chartData: {
      labels: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
      datasets: [
        {
          label: "Customer Segments",
          data: [
            { x: 2.3, y: 4.5, r: 15 },
            { x: 3.7, y: 1.2, r: 10 },
            { x: 5.2, y: 3.8, r: 8 },
            { x: 1.5, y: 2.1, r: 12 },
            { x: 4.1, y: 5.0, r: 7 },
          ],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(16, 185, 129, 0.7)",
            "rgba(239, 68, 68, 0.7)",
            "rgba(245, 158, 11, 0.7)",
            "rgba(139, 92, 246, 0.7)",
          ],
        },
      ],
    },
    codeKey: "customerSegmentation",
  },
  {
    id: 3,
    title: "Multivariate Regression Analysis of Housing Prices",
    description:
      "Developed a multivariate regression model to predict housing prices using 15 variables including location, square footage, and neighborhood demographics. Achieved R² of 0.83 and RMSE of $23,450, outperforming the county assessor's model by 12%.",
    category: "Regression Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "Multiple Regression", "Residual Analysis", "Cross-validation"],
    link: "#",
    chartType: "bar",
    chartData: {
      labels: ["Location", "Square Footage", "Age", "Bedrooms", "Bathrooms", "School Rating"],
      datasets: [
        {
          label: "Variable Importance (Standardized Coefficients)",
          data: [0.65, 0.58, -0.32, 0.21, 0.28, 0.41],
          backgroundColor: "rgba(59, 130, 246, 0.7)",
          borderColor: "rgb(59, 130, 246)",
          borderWidth: 1,
        },
      ],
    },
    codeKey: "regressionAnalysis",
  },
  {
    id: 4,
    title: "Survival Analysis of Cancer Treatment Outcomes",
    description:
      "Conducted Kaplan-Meier survival analysis and Cox proportional hazards modeling on a dataset of 1,200 cancer patients to evaluate the efficacy of three treatment protocols, controlling for age, stage, and comorbidities.",
    category: "Survival Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "Survival", "Kaplan-Meier", "Cox Proportional Hazards"],
    link: "#",
    chartType: "line",
    chartData: {
      labels: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
      datasets: [
        {
          label: "Treatment A",
          data: [1.0, 0.92, 0.85, 0.78, 0.72, 0.68, 0.65, 0.62, 0.6, 0.58, 0.57],
          borderColor: "rgba(16, 185, 129, 0.7)",
          fill: false,
        },
        {
          label: "Treatment B",
          data: [1.0, 0.88, 0.79, 0.71, 0.64, 0.58, 0.53, 0.49, 0.46, 0.44, 0.42],
          borderColor: "rgba(245, 158, 11, 0.7)",
          fill: false,
        },
        {
          label: "Treatment C",
          data: [1.0, 0.85, 0.73, 0.62, 0.54, 0.47, 0.42, 0.38, 0.35, 0.33, 0.31],
          borderColor: "rgba(239, 68, 68, 0.7)",
          fill: false,
        },
      ],
    },
    codeKey: "survivalAnalysis",
  },
  {
    id: 5,
    title: "A/B Testing for E-commerce Conversion Optimization",
    description:
      "Designed and analyzed A/B tests for an e-commerce platform comparing 3 checkout page designs across 200,000 user sessions. Implemented power analysis, hypothesis testing, and confidence intervals to identify the optimal design that increased conversion rates by 18%.",
    category: "Hypothesis Testing",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Python", "Bayesian A/B Testing", "Hypothesis Testing", "Pandas"],
    link: "#",
    chartType: "bar",
    chartData: {
      labels: ["Design A", "Design B", "Design C"],
      datasets: [
        {
          label: "Conversion Rate (%)",
          data: [3.2, 3.8, 4.5],
          backgroundColor: ["rgba(59, 130, 246, 0.7)", "rgba(16, 185, 129, 0.7)", "rgba(239, 68, 68, 0.7)"],
          borderColor: ["rgb(59, 130, 246)", "rgb(16, 185, 129)", "rgb(239, 68, 68)"],
          borderWidth: 1,
        },
        {
          label: "95% Confidence Interval",
          data: [0.4, 0.3, 0.35],
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
        },
      ],
    },
    codeKey: "abTesting",
  },
  {
    id: 6,
    title: "Principal Component Analysis of Economic Indicators",
    description:
      "Applied PCA to reduce dimensionality of 25 economic indicators across 180 countries, identifying 4 principal components that explain 78% of variance. Created a composite economic health index that outperformed traditional GDP-based measures.",
    category: "Multivariate Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "PCA", "Factor Analysis", "ggplot2"],
    link: "#",
    chartType: "pie",
    chartData: {
      labels: [
        "PC1: Economic Output",
        "PC2: Social Welfare",
        "PC3: Financial Stability",
        "PC4: Trade Balance",
        "Other Components",
      ],
      datasets: [
        {
          label: "Variance Explained (%)",
          data: [42, 18, 11, 7, 22],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(16, 185, 129, 0.7)",
            "rgba(239, 68, 68, 0.7)",
            'rgba(245, 158, 11, 0.7)",185,129,0.7)',
            "rgba(239, 68, 68, 0.7)",
            "rgba(245, 158, 11, 0.7)",
            "rgba(139, 92, 246, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    },
    codeKey: "pcaAnalysis",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [filter, setFilter] = useState("all")
  const [activeTab, setActiveTab] = useState<"visualization" | "code">("visualization")
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category.toLowerCase() === filter.toLowerCase())

  useEffect(() => {
    if (selectedProject && chartRef.current && activeTab === "visualization") {
      try {
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
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                },
                x: {
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                },
              },
            },
          })
        }
      } catch (error) {
        console.error("Error initializing chart:", error)
      }
    }

    return () => {
      if (chartInstance.current) {
        try {
          chartInstance.current.destroy()
        } catch (error) {
          console.error("Error destroying chart:", error)
        }
        chartInstance.current = null
      }
    }
  }, [selectedProject, activeTab])

  return (
    <section id="projects" className="relative py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mx-auto max-w-[700px] text-gray-400">
            A showcase of my statistical analysis and data science projects
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-6 bg-gray-900/50 backdrop-blur-md rounded-lg p-1 border border-gray-800">
            <TabsTrigger value="all" onClick={() => setFilter("all")} className="rounded">
              All
            </TabsTrigger>
            <TabsTrigger value="time-series" onClick={() => setFilter("Time Series Analysis")} className="rounded">
              Time Series
            </TabsTrigger>
            <TabsTrigger value="cluster" onClick={() => setFilter("Cluster Analysis")} className="rounded">
              Clustering
            </TabsTrigger>
            <TabsTrigger value="regression" onClick={() => setFilter("Regression Analysis")} className="rounded">
              Regression
            </TabsTrigger>
            <TabsTrigger value="survival" onClick={() => setFilter("Survival Analysis")} className="rounded">
              Survival
            </TabsTrigger>
            <TabsTrigger value="hypothesis" onClick={() => setFilter("Hypothesis Testing")} className="rounded">
              Hypothesis
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="aspect-video bg-gray-800 rounded-md mb-4 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Dialog
                    onOpenChange={(open) => {
                      if (open) {
                        setSelectedProject(project)
                        setActiveTab("visualization")
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-gray-900 border-gray-800">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription className="text-gray-400">{project.category}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <Tabs
                          defaultValue="visualization"
                          className="w-full"
                          onValueChange={(value) => setActiveTab(value as "visualization" | "code")}
                        >
                          <TabsList className="grid w-full grid-cols-2 bg-gray-800 rounded p-1">
                            <TabsTrigger value="visualization" className="rounded flex items-center gap-2">
                              <BarChart className="h-4 w-4" />
                              Visualization
                            </TabsTrigger>
                            <TabsTrigger value="code" className="rounded flex items-center gap-2">
                              <Code className="h-4 w-4" />
                              Code
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="visualization" className="mt-4">
                            <div className="aspect-video bg-gray-800 rounded-md overflow-hidden p-4">
                              <canvas ref={chartRef} />
                            </div>
                          </TabsContent>
                          <TabsContent value="code" className="mt-4">
                            {selectedProject?.codeKey && (
                              <CodeDisplay
                                code={codeExamples[selectedProject.codeKey]}
                                fileName={`${selectedProject.title.toLowerCase().replace(/\s+/g, "_")}.R`}
                              />
                            )}
                          </TabsContent>
                        </Tabs>

                        <div className="space-y-4">
                          <h4 className="font-semibold">Project Description</h4>
                          <p className="text-gray-400">{project.description}</p>
                          <h4 className="font-semibold">Methodology</h4>
                          <p className="mb-2 text-gray-400">
                            This project utilized {project.tools.join(", ")} to analyze the data and derive meaningful
                            insights. The analysis followed these key steps:
                          </p>
                          <ol className="list-decimal pl-5 space-y-1 mb-2 text-gray-400">
                            {project.id === 1 && (
                              <>
                                <li>
                                  Data collection from multiple health agencies and preprocessing to handle missing
                                  values
                                </li>
                                <li>Exploratory time series analysis to identify trends, seasonality, and anomalies</li>
                                <li>ARIMA model fitting with parameter optimization using AIC/BIC criteria</li>
                                <li>Prophet model implementation with changepoint detection</li>
                                <li>Model validation using cross-validation and MAPE/RMSE metrics</li>
                              </>
                            )}
                            {project.id === 2 && (
                              <>
                                <li>Feature engineering using RFM (Recency, Frequency, Monetary) analysis</li>
                                <li>Data standardization and dimensionality reduction with PCA</li>
                                <li>Optimal cluster determination using elbow method and silhouette scores</li>
                                <li>K-means and hierarchical clustering implementation</li>
                                <li>Cluster profiling and persona development for marketing strategies</li>
                              </>
                            )}
                            {project.id === 3 && (
                              <>
                                <li>Data collection from multiple real estate sources and feature engineering</li>
                                <li>Multicollinearity analysis using VIF (Variance Inflation Factor)</li>
                                <li>Stepwise regression for variable selection</li>
                                <li>Residual analysis and heteroscedasticity testing</li>
                                <li>Cross-validation and performance comparison with existing models</li>
                              </>
                            )}
                            {project.id === 4 && (
                              <>
                                <li>Patient data collection with appropriate censoring for incomplete follow-ups</li>
                                <li>Kaplan-Meier survival curve estimation for different treatment groups</li>
                                <li>Log-rank test for comparing survival distributions</li>
                                <li>Cox proportional hazards modeling with covariate adjustment</li>
                                <li>Hazard ratio calculation and interpretation for clinical significance</li>
                              </>
                            )}
                            {project.id === 5 && (
                              <>
                                <li>Experimental design with power analysis to determine sample size</li>
                                <li>Random assignment of users to test groups with cookie-based tracking</li>
                                <li>Bayesian A/B testing framework implementation</li>
                                <li>Sequential analysis with early stopping rules</li>
                                <li>Confidence interval estimation and statistical significance testing</li>
                              </>
                            )}
                            {project.id === 6 && (
                              <>
                                <li>Data collection of economic indicators from World Bank and IMF</li>
                                <li>Data normalization and handling of missing values</li>
                                <li>Correlation analysis and Kaiser-Meyer-Olkin (KMO) test</li>
                                <li>Principal Component Analysis with varimax rotation</li>
                                <li>Component interpretation and composite index creation</li>
                              </>
                            )}
                          </ol>
                          <h4 className="font-semibold">Tools Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            asChild
                            className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
                          >
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
                          <Button
                            variant="outline"
                            asChild
                            className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
                          >
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
                          <Button asChild className="bg-blue-600 hover:bg-blue-700">
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
