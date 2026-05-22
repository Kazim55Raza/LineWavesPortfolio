# Kazim Raza - Premium Developer Portfolio

A modern, production-ready developer portfolio built with Next.js, React, and Tailwind CSS. Features a minimalist glassmorphic design with an integrated AI chatbot assistant.

## 🚀 Features

- **Minimalist Tech Glassmorphic Design**: Ultra-clean interface with transparency and glowing accents
- **Hero Section**: Dynamic typography with CTAs for viewing work and interacting with AI
- **Experience Timeline**: Categorized professional journey with timeline visualization
- **Featured Projects**: Masonry grid showcasing flagship projects with interactive hover effects
- **Tech Stack Grid**: Bento-box layout of technical expertise across multiple categories
- **AI Chatbot Assistant**: Intelligent conversational interface built with CV knowledge base
  - Bilingual-ready (can be extended)
  - Context-aware responses
  - Quick suggestion buttons
  - Real-time typing indicators

## 🎨 Design System

### Colors
- **Background**: Slate Gray (`#1E293B`, `#0F172A`)
- **Accents**: Mint Green (`#34D399`), Teal (`#2DD4BF`)
- **Glass Containers**: `backdrop-blur-md`, `bg-white/5`, `border-white/10`

### Typography
- **Primary**: Inter (system stack)
- **Code/Tech**: JetBrains Mono

## 📋 Tech Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript

### Project Structure
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── ExperienceTimeline.tsx
│   ├── FeaturedProjects.tsx
│   ├── TechStackGrid.tsx
│   └── ChatbotWidget.tsx   # AI Assistant
├── utils/
│   └── chatbot.ts          # Chatbot logic & CV knowledge base
├── types/
│   └── chat.ts             # TypeScript interfaces
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 🤖 Chatbot System

The chatbot is powered by an intent recognition system that understands user queries about Kazim's:
- Background and experience
- Technical projects (Naukri Guru, E-Store)
- Skills and technologies
- Education
- Career history

**Key Features**:
- Context-aware responses from CV knowledge base
- Intent classification with regex patterns
- Graceful fallback for out-of-scope questions
- Extensible architecture for future API integration

### Chatbot Intents
- `aboutKazim`: Professional background and summary
- `experience`: Career history and roles
- `projects`: Featured project details
- `skills`: Technical expertise
- `naukri`: Naukri Guru project specifics
- `estore`: E-Store project details
- `woocommerce`: E-commerce experience
- `education`: Academic background
- `ai`: AI/ML specialization
- `contact`: Contact information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px breakpoints
- **Desktop**: Full responsive grid system

## 🎯 Key Sections

### 1. Hero Frame
- Centered dynamic typography
- Glowing background orbs
- Dual CTA buttons (View Work, Talk to AI)
- Quick stats cards

### 2. Experience Timeline
- **AI & Full-Stack Development**: Next.js, React, Node.js
- **E-Commerce Infrastructure**: 30+ WooCommerce stores
- **Mobile Engineering**: Flutter and Firebase

### 3. Featured Projects
- **Naukri Guru**: AI recruitment platform
- **E-Store**: Flutter mobile commerce app

### 4. Tech Stack
- Languages, frameworks, databases, DevOps, and AI tools
- Bento-box grid layout with categorization

### 5. AI Chatbot
- Fixed bottom-right floating widget
- Glassmorphic design with mint online indicator
- Quick suggestion buttons
- Message history with timestamps

## 🔧 Customization

### Update CV Data
Edit `/utils/chatbot.ts` and modify the `kazimCVKnowledge` object:
```typescript
const kazimCVKnowledge: CVKnowledgeBase = {
  name: 'Your Name',
  role: 'Your Role',
  // ... update other fields
}
```

### Modify Colors
Update `/tailwind.config.ts`:
```typescript
colors: {
  mint: '#34D399',   // Change to your primary color
  teal: '#2DD4BF',   // Change to your secondary color
}
```

### Add New Projects
Update `/components/FeaturedProjects.tsx`:
```typescript
const projects: Project[] = [
  // Add new project objects
]
```

## 📈 Performance

- Optimized with Next.js automatic code splitting
- CSS-in-JS with Tailwind purging unused styles
- Responsive images and lazy loading ready
- Minimal JavaScript bundle

## 🔐 Security

- No sensitive data exposed in frontend
- Input sanitization in chatbot
- Type-safe TypeScript throughout
- XSS protection through React's built-in sanitization

## 📝 License

This portfolio template is open-source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📧 Support

For issues or questions about the template, please create an issue or reach out directly.

---

**Built with ❤️ using Next.js & Tailwind CSS**
