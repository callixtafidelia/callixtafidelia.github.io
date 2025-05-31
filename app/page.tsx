import { Download, ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl">
          <div className="mb-8">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-4 py-2 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Data Science Portfolio
            </Badge>
          </div>

          <h1 className="text-7xl font-display text-slate-900 dark:text-white mb-8 leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          <p className="text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed font-light">
            I transform complex data into actionable insights through statistical analysis, machine learning, and
            compelling visualizations that drive business decisions.
          </p>

          <div className="flex flex-wrap gap-6 mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-[0_8px_16px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_24px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-1 transform-gpu"
            >
              <Download className="w-5 h-5 mr-3" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 transform-gpu"
            >
              <Link href="/projects" className="flex items-center">
                View Projects <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">94%</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Model Accuracy</p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">15+</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Projects Completed</p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">3.8</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">GPA Score</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Card */}
          <Card className="max-w-3xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                  My Data Science Journey
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
                  From curiosity to expertise in machine learning and analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg font-body">
                  I started exploring data science out of curiosity about patterns in data. Now I develop machine
                  learning models and visualizations that solve real-world problems and drive business value.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg group transition-colors duration-200"
                >
                  Learn more about me{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Scikit-learn", "TensorFlow", "XGBoost"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 hover:shadow-[0_8px_32px_rgba(147,51,234,0.15)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Data Visualization</h3>
              <div className="flex flex-wrap gap-2">
                {["Matplotlib", "Plotly", "Tableau", "Seaborn"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 hover:shadow-[0_8px_32px_rgba(34,197,94,0.15)] transition-all duration-300 hover:-translate-y-1 transform-gpu">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Statistical Analysis</h3>
              <div className="flex flex-wrap gap-2">
                {["R", "SQL", "Statistics", "A/B Testing"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 transform-gpu"
            >
              <Link href="/skills" className="flex items-center">
                View All Skills <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 transform-gpu">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  Customer Churn Prediction
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                  Machine learning model with 94% accuracy
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-body">
                  Developed an ensemble model to predict customer churn, helping businesses retain customers and reduce
                  revenue loss through targeted interventions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "XGBoost", "Pandas"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-slate-300 dark:border-slate-600 px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group transition-colors duration-200"
                >
                  View project{" "}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 transform-gpu">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  Sales Forecasting Dashboard
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                  Interactive visualization with Streamlit
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-body">
                  Created an interactive dashboard for sales forecasting using time series analysis, enabling business
                  teams to make data-driven planning decisions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "Streamlit", "Prophet"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-slate-300 dark:border-slate-600 px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group transition-colors duration-200"
                >
                  View project{" "}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
