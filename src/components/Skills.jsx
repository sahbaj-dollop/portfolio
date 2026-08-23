import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Code2, Database, Wrench } from "lucide-react"
import { useTheme } from '../Context/ThemeContext'

// ── Tilt Card 3D Component ─────────────────────────────────────────
const TiltCard3D = ({ children, className }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])

  const springConfig = { damping: 25, stiffness: 150 }
  const rX = useSpring(rotateX, springConfig)
  const rY = useSpring(rotateY, springConfig)

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left - width / 2
    const mouseY = event.clientY - rect.top - height / 2
    x.set(mouseX)
    y.set(mouseY)

    // Set custom CSS variables for shine
    const pctX = ((event.clientX - rect.left) / width) * 100
    const pctY = ((event.clientY - rect.top) / height) * 100
    event.currentTarget.style.setProperty('--mouse-x', `${pctX}%`)
    event.currentTarget.style.setProperty('--mouse-y', `${pctY}%`)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="card-3d-wrapper w-full max-w-md mx-auto">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rX,
          rotateY: rY,
          transformStyle: 'preserve-3d',
        }}
        className={`card-3d relative overflow-hidden ${className}`}
      >
        <div className="tilt-shine" />
        <div style={{ transform: 'translateZ(10px)' }}>{children}</div>
      </motion.div>
    </div>
  )
}

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

  const glassCard = darkMode ? 'glass-3d-dark border-[#3B4371]/60 text-white' : 'glass-3d border-[#F3904F]/20 text-black'
  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600'
  const barBg = darkMode ? 'bg-[#0f1226] border border-[#3B4371]/40' : 'bg-[#F3904F]/10 border border-[#F3904F]/20'

  const SkillBar = ({ skill, index, barColor }) => (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="list-none"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-bold text-sm md:text-base tracking-wide">
          {skill.name}
        </span>
        <span className="text-[#F3904F] text-xs md:text-sm font-bold">
          {skill.level}%
        </span>
      </div>
      <div className={`w-full rounded-full h-2.5 ${barBg} overflow-hidden relative p-0.5`}>
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
        />
      </div>
    </motion.li>
  )

  return (
    <div
      id="skills"
      className={`py-20 px-4 md:px-8 lg:px-16 transition-colors duration-300 section-blob-bg relative overflow-hidden
        ${darkMode
          ? 'bg-[#0b0e1b] text-white'
          : 'bg-gradient-to-r from-[#3B4371]/10 via-white to-[#F3904F]/10 text-black'}
      `}
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 right-10 w-[320px] h-[320px] rounded-full bg-[#F3904F]/10 dark:bg-[#3B4371]/20 blob-float" />
      <div className="absolute bottom-1/4 left-10 w-[320px] h-[320px] rounded-full bg-[#3B4371]/15 dark:bg-[#F3904F]/10 blob-float-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
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
          <span className="block h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#3B4371] to-[#F3904F] mb-6"></span>
          <p className={`text-base md:text-xl max-w-2xl mx-auto ${textMuted}`}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">

          {/* Frontend */}
          <TiltCard3D className={`p-8 rounded-3xl shadow-xl border h-full flex flex-col justify-between ${glassCard}`}>
            <div>
              <h2 className="flex items-center gap-2.5 mb-8">
                <Code2 className="text-[#F3904F] w-6 h-6" />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight">Frontend</span>
              </h2>

              <ul className="space-y-5 p-0">
                {frontend.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    index={index}
                    barColor="bg-gradient-to-r from-[#3B4371] via-[#8c5667] to-[#F3904F] shadow-[0_0_8px_rgba(243,144,79,0.5)]"
                  />
                ))}
              </ul>
            </div>
          </TiltCard3D>

          {/* Backend */}
          <TiltCard3D className={`p-8 rounded-3xl shadow-xl border h-full flex flex-col justify-between ${glassCard}`}>
            <div>
              <h2 className="flex items-center gap-2.5 mb-8">
                <Database className="text-[#F3904F] w-6 h-6" />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight">Backend</span>
              </h2>

              <ul className="space-y-5 p-0">
                {backend.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    index={index}
                    barColor="bg-gradient-to-r from-[#F3904F] via-[#8c5667] to-[#3B4371] shadow-[0_0_8px_rgba(243,144,79,0.5)]"
                  />
                ))}
              </ul>
            </div>
          </TiltCard3D>

          {/* Tools */}
          <TiltCard3D className={`p-8 rounded-3xl shadow-xl border h-full flex flex-col justify-between ${glassCard}`}>
            <div>
              <h2 className="flex items-center gap-2.5 mb-8">
                <Wrench className="text-[#F3904F] w-6 h-6" />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight">Tools & Others</span>
              </h2>

              <ul className="space-y-5 p-0">
                {tools.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    index={index}
                    barColor="bg-gradient-to-r from-[#3B4371] to-[#F3904F] shadow-[0_0_8px_rgba(243,144,79,0.5)]"
                  />
                ))}
              </ul>
            </div>
          </TiltCard3D>

        </div>
      </div>
    </div>
  )
}

export default Skills
