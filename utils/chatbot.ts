/**
 * Chatbot Utility Module
 * Handles all conversational logic based on Kazim's CV knowledge base
 * Built with principles similar to Naukri Guru's architecture (LangChain + FastAPI-inspired)
 */

interface CVKnowledgeBase {
  name: string
  role: string
  email?: string
  phone?: string
  education: {
    degree: string
    university: string
    year: string
  }
  summary: string
  experience: Array<{
    company: string
    title: string
    duration: string
    responsibilities: string[]
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    highlights: string[]
  }>
  skills: {
    languages: string[]
    frameworks: string[]
    databases: string[]
    devops: string[]
    ai: string[]
  }
  about: string
}

// Kazim's CV Knowledge Base
const kazimCVKnowledge: CVKnowledgeBase = {
  name: 'Kazim Raza',
  role: 'Software Engineer / Full-Stack Web & Mobile Developer',
  email: 'kazim@example.com',
  phone: '+92-XXX-XXXXXXX',
  education: {
    degree: 'BS in Software Engineering',
    university: 'Riphah International University',
    year: '2026',
  },
  summary:
    'Results-oriented developer with expertise in building high-performance, responsive applications, scaling WooCommerce ecosystems (30+ stores managed/migrated), and engineering AI-driven web architectures.',
  experience: [
    {
      company: 'TFS Pvt Ltd',
      title: 'Frontend Developer',
      duration: '3 months',
      responsibilities: [
        'Developed responsive frontend components',
        'Optimized UI performance',
        'Implemented React.js solutions',
      ],
    },
    {
      company: 'Spiderhunts Technologies Pvt Ltd',
      title: 'WordPress Developer',
      duration: '6 months',
      responsibilities: [
        'Managed, migrated, and optimized 30+ WooCommerce stores',
        'Implemented custom plugins',
        'Ensured secure checkout flows',
        'Optimized performance across multiple stores',
      ],
    },
    {
      company: 'Freelancing ',
      title: 'Full-Stack Developer',
      duration: 'Ongoing',
      responsibilities: [
        'Built MERN stack applications',
        'Integrated AI architectures with LangChain',
        'Delivered scalable solutions',
      ],
    },
  ],
  projects: [
    {
      name: 'Naukri Guru',
      description:
        'An AI-native recruitment platform that automates CV evaluation and conducts bilingual technical interviews.',
      technologies: ['Next.js', 'FastAPI', 'LangChain', 'PostgreSQL'],
      highlights: [
        'Bilingual (Urdu/English) technical interviews',
        'Automated CV evaluation and scoring',
        'Real-time recruiter notifications',
        'Multi-dimensional assessment reports',
      ],
    },
    {
      name: 'E-Store',
      description: 'A high-performance mobile commerce application with Firebase integration.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      highlights: [
        'Role-based access control',
        'Secure authentication',
        'Optimized B2C purchasing workflow',
        'Real-time inventory sync',
      ],
    },
  ],
  skills: {
    languages: ['C++', 'Java', 'JavaScript', 'Dart'],
    frameworks: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Flutter'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
    devops: ['Git', 'GitHub', 'Docker', 'Jenkins', 'AWS EC2'],
    ai: ['LangChain', 'OpenAI API', 'Vector Databases', 'RAG Systems'],
  },
  about:
    'I am a Software Engineer specializing in full-stack web development, mobile applications, and AI integration. I have a proven track record of managing complex projects, optimizing performance, and delivering innovative solutions.',
}

/**
 * Intent recognition system
 * Analyzes user input to determine intent and route to appropriate response handler
 */
const intents: Record<string, RegExp[]> = {
  aboutKazim: [
    /who are you|tell me about yourself|about kazim|who is kazim/i,
    /what do you do|career|background|introduce/i,
  ],
  experience: [/experience|work|company|job|employment|worked/i, /previous|career|roles/i],
  projects: [/project|build|naukri guru|e-store|portfolio/i, /showcase|showcase work/i],
  skills: [/skills|tech stack|technologies|languages|frameworks|can you/i, /proficient|expertise/i],
  naukri: [/naukri guru|recruitment|ai platform|cv evaluation/i, /interview|bilingual/i],
  estore: [/e-store|flutter|mobile|commerce|retail/i, /firebase/i],
  woocommerce: [/woocommerce|wordpress|stores|ecommerce|optimization/i, /ecommerce|30/i],
  education: [/education|degree|university|studied|bachelor/i, /riphah|software engineering/i],
  contact: [/contact|email|phone|reach|connect|hire/i, /collaboration|contact info/i],
  ai: [/ai|artificial intelligence|machine learning|langchain/i, /chatbot|automation/i],
}

/**
 * Determines user intent from their message
 */
function determineIntent(input: string): string {
  for (const [intent, patterns] of Object.entries(intents)) {
    if (patterns.some((pattern) => pattern.test(input))) {
      return intent
    }
  }
  return 'general'
}

/**
 * Generates contextual responses based on user intent
 */
