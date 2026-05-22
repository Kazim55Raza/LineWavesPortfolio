'use client'

interface TechCategory {
  name: string
  icon: string
  items: string[]
}

const techStack: TechCategory[] = [
  {
    name: 'Languages',
    icon: '💻',
    items: ['C++', 'Java', 'JavaScript', 'Dart'],
  },
  {
    name: 'Frontend Frameworks',
    icon: '🌐',
    items: ['Next.js', 'React.js', 'Flutter', 'HTML/CSS'],
  },
  {
    name: 'Backend & Runtime',
    icon: '🔧',
    items: ['Node.js', 'Express.js', 'FastAPI', 'PHP'],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
   {
    name: 'WordPress',
    icon: '🗄️',
    items: ['Elementor Pro', 'ACF', 'WooCommerce', 'WordFence' ,"WP Rocket",'Hostinger'],
  },
  {
    name: 'DevOps & Cloud',
    icon: '☁️',
    items: ['Git/GitHub', 'Docker', 'Jenkins', 'AWS EC2'],
  },
  {
    name: 'AI & ML Tools',
    icon: '🤖',
    items: ['LangChain', 'OpenAI API', 'Vector Databases', 'RAG Systems'],
  },
]

export default function TechStackGrid() {
  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A carefully curated arsenal of modern technologies and tools I use to build scalable, performant solutions.
        </p>
      </div>

      {/* Tech stack bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {techStack.map((category, idx) => (
          <div
            key={category.name}
            className={`glass-container p-6 group hover:bg-white/8 transition-all duration-300 ${
              idx === 0 || idx === 4 ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg font-bold text-white">{category.name}</h3>
            </div>

            {/* Tech items */}
            <div className="flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 glass-container-sm text-sm font-medium text-mint hover:text-teal hover:border-teal/50 transition-all duration-200 border border-mint/30 rounded cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats or learning path */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-slate-500">
                {idx === 0 ? '🚀 Actively used' : idx === 4 ? '🎯 Production-grade' : '💡 Specialized'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary section */}
      <div className="glass-container p-8 sm:p-10 text-center space-y-4">
        <h3 className="text-2xl font-bold gradient-text">Continuous Learning</h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Beyond this stack, I maintain an active commitment to exploring emerging technologies, AI architectures, and performance optimization techniques. Every project is an opportunity to expand my technical repertoire.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <span className="inline-block px-4 py-2 glass-container-sm text-xs font-semibold text-teal border border-teal/30">
            ✓ Open to learning
          </span>
          <span className="inline-block px-4 py-2 glass-container-sm text-xs font-semibold text-mint border border-mint/30">
            ✓ Always growing
          </span>
        </div>
      </div>
    </div>
  )
}
