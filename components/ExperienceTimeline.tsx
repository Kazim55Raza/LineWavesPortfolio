'use client'

interface TimelineItem {
  id: string
  title: string
  company: string
  duration: string
  description: string
  category: 'ai-fullstack' | 'ecommerce' | 'mobile'
  technologies: string[]
}

const experienceData: TimelineItem[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TFS Pvt Ltd',
    duration: '3 months',
    description: 'Developed responsive frontend components and optimized UI performance for enterprise applications.',
    category: 'ai-fullstack',
    technologies: ['React.js', 'JavaScript', 'CSS', 'Responsive Design'],
  },
  {
    id: '2',
    title: 'WordPress Developer',
    company: 'Spiderhunts Technologies Pvt Ltd',
    duration: '6 months',
    description: 'Managed, migrated, and optimized 30+ WooCommerce stores. Implemented custom plugins, optimized performance, and ensured secure checkout flows.',
    category: 'ecommerce',
    technologies: ['Elementor Pro ', 'WooCommerce', 'Wordfence', 'ACF Pro', 'PHP', 'MySQL'],
  },
  {
    id: '3',
    title: 'Full-Stack Web Developer',
    company: 'Freelancing and Personal Projects',
    duration: 'Ongoing',
    description: 'Built end-to-end applications using MERN stack, integrated AI architectures with LangChain, and delivered scalable solutions.',
    category: 'ai-fullstack',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'LangChain' , 'Express'],
  },
  {
    id: '4',
    title: 'Mobile Developer',
    company: 'Personal Projects',
    duration: 'Ongoing',
    description: 'Engineered cross-platform Flutter applications with Firebase integration, role-based authentication, and optimized user experience.',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Dart' , 'RestAPI'],
  },
]

const categoryLabels: Record<string, string> = {
  'ai-fullstack': 'AI & Full-Stack Development',
  'ecommerce': 'E-Commerce Infrastructure',
  'mobile': 'Mobile Engineering',
}

export default function ExperienceTimeline() {
  const categories = Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>

  return (
    <div className="space-y-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Experience <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive timeline of my professional growth and technical expertise across multiple domains.
        </p>
      </div>

      {/* Timeline by categories */}
      {categories.map((category) => {
        const categoryItems = experienceData.filter((item) => item.category === category)
        if (categoryItems.length === 0) return null

        return (
          <div key={category} className="space-y-8">
            {/* Category title */}
            <div className="relative">
              <h3 className="text-2xl font-semibold gradient-text inline-block">
                {categoryLabels[category]}
              </h3>
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-mint to-teal" />
            </div>

            {/* Items */}
            <div className="space-y-6">
              {categoryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="glass-container p-6 sm:p-8 relative group hover:bg-white/8 transition-all duration-300"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-slate-darker border-2 border-mint rounded-full shadow-glow-mint" />

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-mint font-semibold">{item.company}</p>
                      </div>
                      <span className="text-slate-400 text-sm font-mono">{item.duration}</span>
                    </div>

                    <p className="text-slate-300 leading-relaxed">{item.description}</p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 glass-container-sm text-xs font-mono text-teal border border-teal/30 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
