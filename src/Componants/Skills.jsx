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
    ? 'bg-neutral-900 border border-neutral-800 text-white'
    : 'bg-white border border-orange-100 text-black'

  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600'
  const barBg = darkMode ? 'bg-neutral-950 border border-neutral-800' : 'bg-orange-100/80 border border-orange-200'

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
        <span className="text-orange-400 font-bold text-xs md:text-sm">
          {skill.level}%
        </span>
      </div>
      <div className={`w-full rounded-full h-2.5 ${barBg} overflow-hidden p-0.5`}>
        <motion.div
          className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 h-full rounded-full shadow-[0_0_12px_rgba(249,115,22,0.6)]"
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
          ? 'bg-black'
          : 'bg-gradient-to-r from-orange-50/50 via-white to-amber-50/50'}
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
          <h1 className="flex items-center gap-2.5 mb-6">
            <Code2 className="text-orange-500 w-6 h-6" />
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
          <h1 className="flex items-center gap-2.5 mb-6">
            <Database className="text-orange-500 w-6 h-6" />
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
          <h1 className="flex items-center gap-2.5 mb-6">
            <Wrench className="text-orange-500 w-6 h-6" />
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
