import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileDown, UserCheck, Zap, GraduationCap, Code2, Sparkles, Eye, X } from 'lucide-react'
import resume from '../../public/sahbajkhan.pdf'
import { useTheme } from '../Context/ThemeContext'

const About = () => {
  const { darkMode } = useTheme()
  const [showResumeModal, setShowResumeModal] = useState(false)

  const skills = [
    'HTML 5','CSS 3',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'NEXT JS',
    'REACT JS',
    'EXPRESS JS',
    'NODE JS',
    'MONGODB',
    'MONGODB ATLAS'
  ]

  return (
    <div
      id="about"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 overflow-hidden relative
        ${darkMode ? 'bg-black text-white' : 'bg-orange-50/40 text-black'}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-extrabold text-3xl md:text-4xl mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <span className="block h-1 w-24 mx-auto rounded-full bg-orange-500 mb-4" />
          <p className={`text-base md:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know me better - my journey, education, and what drives my passion for web development
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-bold text-2xl md:text-3xl mb-6 flex items-center gap-3">
              <UserCheck className="text-orange-500 w-8 h-8" />
              My Story
            </h1>

            <div className="space-y-6">
              <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I am a results-driven Full Stack Developer with hands-on experience engineering production-grade web applications. My development philosophy is rooted in clean component architecture, efficient state management, responsive UI systems, and robust backend API integration.
              </p>

              <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Specializing in the modern JavaScript ecosystem (React 19, Next.js, TypeScript, Node.js, Express, MongoDB), I thrive on transforming complex business requirements into sleek, performant, and user-centric web applications.
              </p>

              <div className={`p-6 rounded-xl border-l-4 border-orange-500 ${darkMode ? 'bg-neutral-900/90 border border-neutral-800' : 'bg-orange-50/80 border border-orange-100'}`}>
                <p className={`italic text-base md:text-lg ${darkMode ? 'text-orange-300' : 'text-gray-800'}`}>
                  "Building scalable digital products with clean code, modern aesthetics, and relentless attention to detail."
                </p>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                onClick={() => setShowResumeModal(true)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-6 py-3.5 border-2 border-orange-500 font-semibold rounded-xl flex items-center gap-2.5 transition-all duration-300 ${
                  darkMode ? 'text-orange-400 hover:bg-orange-500/10' : 'text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Eye className="w-5 h-5 text-orange-400" />
                <span>Preview Resume</span>
              </motion.button>

              <motion.a
                href={resume}
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <button
                  className="px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl flex items-center gap-2.5 shadow-lg shadow-orange-500/20 transition-all duration-300"
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>
              </motion.a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="font-bold text-2xl md:text-3xl mb-6 flex items-center gap-3">
              <Zap className="text-orange-500 w-8 h-8" />
              Technologies I Use
            </h1>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`h-12 rounded-lg font-semibold flex items-center justify-center text-sm md:text-base border transition-colors
                    ${darkMode ? 'bg-neutral-900 border-neutral-800 text-gray-200 hover:border-orange-500/50' : 'bg-orange-50 border-orange-200 text-black hover:bg-orange-100'}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-8">
              <h1 className="font-bold text-2xl md:text-3xl mb-6 flex items-center gap-3">
                <GraduationCap className="text-orange-500 w-8 h-8" />
                Education
              </h1>

              <div className="space-y-4">
                <motion.div
                  className={`p-5 rounded-xl border transition-all ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-orange-50 border-orange-200'
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-orange-500">Bachelor of Computer Application (BCA)</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Holkar Science College, Indore</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      2022 - 2025
                    </span>
                  </div>
                  <p className="text-sm font-semibold mt-2 text-orange-400">CGPA: 7.40</p>
                </motion.div>

                <motion.div
                  className={`p-5 rounded-xl border transition-all ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-orange-50 border-orange-200'
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-orange-500">Higher Secondary Education (12th)</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>J.J.C. Higher Secondary School Naigarhi Rewa</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      2021 - 2022
                    </span>
                  </div>
                  <p className="text-sm font-semibold mt-2 text-orange-400">Score: 90%</p>
                </motion.div>

                <motion.div
                  className={`p-5 rounded-xl border transition-all ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-orange-50 border-orange-200'
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-orange-500">High School (10th)</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>J.J.C. Higher Secondary School Naigarhi Rewa</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      2019 - 2020
                    </span>
                  </div>
                  <p className="text-sm font-semibold mt-2 text-orange-400">Score: 85.25%</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>{/* End Main Content */}

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-orange-50 border-orange-200'}`}>
            <h3 className={`font-bold text-2xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Build Something Amazing?
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's collaborate and create something extraordinary together
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1 glow-orange"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* ── Resume Modal Overlay ── */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              className={`relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col ${
                darkMode ? "bg-neutral-900 border border-neutral-800" : "bg-white border border-orange-200"
              }`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-orange-500/20 bg-black/40">
                <div className="flex items-center gap-3">
                  <FileDown className="text-orange-500 w-6 h-6" />
                  <h2 className="font-bold text-lg text-white">Sahbaj Khan — Official Resume</h2>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={resume}
                    download
                    className="px-4 py-1.5 text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition"
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-1.5 rounded-full hover:bg-neutral-800 text-gray-300 hover:text-white transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* PDF View */}
              <div className="flex-1 w-full h-full bg-neutral-950">
                <iframe
                  src={resume}
                  title="Sahbaj Khan Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default About
