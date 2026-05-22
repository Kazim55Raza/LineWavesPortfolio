'use client'

import { useState } from 'react'

interface Project {
  id: string
  title: string
  tag: string
  description: string
  technologies: string[]
  highlights: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: '3',
    title: 'Naukri Guru',
    tag: 'AI Recruitment Platform',
    description:
      'An AI-native engine that replaces manual HR screening. Utilizes LangChain and FastAPI to run bilingual (English/Urdu) voice/text technical interviews, evaluate CVs instantly, and auto-notify recruiters with multi-dimensional scoring reports.',
    technologies: ['Next.js', 'FastAPI', 'LangChain', 'PostgreSQL'],
    highlights: [
      'Bilingual AI interview engine (English/Urdu)',
      'Automated CV evaluation and scoring',
      'Real-time recruiter notifications',
      'Multi-dimensional assessment reports',
    ],
    link: 'https://naukri-guru.com', // Optional: Add a link to the project if available
  },
  {
    id: '2',
    title: 'E-Store',
    tag: 'Mobile Commerce Application',
    description:
      'A high-performance retail application built with Flutter. Features robust Firebase role-based permissions, absolute secure authentication, and a highly streamlined daily purchasing pipeline.',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    highlights: [
      'Role-based access control (RBAC)',
      'Secure payment integration',
      'Optimized B2C purchasing workflow',
      'Real-time inventory sync',
    ],
  },
  {
  id: '1', // or whatever sequence number this is in your array
  title: 'ShopHub', // Using the logo title from your Layout file!
  tag: 'Full-Stack E-Commerce Web Application',
  description:
    'A high-performance B2C and B2B marketplace engineered with the MERN stack. Features comprehensive role-based dashboards for sellers and customers, robust authentication, dynamically managed product catalogs, and stateful client-side architecture.',
  technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux Toolkit', 'Tailwind CSS'],
  highlights: [
    'Engineered dynamic role-based separation for Customer and Seller dashboards',
    'Architected state management and async caching pipelines using Redux Toolkit and RTK Query',
    'Implemented scalable MongoDB schemas separating products, orders, and user states',
    'Designed a responsive, fluid marketplace interface with customized Tailwind styling',
  ],
},
{
  id: '4', // Adjust the sequence number according to your array order
  title: 'JS Smell Detector', // Using your actual app name!
  tag: 'Static Code Analysis & Technical Debt Evaluation Tool',
  description:
    'A lightweight, client-side static analysis engine engineered with Next.js and Tailwind CSS. Features real-time detection of architectural code smells based on academic research thresholds, dynamic theme toggle synchronization, and a custom DOM-to-PDF reporting engine.',
  technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'html2pdf.js', 'next-themes', 'JavaScript'],
  highlights: [
    'Engineered regex-based and block-scope tracking algorithms to detect complex code smells such as Deep Nesting and Long Methods.',
    'Architected an optimized client-side extraction model that isolates file metric computation entirely within the browser memory.',
    'Overcame modern CSS processing limitations by building a virtual DOM cloning utility to map OKLCH/LAB colors to Hex variants for seamless PDF generation.',
    'Designed a responsive interface using Tailwind CSS utility-first layout layers combined with synchronized Light and Dark mode states.'
  ],
  link: 'https://smelldetector.netlify.app/',
},
]

export default function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-12" id="projects">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Showcasing my most impactful work spanning AI-driven platforms, mobile development, and scalable architectures.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Project card */}
            <div
              className={`glass-container p-8 h-full flex flex-col space-y-6 transition-all duration-300 ${
                hoveredId === project.id ? 'scale-105 shadow-glow-teal' : ''
              }`}
            >
              {/* Tag and title */}
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-mint/20 text-mint rounded-full border border-mint/30">
                  {project.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-teal uppercase tracking-wide">Key Features</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="text-mint mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 glass-container-sm text-xs font-mono text-mint border border-mint/30 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link/CTA */}
              <div className="pt-4 mt-auto">
                <button
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                 className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-300">
                  Explore Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Glow effect on hover */}
            {hoveredId === project.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-mint to-teal opacity-0 -z-10 rounded-xl blur-xl" />
            )}
          </div>
        ))}
      </div>

      {/* View more section */}
      <div className="text-center pt-8">
        <p className="text-slate-400 mb-6">
          These are highlights. I've contributed to numerous projects spanning startups, enterprises, and innovative ventures.
        </p>
        <button className="btn-teal-outline">
          Explore All Projects
        </button>
      </div>
    </div>
  )
}
