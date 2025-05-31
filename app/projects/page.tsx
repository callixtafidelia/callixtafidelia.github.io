import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description:
        "Machine learning model to predict customer churn using ensemble methods with 94% accuracy. This project helps businesses identify customers at risk of leaving and take proactive retention measures.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "XGBoost"],
      github: "https://github.com/yourusername/churn-prediction",
      demo: "https://your-demo-link.com",
      featured: true,
    },
    {
      title: "Sales Forecasting Dashboard",
      description:
        "Interactive dashboard for sales forecasting using time series analysis and Streamlit. The dashboard allows business users to visualize historical sales data and generate forecasts with adjustable parameters.",
      technologies: ["Python", "Streamlit", "Prophet", "Plotly", "Pandas"],
      github: "https://github.com/yourusername/sales-dashboard",
      demo: "https://your-demo-link.com",
      featured: true,
    },
    {
      title: "Sentiment Analysis of Social Media",
      description:
        "NLP project analyzing sentiment patterns in social media posts using BERT and transformers. This project helps brands understand public perception and track sentiment trends over time.",
      technologies: ["Python", "Transformers", "PyTorch", "NLTK", "Hugging Face"],
      github: "https://github.com/yourusername/sentiment-analysis",
      demo: "https://your-demo-link.com",
      featured: false,
    },
    {
      title: "Housing Price Prediction",
      description:
        "Regression model to predict housing prices based on various features like location, size, and amenities. The model uses feature engineering and ensemble methods to improve accuracy.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Feature Engineering"],
      github: "https://github.com/yourusername/housing-prediction",
      demo: "https://your-demo-link.com",
      featured: false,
    },
  ]

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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            A collection of my data science and machine learning projects
          </p>
        </div>
      </header>

      <section className="py-12 px-8">
        <div className="max-w-4xl">
          <div className="flex items-center mb-8">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          </div>

          <div className="space-y-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200"
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 flex items-center justify-center">
                      <div className="text-6xl font-bold text-blue-200 dark:text-blue-800">0{index + 1}</div>
                    </div>
                    <div className="md:w-3/4">
                      <CardHeader>
                        <CardTitle className="text-xl text-slate-900 dark:text-white">{project.title}</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300 dark:border-slate-600"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300 dark:border-slate-600"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          <h2 className="text-2xl font-bold mb-8 mt-16 text-slate-900 dark:text-white">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">{project.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
