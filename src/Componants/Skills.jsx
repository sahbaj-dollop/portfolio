import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Wrench } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Skills = () => {
  const { darkMode } = useTheme()

  const frontend = [
    { name: "React.js / Next.js", level: 95 },
    { name: "JavaScript (ES6+) / TypeScript", level: 90 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "Tailwind CSS & Bootstrap", level: 90 },
    { name: "Redux Toolkit / Context API", level: 85 },
  ]

  const backend = [
    { name: 'Node.js & Express.js', level: 90 },
    { name: 'MongoDB & Mongoose', level: 90 },
    { name: 'Basics of SQL', level: 75 },
    { name: 'REST APIs & CRUD Operations', level: 95 },
    { name: 'Authentication & Error Handling', level: 90 },
  ]

  const tools = [
    { name: 'Git & GitHub', level: 90 },
    { name: 'VS Code, Cursor & Antigravity', level: 95 },
    { name: 'Chrome DevTools', level: 90 },
    { name: 'Postman & Thunder Client', level: 90 },
    { name: 'Vercel & Netlify', level: 85 },
  ]

  const cardStyle = darkMode
    ? 'bg-[#0f1226] border border-[#3B4371]/40 text-white'
    : 'bg-white border border-[#F3904F]/20 text-black'

  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600'
  const barBg = darkMode ? 'bg-[#0b0e1b] border border-[#3B4371]/50' : 'bg-[#F3904F]/10 border border-[#F3904F]/20'

  const SkillBar = ({ skill, index }) => (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-semibold text-sm md:text-base">
          {skill.name}
        </span>
        <span className="text-[#F3904F] font-bold text-xs md:text-sm">
          {skill.level}%
        </span>
      </div>
      <div className={`w-full rounded-full h-2.5 ${barBg} overflow-hidden p-0.5`}>
        <motion.div
          className="bg-gradient-to-r from-[#3B4371] via-[#8c5667] to-[#F3904F] h-full rounded-full shadow-[0_0_12px_rgba(243,144,79,0.5)]"
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
          ? 'bg-[#0b0e1b]'
          : 'bg-gradient-to-r from-[#3B4371]/10 via-white to-[#F3904F]/10'}
      `}
    >
      {/* Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`font-extrabold text-3xl md:text-5xl mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <span className="block h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#3B4371] to-[#F3904F] mb-6" />
        <p className={`text-base md:text-xl max-w-2xl mx-auto ${textMuted}`}>
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">

        {/* Frontend */}
        <motion.div 
          className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-auto transition-all duration-300 ${
            darkMode ? 'bg-[#0f1226] border border-[#3B4371]/40 text-white hover:border-[#F3904F] hover:shadow-[0_0_25px_rgba(243,144,79,0.25)]' : 'bg-white border border-[#F3904F]/20 text-black hover:border-[#F3904F] hover:shadow-[0_0_25px_rgba(243,144,79,0.15)] shadow-md'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
        >
          <h1 className="flex items-center gap-2.5 mb-6">
            <Code2 className="text-[#F3904F] w-6 h-6" />
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
          className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-auto transition-all duration-300 ${
            darkMode ? 'bg-[#0f1226] border border-[#3B4371]/40 text-white hover:border-[#F3904F] hover:shadow-[0_0_25px_rgba(243,144,79,0.25)]' : 'bg-white border border-[#F3904F]/20 text-black hover:border-[#F3904F] hover:shadow-[0_0_25px_rgba(243,144,79,0.15)] shadow-md'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -6 }}
        >
          <h1 className="flex items-center gap-2.5 mb-6">
            <Database className="text-[#F3904F] w-6 h-6" />
            <span className="text-lg md:text-xl font-bold">Backend & DB</span>
          </h1>

          <ul className="space-y-4">
            {backend.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div 
          className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-auto transition-all duration-300 ${
            darkMode ? 'bg-[#0f1226] border border-[#3B4371]/40 text-white hover:border-[#F3904F] hover:shadow-[0_0_25px_rgba(243,144,79,0.25)]' : 'bg-white border border-[#F3904F]/20 text-black hover:border-[#F3904F] hover:shadow-[0_0_25px_rgba(243,144,79,0.15)] shadow-md'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -6 }}
        >
          <h1 className="flex items-center gap-2.5 mb-6">
            <Wrench className="text-[#F3904F] w-6 h-6" />
            <span className="text-lg md:text-xl font-bold">Tools & Practices</span>
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
