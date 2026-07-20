import Image from 'next/image'
import projectsData from '@/data/projects.json'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

interface Project {
  id: number
  title: string
  role?: string
  description: string
  highlights?: string[]
  tech: string[]
  github?: string
  website?: string
  image?: string
  note?: string
  featured: boolean
  period?: string
}

export default function Projects() {
  const projects: Project[] = projectsData as Project[]

  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading overline="What I've Built" title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} className="h-full">
              <div className="h-full flex flex-col bg-gray-50 border-t-4 border-sacramento-600 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {project.image && (
                  <div className="relative h-40 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-3">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      {project.period && (
                        <span className="text-xs text-gray-500 font-medium whitespace-nowrap mt-1">
                          {project.period}
                        </span>
                      )}
                    </div>
                    {project.role && (
                      <p className="text-sm font-semibold text-sacramento-700">
                        {project.role}
                      </p>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  {project.highlights && (
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-sacramento-600 mr-2 mt-0.5 font-bold">
                            ▸
                          </span>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 items-center">
                      {project.note && (
                        <span className="inline-flex items-center text-sm text-gray-500 font-medium">
                          <svg
                            className="w-4 h-4 mr-1.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          {project.note}
                        </span>
                      )}
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-sacramento-700 hover:text-sacramento-800 font-semibold transition-colors"
                        >
                          Live Site
                          <svg
                            className="w-4 h-4 ml-1.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-sacramento-700 hover:text-sacramento-800 font-semibold transition-colors"
                        >
                          GitHub
                          <svg
                            className="w-4 h-4 ml-1.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
