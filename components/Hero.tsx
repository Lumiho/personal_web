const stats = [
  { value: '500+', label: 'departmental submissions digitized at UC Davis Health' },
  { value: '250+ hrs', label: 'of manual processing eliminated annually' },
  { value: '80%', label: 'fewer API calls via Redis caching in Rust CLI' },
]

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Lumiho',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zavala-jimenez',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:zavalaleo715@yahoo.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-sacramento-50 via-white to-primary-50"
    >
      <div className="section-container w-full pt-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-sacramento-200 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sacramento-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sacramento-600" />
            </span>
            <span className="text-sm font-medium text-sacramento-800">
              Open to full-time software engineering roles · U.S. citizen, no sponsorship required
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            Leo <span className="gradient-text">Zavala</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 font-semibold mb-4">
            Software Engineer · UC Davis Computer Science, Class of 2026
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            I ship production software across the full development life cycle —
            most recently a full-stack funding platform for UC Davis Health
            deployed on Microsoft Azure, and a real-time sensor data pipeline
            for a wearable fitness startup.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
            <a
              href="#experience"
              className="px-8 py-3 bg-sacramento-700 text-white rounded-lg font-semibold hover:bg-sacramento-800 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              View My Work
            </a>
            <a
              href="/Leo-Zavala-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-sacramento-700 text-sacramento-700 rounded-lg font-semibold hover:bg-sacramento-50 transition-colors text-center"
            >
              Download Résumé
            </a>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name === 'Email' ? undefined : '_blank'}
                  rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={social.name}
                  className="p-3 bg-white rounded-lg shadow-md text-gray-600 hover:text-sacramento-700 hover:shadow-lg transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white/70 backdrop-blur-sm border border-sacramento-100 rounded-xl p-5"
              >
                <p className="text-3xl font-bold text-sacramento-700 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
