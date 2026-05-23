import React from 'react'

export default function Timeline() {
  const events = [
    { year: '2024', title: 'Founded AI Startup', description: 'Launched an AI-powered SaaS platform helping businesses with automation', icon: '🚀' },
    { year: '2023', title: 'Tech Lead at TechCorp', description: 'Led a team of 5 engineers building scalable cloud infrastructure', icon: '👨‍💼' },
    { year: '2022', title: 'Completed Degree', description: 'Graduated with honors in Computer Science', icon: '🎓' },
    { year: '2021', title: 'First Open Source', description: 'Published first popular open-source project with 200+ stars', icon: '⭐' }
  ]

  return (
    <section id="timeline" className="relative px-4 py-24 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="mb-6 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          Journey Timeline
        </h2>
        <div className="w-32 h-1 mb-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 w-1 left-4 md:left-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, idx) => (
              <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} md:w-1/2`}>
                  <div className="p-6 transition-all duration-300 border bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 rounded-2xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{event.icon}</span>
                      <span className="px-3 py-1 text-sm font-bold text-purple-400 rounded-full bg-purple-500/20">{event.year}</span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">{event.title}</h3>
                    <p className="leading-relaxed text-gray-300">{event.description}</p>
                  </div>
                </div>

                {/* Circle dot */}
                <div className="hidden md:flex md:w-auto md:justify-center">
                  <div className="w-6 h-6 border-4 border-gray-900 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-purple-500/50"></div>
                </div>

                {/* Mobile spacer */}
                <div className="md:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
