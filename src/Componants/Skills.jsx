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
    ? 'bg-[#0f1226] border border-[#191970]/40 text-white'
    : 'bg-[#F5F5DC] border border-[#2b3154]/20 text-[#191970]'

  const textMuted = darkMode ? 'text-gray-400' : 'text-[#191970]'
  const barBg = darkMode ? 'bg-[#0b0e1b] border border-[#191970]/50' : 'bg-[#2b3154]/10 border border-[#2b3154]/20'

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
        <span className="text-[#2b3154] font-bold text-xs md:text-sm">
          {skill.level}%
        </span>
      </div>
      <div className={`w-full rounded-full h-2.5 ${barBg} overflow-hidden p-0.5`}>
        <motion.div
          className="bg-gradient-to-r from-[#191970] via-[#4f5994] to-[#2b3154] h-full rounded-full shadow-[0_0_12px_rgba(184, 115, 51,0.5)]"
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
          : 'bg-gradient-to-r from-[#191970]/10 via-[#F5F5DC] to-[#2b3154]/10'}
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
        <h2 className={`font-extrabold text-3xl md:text-5xl mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-[#191970]'}`}>
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <span className="block h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#191970] to-[#2b3154] mb-6" />
        <p className={`text-base md:text-xl max-w-2xl mx-auto ${textMuted}`}>
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">

        {/* Frontend */}
        <motion.div 
          className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-auto transition-all duration-300 ${
            darkMode ? 'bg-[#0f1226] border border-[#191970]/40 text-white hover:border-[#2b3154] hover:shadow-[0_0_25px_rgba(184, 115, 51,0.25)]' : 'bg-[#F5F5DC] border border-[#2b3154]/20 text-[#191970] hover:border-[#2b3154] hover:shadow-[0_0_25px_rgba(184, 115, 51,0.15)] shadow-md'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
        >
          <h1 className="flex items-center gap-2.5 mb-6">
            <Code2 className="text-[#2b3154] w-6 h-6" />
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
            darkMode ? 'bg-[#0f1226] border border-[#191970]/40 text-white hover:border-[#2b3154] hover:shadow-[0_0_25px_rgba(184, 115, 51,0.25)]' : 'bg-[#F5F5DC] border border-[#2b3154]/20 text-[#191970] hover:border-[#2b3154] hover:shadow-[0_0_25px_rgba(184, 115, 51,0.15)] shadow-md'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -6 }}
        >
          <h1 className="flex items-center gap-2.5 mb-6">
            <Database className="text-[#2b3154] w-6 h-6" />
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
            darkMode ? 'bg-[#0f1226] border border-[#191970]/40 text-white hover:border-[#2b3154] hover:shadow-[0_0_25px_rgba(184, 115, 51,0.25)]' : 'bg-[#F5F5DC] border border-[#2b3154]/20 text-[#191970] hover:border-[#2b3154] hover:shadow-[0_0_25px_rgba(184, 115, 51,0.15)] shadow-md'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -6 }}
        >
          <h1 className="flex items-center gap-2.5 mb-6">
            <Wrench className="text-[#2b3154] w-6 h-6" />
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
