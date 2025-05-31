"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  User,
  FolderOpen,
  BookOpen,
  MessageSquare,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Zap,
} from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      name: "About",
      href: "/about",
      icon: User,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      name: "Experience",
      href: "/experience",
      icon: Briefcase,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
    {
      name: "Skills",
      href: "/skills",
      icon: Zap,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FolderOpen,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      name: "Blog",
      href: "/blog",
      icon: BookOpen,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: MessageSquare,
      iconColor: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: Linkedin },
    { name: "Email", href: "mailto:your.email@example.com", icon: Mail },
  ]

  return (
    <aside className="fixed top-8 left-8 w-72 h-[calc(100vh-4rem)] bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08),0_16px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),0_16px_40px_rgba(0,0,0,0.2)] border border-white/60 dark:border-slate-700/60 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),0_24px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transform-gpu overflow-hidden">
      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        <div className="p-8">
          {/* Profile Section */}
          <div className="mb-9 pb-7 border-b border-slate-100 dark:border-slate-700 text-center relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-semibold text-lg mx-auto mb-5 shadow-[0_8px_16px_rgba(59,130,246,0.3)] dark:shadow-[0_8px_16px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 hover:rotate-3 transform-gpu">
              YN
            </div>
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-1.5 tracking-tight">Your Name</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Data Scientist</p>
            <div className="absolute top-0 right-0">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="mb-7">
            <ul className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 transform-gpu group ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 font-semibold shadow-[0_4px_16px_rgba(29,78,216,0.15)] translate-x-1"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 dark:hover:from-slate-700/50 dark:hover:to-slate-600/50 hover:translate-x-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center mr-3.5 transition-transform duration-200 group-hover:scale-110`}
                      >
                        <Icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-600 to-transparent mb-7"></div>

          {/* Connect Section */}
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-5">
              Connect
            </div>
            <div className="space-y-1">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:translate-x-1 transform-gpu group"
                  >
                    <Icon className="w-4 h-4 mr-3.5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-sm font-medium">{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Bottom padding for scroll */}
          <div className="h-8"></div>
        </div>
      </div>
    </aside>
  )
}
