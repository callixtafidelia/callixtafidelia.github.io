import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Contact Me</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Get in touch for collaborations or questions
          </p>
        </div>
      </header>

      <section className="py-12 px-8">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Get In Touch</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I'm always interested in discussing data science opportunities, collaborations, or just chatting about
                the latest trends in machine learning. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Email</div>
                    <div className="text-slate-600 dark:text-slate-400">your.email@example.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">LinkedIn</div>
                    <div className="text-slate-600 dark:text-slate-400">linkedin.com/in/yourprofile</div>
                  </div>
                </a>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 mr-4">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">GitHub</div>
                    <div className="text-slate-600 dark:text-slate-400">github.com/yourusername</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
