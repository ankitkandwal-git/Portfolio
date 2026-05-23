import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function SkillsWithProgress() {
  const [ref, isVisible] = useScrollAnimation()

  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'MongoDB', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 }
  ]

  return (
    <section id="skills" ref={ref} className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="mb-2 flex justify-between items-center">
                <span className="font-semibold text-white">{skill.name}</span>
                {isVisible && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="text-blue-400 font-bold"
                  >
                    {skill.level}%
                  </motion.span>
                )}
              </div>
              <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden border border-gray-600/50">
                {isVisible && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
