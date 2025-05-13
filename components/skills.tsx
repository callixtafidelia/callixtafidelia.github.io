"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Database, BarChartIcon as ChartBar, Calculator } from "lucide-react"

interface Certification {
  logo: string
  title: string
  organization: string
  issueDate: string
}

interface Tool {
  name: string
  logo: string
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical")

  const skillCategories = [
    {
      icon: <ChartBar className="h-6 w-6" />,
      title: "Data Analysis & Visualization",
      skills: [
        "Statistical Analysis",
        "Data Visualization",
        "Exploratory Data Analysis",
        "Dashboard Creation",
        "Time Series Analysis",
        "Geospatial Analysis",
        "Tableau",
        "Power BI",
        "ggplot2",
        "Plotly",
      ],
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Statistical Methods",
      skills: [
        "Hypothesis Testing",
        "Regression Analysis",
        "ANOVA",
        "Bayesian Statistics",
        "Experimental Design",
        "Sampling Methods",
        "Multivariate Analysis",
        "Survival Analysis",
        "Statistical Inference",
        "Monte Carlo Simulation",
      ],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Classification",
        "Clustering",
        "Dimensionality Reduction",
        "Feature Engineering",
        "Model Evaluation",
        "Cross-Validation",
        "Ensemble Methods",
        "Neural Networks",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Programming & Tools",
      skills: [
        "R",
        "Python",
        "SQL",
        "SAS",
        "SPSS",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "Git",
        "Jupyter Notebooks",
        "RStudio",
      ],
    },
  ]

  const certifications: Certification[] = [
    {
      logo: "/images/stanford-logo.png",
      title: "Supervised Machine Learning: Regression and Classification",
      organization: "Stanford University & DeepLearning.AI",
      issueDate: "January 25th, 2025",
    },
    {
      logo: "/images/databricks-logo.png",
      title: "Generative AI Fundamentals Accreditation",
      organization: "Databricks",
      issueDate: "January 24th, 2025",
    },
    {
      logo: "/images/stanford-logo.png",
      title: "Statistical Learning",
      organization: "Stanford Online",
      issueDate: "November 10th, 2024",
    },
    {
      logo: "/images/databricks-logo.png",
      title: "Data Science with Apache Spark",
      organization: "Databricks",
      issueDate: "December 15th, 2024",
    },
  ]

  const tools: Tool[] = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "NextJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "ExpressJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
    { name: "pnpm", logo: "https://pnpm.io/img/pnpm-no-name-with-frame.svg" },
    { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "yarn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ]

  return (
    <section id="skills" className="relative py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="mx-auto max-w-[700px] text-gray-400">My technical skills and professional certifications</p>
        </motion.div>

        <Tabs defaultValue="technical" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 backdrop-blur-md rounded-lg p-1 border border-gray-800 mb-8">
            <TabsTrigger value="technical" className="rounded" onClick={() => setActiveTab("technical")}>
              Technical Skills
            </TabsTrigger>
            <TabsTrigger value="tools" className="rounded" onClick={() => setActiveTab("tools")}>
              Tools
            </TabsTrigger>
            <TabsTrigger value="certifications" className="rounded" onClick={() => setActiveTab("certifications")}>
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-400">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-800 text-gray-200 text-sm rounded-md border border-gray-700 hover:border-blue-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800 flex flex-col items-center justify-center gap-3 hover:border-blue-500 transition-all hover:scale-105"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={tool.logo || "/placeholder.svg"}
                      alt={`${tool.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.organization} logo`}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-gray-400 mb-2">{cert.organization}</p>
                    <p className="text-sm text-gray-500">Issued: {cert.issueDate}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
