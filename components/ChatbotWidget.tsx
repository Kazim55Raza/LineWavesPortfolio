'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatMessage } from '@/types/chat'
import { getChatbotResponse } from '@/utils/chatbot'

interface ChatbotWidgetProps {
  isOpen: boolean
  onToggle: (open: boolean) => void
}

export default function ChatbotWidget({ isOpen, onToggle }: ChatbotWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content:
        'Hello! I\'m Kazim\'s Autonomous Digital Assistant. I\'m driven by an architecture similar to his "Naukri Guru" project, built using LangChain and FastAPI principles to demonstrate his capabilities in real-time. How can I help you learn about Kazim\'s expertise?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate API call with delay
    setTimeout(async () => {
      const response = await getChatbotResponse(input)
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => onToggle(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center z-40 transition-all duration-300 ${
          isOpen
            ? 'bg-mint text-slate-darker shadow-glow-mint scale-95'
            : 'glass-container text-mint hover:shadow-glow-mint hover:scale-110'
        }`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}

        {/* Online indicator */}
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-mint rounded-full animate-pulse" />
      </button>

      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] glass-container rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">Kazim's AI Assistant</h3>
              <p className="text-xs text-mint flex items-center gap-1 mt-1">
                <span className="inline-block w-2 h-2 bg-mint rounded-full animate-pulse" />
                Online & Ready
              </p>
            </div>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 max-h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-mint/20 border border-mint/50 text-white rounded-br-none'
                      : 'glass-container text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-container px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-mint rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-mint rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-mint rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSendMessage}
            className="px-6 py-4 border-t border-white/10 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className="flex-1 px-3 py-2 glass-container text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-2 bg-mint text-slate-darker rounded-lg font-semibold hover:shadow-glow-mint disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          {/* Quick suggestions */}
          {messages.length === 1 && (
            <div className="px-6 py-3 border-t border-white/10 space-y-2">
              <p className="text-xs text-slate-400 font-semibold">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {['Tell me about Naukri Guru', 'What is your tech stack?', 'Show me your experience'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setInput(suggestion)
                        // Optionally auto-submit
                      }}
                      className="text-xs px-2 py-1 glass-container-sm text-mint border border-mint/30 rounded hover:border-mint/60 transition-all"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
