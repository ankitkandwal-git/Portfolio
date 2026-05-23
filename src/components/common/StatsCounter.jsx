import React from 'react'
import { motion } from 'framer-motion'

export default function StatsCounter() {
  const stats = [
    { number: 12, label: 'Projects', suffix: '+' },
    { number: 500, label: 'GitHub Stars', suffix: '+' },
    { number: 3, label: 'Hackathons Won', suffix: '' },
    { number: 100, label: 'Happy Clients', suffix: '%' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 + 0.2, duration: 2 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            {stat.number}{stat.suffix}
          </motion.div>
          <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
