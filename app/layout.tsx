import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import ClientWrapper from '@/components/ClientWrapper'
import { Courier_Prime } from "next/font/google";
import './globals.css'
import { cn } from "@/lib/utils";

const geistMono = Courier_Prime({weight: '400', subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: 'Kazim Raza | Software Engineer & Full-Stack Developer',
  description: 'Premium developer portfolio showcasing AI-driven web applications, full-stack development, and scalable digital ecosystems.',
  keywords: ['developer', 'portfolio', 'next.js', 'react', 'full-stack', 'AI', 'web development'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geistMono.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="bg-gradient-to-br from-slate-dark to-slate-darker">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
  