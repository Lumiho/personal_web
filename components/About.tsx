import Image from 'next/image'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading overline="Introduction" title="About Me" />
        <Reveal>
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl ring-4 ring-sacramento-100">
                <Image
                  src="/images/headshot.jpg"
                  alt="Leonardo Zavala-Jimenez"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                I&apos;m a software engineer and recent Computer Science graduate
                from UC Davis (June 2026). I&apos;ve worked across the full software
                development life cycle: building and deploying a production
                full-stack platform for the UC Davis Health Department of Internal
                Medicine, and leading software for{' '}
                <span className="font-semibold text-sacramento-700">MuscleMaxx</span>,
                a wearable fitness startup with real-time sensor data pipelines.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I care about type-safe systems, clean data modeling, and
                documentation that lets a team keep moving after handoff. Outside
                of shipping code, I&apos;ve led national outreach for ColorStack,
                supporting underrepresented students in tech.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  'B.S. Computer Science, UC Davis — June 2026',
                  'U.S. citizen — no visa sponsorship needed',
                  'Production experience: Azure, Next.js, TypeScript',
                  'Team lead across software, hardware & business',
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-gray-700">
                    <svg
                      className="w-5 h-5 text-sacramento-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
