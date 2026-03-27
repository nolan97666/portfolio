import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Globe } from 'lucide-react'

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const educations = [
    {
      school: 'INSA Lyon',
      degree: 'Formation initiale au métier d\'ingénieur',
      period: '2023 - 2026',
      icon: GraduationCap,
    },
    {
      school: 'Lycée Younoussa Bamana',
      degree: 'Baccalauréat général mention très bien',
      period: '2020 - 2023',
      specialties: ['Mathématiques', 'Physique-Chimie'],
      icon: Award,
    },
    {
      school: 'Brevet d\'initiation aéronautique',
      degree: 'Domaines: Aérodynamique, Navigation, Météorologie, Réglementation',
      period: '2019',
      icon: Globe,
    },
  ]

  const languages = [
    { lang: 'Français', level: 'C2', width: '100%' },
    { lang: 'Anglais', level: 'B2', width: '80%' },
    { lang: 'Espagnol', level: 'B1', width: '70%' },
    { lang: 'Mahorais', level: 'C2', width: '100%' },
  ]

  return (
    <section id="profile" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-glow opacity-5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-glow to-blue-electric">
              Profil
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-blue-electric rounded-full" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-100 mb-4">À propos</h3>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              Étudiant ingénieur du département Télécommunications à l'INSA Lyon, je suis en recherche d'une alternance pour septembre 2026 dans les domaines de l'informatique, de la cybersécurité, des réseaux et des systèmes numériques. Rigoureux, curieux et passionné par les technologies modernes, je cherche à mettre à profit mes compétences académiques pour relever des défis concrets et contribuer à l'innovation technologique.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Formation</h3>
            <div className="space-y-6">
              {educations.map((edu, idx) => {
                const IconComponent = edu.icon
                return (
                  <motion.div
                    key={idx}
                    className="tech-card group"
                    whileHover={{ borderColor: 'rgba(0, 240, 255, 0.6)' }}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-cyan-glow group-hover:shadow-glow-sm transition-shadow"
                          whileHover={{ scale: 1.1 }}
                        >
                          <IconComponent size={20} />
                        </motion.div>
                      </div>
                      <div className="flex-grow">
                        <p className="font-bold text-gray-100">{edu.school}</p>
                        <p className="text-sm text-gray-400">{edu.degree}</p>
                        {edu.specialties && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {edu.specialties.map((spec, i) => (
                              <span key={i} className="text-xs bg-dark-700 text-cyan-glow px-2 py-1 rounded">
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-xs text-gray-500 mt-2">{edu.period}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Langues</h3>
            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-100">{lang.lang}</span>
                    <span className="text-xs text-cyan-glow font-mono">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-dark-800 rounded-full overflow-hidden border border-dark-600">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-glow to-blue-electric rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.width }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Profile
