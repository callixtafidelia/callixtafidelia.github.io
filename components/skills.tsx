"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chart } from "chart.js/auto"

export default function Skills() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const radarChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Bar chart for technical skills
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")

      if (ctx) {
        const chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["R", "Python", "SQL", "Tableau", "Excel", "SPSS"],
            datasets: [
              {
                label: "Skill Level (0-100)",
                data: [90, 85, 80, 75, 95, 70],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.7)",
                  "rgba(54, 162, 235, 0.7)",
                  "rgba(255, 206, 86, 0.7)",
                  "rgba(75, 192, 192, 0.7)",
                  "rgba(153, 102, 255, 0.7)",
                  "rgba(255, 159, 64, 0.7)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
          },
        })

        return () => {
          chart.destroy()
        }
      }
    }
  }, [])

  useEffect(() => {
    // Radar chart for statistical skills
    if (radarChartRef.current) {
      const ctx = radarChartRef.current.getContext("2d")

      if (ctx) {
        const chart = new Chart(ctx, {
          type: "radar",
          data: {
            labels: [
              "Regression Analysis",
              "Time Series",
              "Hypothesis Testing",
              "Machine Learning",
              "Experimental Design",
              "Bayesian Statistics",
            ],
            datasets: [
              {
                label: "Proficiency",
                data: [90, 85, 95, 80, 75, 70],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                pointBackgroundColor: "rgb(54, 162, 235)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(54, 162, 235)",
              },
            ],
          },
          options: {
            elements: {
              line: {
                borderWidth: 3,
              },
            },
            scales: {
              r: {
                angleLines: {
                  display: true,
                },
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          },
        })

        return () => {
          chart.destroy()
        }
      }
    }
  }, [])

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">My technical and statistical skills visualized</p>
        </motion.div>

        <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="statistical">Statistical Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-8 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video"
            >
              <canvas ref={chartRef} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Programming Languages</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>R</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Python</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>SQL</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Tools & Software</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Tableau</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Excel</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>SPSS</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="statistical" className="space-y-8 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square max-w-md mx-auto"
            >
              <canvas ref={radarChartRef} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Analysis Methods</h3>
                  <ul className="space-y-2">
                    <li>• Regression Analysis (Linear, Logistic, Multiple)</li>
                    <li>• Time Series Forecasting (ARIMA, SARIMA)</li>
                    <li>• Hypothesis Testing</li>
                    <li>• ANOVA & MANOVA</li>
                    <li>• Factor Analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Advanced Techniques</h3>
                  <ul className="space-y-2">
                    <li>• Machine Learning (Supervised & Unsupervised)</li>
                    <li>• Bayesian Statistics</li>
                    <li>• Experimental Design</li>
                    <li>• Survival Analysis</li>
                    <li>• Monte Carlo Simulations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
