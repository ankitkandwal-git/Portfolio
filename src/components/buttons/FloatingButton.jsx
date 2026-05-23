import React from 'react'

export default function FloatingButton() {
  const handleContact = () => {
    const message = "Hi Ankit! I'd like to connect with you."
    const whatsappURL = `https://wa.me/7027258152?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="fixed z-40 flex flex-col items-end gap-3 bottom-8 right-8">
      {/* WhatsApp Button */}
      <button
        onClick={handleContact}
        className="flex items-center justify-center w-16 h-16 text-2xl text-white transition-all duration-300 rounded-full bg-gradient-to-br from-green-400 to-green-600 hover:shadow-lg hover:shadow-green-500/50 hover:scale-110 group"
        title="Chat on WhatsApp"
      >
        💬
      </button>

      {/* Email Button */}
      <a
        href="mailto:ankit@example.com"
        className="flex items-center justify-center w-16 h-16 text-2xl text-white transition-all duration-300 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110"
        title="Send Email"
      >
        ✉️
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center justify-center w-16 h-16 text-2xl text-white transition-all duration-300 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-110"
        title="Back to top"
      >
        ⬆️
      </button>
    </div>
  )
}
