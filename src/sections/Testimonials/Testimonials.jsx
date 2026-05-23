import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CTO at TechCorp',
      text: 'Ankit is an exceptional developer with incredible problem-solving skills. He delivered our project ahead of schedule!',
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Smith',
      role: 'Founder at StartupXYZ',
      text: 'Working with Ankit was a game-changer. His AI solutions transformed our business processes completely.',
      avatar: '👩‍💻'
    },
    {
      name: 'Mike Johnson',
      role: 'Project Manager',
      text: 'Best developer I\'ve worked with. Great communication, clean code, and always willing to go the extra mile.',
      avatar: '👨‍🏫'
    },
    {
      name: 'Emily Davis',
      role: 'Product Designer',
      text: 'Ankit brings technical excellence AND design sensibility. A rare combination that creates beautiful products.',
      avatar: '👩‍🎨'
    }
  ]

  return (
    <section id="testimonials" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Testimonials
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
