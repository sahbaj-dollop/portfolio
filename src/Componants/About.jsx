import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Check, X, Edit3 } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const About = () => {
  const { darkMode } = useTheme()
  const [showResumeModal, setShowResumeModal] = useState(false)
  const resume = "/sahbajkhan.pdf"

  const highlights = [
    "2+ years shipping production React, Next.js & MERN applications",
    "End-to-end delivery: responsive UI, REST APIs & Razorpay payments",
    "Clean, scalable TypeScript & database architectures built to last",
  ]

  return (
    <section
      id="about"
      className={`py-16 md:py-24 relative overflow-hidden flex items-center justify-center min-h-[92vh] transition-colors duration-300 ${
        darkMode
          ? 'bg-[#040608] text-white'
          : 'bg-[#eef5f6] text-[#081014] border-t border-[#abc9cb]/50'
      }`}
    >
      {/* Outer Subtle Cyan / Powder Blue Ambient Glow */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none blur-3xl ${
          darkMode ? 'opacity-35' : 'opacity-25'
        }`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(171, 201, 203, 0.18) 0%, rgba(6, 182, 212, 0.08) 40%, transparent 70%)'
        }}
      />

      <div className="site-container relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 ${
            darkMode ? 'text-white' : 'text-[#081014]'
          }`}>
            About Me
          </h2>
          <p className={`text-xs sm:text-sm font-semibold ${
            darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'
          }`}>
            Combining clean product engineering, modern UI architecture, and reliable backend systems.
          </p>
        </motion.div>

        {/* ── Outer Frame 1: Subtle Glass Bezel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-[34px] sm:rounded-[40px] p-2 sm:p-2.5 transition-all duration-300"
          style={{
            border: darkMode ? '1px solid rgba(171, 201, 203, 0.18)' : '1px solid rgba(171, 201, 203, 0.65)',
            background: darkMode ? 'rgba(8, 14, 20, 0.55)' : 'rgba(225, 239, 241, 0.65)',
            boxShadow: darkMode ? '0 14px 40px rgba(0, 0, 0, 0.5)' : '0 14px 36px rgba(171, 201, 203, 0.28)'
          }}
        >
          
          {/* ── Inner Frame 2: Refined Subtle Glass Panel ── */}
          <div 
            className="rounded-[26px] min-h-[550px] h-auto sm:rounded-[32px] p-7 sm:p-11 md:p-14 relative overflow-hidden"
            style={{
              border: darkMode ? '1px solid rgba(171, 201, 203, 0.22)' : '1px solid rgba(171, 201, 203, 0.75)',
              borderTop: darkMode ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid rgba(255, 255, 255, 0.9)',
              background: darkMode
                ? `radial-gradient(circle at 18% 18%, rgba(171, 201, 203, 0.09) 0%, rgba(18, 34, 46, 0.35) 35%, rgba(7, 13, 19, 0.92) 75%),
                   linear-gradient(180deg, rgba(12, 21, 30, 0.9) 0%, rgba(5, 10, 15, 0.96) 100%)`
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(242, 248, 249, 0.92) 100%)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: darkMode
                ? 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 50px rgba(0, 0, 0, 0.65)'
                : '0 16px 40px rgba(140, 180, 185, 0.2)'
            }}
          >
            
            {/* Subtle Top Light Reflection */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(171,201,203,0.4)] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-12 w-80 h-28 bg-[radial-gradient(ellipse_at_top,rgba(171,201,203,0.12)_0%,transparent_70%)] pointer-events-none blur-xl" />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start relative z-10 h-full">
              
              {/* ─── Left Column: About Me (7 Columns) ────────────────────────── */}
              <div className="lg:col-span-7 space-y-4 pr-0 lg:pr-3">
                
                {/* Sub-heading */}
                <div>
                  <h3 
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-1.5 ${
                      darkMode ? 'text-white' : 'text-[#081014]'
                    }`}
                    style={darkMode ? { textShadow: '0 2px 12px rgba(0,0,0,0.6)' } : undefined}
                  >
                    Engineering Web Products That Scale
                  </h3>
                  <p className={`text-xs sm:text-[13px] font-semibold ${
                    darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'
                  }`}>
                    Full Stack Developer &bull; React, Next.js, Node.js &amp; MongoDB
                  </p>
                </div>

                {/* Bio Paragraphs */}
                <div className={`space-y-3 text-xs sm:text-[13px] leading-relaxed font-normal ${
                  darkMode ? 'text-slate-100' : 'text-slate-700'
                }`}>
                  <p>
                    I&apos;m a Full Stack Web Developer based in Indore, India, holding a Bachelor of Computer Applications (BCA) from Govt. Holkar Science College, Indore. I combine strong computer science fundamentals with a product-first mindset to turn complex ideas into fast, intuitive, and dependable web applications.
                  </p>
                  <p>
                    Over the past 2+ years, I&apos;ve delivered full-stack software using <strong className={darkMode ? 'text-white font-semibold' : 'text-[#081014] font-semibold'}>React 19, Next.js, TypeScript, Node.js, Express.js, and MongoDB</strong>—ranging from interactive visual code editors and institutional portals to complete e-commerce storefronts with JWT authentication, role-based access control, and optimized database schemas.
                  </p>
                  <p>
                    For clients and teams, I handle the full delivery lifecycle: crafting accessible <strong className={darkMode ? 'text-white font-semibold' : 'text-[#081014] font-semibold'}>Tailwind CSS</strong> interfaces, integrating <strong className={darkMode ? 'text-white font-semibold' : 'text-[#081014] font-semibold'}>Razorpay</strong> payment gateways and third-party APIs, and deploying production-ready apps on <strong className={darkMode ? 'text-white font-semibold' : 'text-[#081014] font-semibold'}>Vercel, Render, and Netlify</strong> with clean, maintainable code.
                  </p>
                </div>

                {/* Pill/Capsule Bullet List */}
                <div className="space-y-2.5 pt-1">
                  {highlights.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-full transition-colors"
                      style={darkMode ? {
                        background: 'linear-gradient(90deg, rgba(12, 24, 33, 0.95) 0%, rgba(7, 14, 20, 0.95) 100%)',
                        border: '1px solid rgba(171, 201, 203, 0.35)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 12px rgba(0, 0, 0, 0.35)'
                      } : {
                        background: 'rgba(237, 245, 246, 0.95)',
                        border: '1px solid rgba(171, 201, 203, 0.85)',
                        boxShadow: '0 3px 10px rgba(171, 201, 203, 0.18)'
                      }}
                    >
                      <span 
                        className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                        style={darkMode ? {
                          background: '#132838',
                          border: '1.5px solid #abc9cb',
                          color: '#abc9cb',
                        } : {
                          background: '#ffffff',
                          border: '1.5px solid #2c6670',
                          color: '#2c6670',
                        }}
                      >
                        <Check className={`w-3 h-3 ${darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'}`} strokeWidth={3.5} />
                      </span>
                      <span className={`text-[11.5px] sm:text-xs font-semibold truncate ${
                        darkMode ? 'text-slate-100' : 'text-[#081014]'
                      }`}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Buttons Row */}
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowResumeModal(true)}
                    className="btn-sheen px-6 py-2.5 sm:py-3 bg-[#f45b0b] hover:bg-[#e04f05] text-white font-extrabold text-xs sm:text-[13px] rounded-xl flex items-center gap-2 transition cursor-pointer shadow-lg shadow-[#f45b0b]/35"
                  >
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
                    <span>Preview Resume</span>
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={resume}
                    download
                    className={`px-5 py-2.5 sm:py-3 font-bold text-xs sm:text-[13px] rounded-xl flex items-center gap-2 cursor-pointer transition ${
                      darkMode ? 'text-white' : 'text-[#081014]'
                    }`}
                    style={darkMode ? {
                      background: 'rgba(12, 24, 34, 0.85)',
                      border: '1.5px solid rgba(171, 201, 203, 0.45)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'
                    } : {
                      background: '#ffffff',
                      border: '1.5px solid #abc9cb',
                      boxShadow: '0 4px 12px rgba(171, 201, 203, 0.22)'
                    }}
                  >
                    <Edit3 className={`w-3.5 h-3.5 ${darkMode ? 'text-[#abc9cb]' : 'text-[#f45b0b]'}`} />
                    <span>Download Resume</span>
                  </motion.a>
                </div>

              </div>

              {/* ─── Right Column: Education with Subtle Glass Cards (5 Columns) ─── */}
              <div className="lg:col-span-5 relative pl-0 lg:pl-5 pt-3 lg:pt-0">
                
                {/* Education Header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="text-[#f45b0b]">
                    <GraduationCap className="w-6 h-6 text-[#f45b0b]" />
                  </div>
                  <h3 
                    className="text-2xl sm:text-[26px] font-extrabold text-[#f45b0b] tracking-tight"
                    style={darkMode ? { textShadow: '0 0 18px rgba(244, 91, 11, 0.35)' } : undefined}
                  >
                    Education
                  </h3>
                </div>

                {/* Stepper Rail & Cards Container */}
                <div className="relative pl-7 sm:pl-9 space-y-4">
                  
                  {/* Vertical Dotted Timeline Rail */}
                  <div 
                    className="absolute left-[8px] top-6 bottom-8 w-[2px] border-l-2 border-dotted pointer-events-none"
                    style={{ borderColor: darkMode ? 'rgba(171, 201, 203, 0.55)' : 'rgba(110, 148, 150, 0.65)' }}
                  />

                  {/* ── Card 1: BCA ── */}
                  <div className="relative flex items-center">
                    
                    {/* Glowing Neon Orange Node on Dotted Line */}
                    <div 
                      className="absolute -left-[27px] sm:-left-[35px] w-4 h-4 rounded-full bg-[#f45b0b] z-10"
                      style={{
                        boxShadow: '0 0 12px rgba(244, 91, 11, 0.65)',
                        border: darkMode ? '2px solid #070e14' : '2px solid #ffffff'
                      }}
                    />
                    
                    {/* Horizontal Connector Line */}
                    <div 
                      className="absolute -left-[14px] sm:-left-[18px] w-3.5 sm:w-4.5 h-[2px] pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, #f45b0b 0%, rgba(171,201,203,0.7) 100%)' }}
                    />

                    {/* Subtle Glass Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="w-full p-5 sm:p-6 rounded-2xl relative overflow-hidden transition-all"
                      style={darkMode ? {
                        background: 'linear-gradient(135deg, rgba(171, 201, 203, 0.1) 0%, rgba(22, 46, 58, 0.35) 50%, rgba(10, 20, 29, 0.88) 100%)',
                        border: '1px solid rgba(171, 201, 203, 0.24)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 10px 28px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                      } : {
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(235, 246, 248, 0.92) 100%)',
                        border: '1px solid rgba(171, 201, 203, 0.85)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 10px 26px rgba(171, 201, 203, 0.24)'
                      }}
                    >
                      <h4 className={`font-bold text-sm sm:text-[15.5px] tracking-tight mb-1 ${
                        darkMode ? 'text-white' : 'text-[#081014]'
                      }`}>
                        Bachelor of Computer Applications (BCA)
                      </h4>
                      <p className={`text-xs sm:text-[12.5px] font-semibold mb-3 ${
                        darkMode ? 'text-[#e0f3f5]' : 'text-[#2c6670]'
                      }`}>
                        Govt. Holkar Science College, Indore
                      </p>
                      
                      {/* Orange Grade Pill Badge */}
                      <span 
                        className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-black text-white bg-[#f45b0b] shadow-md shadow-[#f45b0b]/35"
                      >
                        Graduated • 7.40 CGPA
                      </span>
                    </motion.div>
                  </div>

                  {/* ── Card 2: 12th Science ── */}
                  <div className="relative flex items-center">
                    
                    {/* Glowing Neon Orange Node on Dotted Line */}
                    <div 
                      className="absolute -left-[27px] sm:-left-[35px] w-4 h-4 rounded-full bg-[#f45b0b] z-10"
                      style={{
                        boxShadow: '0 0 12px rgba(244, 91, 11, 0.65)',
                        border: darkMode ? '2px solid #070e14' : '2px solid #ffffff'
                      }}
                    />
                    
                    {/* Horizontal Connector Line */}
                    <div 
                      className="absolute -left-[14px] sm:-left-[18px] w-3.5 sm:w-4.5 h-[2px] pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, #f45b0b 0%, rgba(171,201,203,0.7) 100%)' }}
                    />

                    {/* Subtle Glass Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="w-full p-5 sm:p-6 rounded-2xl relative overflow-hidden transition-all"
                      style={darkMode ? {
                        background: 'linear-gradient(135deg, rgba(171, 201, 203, 0.1) 0%, rgba(22, 46, 58, 0.35) 50%, rgba(10, 20, 29, 0.88) 100%)',
                        border: '1px solid rgba(171, 201, 203, 0.24)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 10px 28px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                      } : {
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(235, 246, 248, 0.92) 100%)',
                        border: '1px solid rgba(171, 201, 203, 0.85)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 10px 26px rgba(171, 201, 203, 0.24)'
                      }}
                    >
                      <h4 className={`font-bold text-sm sm:text-[15.5px] tracking-tight mb-1 ${
                        darkMode ? 'text-white' : 'text-[#081014]'
                      }`}>
                        Higher Secondary (12th — Mathematics)
                      </h4>
                      <p className={`text-xs sm:text-[12.5px] font-semibold mb-3 ${
                        darkMode ? 'text-[#e0f3f5]' : 'text-[#2c6670]'
                      }`}>
                        J.J.C. Higher Secondary School, Naigarhi, Rewa
                      </p>

                      {/* Orange Score Pill Badge */}
                      <span 
                        className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-black text-white bg-[#f45b0b] shadow-md shadow-[#f45b0b]/35"
                      >
                        Score: 90.0%
                      </span>
                    </motion.div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className={`w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border ${
                darkMode ? 'border-[rgba(171,201,203,0.4)] bg-[#091118]' : 'border-[#abc9cb] bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`flex items-center justify-between p-4 px-6 border-b ${
                darkMode ? 'border-[rgba(171,201,203,0.2)] bg-[#060c12] text-white' : 'border-[#abc9cb] bg-[#eef5f6] text-[#081014]'
              }`}>
                <span className={`font-bold text-sm ${darkMode ? 'text-[#abc9cb]' : 'text-[#081014]'}`}>Sahbaj Khan — Resume</span>
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
                    className={`p-1.5 rounded-lg transition cursor-pointer ${
                      darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-[#081014] hover:bg-slate-200'
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className={`flex-1 w-full ${darkMode ? 'bg-[#060c12]' : 'bg-slate-100'}`}>
                <iframe
                  src={resume}
                  title="Sahbaj Khan Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About
