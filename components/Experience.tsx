const experiences = [
  {
    title: 'ColorStack @ UC Davis',
    role: 'National Outreach Lead / Project Manager',
    description: 'Represent UC Davis in national ColorStack meetings; maintain documentation and reporting. Planned events increasing membership by 30%, supporting underrepresented students in tech. Oversaw website creation and GitHub repository, improving members\' technical collaboration skills.',
    period: 'Dec 2023 - Present',
    highlights: [
      'National representation & documentation',
      'Event planning (30% membership growth)',
      'Website & GitHub repository management',
    ],
  },
  {
    title: 'Computer Science Tutoring Club @ UC Davis',
    role: 'Tutor',
    description: 'Held weekly tutoring sessions for UC Davis students in computer science and statistics. Helped students strengthen their problem-solving, debugging, and analytical skills.',
    period: 'Oct 2023 - Dec 2024',
    highlights: [
      'Computer Science & Statistics tutoring',
      'Problem-solving & debugging support',
      'Student mentorship',
    ],
  },
  {
    title: 'ASUCD Campus Center for the Environment',
    role: 'Groundskeeper',
    description: 'Maintain and enhance garden spaces surrounding the UC Davis Campus Center for the Environment. Support sustainable landscaping initiatives in coordination with ASUCD staff. Operate and maintain tools and equipment for daily groundskeeping tasks.',
    period: 'Jul 2024 - Present',
    highlights: [
      'Garden maintenance & enhancement',
      'Sustainable landscaping initiatives',
      'Equipment operation & maintenance',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-white">
      <h2 className="section-title">
        Experience & <span className="gradient-text">Leadership</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-sacramento-700 font-semibold mb-2">
                  {exp.role}
                </p>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {exp.description}
            </p>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-sacramento-700 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

