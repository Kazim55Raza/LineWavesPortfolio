'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import FeaturedProjects from '@/components/FeaturedProjects'
import TechStackGrid from '@/components/TechStackGrid'
import ChatbotWidget from '@/components/ChatbotWidget'
import LineWaves from '@/components/LineWaves'

export default function Home() {
  const [chatbotOpen, setChatbotOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-dark via-slate-darker to-slate-dark">
      <Navbar />

      {/* Line Waves Background */}
      <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none -z-10">
        <LineWaves 
          speed={0.4}
          innerLineCount={5}
          outerLineCount={3}
          warpIntensity={0.7}
          color1="#1A4D5F"
          color2="#0D3A4A"
          color3="#051220"
          brightness={0.35}
          enableMouseInteraction={true}
          mouseInfluence={0.2}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <Hero onChatClick={() => setChatbotOpen(!chatbotOpen)} />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ExperienceTimeline />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FeaturedProjects />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <TechStackGrid />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Kazim Raza. Crafted with precision and passion.</p>
          </div>
        </footer>
      </div>

      {/* Chatbot Widget */}
      <ChatbotWidget isOpen={chatbotOpen} onToggle={setChatbotOpen} />
    </main>
  )}
