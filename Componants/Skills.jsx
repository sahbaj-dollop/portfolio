import React from 'react'
import { motion } from 'framer-motion'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { FaTools } from "react-icons/fa"
import { GrStorage } from "react-icons/gr"
import { useTheme } from '../Context/ThemeContext'

const Skills = () => {
  const { darkMode } = useTheme()

  const frontend = [
    { name: "HTML / CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "BootStrap", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 95 },
    { name: "Context API", level: 85 },
  ]

  const backend = [
    { name: 'Node JS', level: 80 },
    { name: 'Express JS', level: 95 },
    { name: 'MongoDB', level: 80 },
    { name: 'Middleware & Bcrypt', level: 85 },
    { name: 'REST APIs', level: 90 },
    { name: 'Authentication', level: 93 },
  ]

  const tools = [
    { name: 'VS Code', level: 100 },
    {name:'Antigravity, Curser, Claude',level:100},
    { name: 'Git & GitHub', level: 70 },
    { name: 'Postman', level: 95 },
    { name: 'Thunder Client', level: 75 },
    { name: 'Vercel & Netlify', level: 80 },
  ]

  const cardStyle = darkMode
    ? 'bg-gray-800 text-white'
    : 'bg-white text-black'

  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600'
  const barBg = darkMode ? 'bg-gray-700' : 'bg-gray-200'

  const SkillBar = ({ skill, index }) => (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-sm md:text-base">
          {skill.name}
        </span>
        <span className={`${textMuted} text-sm`}>
          {skill.level}%
        </span>
      </div>
      <div className={`w-full rounded-full h-2 ${barBg} overflow-hidden`}>
        <motion.div
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.li>
  )

  return (
    <div
      id="skills"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300
        ${darkMode
          ? 'bg-gray-900'
          : 'bg-gradient-to-r from-[#c9d6ff50] to-[#e2e2e277]'}
      `}
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={`font-bold text-2xl md:text-3xl mb-3 ${textMuted}`}>
          Skills & Expertise
        </h1>
        <p className={`text-base md:text-xl ${textMuted}`}>
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">

        {/* Frontend */}
        <motion.div 
          className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-auto ${cardStyle}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h1 className="flex items-center gap-2 mb-6">
            <span className="flex items-center text-blue-600">
              <MdArrowBackIosNew size={18} />
              <MdArrowForwardIos size={18} />
            </span>
            <span className="text-lg md:text-xl font-bold">Frontend</span>
          </h1>

          <ul className="space-y-4">
            {frontend.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div 
          className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-auto ${cardStyle}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h1 className="flex items-center gap-2 mb-6">
            <GrStorage className="text-blue-600" size={20} />
            <span className="text-lg md:text-xl font-bold">Backend</span>
          </h1>

          <ul className="space-y-4">
            {backend.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div 
          className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-auto ${cardStyle}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h1 className="flex items-center gap-2 mb-6">
            <FaTools className="text-blue-600" size={20} />
            <span className="text-lg md:text-xl font-bold">Tools & Others</span>
          </h1>

          <ul className="space-y-4">
            {tools.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  )
}

export default Skills
