import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Copy, Check, Linkedin, FileText } from 'lucide-react'
import CVFile from '../assets/cv/CV_Nolan_Mahadali.pdf'

const Contact = () => {
  const [copied, setCopied] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    message: '',
  })

  const email = 'nolan.mahadali@insa-lyon.fr'
  const phone = '0788252254'
  const location = 'Lyon, France'
  const linkedinUrl = 'https://www.linkedin.com/in/nolan-mahadali-a193813a5/'

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connecter à EmailJS ou un backend plus tard
    console.log('Form data:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: email,
      type: 'email',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: phone,
      type: 'phone',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: location,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-glow opacity-5 blur-3xl rounded-full -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-5 blur-3xl rounded-full translate-x-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-glow to-blue-electric">
              Contactez moi
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-blue-electric rounded-full mx-auto" />
        </motion.div>

        {/* 1. FORM SECTION */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Large elegant form container */}
          <div className="bg-dark-700 border border-dark-600 rounded-2xl p-10 md:p-14 backdrop-blur-sm hover:border-cyan-glow/30 transition-all duration-300">
            {/* Form Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Envoyez-moi un message
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-white font-medium mb-3 text-sm">
                    Prénom <span className="text-cyan-glow"></span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow/50 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-white font-medium mb-3 text-sm">
                    Nom <span className="text-cyan-glow"></span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white font-medium mb-3 text-sm">
                  Adresse mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre.email@exemple.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow/50 transition-all duration-300"
                />
              </div>

              {/* Title Field */}
              <div className="flex flex-col">
                <label htmlFor="title" className="text-white font-medium mb-3 text-sm">
                  Objet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Objet de votre message"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow/50 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-white font-medium mb-3 text-sm">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Écrivez votre message ici..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow/50 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-glow to-blue-electric text-dark-900 font-bold py-4 rounded-lg hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Envoyer
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  <span className="text-red-500">*</span> Champs obligatoires
                </p>
              </div>
            </form>
          </div>
        </motion.div>

        {/* 2. CONTACT INFORMATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Information Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Informations de contact
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            N'hésitez pas à me contacter pour toute opportunité professionnelle, collaboration ou simplement pour échanger.
          </p>

          {/* Contact Info List */}
          <div className="space-y-8 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 pb-8 border-b border-dark-600 last:border-b-0 last:pb-0 hover:border-dark-500 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 flex items-center justify-center hover:border-cyan-glow/50 transition-all duration-300">
                      <IconComponent className="text-cyan-glow" size={28} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h4 className="text-white font-semibold text-lg mb-2">{info.label}</h4>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-300 break-all">{info.value}</p>
                      {info.type && (
                        <button
                          onClick={() => handleCopy(info.value, info.type)}
                          className="flex-shrink-0 p-2 bg-dark-700 rounded-lg hover:bg-dark-600 border border-dark-600 hover:border-cyan-glow/50 transition-all duration-200"
                          aria-label={`Copier ${info.label.toLowerCase()}`}
                          title="Copier"
                        >
                          {copied === info.type ? (
                            <Check size={18} className="text-green-glow" />
                          ) : (
                            <Copy size={18} className="text-gray-400 hover:text-cyan-glow" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* LinkedIn Link & CV Button */}
          <div className="flex flex-col items-center md:items-start gap-8 mt-8">
            {/* LinkedIn Section */}
            <div className="flex items-center gap-4">
              <p className="text-gray-400">Visitez aussi mon profil :</p>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-dark-700 border border-dark-600 rounded-lg hover:border-cyan-glow/50 hover:bg-dark-600 transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="text-gray-400 group-hover:text-cyan-glow transition-colors duration-300" size={24} />
              </a>
            </div>

            {/* CV Section */}
            <div className="w-full">
              <h4 className="text-2xl font-bold text-white mb-6">
                Vous pouvez télécharger mon CV ci-dessous :
              </h4>
              <a
                href={CVFile}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-glow to-blue-electric text-dark-900 font-bold rounded-lg hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                aria-label="Télécharger CV"
              >
                <FileText size={24} />
                <span>Télécharger mon CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
