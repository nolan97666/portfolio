import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-glow opacity-5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-glow to-blue-electric">
              Projets
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-blue-electric rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
