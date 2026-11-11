import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Check, X, Edit3 } from 'lucide-react'

const About = () => {
  const [showResumeModal, setShowResumeModal] = useState(false)
  const resume = "/sahbajkhan.pdf"

  const highlights = [
    "2+ years of professional full-stack web development experience",
    "Hands-on with React 19, Next.js (App Router), and TypeScript",
    "Backend development with Node.js, Express, & MongoDB",
  ]

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-[#040608] text-white relative overflow-hidden flex items-center justify-center min-h-[92vh]"
    >
      {/* Outer Cyan / Powder Blue Ambient Radiant Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[650px] pointer-events-none blur-3xl opacity-75"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(171, 201, 203, 0.28) 0%, rgba(6, 182, 212, 0.15) 35%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Section Header (Exact match of Skills & Technologies style) */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            About Me
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#abc9cb]">
            My background, experience, and the tools I work with daily.
          </p>
        </div>

        {/* ── Outer Frame 1: Luminous Cyberpunk Neon Outer Glow Bezel ── */}
        <div 
          className="rounded-[34px] sm:rounded-[40px] p-2 sm:p-2.5 transition-all duration-300"
          style={{
            border: '1.5px solid rgba(171, 201, 203, 0.45)',
            background: 'rgba(8, 16, 23, 0.65)',
            boxShadow: '0 0 45px rgba(171, 201, 203, 0.35), 0 0 90px rgba(6, 182, 212, 0.15), inset 0 0 35px rgba(171, 201, 203, 0.18)'
          }}
        >
          
          {/* ── Inner Frame 2: Frosted Glass Panel with Corner Specular Flare ── */}
          <div 
            className="rounded-[26px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 relative overflow-hidden"
            style={{
              border: '1.5px solid rgba(171, 201, 203, 0.55)',
              borderTop: '2px solid rgba(255, 255, 255, 0.9)',
              borderLeft: '1.5px solid rgba(255, 255, 255, 0.65)',
              background: `
                radial-gradient(circle at 18% 18%, rgba(171, 201, 203, 0.38) 0%, rgba(30, 60, 75, 0.32) 32%, rgba(7, 14, 20, 0.95) 70%),
                linear-gradient(180deg, rgba(12, 24, 34, 0.92) 0%, rgba(5, 10, 15, 0.98) 100%)
              `,
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              boxShadow: 'inset 0 1.5px 2px rgba(255, 255, 255, 0.7), inset 0 0 50px rgba(171, 201, 203, 0.12), 0 25px 60px rgba(0, 0, 0, 0.85)'
            }}
          >
            
            {/* Top Cyan Light Streak Reflection */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.95)] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-12 w-80 h-32 bg-[radial-gradient(ellipse_at_top,rgba(171,201,203,0.3)_0%,transparent_70%)] pointer-events-none blur-xl" />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start relative z-10">
              
              {/* ─── Left Column: About Me (7 Columns) ────────────────────────── */}
              <div className="lg:col-span-7 space-y-4 pr-0 lg:pr-3">
                
                {/* Sub-heading */}
                <div>
                  <h3 
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1.5"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                  >
                    Full Stack Developer
                  </h3>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#abc9cb]">
                    Building modern web experiences with high scalability & clean code.
                  </p>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed text-slate-100 font-normal">
                  <p>
                    I am a Full Stack Developer based in Indore, India. I graduated with a Bachelor of Computer Applications (BCA) from <strong className="text-white font-bold">Govt. Holkar Science College, Indore</strong>, where I developed a strong foundation in computer science and software development.
                  </p>
                  <p>
                    Over the last 2+ years, I have worked professionally building full-stack applications, architecting responsive user interfaces with React, Next.js, and building secure REST APIs using Node.js, Express, and MongoDB.
                  </p>
                </div>

                {/* Pill/Capsule Bullet List */}
                <div className="space-y-2.5 pt-1">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-full transition-all"
                      style={{
                        background: 'linear-gradient(90deg, rgba(12, 24, 33, 0.95) 0%, rgba(7, 14, 20, 0.95) 100%)',
                        border: '1px solid rgba(171, 201, 203, 0.45)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 4px 14px rgba(0, 0, 0, 0.45)'
                      }}
                    >
                      <span 
                        className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                        style={{
                          background: '#132838',
                          border: '1.5px solid #abc9cb',
                          color: '#abc9cb',
                          boxShadow: '0 0 10px rgba(171, 201, 203, 0.5)'
                        }}
                      >
                        <Check className="w-3 h-3 text-[#abc9cb]" strokeWidth={3.5} />
                      </span>
                      <span className="text-[11.5px] sm:text-xs font-semibold text-slate-100 truncate">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons Row */}
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowResumeModal(true)}
                    className="px-6 py-2.5 sm:py-3 bg-[#f45b0b] hover:bg-[#e04f05] text-white font-extrabold text-xs sm:text-[13px] rounded-xl flex items-center gap-2 transition cursor-pointer"
                    style={{
                      boxShadow: '0 0 25px rgba(244, 91, 11, 0.7), 0 6px 18px rgba(244, 91, 11, 0.4)'
                    }}
                  >
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
                    <span>Preview Resume</span>
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={resume}
                    download
                    className="px-5 py-2.5 sm:py-3 text-white font-bold text-xs sm:text-[13px] rounded-xl flex items-center gap-2 cursor-pointer transition"
                    style={{
                      background: 'rgba(12, 24, 34, 0.85)',
                      border: '1.5px solid rgba(171, 201, 203, 0.45)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    <Edit3 className="w-3.5 h-3.5 text-[#abc9cb]" />
                    <span>Download Resume</span>
                  </motion.a>
                </div>

              </div>

              {/* ─── Right Column: Education with Frosted Icy Glass Cards (5 Columns) ─── */}
              <div className="lg:col-span-5 relative pl-0 lg:pl-5 pt-3 lg:pt-0">
                
                {/* Education Header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="text-[#f45b0b]">
                    <GraduationCap className="w-6 h-6 text-[#f45b0b]" />
                  </div>
                  <h3 
                    className="text-2xl sm:text-[26px] font-extrabold text-[#f45b0b] tracking-tight"
                    style={{ textShadow: '0 0 20px rgba(244, 91, 11, 0.55)' }}
                  >
                    Education
                  </h3>
                </div>

                {/* Stepper Rail & Cards Container */}
                <div className="relative pl-7 sm:pl-9 space-y-4">
                  
                  {/* Vertical Dotted Timeline Rail */}
                  <div 
                    className="absolute left-[8px] top-6 bottom-8 w-[2px] border-l-2 border-dotted pointer-events-none"
                    style={{ borderColor: 'rgba(171, 201, 203, 0.55)' }}
                  />

                  {/* ── Card 1: BCA ── */}
                  <div className="relative flex items-center">
                    
                    {/* Glowing Neon Orange Node on Dotted Line */}
                    <div 
                      className="absolute -left-[27px] sm:-left-[35px] w-4 h-4 rounded-full bg-[#f45b0b] z-10"
                      style={{
                        boxShadow: '0 0 16px #f45b0b, 0 0 30px #f45b0b',
                        border: '2px solid #070e14'
                      }}
                    />
                    
                    {/* Horizontal Connector Line */}
                    <div 
                      className="absolute -left-[14px] sm:-left-[18px] w-3.5 sm:w-4.5 h-[2px] pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, #f45b0b 0%, rgba(171,201,203,0.7) 100%)' }}
                    />

                    {/* Frosted Icy Cyan-Tinted Glass Card */}
                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="w-full p-4 sm:p-5 rounded-2xl relative overflow-hidden transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(140, 198, 208, 0.42) 0%, rgba(45, 95, 115, 0.55) 45%, rgba(10, 24, 34, 0.92) 100%)',
                        border: '1.5px solid rgba(195, 235, 245, 0.55)',
                        borderTop: '2px solid rgba(255, 255, 255, 0.88)',
                        borderLeft: '1.5px solid rgba(255, 255, 255, 0.68)',
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65), inset 0 1.5px 2px rgba(255, 255, 255, 0.75), 0 0 28px rgba(171, 201, 203, 0.25)'
                      }}
                    >
                      <h4 className="font-extrabold text-sm sm:text-[15.5px] text-white tracking-tight mb-1 drop-shadow-sm">
                        Bachelor of Computer Applications (BCA)
                      </h4>
                      <p className="text-xs sm:text-[12.5px] text-[#e0f3f5] font-semibold mb-3 drop-shadow-sm">
                        Govt. Holkar Science College, Indore
                      </p>
                      
                      {/* Orange Grade Pill Badge */}
                      <span 
                        className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-black text-white bg-[#f45b0b]"
                        style={{
                          boxShadow: '0 0 16px rgba(244, 91, 11, 0.65)'
                        }}
                      >
                        Graduate at 7.40 CGPA
                      </span>
                    </motion.div>
                  </div>

                  {/* ── Card 2: 12th Science ── */}
                  <div className="relative flex items-center">
                    
                    {/* Glowing Neon Orange Node on Dotted Line */}
                    <div 
                      className="absolute -left-[27px] sm:-left-[35px] w-4 h-4 rounded-full bg-[#f45b0b] z-10"
                      style={{
                        boxShadow: '0 0 16px #f45b0b, 0 0 30px #f45b0b',
                        border: '2px solid #070e14'
                      }}
                    />
                    
                    {/* Horizontal Connector Line */}
                    <div 
                      className="absolute -left-[14px] sm:-left-[18px] w-3.5 sm:w-4.5 h-[2px] pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, #f45b0b 0%, rgba(171,201,203,0.7) 100%)' }}
                    />

                    {/* Frosted Icy Cyan-Tinted Glass Card */}
                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="w-full p-4 sm:p-5 rounded-2xl relative overflow-hidden transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(140, 198, 208, 0.42) 0%, rgba(45, 95, 115, 0.55) 45%, rgba(10, 24, 34, 0.92) 100%)',
                        border: '1.5px solid rgba(195, 235, 245, 0.55)',
                        borderTop: '2px solid rgba(255, 255, 255, 0.88)',
                        borderLeft: '1.5px solid rgba(255, 255, 255, 0.68)',
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65), inset 0 1.5px 2px rgba(255, 255, 255, 0.75), 0 0 28px rgba(171, 201, 203, 0.25)'
                      }}
                    >
                      <h4 className="font-extrabold text-sm sm:text-[15.5px] text-white tracking-tight mb-1 drop-shadow-sm">
                        12th Science
                      </h4>
                      <p className="text-xs sm:text-[12.5px] text-[#e0f3f5] font-semibold mb-3 drop-shadow-sm">
                        J.J.C. Higher Secondary School, Naigarhi Rewa
                      </p>

                      {/* Orange Score Pill Badge */}
                      <span 
                        className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-black text-white bg-[#f45b0b]"
                        style={{
                          boxShadow: '0 0 16px rgba(244, 91, 11, 0.65)'
                        }}
                      >
                        Score: 90.0%
                      </span>
                    </motion.div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setShowResumeModal(false)}
        >
          <div 
            className="w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[rgba(171,201,203,0.4)] bg-[#091118]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 px-6 border-b border-[rgba(171,201,203,0.2)] bg-[#060c12] text-white">
              <span className="font-bold text-sm text-[#abc9cb]">Sahbaj Khan — Resume</span>
              <div className="flex items-center gap-3">
                <a
                  href={resume}
                  download
                  className="px-3.5 py-1.5 text-xs font-bold bg-[#f45b0b] hover:bg-[#e04f05] text-white rounded-xl shadow-md shadow-[#f45b0b]/30"
                >
                  Download PDF
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-[#060c12]">
              <iframe
                src={resume}
                title="Sahbaj Khan Resume"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About
