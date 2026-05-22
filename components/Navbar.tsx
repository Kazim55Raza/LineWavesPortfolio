'use client'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-container mt-4 rounded-full max-w-6xl mx-auto backdrop-blur-lg border border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold gradient-text">
          KR
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-slate-300 hover:text-mint transition-colors text-sm"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-slate-300 hover:text-mint transition-colors text-sm"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-slate-300 hover:text-mint transition-colors text-sm"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('tech')}
            className="text-slate-300 hover:text-mint transition-colors text-sm"
          >
            Tech Stack
          </button>
        </div>

        {/* CTA Button */}
        <button onClick={() => scrollToSection('tech')}
          className="hidden sm:block btn-mint text-sm py-2 px-4">
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-mint">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
