'use client'

import LineWaves from './LineWaves'

interface HeroProps {
  onChatClick: () => void
}

export default function Hero({ onChatClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative gradient blur */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-mint to-teal opacity-10 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl pt-24  sm:text-6xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Kazim Raza..</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-light">
              I build intelligent web applications and highly scalable digital ecosystems.
            </p>
          </div>

          {/* Subheadline */}
          <div className="glass-container max-w-2xl mx-auto p-6 sm:p-8">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Software Engineer bridging the gap between full-stack performance, AI integration, and fluid mobile experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="btn-mint"
            >
              View Work
            </a>
            <button
              onClick={onChatClick}
              className="btn-teal-outline"
            >
              Talk to my AI
            </button>
          </div>

          {/* Stats or quick info */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-xl mx-auto">
            <div className="glass-container-sm p-4 text-center">
              <p className="text-2xl font-bold gradient-text">30+</p>
              <p className="text-xs sm:text-sm text-slate-400">WooCommerce Stores</p>
            </div>
            <div className="glass-container-sm p-4 text-center">
              <p className="text-2xl font-bold gradient-text">MERN</p>
              <p className="text-xs sm:text-sm text-slate-400">Full Stack</p>
            </div>
            <div className="glass-container-sm p-4 text-center">
              <p className="text-2xl font-bold gradient-text">AI</p>
              <p className="text-xs sm:text-sm text-slate-400">Integrated</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2  animate-bounce">
          <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
