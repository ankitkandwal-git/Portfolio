import React from 'react'

export default function Footer() {
  const links = [
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Email', icon: '📧', url: '#' }
  ]

  return (
    <footer className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-black border-t border-gray-700/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Ankit Kandwal
            </h3>
            <p className="text-gray-400">Full-Stack Developer & AI Enthusiast</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  title={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Ankit Kandwal. Built with <span className="text-pink-400">❤️</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
