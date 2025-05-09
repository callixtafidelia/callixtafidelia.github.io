export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <p className="text-center text-sm text-muted-foreground">&copy; {currentYear} John Doe. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  )
}
