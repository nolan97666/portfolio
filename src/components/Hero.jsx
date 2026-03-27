import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import backgroundVideo from '../assets/images/background_cyber.mp4'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 via-30% to-dark-900 opacity-70" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 240, 255, 0.05) 25%, rgba(0, 240, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.05) 75%, rgba(0, 240, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 240, 255, 0.05) 25%, rgba(0, 240, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.05) 75%, rgba(0, 240, 255, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name - Minimaliste */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight text-white">
              Mahadali Nolan
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-white font-light tracking-wide">
              Étudiant ingénieur INSA Lyon
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
