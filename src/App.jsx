import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative w-full bg-dark-900 overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <motion.main
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Profile />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  )
}

export default App
