import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  MapPin, 
  Sparkles,
  Flame
} from 'lucide-react'
import { playClickSound } from '../utils/soundEffects'

const Experience = () => {
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
      roleTag: "Full-time Commercial Role",
      badgeText: "Neon glowing drops",
      badgeGradient: "from-[#f45b0b] to-[#00d2ff]",
      points: [
        "Building responsive, accessible web applications utilizing React, Next.js, and modern Tailwind CSS.",
        "Engineered an interactive visual Blockly editor integrated with Monaco Editor for real-time syntax generation.",
        "Developed secure RESTful backend APIs in Node.js and Express with JWT authentication, role management, and input validation.",
        "Designed normalized MongoDB database schemas, compound indexes, and aggregation queries for client platforms.",
        "Collaborated on code reviews, Git branching strategies, and deployment pipelines using GitHub."
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
      roleTag: "Full Stack Trainee Program",
      badgeText: "Core Full-Stack Training",
      badgeGradient: "from-[#00d2ff] to-[#f45b0b]",
      points: [
        "Underwent comprehensive hands-on development training covering the full MERN stack ecosystem.",
        "Built full-stack CRUD applications, mastering relational and non-relational database design with MongoDB and MySQL.",
        "Implemented global client-side state management using Redux Toolkit and React Context API.",
        "Engineered, tested, and documented RESTful API endpoints using Postman and Thunder Client."
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
      className="py-16 md:py-24 bg-[#040608] text-white relative overflow-hidden"
    >
      {/* Background Soft Cyan / Orange Aura matching Skills section */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none blur-3xl opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(171, 201, 203, 0.16) 0%, rgba(244, 91, 11, 0.08) 40%, transparent 70%)'
        }}
      />

      <div className="site-container relative z-10">
        
        {/* Header exact match of Skills & Technologies style */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#abc9cb]">
            My professional journey and hands-on experience in full-stack web development.
          </p>
        </div>

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
              boxShadow: '0 0 16px #f45b0b, 0 0 28px #f45b0b',
              border: '2.5px solid #060b10'
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
              boxShadow: '0 0 16px #f45b0b, 0 0 28px #f45b0b',
              border: '2.5px solid #060b10'
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
            style={{ borderColor: 'rgba(171, 201, 203, 0.45)' }}
          />

          {/* Right Horizontal Dashed Line from Card 2 to Cyan Node */}
          <div 
            className="hidden md:block absolute right-0 sm:right-2 top-[47px] w-6 sm:w-8 h-[2px] border-t-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: 'rgba(56, 189, 248, 0.6)' }}
          />

          {/* Right Cyan Glowing Node */}
          <div 
            className="hidden md:block absolute right-[-7px] sm:right-[1px] top-[40px] w-4 h-4 rounded-full bg-[#38bdf8] z-20 pointer-events-none"
            style={{
              boxShadow: '0 0 16px #38bdf8, 0 0 28px #38bdf8',
              border: '2.5px solid #060b10'
            }}
          />

          {/* Right Vertical Dashed Line Down */}
          <div 
            className="hidden md:block absolute right-0 sm:right-2 top-[44px] bottom-[200px] w-[2px] border-r-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: 'rgba(56, 189, 248, 0.6)' }}
          />

          {/* Right Horizontal Dashed Line into Main Card */}
          <div 
            className="hidden md:block absolute right-0 sm:right-2 top-[253px] w-6 sm:w-8 h-[2px] border-t-2 border-dashed pointer-events-none z-10"
            style={{ borderColor: 'rgba(56, 189, 248, 0.6)' }}
          />


          {/* ── TOP SECTION: 2 Milestone Cards (Horizontal Split) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 relative z-10">
            
            {/* Card 1: Full Stack Developer (Dollop Infotech) */}
            <button
              onClick={() => handleTabClick(0)}
              className="text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group"
              style={{
                border: activeTab === 0 ? '1.8px solid #f45b0b' : '1px solid rgba(171, 201, 203, 0.25)',
                background: activeTab === 0 
                  ? 'linear-gradient(135deg, rgba(20, 30, 42, 0.95) 0%, rgba(10, 16, 23, 0.98) 100%)'
                  : 'linear-gradient(135deg, rgba(14, 22, 30, 0.75) 0%, rgba(8, 13, 19, 0.85) 100%)',
                boxShadow: activeTab === 0 
                  ? '0 0 25px rgba(244, 91, 11, 0.3), inset 0 0 15px rgba(244, 91, 11, 0.08)' 
                  : '0 8px 25px rgba(0, 0, 0, 0.35)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Top Row: 1 in Orange Circle + Date + Current badge */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#f45b0b] text-white font-mono font-black text-[11px] flex items-center justify-center shadow-[0_0_8px_#f45b0b]">
                    1
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-300">
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
                  activeTab === 0 ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  Full Stack Developer
                </h3>
                <p className="text-xs font-semibold text-[#f45b0b] flex items-center gap-1.5 mt-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#f45b0b]" />
                  <span>Dollop Infotech</span>
                </p>
              </div>
            </button>

            {/* Card 2: Full Stack Trainee (Placement Adda) */}
            <button
              onClick={() => handleTabClick(1)}
              className="text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group"
              style={{
                border: activeTab === 1 ? '1.8px solid #f45b0b' : '1px solid rgba(171, 201, 203, 0.25)',
                background: activeTab === 1 
                  ? 'linear-gradient(135deg, rgba(20, 30, 42, 0.95) 0%, rgba(10, 16, 23, 0.98) 100%)'
                  : 'linear-gradient(135deg, rgba(14, 22, 30, 0.75) 0%, rgba(8, 13, 19, 0.85) 100%)',
                boxShadow: activeTab === 1 
                  ? '0 0 25px rgba(244, 91, 11, 0.3), inset 0 0 15px rgba(244, 91, 11, 0.08)' 
                  : '0 8px 25px rgba(0, 0, 0, 0.35)',
                backdropFilter: 'blur(20px)'
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
                  <span className="text-xs font-mono font-medium text-slate-300">
                    Feb 2024 – Oct 2024
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#abc9cb]/70">
                  Completed
                </span>
              </div>

              {/* Title & Company */}
              <div>
                <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                  activeTab === 1 ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  Full Stack Trainee
                </h3>
                <p className="text-xs font-semibold text-[#f45b0b] flex items-center gap-1.5 mt-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#f45b0b]" />
                  <span>Placement Adda</span>
                </p>
              </div>
            </button>

          </div>


          


          {/* ── Main Bento Experience Card ── */}
          <div 
            className="min-h-[550px] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 md:p-9 relative overflow-hidden z-10"
            style={{
              border: '1.5px solid rgba(171, 201, 203, 0.35)',
              borderTop: '2px solid rgba(255, 255, 255, 0.85)',
              borderLeft: '1.5px solid rgba(255, 255, 255, 0.65)',
              background: 'linear-gradient(180deg, rgba(12, 19, 27, 0.96) 0%, rgba(7, 12, 18, 0.98) 100%)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              boxShadow: '0 25px 65px rgba(0, 0, 0, 0.85), inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 0 35px rgba(171, 201, 203, 0.12)'
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
                {/* ── Luminous Frosted Liquid Icy Glass Header Bar (exact like image) ── */}
                <div 
                  className="rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(104, 170, 184, 0.78) 0%, rgba(41, 118, 139, 0.9) 45%, rgba(61, 144, 150, 0.82) 100%)',
                    border: '1.5px solid rgb(255, 255, 255)',
                    borderTop: '2px solid rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(25px)',
                    WebkitBackdropFilter: 'blur(25px)',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35), inset 0 2px 4px rgba(255, 255, 255, 0.6), 0 0 30px rgba(171, 201, 203, 0.35)'
                  }}
                >
                  {/* Left Role + Company + Location */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="w-8 h-8 rounded-lg bg-[#f45b0b] text-white shadow-md shadow-[#f45b0b]/40 flex items-center justify-center shrink-0">
                        <Briefcase className="w-4 h-4 text-white" />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {current.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-bold mt-1 pl-1">
                      <span className="text-[#f45b0b] font-black">
                        @ {current.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-slate-800 font-bold">
                        <MapPin className="w-3.5 h-3.5 text-[#f45b0b]" />
                        <span>📍 {current.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Badges */}
                  <div className="flex flex-col sm:items-end gap-2 self-start md:self-auto">
                    <div className="flex items-center gap-2">
                      

                      {/* Period pill */}
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0c1822]/90 text-white border border-[rgba(171,201,203,0.5)] shadow-sm">
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

                {/* ── Bullet Points with Orange > (exact copy of image) ── */}
                <div className="space-y-3 pt-2">
                  {current.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="text-xs sm:text-[13.5px] leading-relaxed flex items-start gap-3 text-slate-200 font-medium"
                    >
                      <span className="text-[#f45b0b] font-black text-base leading-none select-none shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* ── CORE TECHNOLOGIES UTILIZED ── */}
                <div className="pt-4 border-t border-[rgba(171,201,203,0.18)]">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#abc9cb] mb-3">
                    CORE TECHNOLOGIES UTILIZED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all select-none cursor-default"
                        style={{
                          background: 'linear-gradient(135deg, rgba(16, 25, 34, 0.95) 0%, rgba(9, 15, 22, 0.95) 100%)',
                          border: '1.2px solid rgba(171, 201, 203, 0.35)',
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.35)',
                          color: '#ffffff'
                        }}
                      >
                        {t}
                      </span>
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
