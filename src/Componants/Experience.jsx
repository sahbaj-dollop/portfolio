import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  MapPin, 
  Sparkles
} from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'
import { playClickSound } from '../utils/soundEffects'

const Experience = () => {
  const { darkMode } = useTheme()
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      id: 1,
      tabNumber: "1",
      period: "Oct 2024 – Present",
      role: "Full Stack Developer",
      company: "Dollop Infotech",
      location: "Indore, M.P.",
      status: "+ Current",
      isCurrent: true,
      roleTag: "Full-Time Commercial Role",
      badgeText: "Production Full-Stack",
      badgeGradient: "from-[#f45b0b] to-[#00d2ff]",
      points: [
        "Architecting responsive, SEO-friendly web applications using React, Next.js, TypeScript, and Tailwind CSS.",
        "Engineered an interactive visual Blockly IDE paired with Monaco Editor and Web Workers for real-time JavaScript generation.",
        "Built secure RESTful APIs in Node.js and Express with JWT authentication, role-based access control, and strict payload validation.",
        "Designed normalized MongoDB schemas, compound indexes, and aggregation pipelines for multi-user client platforms.",
        "Collaborated on peer code reviews, structured Git workflows, and continuous cloud deployments via GitHub."
      ],
      tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"]
    },
    {
      id: 2,
      tabNumber: "2",
      period: "Feb 2024 – Oct 2024",
      role: "Full Stack Trainee",
      company: "Placement Adda",
      location: "Indore, M.P.",
      status: "Completed",
      isCurrent: false,
      roleTag: "Intensive MERN Engineering",
      badgeText: "Core Full-Stack Training",
      badgeGradient: "from-[#00d2ff] to-[#f45b0b]",
      points: [
        "Completed intensive, hands-on engineering across the complete MERN stack and modern web architecture.",
        "Built end-to-end CRUD platforms while mastering relational and NoSQL database design with MongoDB and MySQL.",
        "Implemented scalable client-side state management using Redux Toolkit and React Context API.",
        "Designed, tested, and documented RESTful API workflows with Postman and Thunder Client."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "Redux Toolkit", "Postman", "Git"]
    }
  ]

  const current = experiences[activeTab]

  const handleTabClick = (idx) => {
    playClickSound(true)
    setActiveTab(idx)
  }

  return (
    <section
      id="experience"
      className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode
          ? 'bg-[#040608] text-white'
          : 'bg-[#eef5f6] text-[#081014] border-t border-[#abc9cb]/50'
      }`}
    >
      {/* Background Soft Cyan / Orange Aura matching Skills section */}
      <div 
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none blur-3xl ${
          darkMode ? 'opacity-60' : 'opacity-25'
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
            Work Experience
          </h2>
          <p className={`text-xs sm:text-sm font-semibold ${
            darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'
          }`}>
            Proven track record shipping commercial web platforms, interactive developer tools, and full-stack solutions.
          </p>
        </motion.div>

        {/* ── Main Connected Panel Container ── */}
        <div className="relative px-0 sm:px-4 md:px-8">
          
          {/* ── Connected Circuit Overlay (Left Vertical + Glowing Nodes) ── */}
          {/* Left Vertical Dashed Line */}
          <div 
            className="hidden md:block absolute left-0 sm:left-2 top-[44px] bottom-[200px] w-[2px] border-l-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: 'rgba(244, 91, 11, 0.6)' }}
          />

          {/* Left Top Orange Glowing Node */}
          <div 
            className="hidden md:block absolute left-[-7px] sm:left-[1px] top-[40px] w-4 h-4 rounded-full bg-[#f45b0b] z-20 pointer-events-none"
            style={{
              boxShadow: '0 0 14px rgba(244, 91, 11, 0.65)',
              border: darkMode ? '2.5px solid #060b10' : '2.5px solid #eef5f6'
            }}
          />

          {/* Left Horizontal Dashed Line to Card 1 */}
          <div 
            className="hidden md:block absolute left-0 sm:left-2 top-[47px] w-6 sm:w-8 h-[2px] border-t-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: 'rgba(244, 91, 11, 0.6)' }}
          />

          {/* Left Bottom Orange Glowing Node */}
          <div 
            className="hidden md:block absolute left-[-7px] sm:left-[1px] top-[246px] w-4 h-4 rounded-full bg-[#f45b0b] z-20 pointer-events-none"
            style={{
              boxShadow: '0 0 14px rgba(244, 91, 11, 0.65)',
              border: darkMode ? '2.5px solid #060b10' : '2.5px solid #eef5f6'
            }}
          />

          {/* Left Horizontal Dashed Line into Main Card */}
          <div 
            className="hidden md:block absolute left-0 sm:left-2 top-[253px] w-6 sm:w-8 h-[2px] border-t-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: 'rgba(244, 91, 11, 0.6)' }}
          />

          {/* Center Connection between Card 1 and Card 2 */}
          <div 
            className="hidden sm:block absolute top-[52px] left-[48%] -translate-x-1/2 w-[4%] border-t-2 border-dashed pointer-events-none z-0"
            style={{ borderColor: darkMode ? 'rgba(171, 201, 203, 0.45)' : 'rgba(110, 148, 150, 0.55)' }}
          />

          {/* Right Horizontal Dashed Line from Card 2 to Cyan Node */}
          <div 
            className="hidden md:block absolute right-0 sm:right-2 top-[47px] w-6 sm:w-8 h-[2px] border-t-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: darkMode ? 'rgba(56, 189, 248, 0.6)' : 'rgba(44, 102, 112, 0.55)' }}
          />

          {/* Right Cyan Glowing Node */}
          <div 
            className="hidden md:block absolute right-[-7px] sm:right-[1px] top-[40px] w-4 h-4 rounded-full bg-[#38bdf8] z-20 pointer-events-none"
            style={{
              boxShadow: '0 0 14px rgba(56, 189, 248, 0.65)',
              border: darkMode ? '2.5px solid #060b10' : '2.5px solid #eef5f6'
            }}
          />

          {/* Right Vertical Dashed Line Down */}
          <div 
            className="hidden md:block absolute right-0 sm:right-2 top-[44px] bottom-[200px] w-[2px] border-r-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: darkMode ? 'rgba(56, 189, 248, 0.6)' : 'rgba(44, 102, 112, 0.55)' }}
          />

          {/* Right Horizontal Dashed Line into Main Card */}
          <div 
            className="hidden md:block absolute right-0 sm:right-2 top-[253px] w-6 sm:w-8 h-[2px] border-t-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: darkMode ? 'rgba(56, 189, 248, 0.6)' : 'rgba(44, 102, 112, 0.55)' }}
          />


          {/* ── TOP SECTION: 2 Milestone Cards (Horizontal Split) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 relative z-10">
            
            {/* Card 1: Full Stack Developer (Dollop Infotech) */}
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleTabClick(0)}
              className="text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group"
              style={darkMode ? {
                border: activeTab === 0 ? '1.8px solid #f45b0b' : '1px solid rgba(171, 201, 203, 0.25)',
                background: activeTab === 0 
                  ? 'linear-gradient(135deg, rgba(20, 30, 42, 0.92) 0%, rgba(10, 16, 23, 0.96) 100%)'
                  : 'linear-gradient(135deg, rgba(14, 22, 30, 0.72) 0%, rgba(8, 13, 19, 0.82) 100%)',
                boxShadow: activeTab === 0 
                  ? '0 0 22px rgba(244, 91, 11, 0.25), inset 0 0 12px rgba(244, 91, 11, 0.06)' 
                  : '0 8px 20px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(12px)'
              } : {
                border: activeTab === 0 ? '1.8px solid #f45b0b' : '1px solid rgba(171, 201, 203, 0.8)',
                background: activeTab === 0 ? '#ffffff' : 'rgba(255, 255, 255, 0.78)',
                boxShadow: activeTab === 0 
                  ? '0 10px 26px rgba(244, 91, 11, 0.14)' 
                  : '0 6px 18px rgba(171, 201, 203, 0.2)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {/* Top Row: 1 in Orange Circle + Date + Current badge */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#f45b0b] text-white font-mono font-black text-[11px] flex items-center justify-center shadow-[0_0_8px_#f45b0b]">
                    1
                  </span>
                  <span className={`text-xs font-mono font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Oct 2024 – Present
                  </span>
                </div>

                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f45b0b]/15 text-[#f45b0b] border border-[#f45b0b]/50">
                  + Current
                </span>
              </div>

              {/* Title & Company */}
              <div>
                <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                  activeTab === 0
                    ? (darkMode ? 'text-white' : 'text-[#081014]')
                    : (darkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-[#081014]')
                }`}>
                  Full Stack Developer
                </h3>
                <p className="text-xs font-semibold text-[#f45b0b] flex items-center gap-1.5 mt-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#f45b0b]" />
                  <span>Dollop Infotech</span>
                </p>
              </div>
              {activeTab === 0 && (
                <motion.div
                  layoutId="expTabHighlight"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  className="absolute bottom-0 inset-x-6 h-[2.5px] rounded-full bg-gradient-to-r from-[#f45b0b] via-[#ff8c42] to-[#f45b0b]"
                />
              )}
            </motion.button>

            {/* Card 2: Full Stack Trainee (Placement Adda) */}
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleTabClick(1)}
              className="text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group"
              style={darkMode ? {
                border: activeTab === 1 ? '1.8px solid #f45b0b' : '1px solid rgba(171, 201, 203, 0.25)',
                background: activeTab === 1 
                  ? 'linear-gradient(135deg, rgba(20, 30, 42, 0.92) 0%, rgba(10, 16, 23, 0.96) 100%)'
                  : 'linear-gradient(135deg, rgba(14, 22, 30, 0.72) 0%, rgba(8, 13, 19, 0.82) 100%)',
                boxShadow: activeTab === 1 
                  ? '0 0 22px rgba(244, 91, 11, 0.25), inset 0 0 12px rgba(244, 91, 11, 0.06)' 
                  : '0 8px 20px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(12px)'
              } : {
                border: activeTab === 1 ? '1.8px solid #f45b0b' : '1px solid rgba(171, 201, 203, 0.8)',
                background: activeTab === 1 ? '#ffffff' : 'rgba(255, 255, 255, 0.78)',
                boxShadow: activeTab === 1 
                  ? '0 10px 26px rgba(244, 91, 11, 0.14)' 
                  : '0 6px 18px rgba(171, 201, 203, 0.2)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {/* Top Row: 2 in Circle + Date */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full font-mono font-black text-[11px] flex items-center justify-center ${
                    activeTab === 1 
                      ? 'bg-[#f45b0b] text-white shadow-[0_0_8px_#f45b0b]' 
                      : 'bg-[#38bdf8] text-white shadow-[0_0_8px_#38bdf8]'
                  }`}>
                    2
                  </span>
                  <span className={`text-xs font-mono font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Feb 2024 – Oct 2024
                  </span>
                </div>

                <span className={`text-[10px] font-mono ${darkMode ? 'text-[#abc9cb]/70' : 'text-slate-500'}`}>
                  Completed
                </span>
              </div>

              {/* Title & Company */}
              <div>
                <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                  activeTab === 1
                    ? (darkMode ? 'text-white' : 'text-[#081014]')
                    : (darkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-[#081014]')
                }`}>
                  Full Stack Trainee
                </h3>
                <p className="text-xs font-semibold text-[#f45b0b] flex items-center gap-1.5 mt-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#f45b0b]" />
                  <span>Placement Adda</span>
                </p>
              </div>
              {activeTab === 1 && (
                <motion.div
                  layoutId="expTabHighlight"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  className="absolute bottom-0 inset-x-6 h-[2.5px] rounded-full bg-gradient-to-r from-[#f45b0b] via-[#ff8c42] to-[#f45b0b]"
                />
              )}
            </motion.button>

          </div>

          {/* ── Main Bento Experience Card ── */}
          <div 
            className="min-h-[550px] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 md:p-9 relative overflow-hidden z-10"
            style={darkMode ? {
              border: '1px solid rgba(171, 201, 203, 0.22)',
              borderTop: '1px solid rgba(255, 255, 255, 0.16)',
              background: 'linear-gradient(180deg, rgba(12, 19, 27, 0.9) 0%, rgba(7, 12, 18, 0.96) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 18px 45px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
            } : {
              border: '1px solid rgba(171, 201, 203, 0.8)',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(243, 249, 250, 0.94) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 16px 40px rgba(171, 201, 203, 0.25)'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* ── Subtle Glass Header Bar ── */}
                <div 
                  className="rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4"
                  style={darkMode ? {
                    background: 'linear-gradient(135deg, rgba(22, 48, 60, 0.65) 0%, rgba(12, 26, 36, 0.85) 100%)',
                    border: '1px solid rgba(171, 201, 203, 0.28)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                  } : {
                    background: 'linear-gradient(135deg, rgba(226, 241, 243, 0.95) 0%, rgba(240, 248, 249, 0.95) 100%)',
                    border: '1px solid rgba(171, 201, 203, 0.85)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 6px 18px rgba(171, 201, 203, 0.2)'
                  }}
                >
                  {/* Left Role + Company + Location */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="w-8 h-8 rounded-lg bg-[#f45b0b] text-white shadow-md shadow-[#f45b0b]/40 flex items-center justify-center shrink-0">
                        <Briefcase className="w-4 h-4 text-white" />
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${
                        darkMode ? 'text-white' : 'text-[#081014]'
                      }`}>
                        {current.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-bold mt-1 pl-1">
                      <span className="text-[#f45b0b] font-black">
                        @ {current.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className={`flex items-center gap-1 font-semibold ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <MapPin className="w-3.5 h-3.5 text-[#f45b0b]" />
                        <span>{current.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Badges */}
                  <div className="flex flex-col sm:items-end gap-2 self-start md:self-auto">
                    <div className="flex items-center gap-2">
                      {/* Period pill */}
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-sm ${
                        darkMode
                          ? 'bg-[#0c1822]/90 text-white border-[rgba(171,201,203,0.5)]'
                          : 'bg-white text-[#081014] border-[#abc9cb]'
                      }`}>
                        {current.period}
                      </span>
                    </div>

                    {/* Role indicator */}
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#f45b0b] pr-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#f45b0b]" />
                      <span>{current.roleTag}</span>
                    </span>
                  </div>
                </div>

                {/* ── Bullet Points with Orange > ── */}
                <div className="space-y-3 pt-2">
                  {current.points.map((point, pIdx) => (
                    <motion.div
                      key={`${current.id}-${pIdx}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: pIdx * 0.05 }}
                      className={`text-xs sm:text-[13.5px] leading-relaxed flex items-start gap-3 font-medium ${
                        darkMode ? 'text-slate-200' : 'text-slate-700'
                      }`}
                    >
                      <span className="text-[#f45b0b] font-black text-base leading-none select-none shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>

                {/* ── CORE TECHNOLOGIES UTILIZED ── */}
                <div className={`pt-4 border-t ${
                  darkMode ? 'border-[rgba(171,201,203,0.18)]' : 'border-[#abc9cb]/60'
                }`}>
                  <h4 className={`text-[11px] font-black uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'
                  }`}>
                    CORE TECHNOLOGIES UTILIZED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.tech.map((t, tIdx) => (
                      <motion.span
                        key={`${current.id}-${tIdx}`}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: tIdx * 0.03 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all select-none cursor-default"
                        style={darkMode ? {
                          background: 'linear-gradient(135deg, rgba(16, 25, 34, 0.95) 0%, rgba(9, 15, 22, 0.95) 100%)',
                          border: '1.2px solid rgba(171, 201, 203, 0.35)',
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.35)',
                          color: '#ffffff'
                        } : {
                          background: '#edf5f6',
                          border: '1px solid #abc9cb',
                          boxShadow: '0 2px 6px rgba(171, 201, 203, 0.16)',
                          color: '#081014'
                        }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience
