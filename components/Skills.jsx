import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { FaTools } from "react-icons/fa"
import { GrStorage } from "react-icons/gr"
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
    { name: 'Antigravity, Cursor, Claude', level: 100 },
    { name: 'Git & GitHub', level: 70 },
    { name: 'Postman', level: 95 },
    { name: 'Thunder Client', level: 75 },
    { name: 'Vercel & Netlify', level: 80 },
  ]

  const glassCard = darkMode ? 'glass-3d-dark border-slate-800/80 text-white' : 'glass-3d border-white/20 text-black'
  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600'
  const barBg = darkMode ? 'bg-slate-950/40 border border-slate-900/30' : 'bg-gray-150 border border-gray-200/50'

  const SkillBar = ({ skill, index, barColor }) => (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="list-none"
    >
      <div className="flex justify-between mb-1.5">
        <span className="font-bold text-sm md:text-base tracking-wide">
          {skill.name}
        </span>
        <span className={`${textMuted} text-xs md:text-sm font-bold`}>
          {skill.level}%
        </span>
      </div>
      <div className={`w-full rounded-full h-2.5 ${barBg} overflow-hidden relative`}>
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
          ? 'bg-gray-950 text-white'
          : 'bg-gradient-to-r from-[#c9d6ff30] to-[#e2e2e250] text-black'}
      `}
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 right-10 w-[320px] h-[320px] rounded-full bg-cyan-500/5 dark:bg-cyan-600/5 blob-float" />
      <div className="absolute bottom-1/4 left-10 w-[320px] h-[320px] rounded-full bg-purple-500/5 dark:bg-purple-600/5 blob-float-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h1>
          <span className="block h-1 w-24 mx-auto rounded-full bg-blue-600 mb-6"></span>
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
                <span className="flex items-center text-blue-500 font-bold">
                  <MdArrowBackIosNew size={18} />
                  <MdArrowForwardIos size={18} />
                </span>
                <span className="text-xl md:text-2xl font-extrabold tracking-tight">Frontend</span>
              </h2>

              <ul className="space-y-5 p-0">
                {frontend.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    index={index}
                    barColor="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  />
                ))}
              </ul>
            </div>
          </TiltCard3D>

          {/* Backend */}
          <TiltCard3D className={`p-8 rounded-3xl shadow-xl border h-full flex flex-col justify-between ${glassCard}`}>
            <div>
              <h2 className="flex items-center gap-2.5 mb-8">
                <GrStorage className="text-green-500" size={22} />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight">Backend</span>
              </h2>

              <ul className="space-y-5 p-0">
                {backend.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    index={index}
                    barColor="bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                  />
                ))}
              </ul>
            </div>
          </TiltCard3D>

          {/* Tools */}
          <TiltCard3D className={`p-8 rounded-3xl shadow-xl border h-full flex flex-col justify-between ${glassCard}`}>
            <div>
              <h2 className="flex items-center gap-2.5 mb-8">
                <FaTools className="text-purple-500" size={22} />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight">Tools & Others</span>
              </h2>

              <ul className="space-y-5 p-0">
                {tools.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    index={index}
                    barColor="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]"
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
