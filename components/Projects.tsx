'use client'

import { useState } from 'react'
import projectsData from '@/data/projects.json'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github?: string
  website?: string
  status?: string
  image: string
  featured: boolean
  period?: string
}

const categoryColors: Record<string, string> = {
  'Next.js': 'bg-black text-white',
  'React': 'bg-sky-100 text-sky-700',
  'TypeScript': 'bg-blue-100 text-blue-700',
  'Swift': 'bg-orange-100 text-orange-700',
  'SwiftUI': 'bg-orange-100 text-orange-700',
  'Rust': 'bg-amber-100 text-amber-800',
  'Python': 'bg-yellow-100 text-yellow-800',
  'MongoDB': 'bg-green-100 text-green-700',
  'Prisma': 'bg-indigo-100 text-indigo-700',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-700',
  'React Native': 'bg-purple-100 text-purple-700',
  'Three.js': 'bg-emerald-100 text-emerald-700',
  'Vite': 'bg-violet-100 text-violet-700',
  'Machine Learning': 'bg-rose-100 text-rose-700',
  'Databricks': 'bg-red-100 text-red-700',
}

export default function Projects() {
  const projects: Project[] = projectsData as Project[]
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="section-container bg-gray-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="relative z-10">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A collection of projects I've built, from full-stack web applications to mobile apps and CLI tools.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-sacramento-200 flex flex-col"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project header with image or gradient */}
              <div className="relative h-48 flex-shrink-0 bg-gradient-to-br from-sacramento-600 via-sacramento-700 to-sacramento-800 overflow-hidden">
                {/* Project image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${hoveredProject === project.id ? 'scale-105' : 'scale-100'}`}
                  />
                )}

                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

                {/* Period badge */}
                {project.period && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-medium z-10">
                    {project.period}
                  </div>
                )}

                {/* Status indicator */}
                {project.status && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-500/30 backdrop-blur-sm rounded-full z-10">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-xs font-medium">{project.status}</span>
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6 overflow-hidden flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sacramento-700 transition-colors break-words">
                  {project.title}
                </h3>

                <div className="mb-5 min-w-0">
                  <p className={`text-gray-600 leading-relaxed break-words ${expandedProject === project.id ? '' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="text-sacramento-600 hover:text-sacramento-700 text-sm font-medium mt-2 transition-colors"
                    >
                      {expandedProject === project.id ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-transform hover:scale-105 ${
                        categoryColors[tech] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-sacramento-700 text-white rounded-lg text-sm font-medium hover:bg-sacramento-800 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {!project.website && !project.github && project.status && (
                    project.status === 'Contact for Access' ? (
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-lg text-sm font-medium hover:bg-sacramento-200 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact for Access
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sacramento-600 text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.status}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
