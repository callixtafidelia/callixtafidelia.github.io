import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding Principal Component Analysis",
      date: "May 15, 2024",
      description:
        "A deep dive into how PCA works and when to use it for dimensionality reduction in your data science projects.",
      slug: "understanding-pca",
      category: "Machine Learning",
      readTime: "8 min read",
    },
    {
      title: "Comparing Classification Algorithms",
      date: "April 22, 2024",
      description: "An analysis of different classification algorithms and their performance on various datasets.",
      slug: "comparing-classification-algorithms",
      category: "Machine Learning",
      readTime: "12 min read",
    },
    {
      title: "Data Visualization Best Practices",
      date: "March 10, 2024",
      description: "Tips and techniques for creating effective and insightful data visualizations.",
      slug: "data-visualization-best-practices",
      category: "Data Visualization",
      readTime: "6 min read",
    },
    {
      title: "Introduction to Time Series Forecasting",
      date: "February 5, 2024",
      description: "A beginner's guide to time series analysis and forecasting techniques.",
      slug: "intro-time-series-forecasting",
      category: "Time Series",
      readTime: "10 min read",
    },
    {
      title: "Ethical Considerations in Data Science",
      date: "January 18, 2024",
      description: "Exploring the ethical challenges and responsibilities in data science practice.",
      slug: "ethical-considerations-data-science",
      category: "Ethics",
      readTime: "7 min read",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
      case "Data Visualization":
        return "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
      case "Time Series":
        return "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
      case "Ethics":
        return "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
      default:
        return "bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600"
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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Blog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Articles and insights on data science and machine learning
          </p>
        </div>
      </header>

      <section className="py-12 px-8">
        <div className="max-w-4xl">
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-6 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <Badge className={`${getCategoryColor(post.category)} border w-fit mb-2`}>{post.category}</Badge>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{post.readTime}</div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{post.title}</CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        Read article <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Subscribe to My Newsletter</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Get the latest articles and insights on data science delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Subscribe
                  </button>
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
