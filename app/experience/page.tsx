import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "May 2023 - August 2023",
      description:
        "Worked on customer segmentation analysis using clustering algorithms. Developed dashboards to visualize customer behavior patterns. Collaborated with marketing team to implement targeted campaigns based on data insights.",
      skills: ["Python", "Scikit-learn", "Pandas", "Tableau", "Customer Analytics"],
      current: false,
    },
    {
      title: "Research Assistant",
      company: "University Data Lab",
      location: "Remote",
      period: "January 2023 - Present",
      description:
        "Assisting faculty with research on predictive modeling for healthcare outcomes. Preprocessing medical datasets and implementing machine learning models. Contributing to academic papers on AI applications in healthcare.",
      skills: ["Python", "R", "Statistical Analysis", "Research Methods", "Healthcare Analytics"],
      current: true,
    },
    {
      title: "Data Analysis Project",
      company: "Environmental Nonprofit",
      location: "Boston, MA",
      period: "October 2022 - December 2022",
      description:
        "Volunteer project analyzing environmental data to identify pollution patterns. Created visualizations to support advocacy efforts. Presented findings to stakeholders and community members.",
      skills: ["Data Visualization", "GIS", "Statistical Analysis", "Public Speaking"],
      current: false,
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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Experience</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">My professional journey and work experience</p>
        </div>
      </header>

      <section className="py-12 px-8">
        <div className="max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 ${
                      exp.current ? "bg-blue-500" : "bg-slate-400 dark:bg-slate-600"
                    }`}
                  ></div>

                  <div className="ml-16">
                    <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                            <div className="text-blue-600 dark:text-blue-400 font-medium text-lg">{exp.company}</div>
                          </div>
                          {exp.current && (
                            <Badge className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 w-fit">
                              Current
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-slate-600 dark:text-slate-400">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
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
