import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import CVFile from '../assets/cv/CV_Nolan_Mahadali.pdf'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'profile', 'skills', 'experiences', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Profil', id: 'profile' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Expériences', id: 'experiences' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
    { label: 'CV', id: 'cv', isCV: true, href: CVFile },
  ]

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-xl ${
        isScrolled
          ? 'glass shadow-lg shadow-cyan-glow/20 shadow-opacity-20'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('hero')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-glow opacity-20 blur-lg rounded-lg" />
              <span className="relative font-bold text-xl md:text-2xl text-cyan-glow">NM.</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isCV ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  download
                  className="relative text-sm md:text-base font-medium transition-colors px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-glow to-blue-electric text-dark-900 font-bold hover:shadow-glow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ) : (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-sm md:text-base font-medium transition-colors py-2 text-gray-300 hover:text-cyan-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-glow to-blue-electric"
                      layoutId="navbar-underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-cyan-glow"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 border-t border-dark-600 space-y-2">
            {navItems.map((item) => (
              item.isCV ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 rounded transition-colors bg-gradient-to-r from-cyan-glow to-blue-electric text-dark-900 font-bold m-2"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ) : (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                    activeSection === item.id
                      ? 'text-cyan-glow bg-dark-800'
                      : 'text-gray-300 hover:text-cyan-glow hover:bg-dark-800'
                  }`}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