function generateResponse(intent: string): string {
  const responses: Record<string, string> = {
    aboutKazim: `I'm ${kazimCVKnowledge.name}, a ${kazimCVKnowledge.role}. ${kazimCVKnowledge.summary} I hold a ${kazimCVKnowledge.education.degree} from ${kazimCVKnowledge.education.university}. I'm passionate about crafting intelligent applications and exploring AI integration at scale.`,

    experience: `I've worked across multiple domains:
• **${kazimCVKnowledge.experience[1].company}** (${kazimCVKnowledge.experience[1].duration}) - ${kazimCVKnowledge.experience[1].title}: Managed 30+ WooCommerce stores, optimizing performance and implementing custom solutions.
• **${kazimCVKnowledge.experience[0].company}** (${kazimCVKnowledge.experience[0].duration}) - ${kazimCVKnowledge.experience[0].title}: Built responsive frontends and optimized UI performance.
• **Freelance** - Full-Stack Developer: Created MERN applications and AI-driven architectures.

Each role expanded my technical expertise and problem-solving capabilities.`,

    projects: `My notable projects include:

**1. Naukri Guru** - An AI recruitment platform that revolutionizes HR screening through automated CV evaluation and bilingual technical interviews (English/Urdu). Built with Next.js, FastAPI, and LangChain.

**2. E-Store** - A high-performance Flutter mobile commerce app with Firebase, featuring role-based access, secure auth, and optimized purchasing workflows.

Both projects showcase my ability to integrate AI, handle complex architectures, and deliver user-centric solutions.`,

    skills: `My tech arsenal spans:
• **Languages**: ${kazimCVKnowledge.skills.languages.join(', ')}
• **Frontend**: ${kazimCVKnowledge.skills.frameworks.slice(0, 3).join(', ')}
• **Backend**: Node.js, Express.js
• **Mobile**: Flutter
• **Databases**: ${kazimCVKnowledge.skills.databases.join(', ')}
• **DevOps**: ${kazimCVKnowledge.skills.devops.join(', ')}
• **AI/ML**: ${kazimCVKnowledge.skills.ai.join(', ')}

I'm continuously learning and adapting to new technologies.`,

    naukri: `**Naukri Guru** is my crown jewel project. It's an AI-native recruitment platform that automates CV screening and conducts bilingual technical interviews. The system uses LangChain and FastAPI to:
- Evaluate CVs instantly
- Conduct voice/text interviews in English and Urdu
- Generate multi-dimensional scoring reports
- Auto-notify recruiters with detailed assessments

This project demonstrates my expertise in AI integration, backend architecture, and real-world problem-solving.`,

    estore: `**E-Store** is a Flutter mobile commerce application showcasing my mobile development expertise. Key features:
- Built with Firebase for real-time sync
- Role-based access control (RBAC)
- Secure authentication system
- Optimized B2C purchasing pipeline
- High-performance mobile experience

This project highlights my ability to deliver production-grade mobile applications.`,

    woocommerce: `I've worked extensively with WooCommerce, managing and migrating **30+ stores**. My expertise includes:
- Performance optimization (speed, SEO, conversions)
- Custom plugin development
- Secure payment gateway integration
- Multi-store management
- WordPress theme customization
- Database optimization

This extensive experience gives me deep knowledge of e-commerce ecosystems and scalability.`,

    education: `I hold a **Bachelor of Science in Software Engineering** from **Riphah International University** (2023). My education combined theoretical foundations with practical development skills, preparing me for real-world engineering challenges.`,

    ai: `AI integration is one of my specialties. I work with:
- **LangChain**: For orchestrating AI workflows
- **FastAPI**: For building AI backend services
- **OpenAI API**: For natural language capabilities
- **Vector Databases**: For semantic search and RAG
- **RAG Systems**: For context-aware AI responses

As demonstrated in Naukri Guru, I can build production-grade AI solutions.`,

    contact: `I'd love to connect! While I don't have direct contact info available through this chat, you can typically reach out through LinkedIn, GitHub, or email. For collaborations and opportunities, feel free to explore my projects to understand my capabilities better.`,

    general: `I can help you learn about my experience, projects, and technical skills. Feel free to ask me about:
• My background and experience
• Specific projects like Naukri Guru or E-Store
• My technical stack and expertise
• My work with WooCommerce and AI
• Education and certifications

What would you like to know more about?`,
  }

  return responses[intent] || responses['general']
}

/**
 * Main chatbot response function
 * Processes user input and generates contextual response
 */
export async function getChatbotResponse(userInput: string): Promise<string> {
  try {
    // Trim and normalize input
    const normalizedInput = userInput.trim()

    if (!normalizedInput) {
      return "I didn't catch that. Could you rephrase your question?"
    }

    // Determine intent
    const detectedIntent = determineIntent(normalizedInput)

    // Generate response based on intent
    const response = generateResponse(detectedIntent)

    return response
  } catch (error) {
    console.error('Chatbot error:', error)
    return "I encountered an issue processing your request. Please try again with a different question."
  }
}

/**
 * Optional: Enhanced context function for future API integration
 * This can be used to fetch more detailed information from a backend
 */
export function getChatbotContext(): typeof kazimCVKnowledge {
  return kazimCVKnowledge
}

/**
 * Validates if a question is within Kazim's CV knowledge base
 */
export function isQuestionAboutKazim(input: string): boolean {
  const allPatterns = Object.values(intents).flat()
  return allPatterns.some((pattern) => pattern.test(input))
}
   