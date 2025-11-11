import projectsData from '@/data/projects.json'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github?: string
  website?: string
  image: string
  featured: boolean
  period?: string
}

export default function Projects() {
  const projects: Project[] = projectsData as Project[]

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">
        My <span className="gradient-text">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="h-48 bg-gradient-to-br from-sacramento-500 to-sacramento-700 flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-80">
                {project.title.charAt(0)}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                {project.period && (
                  <span className="text-sm text-gray-500 font-medium ml-4 flex-shrink-0">
                    {project.period}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sacramento-700 hover:text-sacramento-800 font-semibold transition-colors"
                >
                  Visit Website
                  <svg
                    className="w-5 h-5 ml-2"
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
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sacramento-700 hover:text-sacramento-800 font-semibold transition-colors"
                >
                  View on GitHub
                  <svg
                    className="w-5 h-5 ml-2"
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
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

