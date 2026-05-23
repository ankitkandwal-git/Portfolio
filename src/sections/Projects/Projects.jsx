import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Chat Application',
      description: 'Intelligent chatbot with natural language processing, powered by modern LLM APIs.',
      tags: ['React', 'Python', 'OpenAI', 'WebSocket'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with smooth animations, dark mode, and responsive design.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      tags: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/80 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="p-8 relative z-10">
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 group-hover:border-gray-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group-hover:gap-3`}
                >
                  View Project
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
