import React from 'react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-40 flex items-center justify-center font-bold text-white transition-all duration-300 rounded-full top-24 right-4 md:right-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-110"
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
