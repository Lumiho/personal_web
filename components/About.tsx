'use client'

const skills = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C/C++', 'Rust', 'Swift', 'R', 'Haskell'],
  frameworks: ['React', 'Next.js', 'Node.js', 'SwiftUI', 'React Native'],
  tools: ['SQL/SQLite', 'MongoDB', 'Prisma ORM', 'Tailwind CSS', 'Git', 'Tableau'],
  areas: ['Machine Learning', 'Data Analysis', 'Full-Stack Development', 'Mobile Development'],
}

const interests = [
  { icon: '🧠', label: 'Neurotechnology' },
  { icon: '🤖', label: 'AI/ML' },
  { icon: '📊', label: 'Data Science' },
  { icon: '📱', label: 'Mobile Dev' },
]

export default function About() {
  return (
    <section id="about" className="section-container bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sacramento-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left column - Photo and quick info */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start mx-auto lg:mx-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sacramento-500 to-primary-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="relative w-56 h-56 rounded-2xl overflow-hidden ring-4 ring-white shadow-2xl">
                  <img
                    src="/images/headshot.jpg"
                    alt="Leonardo Zavala-Jimenez"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              {/* Interest badges */}
              <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-[280px]">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="flex items-center gap-2 px-3 py-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-sacramento-200 hover:bg-sacramento-50 transition-all duration-200 min-w-0"
                  >
                    <span className="text-xl flex-shrink-0">{interest.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Bio and skills */}
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a <span className="font-semibold text-sacramento-700">Computer Science student at UC Davis</span> (Class of 2026),
                    passionate about building technology that makes a real impact. My work spans across{' '}
                    <span className="font-semibold text-sacramento-700">full-stack development</span>,{' '}
                    <span className="font-semibold text-sacramento-700">machine learning</span>, and{' '}
                    <span className="font-semibold text-sacramento-700">data analysis</span>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm constantly exploring the intersection of software, hardware, and intelligent systems.
                    I love building projects that solve real-world problems and discovering what's possible with technology.
                  </p>
                </div>

                {/* Personal story card */}
                <div className="p-6 bg-gradient-to-br from-sacramento-50 to-primary-50 rounded-2xl border border-sacramento-100">
                  <h3 className="text-lg font-semibold text-sacramento-800 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    My Journey
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I've struggled with severe anxiety, which led me to start as a Neurology major.
                    Through that experience, I discovered my passion for coding with a dream to create
                    programs and devices that could help others—especially those facing health and neurological challenges.
                  </p>
                </div>

                {/* Fun facts */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-600 text-sm">
                    <span>🎵</span> Music lover
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-600 text-sm">
                    <span>🌱</span> Gardening
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-600 text-sm">
                    <span>⚽</span> Sports
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-600 text-sm">
                    <span>🎮</span> Gaming
                  </span>
                </div>
              </div>

              {/* Skills section */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-sm font-semibold text-sacramento-700 uppercase tracking-wider mb-3">
                        {category === 'languages' && 'Languages'}
                        {category === 'frameworks' && 'Frameworks & Libraries'}
                        {category === 'tools' && 'Tools & Databases'}
                        {category === 'areas' && 'Focus Areas'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-lg text-sm font-medium hover:bg-sacramento-200 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
