import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programmation',
      skills: ['Python', 'SQL', 'MATLAB', 'Arduino'],
      icon: '⟨⟩',
    },
    {
      title: 'Data & Analyse',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Sklearn'],
      icon: '📊',
    },
    {
      title: 'Réseaux & Télécom',
      skills: ['TCP/IP', 'DNS', 'HTTP', 'Architecture'],
      icon: '🌐',
    },
    {
      title: 'Outils',
      skills: ['Git', 'GitHub', 'Linux', 'LaTeX'],
      icon: '⚙️',
    },
    {
      title: 'Cybersécurité',
      skills: ['TryHackMe', 'Veille', 'Systèmes', 'Sécurité'],
      icon: '🔐',
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 opacity-5 blur-3xl rounded-full translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-glow opacity-3 blur-3xl rounded-full -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-glow to-blue-electric">
              Compétences
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-blue-electric rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Les technologies et domaines sur lesquels je travaille
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl p-6 bg-dark-700/50 border border-dark-600 backdrop-blur-sm hover:border-cyan-glow/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="text-3xl mb-4">{category.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-cyan-glow transition-colors">
                  {category.title}
                </h3>

                {/* Skills list */}
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.li
                      key={skillIdx}
                      className="text-gray-400 text-sm flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-cyan-glow mr-2">→</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-glow/10 to-blue-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
