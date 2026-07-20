import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

const skillGroups = [
  {
    category: 'Languages',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'Rust', 'SQL', 'R'],
  },
  {
    category: 'Cloud & Data',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    skills: [
      'Microsoft Azure',
      'MongoDB',
      'SQLite',
      'Redis',
      'Relational Data Modeling',
      'REST APIs',
      'Tableau',
    ],
  },
  {
    category: 'Frameworks & Tools',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      </svg>
    ),
    skills: [
      'Next.js',
      'React',
      'React Native',
      'Node.js',
      'Prisma ORM',
      'Zod',
      'CI/CD',
      'GitHub',
      'Agile Development',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading overline="Toolbox" title="Skills & Technologies" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 100} className="h-full">
              <div className="h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-2.5 bg-sacramento-100 text-sacramento-700 rounded-lg">
                    {group.icon}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-sacramento-50 text-sacramento-800 border border-sacramento-100 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
