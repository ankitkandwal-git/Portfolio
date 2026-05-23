import React from 'react'

export default function Skills() {
  const skills = [
    {
      title: 'Frontend',
      items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'SQLite'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & DevOps',
      items: ['Git', 'Docker', 'AWS', 'GitHub'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI & Data',
      items: ['Python', 'TensorFlow', 'APIs', 'LLMs'],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className={`h-1 w-12 bg-gradient-to-r ${skill.color} rounded-full mb-4 group-hover:w-full transition-all duration-300`}></div>
              
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                {skill.title}
              </h3>
              
              <div className="space-y-3 relative z-10">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-blue-400 transition-colors"></div>
                    <span className="text-gray-300 group-hover:text-gray-100 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
