'use client'

const experiences = [
  {
    title: 'ColorStack @ UC Davis',
    role: 'National Outreach Lead / Project Manager',
    description: 'Represent UC Davis in national ColorStack meetings; maintain documentation and reporting. Planned events increasing membership by 30%, supporting underrepresented students in tech. Overseeing website creation progress & GitHub repository, improving members\' technical collaboration.',
    period: 'Dec 2023 - Present',
    type: 'leadership',
    highlights: [
      'National representation & documentation',
      'Event planning (30% membership growth)',
      'Website & GitHub repository management',
    ],
  },
  {
    title: 'ASUCD Campus Center for the Environment',
    role: 'Groundskeeper',
    description: 'Maintain and enhance campus garden spaces, ensuring safe, sustainable, and visually appealing environments for students and visitors. Coordinate with ASUCD staff to implement environmentally conscious landscaping practices. Engage with clients and stakeholders to resolve concerns, provide recommendations, and support project execution.',
    period: 'Aug 2025 - Present',
    type: 'work',
    highlights: [
      'Campus garden maintenance & enhancement',
      'Sustainable landscaping initiatives',
      'Client & stakeholder engagement',
    ],
  },
]

const typeIcons: Record<string, JSX.Element> = {
  leadership: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  work: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sacramento-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <h2 className="section-title">
          Experience & <span className="gradient-text">Leadership</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Building leadership skills and gaining real-world experience through impactful roles.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sacramento-200 via-sacramento-300 to-sacramento-200 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 -ml-2 bg-white border-4 border-sacramento-500 rounded-full hidden md:block z-10 group-hover:scale-125 transition-transform" />

                  {/* Card */}
                  <div className="md:ml-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-sacramento-200 hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 bg-sacramento-100 rounded-xl flex items-center justify-center text-sacramento-700">
                          {typeIcons[exp.type]}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-sacramento-700 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sacramento-700 font-semibold">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-sacramento-100 rounded-full text-sacramento-700 text-sm font-medium self-start">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Contributions</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-600">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
