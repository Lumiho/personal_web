'use client'

import { useState, useEffect } from 'react'

const roles = [
  'Software Engineer',
  'Data Enthusiast',
  'AI Builder',
  'Problem Solver',
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sacramento-900 via-sacramento-800 to-sacramento-900" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sacramento-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sacramento-600/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="section-container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sacramento-700/50 backdrop-blur-sm rounded-full text-sacramento-100 text-sm mb-8 border border-sacramento-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sacramento-300 via-primary-300 to-sacramento-300 animate-gradient">
              Leo Zavala-Jimenez
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center mb-4">
            <p className="text-2xl sm:text-3xl text-sacramento-200 font-light">
              <span className="text-white font-medium">{displayedText}</span>
              <span className="animate-blink text-primary-400">|</span>
            </p>
          </div>

          <p className="text-lg sm:text-xl text-sacramento-300 mb-4">
            UC Davis Computer Science • Class of 2026
          </p>

          <p className="text-lg sm:text-xl text-sacramento-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems at the intersection of AI, data, and hardware.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-white text-sacramento-800 rounded-xl font-semibold hover:bg-sacramento-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-sacramento-400 text-white rounded-xl font-semibold hover:bg-sacramento-700/50 hover:border-sacramento-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Connect
            </a>
          </div>

          {/* Tech stack preview */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {['Python', 'React', 'TypeScript', 'Swift', 'Rust'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-sacramento-700/40 backdrop-blur-sm text-sacramento-200 rounded-lg text-sm border border-sacramento-600/30 hover:border-sacramento-400/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-sacramento-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-sacramento-400 rounded-full flex justify-center group-hover:border-white transition-colors">
              <div className="w-1.5 h-3 bg-sacramento-300 rounded-full mt-2 animate-scroll-down group-hover:bg-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
