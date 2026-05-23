import React from 'react'
import { motion } from 'framer-motion'

export default function Certificates() {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: '☁️'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2024',
      icon: '🌐'
    },
    {
      title: 'Meta React Specialization',
      issuer: 'Meta/Coursera',
      date: '2023',
      icon: '⚛️'
    },
    {
      title: 'MongoDB University',
      issuer: 'MongoDB',
      date: '2023',
      icon: '🍃'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Andrew Ng/Coursera',
      date: '2023',
      icon: '🤖'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2022',
      icon: '💻'
    }
  ]

  return (
    <section id="certificates" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications & Awards
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
              
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <span className="text-xs text-gray-500">{cert.date}</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                  Verified ✓
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
