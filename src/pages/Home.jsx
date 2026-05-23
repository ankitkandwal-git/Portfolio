import React from 'react'
import Hero from '../sections/Hero/Hero'
import StatsCounter from '../components/common/StatsCounter'
import About from '../sections/About/About'
import SkillsWithProgress from '../sections/Skills/SkillsWithProgress'
import TechArsenal from '../sections/TechArsenal/TechArsenal'
import Projects from '../sections/Projects/Projects'
import Achievements from '../sections/Achievements/Achievements'
import Timeline from '../sections/Timeline/Timeline'
import Testimonials from '../sections/Testimonials/Testimonials'
import Certificates from '../sections/Certificates/Certificates'
import Vision from '../sections/Vision/Vision'
import Contact from '../sections/Contact/Contact'
import Footer from '../sections/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <StatsCounter />
      </div>
      <About />
      <SkillsWithProgress />
      <TechArsenal />
      <Projects />
      <Achievements />
      <Timeline />
      <Testimonials />
      <Certificates />
      <Vision />
      <Contact />
      <Footer />
    </main>
  )
}
