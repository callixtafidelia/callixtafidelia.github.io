"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            My academic journey and professional experience in statistics and data analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor of Science in Statistics with a minor in Computer Science
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Briefcase className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-muted-foreground">2 years of experience in data analysis and statistical modeling</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Achievements</h3>
                <p className="text-muted-foreground">Dean's List, Statistical Analysis Competition Winner</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
            </TabsList>
            <TabsContent value="education" className="p-4 space-y-4">
              <div className="space-y-2">
                <h4 className="font-bold">Bachelor of Science in Statistics</h4>
                <p className="text-sm text-muted-foreground">University of Data Science, 2019-2023</p>
                <p>
                  Focused on statistical methods, data analysis, and machine learning algorithms. Completed coursework
                  in regression analysis, time series forecasting, and experimental design.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">Minor in Computer Science</h4>
                <p className="text-sm text-muted-foreground">University of Data Science, 2019-2023</p>
                <p>Studied programming fundamentals, data structures, algorithms, and database management systems.</p>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="p-4 space-y-4">
              <div className="space-y-2">
                <h4 className="font-bold">Data Analysis Intern</h4>
                <p className="text-sm text-muted-foreground">Tech Solutions Inc., Summer 2022</p>
                <p>
                  Analyzed customer behavior data using R and Python. Created visualizations and reports that informed
                  marketing strategies.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">Research Assistant</h4>
                <p className="text-sm text-muted-foreground">University Statistics Department, 2021-2023</p>
                <p>
                  Assisted faculty with research projects involving statistical modeling and data collection.
                  Co-authored a paper on predictive analytics.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="interests" className="p-4">
              <p>
                My research interests include predictive modeling, Bayesian statistics, and the application of machine
                learning in healthcare data. I'm passionate about using data to solve real-world problems and improve
                decision-making processes.
              </p>
              <p className="mt-2">
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
