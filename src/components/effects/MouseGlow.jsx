import React, { useState } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function MouseGlow() {
  const mousePosition = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {isVisible && (
        <div
          className="fixed pointer-events-none w-80 h-80 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10"
          style={{
            left: `${mousePosition.x - 160}px`,
            top: `${mousePosition.y - 160}px`,
            transition: 'left 0.1s, top 0.1s'
          }}
        />
      )}
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
    </>
  )
}
