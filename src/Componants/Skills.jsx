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
  SiNpm 
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const Skills = () => {
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
        { name: "TypeScript (ES6+)", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "HTML & CSS3", icon: FaHtml5, color: "#E34F26" },
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
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Thunder Client", icon: Zap, color: "#f45b0b", highlight: true },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Cursor", icon: Code2, color: "#ffffff" },
        { name: "netlify", icon: SiNetlify, color: "#00C7B7" },
        { name: "npm / yarn", icon: SiNpm, color: "#CB3837" },
      ]
    }
  ]

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-[#040608] text-white relative overflow-hidden"
    >
      {/* Background Soft Cyan / Orange Aura */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none blur-3xl opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(171, 201, 203, 0.16) 0%, rgba(244, 91, 11, 0.08) 40%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header matching image title */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Skills & Technologies
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#abc9cb]">
            Core technologies, libraries, and frameworks powering production web applications.
          </p>
        </div>

        {/* 2x2 Tech Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          {skillCategories.map((cat, idx) => {
            const HeaderIcon = cat.icon
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 relative overflow-hidden transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(171, 201, 203, 0.42)',
                  borderTop: '2px solid rgba(255, 255, 255, 0.78)',
                  borderLeft: '1.5px solid rgba(255, 255, 255, 0.55)',
                  background: 'linear-gradient(135deg, rgba(14, 25, 35, 0.9) 0%, rgba(7, 14, 21, 0.96) 100%)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), inset 0 1px 1.5px rgba(255, 255, 255, 0.45), 0 0 25px rgba(171, 201, 203, 0.12)'
                }}
              >
                {/* Specific Ambient Flare based on panel in reference image */}
                {cat.glowType === 'orange-top' && (
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 pointer-events-none blur-2xl opacity-60"
                    style={{
                      background: 'radial-gradient(circle at 85% 15%, rgba(244, 91, 11, 0.5) 0%, transparent 70%)'
                    }}
                  />
                )}
                {cat.glowType === 'orange-cyan' && (
                  <>
                    <div 
                      className="absolute top-0 right-0 w-48 h-48 pointer-events-none blur-2xl opacity-40"
                      style={{
                        background: 'radial-gradient(circle at 85% 15%, rgba(244, 91, 11, 0.4) 0%, transparent 70%)'
                      }}
                    />
                    <div 
                      className="absolute bottom-0 right-0 w-56 h-56 pointer-events-none blur-2xl opacity-45"
                      style={{
                        background: 'radial-gradient(circle at 85% 85%, rgba(171, 201, 203, 0.35) 0%, transparent 70%)'
                      }}
                    />
                  </>
                )}
                {cat.glowType === 'cyan-side' && (
                  <div 
                    className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 pointer-events-none blur-2xl opacity-50"
                    style={{
                      background: 'radial-gradient(circle at 85% 50%, rgba(171, 201, 203, 0.45) 0%, transparent 70%)'
                    }}
                  />
                )}
                {cat.glowType === 'orange-right' && (
                  <div 
                    className="absolute top-0 right-0 w-60 h-60 pointer-events-none blur-2xl opacity-45"
                    style={{
                      background: 'radial-gradient(circle at 85% 20%, rgba(244, 91, 11, 0.45) 0%, transparent 70%)'
                    }}
                  />
                )}

                {/* Card Title Header */}
                <div className="flex items-center gap-2.5 mb-6 relative z-10">
                  <HeaderIcon className="w-5 h-5 text-[#f45b0b] shrink-0" strokeWidth={2.5} />
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                    <span className="text-white">{cat.titlePrefix} </span>
                    <span className="text-[#f45b0b]">{cat.titleSuffix}</span>
                  </h3>
                </div>

                {/* Badges Grid / Wrap */}
                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    const isHighlighted = skill.highlight
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl transition-all select-none cursor-default"
                        style={{
                          background: isHighlighted 
                            ? 'linear-gradient(135deg, rgba(200, 235, 240, 0.45) 0%, rgba(150, 195, 205, 0.28) 100%)' 
                            : 'linear-gradient(135deg, rgba(190, 225, 230, 0.38) 0%, rgba(140, 185, 195, 0.22) 100%)',
                          border: isHighlighted
                            ? '1.8px solid #f45b0b'
                            : '1.2px solid rgba(225, 248, 255, 0.65)',
                          backdropFilter: 'blur(14px)',
                          WebkitBackdropFilter: 'blur(14px)',
                          boxShadow: isHighlighted
                            ? '0 0 14px rgba(244, 91, 11, 0.5), inset 0 1px 1.5px rgba(255, 255, 255, 0.65)'
                            : '0 4px 14px rgba(0, 0, 0, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.55)'
                        }}
                      >
                        {SkillIcon && (
                          <SkillIcon 
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" 
                            style={{ color: skill.color }} 
                          />
                        )}
                        <span className="text-[11.5px] sm:text-xs font-bold text-white tracking-tight drop-shadow-sm">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills
