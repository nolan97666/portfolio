import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      company: 'Les Bâtisseurs',
      title: 'Stage volontaire en génie civil',
      period: '2025',
      type: 'Stage',
      location: 'France',
      description: [
        'Participation active au suivi quotidien de chantier aux côtés d\'un ingénieur civil',
        'Coordination des équipes sur le terrain',
        'Contrôle de l\'avancement des travaux et respect des normes',
      ],
      skills: ['Rigueur', 'Coordination', 'Terrain', 'Gestion de projet'],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      company: 'Direction des transports maritimes',
      title: 'Stage ouvrier intégré au service mécanique',
      period: '2024',
      type: 'Stage',
      location: 'Mayotte',
      description: [
        'Application des procédures de sécurité en milieu maritime',
        'Respect des contraintes techniques et réglementaires',
        'Participation aux opérations d\'entretien des navires',
        'Participation aux diagnostics techniques',
      ],
      skills: ['Sécurité', 'Rigueur technique', 'Discipline', 'Adaptabilité'],
      color: 'from-cyan-500 to-blue-400',
    },
    {
      id: 3,
      company: 'Laouliya-Traiteur',
      title: 'Job d\'été',
      period: '2023',
      type: 'Job d\'été',
      location: 'Mayotte',
      description: [
        'Préparation et aide à la mise en place des plats',
        'Respect des règles d\'hygiène et de sécurité alimentaire',
        'Travail en équipe dans un environnement à rythme soutenu',
      ],
      skills: ['Travail d\'équipe', 'Hygiène', 'Rapidité', 'Fiabilité'],
      color: 'from-orange-500 to-red-400',
    },
    {
      id: 4,
      company: 'Terre de Rose',
      title: 'Job d\'été - Entreprise de cosmétique',
      period: '2023',
      type: 'Job d\'été',
      location: 'Mayotte',
      description: [
        'Mise en rayon et rangement des produits',
        'Participation à la bonne tenue de l\'espace de vente',
        'Accueil et orientation des clients',
      ],
      skills: ['Service client', 'Responsabilité', 'Organisation', 'Communication'],
      color: 'from-pink-500 to-rose-400',
    },
  ]

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experiences" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-5 blur-3xl rounded-full translate-x-1/3" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-glow opacity-3 blur-3xl rounded-full" />

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
              Expériences
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-blue-electric rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-glow via-blue-electric to-transparent opacity-30" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`md:grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 0 ? '' : 'md:direction-rtl'
              }`}
            >
              {/* Left side - alternating */}
              <div className={idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                <motion.div
                  className="relative"
                  whileHover={{ y: -5 }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-glow rounded-full border-4 border-dark-900 shadow-lg shadow-cyan-glow" />

                  {/* Card */}
                  <div className={`group relative rounded-xl overflow-hidden md:pr-12 ${idx % 2 === 0 ? '' : ''}`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                    {/* Border */}
                    <div className="absolute inset-0 border border-dark-600 group-hover:border-cyan-glow transition-colors duration-300 rounded-xl" />

                    {/* Content */}
                    <div className="relative p-6 md:p-8">
                      {/* Header */}
                      <div className="mb-4">
                        <motion.div
                          className="flex items-center gap-2 mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Briefcase size={16} className="text-cyan-glow" />
                          <span className="text-xs font-semibold text-cyan-glow uppercase tracking-widest">
                            {exp.type}
                          </span>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-100 mb-1">{exp.title}</h3>
                        <p className="text-lg text-gray-400">{exp.company}</p>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-col md:flex-row gap-3 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-5 space-y-2">
                        {exp.description.map((item, i) => (
                          <motion.p
                            key={i}
                            className="text-gray-400 text-sm leading-relaxed flex gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-cyan-glow flex-shrink-0 mt-1">▸</span>
                            <span>{item}</span>
                          </motion.p>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-600">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-dark-800 text-gray-300 border border-dark-600 group-hover:border-cyan-glow group-hover:text-cyan-glow transition-all"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - empty on alternating (for spacing in grid) */}
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          className="mt-16 p-6 rounded-lg border border-dark-600 bg-dark-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            💼 Ces expériences variées ont renforcé ma rigueur, mon adaptabilité et mon sens du professionnalisme.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experiences
