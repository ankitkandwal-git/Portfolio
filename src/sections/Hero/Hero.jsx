import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import profileImage from '../../assets/images/DevSummit.jpg'

const ROTATING = [
  'Building AI-Powered Systems',
  'Engineering Scalable Products',
  'Creating Future-Ready Experiences',
  'Solving Problems Through Innovation'
]

function RotatingText() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % ROTATING.length), 3600)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="font-semibold text-accentBlue">{ROTATING[index]}</span>
  )
}

export default function Hero() {
  const [typing, setTyping] = useState('')
  const full = "Full Stack Developer focused on AI systems, scalable architectures, hackathon innovation, and next-generation digital experiences."
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setTyping(full.slice(0, i))
      if (i >= full.length) clearInterval(id)
    }, 12)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#0f172a,_transparent_30%)]" />

      <div className="container px-6 mx-auto py-28">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-5xl font-extrabold leading-tight md:text-6xl">
              Hi, I’m <span className="text-accentPurple">Ankit Kandwal</span>
            </motion.h1>

            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-2xl md:text-3xl">
              <RotatingText />
            </motion.h2>

            <p className="max-w-2xl mt-6 text-sm md:text-base text-secondary-lite">{typing}</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/public/resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 text-sm transition-transform rounded-full shadow-lg bg-gradient-to-r from-accentBlue to-accentPurple hover:scale-105">
                <FiDownload /> Resume
              </a>

              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 transition border rounded-full border-secondary hover:bg-secondary">
                <FiGithub /> GitHub
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 transition border rounded-full border-secondary hover:bg-secondary">
                <FiLinkedin /> LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <span className="inline-block w-3 h-3 rounded-full shadow-lg bg-cyan-400 animate-pulse" />
              <span className="text-sm">Currently building: AI-driven resume intelligence</span>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="relative w-64 h-64 rounded-2xl bg-gradient-to-tr from-[#0b1220] via-[#081028] to-[#0b0f1b] p-1 shadow-2xl glass overflow-hidden">
              <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#07162b] to-transparent flex items-center justify-center overflow-hidden">
                <img src={profileImage} alt="Ankit Kandwal" className="object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
    </section>
  )
}
