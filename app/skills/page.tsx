import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Code, Database, BarChart3, Brain, TrendingUp, Cloud } from "lucide-react"
import Link from "next/link"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "R", level: "Intermediate" },
        { name: "SQL", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "PyTorch", level: "Intermediate" },
        { name: "XGBoost", level: "Advanced" },
        { name: "Random Forests", level: "Advanced" },
        { name: "Neural Networks", level: "Intermediate" },
      ],
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: [
        { name: "Matplotlib", level: "Advanced" },
        { name: "Seaborn", level: "Advanced" },
        { name: "Plotly", level: "Intermediate" },
        { name: "Tableau", level: "Intermediate" },
        { name: "Power BI", level: "Basic" },
      ],
    },
    {
      title: "Statistical Analysis",
      icon: TrendingUp,
      skills: [
        { name: "Hypothesis Testing", level: "Advanced" },
        { name: "Regression Analysis", level: "Advanced" },
        { name: "Time Series Analysis", level: "Intermediate" },
        { name: "A/B Testing", level: "Intermediate" },
        { name: "Bayesian Statistics", level: "Basic" },
      ],
    },
    {
      title: "Big Data & Databases",
      icon: Database,
      skills: [
        { name: "Pandas", level: "Advanced" },
        { name: "Spark", level: "Basic" },
        { name: "Hadoop", level: "Basic" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Basic" },
      ],
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: [
        { name: "Jupyter", level: "Advanced" },
        { name: "Git", level: "Intermediate" },
        { name: "Docker", level: "Basic" },
        { name: "AWS", level: "Intermediate" },
        { name: "Google Cloud", level: "Basic" },
        { name: "Streamlit", level: "Intermediate" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
      case "Intermediate":
        return "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
      case "Basic":
        return "bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600"
      default:
        return "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <header className="py-12 px-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 transition-colors">
        <div className="max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 font-medium"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Technical Skills</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            My expertise in data science and machine learning
          </p>
        </div>
      </header>

      <section className="py-12 px-8">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl text-slate-900 dark:text-white">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} className={`${getLevelColor(skill.level)} px-3 py-1 border`}>
                          {skill.name}
                          <span className="ml-2 text-xs opacity-75">{skill.level}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Continuous Learning</h2>
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  My skill development follows a continuous learning approach. I regularly update my knowledge through
                  online courses, academic studies, and practical projects. Here are some of the ways I keep my skills
                  current:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Taking specialized online courses on platforms like Coursera and edX
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Participating in Kaggle competitions to apply skills to real-world problems
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Contributing to open-source data science projects
                    </li>
                  </ul>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Reading research papers and implementing techniques from recent publications
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Attending workshops and webinars on emerging technologies
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Building personal projects to explore new tools and techniques
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors">
        <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400">&copy; 2024 Your Name. All rights reserved.</p>
            <p className="text-slate-500 dark:text-slate-500 text-sm">Built with Next.js • Deployed on GitHub Pages</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
