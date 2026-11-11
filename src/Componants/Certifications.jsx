import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen 
} from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'
import { playClickSound } from '../utils/soundEffects'

const Certifications = () => {
  const { darkMode } = useTheme()
  const [activeCardId, setActiveCardId] = useState(4) // Default active on MCA card
  const [hoveredCardId, setHoveredCardId] = useState(null)

  const credentials = [
    {
      id: 1,
      badgeNumber: "01",
      title: "Full Stack Web Development",
      issuer: "Dollop Infotech, Indore",
      subIssuer: "Commercial Role",
      date: "Oct 2024 – Present",
      description: "Hands-on commercial engineering in React, Next.js, Node.js, Express, MongoDB, and production deployment.",
      icon: Award,
      badge: "Commercial Role",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      badgeNumber: "02",
      title: "MERN Stack Specialization",
      issuer: "Placement Adda, Indore",
      subIssuer: "Certified Training",
      date: "Feb 2024 – Oct 2024",
      description: "Comprehensive training in full stack architecture, state management with Redux Toolkit, and database integration.",
      icon: ShieldCheck,
      badge: "Certification",
      skills: ["Redux", "REST APIs", "MERN"],
    },
    {
      id: 3,
      badgeNumber: "03",
      title: "Bachelor of Computer Applications (BCA)",
      issuer: "Govt. Holkar Science College, Indore",
      subIssuer: "Affiliated to DAVV Indore",
      date: "2022 – 2025",
      description: "Graduated with 7.40 CGPA. Core focus on Data Structures, Algorithms, OOP, and Relational Database Systems.",
      icon: GraduationCap,
      badge: "Degree",
      skills: ["7.40 CGPA", "DSA", "DBMS"],
    },
    {
      id: 4,
      badgeNumber: "04",
      title: "Master of Computer Applications (MCA)",
      issuer: "Mathuradevi Institute of Tech. & Mgmt. (MITM)",
      subIssuer: "Affiliated to RGPV, Bhopal • AICTE Approved",
      date: "2024 – 2026 • 1st Semester",
      description: "Pursuing MCA with focus on Advanced Software Engineering, Cloud Architectures, Distributed Systems, and Full-Stack Engineering.",
      icon: BookOpen,
      badge: "MCA (1st Sem)",
      skills: ["RGPV Affiliated", "AICTE", "Advanced SE"],
    }
  ]

  const handleCardClick = (id) => {
    playClickSound(true)
    setActiveCardId(id)
  }

  return (
    <section 
      id="certifications" 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-[#070a0e] border-[rgba(171,201,203,0.18)] text-white' : 'bg-[#eef5f6] border-[#abc9cb]/60 text-[#081014]'
      }`}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-[-8%] -translate-y-1/2 w-[580px] h-[580px] rounded-full pointer-events-none blur-[150px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-1/2 right-[-8%] -translate-y-1/2 w-[580px] h-[580px] rounded-full pointer-events-none blur-[150px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(244,91,11,0.45) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header (Exact match of Skills & Technologies style) */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Certifications & Education
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#abc9cb]">
            My academic foundation and verified technical training.
          </p>
        </div>

        {/* ── Top Connecting Circuit Timeline (exact match of reference image) ── */}
        <div className="relative mb-6 hidden lg:block">
          {/* Horizontal dashed circuit line connecting all 4 nodes */}
          <div 
            className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] -translate-y-1/2 border-t-2 border-dashed pointer-events-none"
            style={{ borderColor: darkMode ? 'rgba(171, 201, 203, 0.4)' : '#abc9cb' }}
          />

          <div className="grid grid-cols-4 gap-6 relative">
            {credentials.map((item) => {
              const isHighlighted = hoveredCardId === item.id || (hoveredCardId === null && activeCardId === item.id)
              return (
                <div key={item.id} className="flex flex-col items-center">
                  <div 
                    className={`w-4 h-4 rounded-full border-2 border-[#070a0e] z-10 transition-all duration-300 ${
                      isHighlighted ? 'bg-[#f45b0b] scale-110' : 'bg-cyan-400'
                    }`}
                    style={{ 
                      boxShadow: isHighlighted 
                        ? '0 0 16px #f45b0b, 0 0 28px #f45b0b' 
                        : '0 0 14px #38bdf8, 0 0 24px #38bdf8' 
                    }}
                  />
                  <div className={`w-[2px] h-6 border-l-2 border-dashed transition-colors duration-300 ${
                    isHighlighted ? 'border-[#f45b0b]/80' : 'border-cyan-400/60'
                  }`} />
                </div>
              )
            })}
          </div>
        </div>

        {/* ── 4-Card Responsive Grid with Prominent Big Watermark Numbers ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {credentials.map((item, idx) => {
            const Icon = item.icon
            const isHighlighted = hoveredCardId === item.id || (hoveredCardId === null && activeCardId === item.id)
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => handleCardClick(item.id)}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-pointer select-none ${
                  darkMode
                    ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl text-white'
                    : 'bg-white border-[#abc9cb] shadow-sm text-[#081014]'
                }`}
                style={{
                  border: isHighlighted
                    ? '2px solid #f45b0b'
                    : darkMode
                    ? '1.5px solid rgba(56, 189, 248, 0.45)'
                    : '1px solid rgba(171, 201, 203, 0.8)',
                  boxShadow: isHighlighted
                    ? '0 0 30px rgba(244, 91, 11, 0.48), inset 0 1px 1px 0 rgba(255, 255, 255, 0.28)'
                    : darkMode
                    ? '0 0 22px rgba(56, 189, 248, 0.16), inset 0 1px 1px 0 rgba(255, 255, 255, 0.22)'
                    : '0 10px 25px rgba(171, 201, 203, 0.25)'
                }}
              >
                {/* ── Prominent Large Watermark Number (Reduced thickness / clean weight) ── */}
                <div 
                  className={`absolute top-1 right-3 text-7xl sm:text-8xl font-normal font-mono leading-none pointer-events-none select-none transition-all duration-300 ${
                    isHighlighted 
                      ? 'text-[#f45b0b] opacity-35 scale-105' 
                      : 'text-cyan-400 opacity-20'
                  }`}
                  style={{
                    letterSpacing: '-0.05em'
                  }}
                >
                  {item.badgeNumber}
                </div>

                <div className="relative z-10">
                  {/* Top Header Row with Icon & Pill Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-2.5 rounded-xl border transition-colors duration-300 ${
                      isHighlighted 
                        ? 'bg-[#f45b0b]/20 text-[#f45b0b] border-[#f45b0b]/40' 
                        : 'bg-[#f45b0b]/10 text-[#f45b0b] border-[#f45b0b]/20'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border transition-all duration-300 ${
                      isHighlighted
                        ? 'border-[#f45b0b]/70 text-[#f45b0b] bg-[#f45b0b]/15 shadow-sm shadow-[#f45b0b]/20'
                        : darkMode
                        ? 'border-cyan-400/40 text-cyan-300 bg-cyan-500/10'
                        : 'border-[#abc9cb] text-slate-700 bg-slate-100'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-base sm:text-lg mb-2 text-white leading-snug pr-8">
                    {item.title}
                  </h3>

                  {/* Issuer & Sub-issuer */}
                  <p className={`text-xs sm:text-sm font-bold mb-0.5 transition-colors duration-300 ${
                    isHighlighted ? 'text-[#f45b0b]' : 'text-slate-300'
                  }`}>
                    {item.issuer}
                  </p>
                  {item.subIssuer && (
                    <p className="text-[11px] text-[#abc9cb] font-medium mb-1">
                      {item.subIssuer}
                    </p>
                  )}
                  <p className="text-[11px] font-mono text-slate-400 mb-4">
                    {item.date}
                  </p>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed mb-5 ${
                    darkMode ? 'text-slate-300/90' : 'text-slate-700'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tech Pills */}
                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 relative z-10">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium border transition-colors ${
                          isHighlighted
                            ? 'bg-[#f45b0b]/10 border-[#f45b0b]/30 text-white'
                            : darkMode
                            ? 'bg-white/[0.06] border-white/15 text-slate-200'
                            : 'bg-slate-100 border-slate-300 text-slate-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Certifications