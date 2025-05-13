export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-6 md:py-8 border-t border-gray-800">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center text-sm text-gray-500">&copy; {currentYear} John Doe. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
