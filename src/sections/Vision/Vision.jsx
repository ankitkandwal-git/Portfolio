import React from 'react'

export default function Vision() {
  return (
    <section id="vision" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Vision
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-10 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
            <p className="text-xl text-gray-100 leading-relaxed">
              To build <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">innovative solutions</span> that leverage cutting-edge technology and AI to solve <span className="font-bold text-blue-400">real-world problems</span>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-10 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
            <p className="text-xl text-gray-100 leading-relaxed">
              My goal is to become a <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">visionary leader</span> in tech and make a <span className="font-bold text-pink-400">meaningful impact on society</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold text-lg text-blue-400 mb-2">Innovate</h3>
              <p className="text-gray-300 text-sm">Push boundaries with creative solutions</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg text-purple-400 mb-2">Excel</h3>
              <p className="text-gray-300 text-sm">Deliver high-quality products that matter</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold text-lg text-pink-400 mb-2">Inspire</h3>
              <p className="text-gray-300 text-sm">Lead by example and empower others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
