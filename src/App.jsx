import React from 'react'
import ThemeProvider from './context/ThemeContext'
import ParticleBackground from './components/effects/ParticleBackground'
import MouseGlow from './components/effects/MouseGlow'
import Navbar from './components/navbar/Navbar'
import ThemeToggle from './components/buttons/ThemeToggle'
import FloatingButton from './components/buttons/FloatingButton'
import Home from './pages/Home'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-text overflow-x-hidden">
        <ParticleBackground />
        <MouseGlow />
        <Navbar />
        <ThemeToggle />
        <FloatingButton />
        <div className="pt-20">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  )
}
