'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sacramento-50 via-white to-primary-50"
    >
      <div className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Leo
              Zavala-Jimenez</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4">
            UC Davis CS + Statistics Student • 2026
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I build intelligent systems that connect AI, data, and hardware.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-sacramento-700 text-white rounded-lg font-semibold hover:bg-sacramento-800 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-sacramento-700 text-sacramento-700 rounded-lg font-semibold hover:bg-sacramento-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-sacramento-700 hover:text-sacramento-800 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 animate-ping opacity-20">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <svg
                className="w-8 h-8 animate-bounce group-hover:scale-110 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-sacramento-700 rounded-full animate-pulse scroll-dot-1"></div>
              <div className="w-1 h-1 bg-sacramento-700 rounded-full animate-pulse scroll-dot-2"></div>
              <div className="w-1 h-1 bg-sacramento-700 rounded-full animate-pulse scroll-dot-3"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

