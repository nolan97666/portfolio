import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Detect hovering on interactive elements
    const handleMouseOverInteractive = () => {
      setIsHovering(true)
    }

    const handleMouseOutInteractive = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Add hover detection to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseOverInteractive)
      el.addEventListener('mouseleave', handleMouseOutInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseOverInteractive)
        el.removeEventListener('mouseleave', handleMouseOutInteractive)
      })
    }
  }, [])

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed w-3 h-3 bg-cyan-glow rounded-full pointer-events-none z-50 mix-blend-screen"
            animate={{
              x: position.x - 6,
              y: position.y - 6,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />

          {/* Outer ring */}
          <motion.div
            className="fixed w-8 h-8 border-2 border-cyan-glow rounded-full pointer-events-none z-50 shadow-glow-sm"
            animate={{
              x: position.x - 16,
              y: position.y - 16,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
              mass: 0.8,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                opacity: isHovering ? 0.8 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </>
      )}

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

export default CustomCursor
