import React from 'react'
import { motion } from 'framer-motion'
import { HiDocumentArrowDown } from 'react-icons/hi2'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { GrStorage } from "react-icons/gr"
import resume from '../../public/sahbajkhan.pdf'
import { useTheme } from '../Context/ThemeContext'

const About = () => {
  const { darkMode } = useTheme()

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
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 overflow-hidden
        ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}
      `}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`font-bold text-3xl md:text-4xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            About Me
            <span className="block h-1 w-24 mx-auto mt-3 rounded-full bg-blue-600"></span>
          </h1>
          <p className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know more about me, my skills, and my journey as a developer
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

          {/* Left */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-bold text-2xl md:text-3xl mb-6 flex items-center gap-3">
              <span className="text-blue-600 text-3xl">👨‍💻</span>
              My Story
            </h1>

            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm a passionate Full Stack Developer with over 1 year of
                experience creating dynamic web applications. My journey began
                with a curiosity about how websites work, which evolved into a
                deep love for coding and problem-solving.
              </p>

              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I specialize in building scalable applications using modern
                technologies like React, Node.js, and MongoDB. I believe in
                writing clean, efficient code and creating user experiences that
                are both functional and beautiful.
              </p>

              <div className={`p-6 rounded-xl border-l-4 border-blue-600 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <p className={`italic text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  "When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge."
                </p>
              </div>
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <motion.a
                href={resume}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className={`group px-8 py-4 border-2 border-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-3
                    ${darkMode ? 'text-blue-400 hover:bg-gray-800' : 'text-blue-600 hover:bg-blue-50'}
                  `}
                >
                  <HiDocumentArrowDown className="text-xl group-hover:animate-bounce" />
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
              <span className="text-blue-600 text-3xl">⚡</span>
              Technologies I Use
            </h1>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`h-12 rounded-lg font-semibold flex items-center justify-center text-sm md:text-base
                    ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-blue-100 text-black hover:bg-blue-200'}
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

            {/* Stats */}
            <div className="mt-6">
              <h1 className="font-bold text-2xl md:text-3xl mb-6 flex items-center gap-3">
                <span className="text-blue-600 text-3xl">📊</span>
                Quick Stats
              </h1>

              <div className="space-y-6">
                <motion.div
                  className={`flex items-center gap-6 p-6 rounded-xl hover:shadow-lg
                    ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-100 hover:bg-blue-200'}
                  `}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex text-blue-600 font-bold text-3xl">
                    <SlArrowLeft />
                    <SlArrowRight />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">20+</p>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Projects Completed
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className={`flex items-center gap-6 p-6 rounded-xl hover:shadow-lg
                    ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-100 hover:bg-blue-200'}
                  `}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <GrStorage className="text-3xl font-bold text-blue-600" />
                  <div>
                    <p className="font-bold text-2xl">1+</p>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Year Experience
                    </p>
                  </div>
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
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <h3 className={`font-bold text-2xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Build Something Amazing?
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's collaborate and create something extraordinary together
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About
