import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

const coursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Applied Cybersecurity',
]

export default function Education() {
  return (
    <section id="education" className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading overline="Background" title="Education" />
        <Reveal>
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  University of California, Davis
                </h3>
                <p className="text-lg text-sacramento-700 font-semibold">
                  B.S. in Computer Science
                </p>
              </div>
              <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                Graduated June 2026
              </span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
