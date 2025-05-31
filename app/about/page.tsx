import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, GraduationCap, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="py-12 mb-12">
        <div className="max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 font-semibold group transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" /> Back to
            Home
          </Link>
          <h1 className="text-5xl font-display text-slate-900 dark:text-white mb-4">About Me</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-body">
            My background, education, and journey in data science
          </p>
        </div>
      </header>

      <section className="py-8">
        <div className="max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">My Story</h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-body">
                <p>
                  I'm a dedicated Data Science student with a passion for extracting meaningful insights from complex
                  datasets. My journey in data science began with curiosity about how data drives decision-making in
                  modern businesses.
                </p>
                <p>
                  Through coursework and personal projects, I've developed expertise in machine learning, statistical
                  analysis, and data visualization. I enjoy tackling real-world problems and translating technical
                  findings into actionable business insights.
                </p>
                <p>
                  My approach combines technical rigor with creative problem-solving. I believe that the most valuable
                  data science work happens at the intersection of statistical expertise, domain knowledge, and clear
                  communication.
                </p>
                <p>
                  When I'm not working with data, you can find me hiking in nature, reading about emerging technologies,
                  or contributing to open-source projects.
                </p>
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-[0_8px_16px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_24px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-1 transform-gpu"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
                        Bachelor of Science in Data Science
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-3 font-body">
                        University Name • Expected 2025
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 px-3 py-1"
                      >
                        GPA: 3.8/4.0
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Machine Learning",
                          "Statistical Analysis",
                          "Database Systems",
                          "Data Mining",
                          "Python Programming",
                          "R Programming",
                        ].map((course) => (
                          <Badge
                            key={course}
                            variant="outline"
                            className="text-xs border-slate-300 dark:border-slate-600 px-2 py-1"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Machine Learning Specialization</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-body">Stanford Online • 2023</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Data Science Professional Certificate
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 font-body">IBM • 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
