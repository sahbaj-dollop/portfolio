import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Layers, 
  Smartphone, 
  Cpu, 
  Activity, 
  Radio
} from 'lucide-react'
import { 
  FaReact, 
  FaGitAlt, 
  FaHtml5 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostman, 
  SiNetlify, 
  SiVercel,
  SiNpm 
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { useTheme } from '../Context/ThemeContext'

const Skills = () => {
  const { darkMode } = useTheme()
  const skillCategories = [
    {
      id: "frontend",
      titlePrefix: "Frontend",
      titleSuffix: "Development",
      icon: Code2,
      glowType: "orange-cyan",
      skills: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript & ES6+", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "HTML5 & CSS3", icon: FaHtml5, color: "#E34F26" },
        { name: "Redux Toolkit", icon: SiRedux, color: "#9333EA" },
        { name: "Zustand", icon: Zap, color: "#F59E0B" },
        { name: "Responsive UI", icon: Smartphone, color: "#abc9cb" },
      ]
    },
    {
      id: "backend",
      titlePrefix: "Backend",
      titleSuffix: "Development",
      icon: Server,
      glowType: "orange-top",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "RESTful APIs", icon: Code2, color: "#abc9cb" },
        { name: "JWT Authentication", icon: ShieldCheck, color: "#F59E0B" },
        { name: "OAuth2", icon: Lock, color: "#abc9cb" },
        { name: "WebSockets", icon: Radio, color: "#38BDF8" },
        { name: "API Middleware", icon: Layers, color: "#abc9cb" },
        { name: "CORS & Security", icon: ShieldCheck, color: "#f45b0b", highlight: true },
      ]
    },
    {
      id: "database",
      titlePrefix: "Databases",
      titleSuffix: "& Storage",
      icon: Database,
      glowType: "cyan-side",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Mongoose ODM", icon: Database, color: "#880000" },
        { name: "MongoDB Atlas", icon: Database, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "Schema Design", icon: Layers, color: "#abc9cb" },
        { name: "Database Indexing", icon: Cpu, color: "#abc9cb" },
        { name: "Aggregations", icon: Activity, color: "#abc9cb" },
      ]
    },
    {
      id: "tools",
      titlePrefix: "Tools",
      titleSuffix: "& Deployment",
      icon: Wrench,
      glowType: "orange-right",
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Thunder Client", icon: Zap, color: "#f45b0b", highlight: true },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Cursor", icon: Code2, color: "#ffffff" },
        { name: "npm / Yarn", icon: SiNpm, color: "#CB3837" },
      ]
    }
  ]

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035 },
    },
  }

  const badgeItemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
  }

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="skills"
      className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode
          ? 'bg-[#040608] text-white'
          : 'bg-[#eef5f6] text-[#081014] border-t border-[#abc9cb]/50'
      }`}
    >
      {/* Background Soft Cyan / Orange Aura */}
      <div 
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none blur-3xl ${
          darkMode ? 'opacity-60' : 'opacity-30'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(171, 201, 203, 0.16) 0%, rgba(244, 91, 11, 0.08) 40%, transparent 70%)'
        }}
      />

      <div className="site-container relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 ${
            darkMode ? 'text-white' : 'text-[#081014]'
          }`}>
            Skills &amp; Technologies
          </h2>
          <p className={`text-xs sm:text-sm font-semibold ${
            darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'
          }`}>
            A battle-tested modern stack for building fast frontends, secure APIs, and scalable cloud apps.
          </p>
        </motion.div>

        {/* 2x2 Tech Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          {skillCategories.map((cat, idx) => {
            const HeaderIcon = cat.icon
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.38, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                onMouseMove={handleCardMouseMove}
                className="group/card rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 relative overflow-hidden transition-all duration-300"
                style={darkMode ? {
                  border: '1px solid rgba(171, 201, 203, 0.22)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.16)',
                  background: 'linear-gradient(135deg, rgba(14, 24, 34, 0.82) 0%, rgba(7, 13, 20, 0.92) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 14px 36px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                } : {
                  border: '1px solid rgba(171, 201, 203, 0.8)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(242, 248, 249, 0.92) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 14px 32px rgba(171, 201, 203, 0.24)'
                }}
              >
                {/* Subtle Ambient Corner Glow */}
                {cat.glowType === 'orange-top' && (
                  <div 
                    className={`absolute top-0 right-0 w-56 h-56 pointer-events-none blur-2xl ${darkMode ? 'opacity-25' : 'opacity-15'}`}
                    style={{
                      background: 'radial-gradient(circle at 85% 15%, rgba(244, 91, 11, 0.45) 0%, transparent 70%)'
                    }}
                  />
                )}
                {cat.glowType === 'orange-cyan' && (
                  <>
                    <div 
                      className={`absolute top-0 right-0 w-44 h-44 pointer-events-none blur-2xl ${darkMode ? 'opacity-20' : 'opacity-12'}`}
                      style={{
                        background: 'radial-gradient(circle at 85% 15%, rgba(244, 91, 11, 0.35) 0%, transparent 70%)'
                      }}
                    />
                    <div 
                      className={`absolute bottom-0 right-0 w-52 h-52 pointer-events-none blur-2xl ${darkMode ? 'opacity-20' : 'opacity-12'}`}
                      style={{
                        background: 'radial-gradient(circle at 85% 85%, rgba(171, 201, 203, 0.3) 0%, transparent 70%)'
                      }}
                    />
                  </>
                )}
                {cat.glowType === 'cyan-side' && (
                  <div 
                    className={`absolute top-1/2 right-0 -translate-y-1/2 w-56 h-56 pointer-events-none blur-2xl ${darkMode ? 'opacity-22' : 'opacity-12'}`}
                    style={{
                      background: 'radial-gradient(circle at 85% 50%, rgba(171, 201, 203, 0.35) 0%, transparent 70%)'
                    }}
                  />
                )}
                {cat.glowType === 'orange-right' && (
                  <div 
                    className={`absolute top-0 right-0 w-56 h-56 pointer-events-none blur-2xl ${darkMode ? 'opacity-22' : 'opacity-15'}`}
                    style={{
                      background: 'radial-gradient(circle at 85% 20%, rgba(244, 91, 11, 0.38) 0%, transparent 70%)'
                    }}
                  />
                )}

                {/* Interactive Cursor Spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  style={{
                    background: darkMode
                      ? 'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(244, 91, 11, 0.12), transparent 70%)'
                      : 'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(244, 91, 11, 0.08), transparent 70%)',
                  }}
                />

                {/* Card Title Header */}
                <div className="flex items-center gap-2.5 mb-6 relative z-10">
                  <HeaderIcon className="w-5 h-5 text-[#f45b0b] shrink-0 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-6" strokeWidth={2.5} />
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                    <span className={darkMode ? 'text-white' : 'text-[#081014]'}>{cat.titlePrefix} </span>
                    <span className="text-[#f45b0b]">{cat.titleSuffix}</span>
                  </h3>
                </div>

                {/* Badges Grid / Wrap */}
                <motion.div
                  variants={badgeContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  className="flex flex-wrap gap-2.5 relative z-10"
                >
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    const isHighlighted = skill.highlight
                    const resolvedIconColor = darkMode
                      ? skill.color
                      : skill.color === '#ffffff'
                      ? '#081014'
                      : skill.color === '#abc9cb'
                      ? '#2c6670'
                      : skill.color === '#61DAFB'
                      ? '#0284c7'
                      : skill.color === '#38BDF8'
                      ? '#0284c7'
                      : skill.color

                    return (
                      <motion.div
                        key={skill.name}
                        variants={badgeItemVariants}
                        whileHover={{ scale: 1.07, y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        className="group/pill inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl transition-all select-none cursor-default"
                        style={darkMode ? {
                          background: isHighlighted 
                            ? 'rgba(244, 91, 11, 0.12)' 
                            : 'rgba(171, 201, 203, 0.08)',
                          border: isHighlighted
                            ? '1.5px solid #f45b0b'
                            : '1px solid rgba(171, 201, 203, 0.24)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          boxShadow: isHighlighted
                            ? '0 0 12px rgba(244, 91, 11, 0.32)'
                            : '0 2px 8px rgba(0, 0, 0, 0.25)'
                        } : {
                          background: isHighlighted
                            ? 'rgba(244, 91, 11, 0.1)'
                            : 'rgba(237, 245, 246, 0.92)',
                          border: isHighlighted
                            ? '1.5px solid #f45b0b'
                            : '1px solid rgba(171, 201, 203, 0.85)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          boxShadow: isHighlighted
                            ? '0 0 10px rgba(244, 91, 11, 0.22)'
                            : '0 2px 6px rgba(171, 201, 203, 0.18)'
                        }}
                      >
                        {SkillIcon && (
                          <SkillIcon 
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-200 group-hover/pill:scale-110" 
                            style={{ color: resolvedIconColor }} 
                          />
                        )}
                        <span className={`text-[11.5px] sm:text-xs font-bold tracking-tight ${
                          darkMode ? 'text-white drop-shadow-sm' : 'text-[#081014]'
                        }`}>
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </motion.div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills
