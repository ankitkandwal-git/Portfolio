import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b shadow-lg bg-gradient-to-b from-gray-900/95 to-gray-900/80 backdrop-blur-lg border-gray-700/30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white transition-all duration-300 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-blue-500/50">
              AK
            </div>
            <span className="hidden text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text sm:inline">
              Ankit
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="items-center hidden gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg hover:text-white hover:bg-gray-800/50 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="hidden px-6 py-2 font-bold text-white transition-all duration-300 rounded-lg sm:inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 focus:outline-none group"
          >
            <span className={`w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="pb-4 space-y-2 border-t md:hidden border-gray-700/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg hover:text-white hover:bg-gray-800/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full px-4 py-2 font-bold text-center text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
