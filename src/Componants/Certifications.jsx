import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, GraduationCap } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Certifications = () => {
  const { darkMode } = useTheme()

  const credentials = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Dollop Infotech, Indore",
      date: "Oct 2024 – Present",
      description: "Hands-on commercial engineering in React, Next.js, Node.js, Express, MongoDB, and production deployment.",
      icon: Award,
      badge: "Commercial Role"
    },
    {
      id: 2,
      title: "MERN Stack Specialization",
      issuer: "Placement Adda, Indore",
      date: "Feb 2024 – Oct 2024",
      description: "Comprehensive training in full stack architecture, state management with Redux Toolkit, and database integration.",
      icon: ShieldCheck,
      badge: "Certification"
    },
    {
      id: 3,
      title: "Bachelor of Computer Applications (BCA)",
      issuer: "Govt. Holkar Science College, Indore",
      date: "2022 – 2025",
      description: "Graduated with 7.40 CGPA. Core focus on Data Structures, Algorithms, OOP, and Relational Database Systems.",
      icon: GraduationCap,
      badge: "Degree"
    }
  ]

  return (
    <section 
      id="certifications" 
      className={`py-16 md:py-24 px-5 md:px-10 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#090b11] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Certifications & Education
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My academic foundation and verified technical training.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                  darkMode ? 'bg-slate-850 border-slate-800 hover:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-black/20' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-500 mb-0.5">
                    {item.issuer}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mb-3">
                    {item.date}
                  </p>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Certifications
