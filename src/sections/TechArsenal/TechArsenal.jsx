import React from 'react'

export default function TechArsenal() {
  const techs = [
    { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-blue-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-400' },
    { name: 'Express', icon: '⚡', color: 'from-gray-600 to-gray-400' },
    { name: 'Python', icon: '🐍', color: 'from-blue-600 to-yellow-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' }
  ]

  return (
    <section id="tech-arsenal" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Tech Arsenal
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mb-12 rounded-full"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
              
              <h3 className={`text-xl font-bold text-center bg-gradient-to-r ${tech.color} bg-clip-text text-transparent group-hover:drop-shadow-lg`}>
                {tech.name}
              </h3>

              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${tech.color} group-hover:w-full transition-all duration-300 rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
