export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="w-48 h-50 rounded-full overflow-hidden shadow-xl ring-4 ring-sacramento-100">
              <img
                src="/images/headshot.jpg"
                alt="Leonardo Zavala-Jimenez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm passionate about <span className="font-semibold text-sacramento-700">Data Analysis</span>,{' '}
              <span className="font-semibold text-sacramento-700">Machine Learning/AI</span>,{' '}
              <span className="font-semibold text-sacramento-700">Software Engineering</span>, and{' '}
              <span className="font-semibold text-sacramento-700">Neurotechnology</span>.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a <span className="font-semibold text-sacramento-700">Computer Science and Statistics student @ UC Davis</span> (2026), I'm constantly exploring
              the intersection of software, hardware, and intelligent systems. I love building
              projects that solve real-world problems and discovering what's possible
              with technology.
              <br></br>
              <b>Personal Background</b>: I've struggled with severe anxiety, which led me to start as a Neurology major but later discovered my passion for coding in an effort to one day create programs/devices that could help others; especially health/neurology related issues.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <b>Fun Facts:</b> I love music, gardening, playing sports and games.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-full text-sm font-medium">
                Python
              </span>
              <span className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-full text-sm font-medium">
                Rust
              </span>
              <span className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-full text-sm font-medium">
                C/C++
              </span>
              <span className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-sacramento-100 text-sacramento-700 rounded-full text-sm font-medium">
                Data Analysis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

