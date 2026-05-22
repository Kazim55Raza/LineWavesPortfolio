export interface ChatMessage {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

export interface ChatbotContext {
  name: string
  role: string
  education: string
  experience: Experience[]
  projects: Project[]
  technologies: Technology[]
  cvUrl?: string
}

export interface Experience {
  company: string
  title: string
  duration: string
  description: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
}

export interface Technology {
  category: string
  items: string[]
}
