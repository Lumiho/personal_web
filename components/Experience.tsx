import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

const experiences = [
  {
    role: 'Software Engineer',
    org: 'Department of Internal Medicine — UC Davis Health',
    period: 'Jan 2026 – Jul 2026',
    tag: 'Experience',
    summary:
      'Designed, built, tested, and documented a full-stack funding workflow platform digitizing departmental submissions end to end.',
    highlights: [
      'Digitized 500+ departmental submissions, projected to eliminate 250+ hours of manual processing annually',
      'Deployed and maintained the app on Microsoft Azure, owning the production and release process',
      'Engineered relational data models with Prisma ORM and MongoDB for multi-stage approvals with full revision history',
      'Built a tokenized, email-based approval system enabling asynchronous multi-reviewer workflows — cutting manual status follow-ups to zero',
      'Enforced strict runtime validation with Zod schemas across API boundaries, eliminating a class of type-mismatch bugs',
      'Delivered a structured handoff with documentation and walkthroughs enabling maintenance without the original developer',
    ],
    tech: ['Next.js', 'TypeScript', 'Microsoft Azure', 'MongoDB', 'Prisma ORM', 'Zod'],
  },
  {
    role: 'Software Lead',
    org: 'MuscleMaxx Startup',
    period: 'Jan 2025 – Present',
    tag: 'Experience',
    summary:
      'Leading software development for a wearable fitness product delivering real-time muscle activity and motion insights.',
    highlights: [
      'Architected a real-time data pipeline with SQLite and Node.js for live sensor-signal graphing, post-processing, and persistent session history',
      'Performed end-to-end integration and system testing across device firmware and app — validating data integrity, connection reliability, and latency',
      'Directing a 5-person cross-functional team across software, hardware, and business, aligning delivery milestones with defined scope and schedule',
    ],
    tech: ['React Native', 'TypeScript', 'Node.js', 'SQLite'],
  },
  {
    role: 'National Outreach Lead / Project Manager',
    org: 'ColorStack @ UC Davis',
    period: 'Dec 2023 – Jun 2026',
    tag: 'Leadership',
    summary:
      'Represented UC Davis in national ColorStack meetings, supporting underrepresented students in tech.',
    highlights: [
      'Planned events increasing membership by 30%',
      "Oversaw website development and GitHub repository, improving members' technical collaboration",
    ],
    tech: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading overline="Where I've Worked" title="Experience & Leadership" />
        <div className="relative border-l-2 border-sacramento-200 ml-3 sm:ml-4 space-y-10">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 100} className="relative pl-8 sm:pl-10">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-sacramento-600 ring-4 ring-sacramento-100" />
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide bg-sacramento-100 text-sacramento-700 rounded-full">
                        {exp.tag}
                      </span>
                    </div>
                    <p className="text-lg text-sacramento-700 font-semibold">
                      {exp.org}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{exp.summary}</p>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-sacramento-600 mr-2 mt-0.5 flex-shrink-0"
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
                {exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
