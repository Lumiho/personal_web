import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lzj-web.vercel.app'),
  title: 'Leonardo Zavala-Jimenez — Software Engineer',
  description:
    'Software engineer and UC Davis CS graduate (2026). Production full-stack applications with Next.js, TypeScript, and Microsoft Azure; real-time data pipelines; cross-functional team leadership.',
  keywords: [
    'Leo Zavala',
    'Leonardo Zavala-Jimenez',
    'software engineer',
    'UC Davis',
    'full-stack developer',
    'Next.js',
    'TypeScript',
    'Azure',
  ],
  openGraph: {
    title: 'Leonardo Zavala-Jimenez — Software Engineer',
    description:
      'Software engineer and UC Davis CS graduate (2026). Production full-stack applications, cloud deployment on Azure, and real-time data pipelines.',
    url: 'https://lzj-web.vercel.app',
    siteName: 'Leonardo Zavala-Jimenez',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
