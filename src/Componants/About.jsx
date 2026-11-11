import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileDown, Eye, X, GraduationCap, CheckCircle } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const About = () => {
  const { darkMode } = useTheme()
  const [showResumeModal, setShowResumeModal] = useState(false)
  const resume = "/sahbajkhan.pdf"

  const highlights = [
    "2+ years of professional full-stack web development experience",
    "Hands-on with React 19, Next.js (App Router), and TypeScript",
    "Backend development with Node.js, Express.js, and MongoDB",
    "Experience building visual code editors (Blockly & Monaco Editor)",
    "Clean code practices, Git version control, and RESTful API design",
  ]

  return (
    <section
      id="about"
      className={`py-16 md:py-24 px-5 md:px-10 transition-colors duration-300 ${
        darkMode ? 'bg-[#090b11] text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            About Me
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My background, experience, and the tools I work with daily.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          
          {/* Left Column: Authentic Story */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="space-y-4 text-sm sm:text-base leading-relaxed"
          >
            <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
              I am a Full Stack Developer based in Indore, India. I graduated with a Bachelor of Computer Applications (BCA) from <strong>Govt. Holkar Science College, Indore</strong>, where I developed a strong foundation in computer science and software development.
            </p>

            <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
              Over the last 2+ years, I have worked professionally building full-stack applications. At <strong>Dollop Infotech</strong>, my day-to-day involves architecting responsive user interfaces with React and Next.js, and building secure REST APIs using Node.js, Express, and MongoDB.
            </p>

            <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
              Some of my favorite work includes building an interactive visual code playground for kids using Google Blockly and Monaco Editor, and developing complete e-commerce and school management applications.
            </p>

            {/* Quick Bullet Points */}
            <div className="pt-2 space-y-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                </div>
              ))}
            </div>

            {/* Resume Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowResumeModal(true)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border flex items-center gap-2 transition cursor-pointer ${
                  darkMode 
                    ? 'border-slate-700 text-slate-200 hover:bg-slate-800' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Eye className="w-4 h-4 text-blue-500" />
                <span>Preview Resume</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={resume}
                download
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm rounded-lg flex items-center gap-2 transition shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Education & Background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ y: -3 }}
                className={`p-5 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-850 border-slate-800 hover:border-slate-700 shadow-sm' : 'bg-slate-50 border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <span className="text-xs font-mono text-slate-500">2022 – 2025</span>
                </div>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Govt. Holkar Science College, Indore
                </p>
                <p className="text-xs font-medium text-blue-500 mt-2">
                  Graduated with 7.40 CGPA
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className={`p-5 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-850 border-slate-800 hover:border-slate-700 shadow-sm' : 'bg-slate-50 border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Higher Secondary Education (12th Science)
                  </h4>
                  <span className="text-xs font-mono text-slate-500">2021 – 2022</span>
                </div>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  J.J.C. Higher Secondary School, Naigarhi Rewa
                </p>
                <p className="text-xs font-medium text-emerald-500 mt-2">
                  Score: 90.0%
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setShowResumeModal(false)}
        >
          <div 
            className={`w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border ${
              darkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-950 text-white">
              <span className="font-semibold text-sm">Sahbaj Khan — Resume</span>
              <div className="flex items-center gap-3">
                <a
                  href={resume}
                  download
                  className="px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-md"
                >
                  Download PDF
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-950">
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
