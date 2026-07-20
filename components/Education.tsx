import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

const courseGroups = [
  {
    label: 'Computer Science',
    courses: [
      'Algorithm Design & Analysis I & II',
      'Data Structures',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Computer Architecture I & II',
      'Programming Languages',
      'Artificial Intelligence',
      'Machine Learning',
      'Security & Privacy',
      'Software Design Project',
      'Senior Capstone Project',
    ],
  },
  {
    label: 'Statistics & Math',
    courses: [
      'Probability Theory',
      'Regression Analysis',
      'Statistical Data Science',
      'Probability & Statistical Modeling for CS',
      'Applied Statistics',
      'Linear Algebra',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading overline="Background" title="Education" />
        <Reveal>
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
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
            <div className="space-y-6">
              {courseGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
