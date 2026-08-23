import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, CheckCircle2, Code2, Sparkles } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Certifications = () => {
  const { darkMode } = useTheme()

  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development Certification",
      issuer: "Dollop Infotech Indore M.P.",
      date: "2025 - Present",
      description: "Hands-on professional experience in React, Next.js, Node.js, Express.js, MongoDB, REST API development, and production deployment.",
      icon: Award,
      badge: "Professional Experience"
    },
    {
      id: 2,
      title: "MERN Stack Specialization",
      issuer: "Placement Adda Indore M.P.",
      date: "Feb 2025 - Oct 2025",
      description: "Intensive training on full-stack architecture, state management (Redux Toolkit), database design, and real-world project development.",
      icon: ShieldCheck,
      badge: "Certified Specialist"
    },
    {
      id: 3,
      title: "Bachelor of Computer Applications (BCA)",
      issuer: "Holkar Science College, Indore",
      date: "2022 - 2025",
      description: "Graduated with 7.40 CGPA. Core focus on Computer Science fundamentals, Data Structures, Web Technologies, and Database Systems.",
      icon: Code2,
      badge: "Academic Degree"
    }
  ]

  const highlights = [
    "Over 1 year of real-world Full Stack Web Development experience",
    "Expertise in React 19, Next.js, TypeScript, and modern CSS (Tailwind CSS)",
    "Backend proficiency in Node.js, Express.js, MongoDB Atlas, and SQL",
    "Track record of building complex UI editors (Blockly) and E-Commerce platforms"
  ]

  const cardStyle = darkMode
    ? 'bg-[#0f1226] border border-[#3B4371]/40 text-white hover:border-[#F3904F]/50'
    : 'bg-white border border-[#F3904F]/20 text-gray-800 hover:border-[#F3904F]/50 shadow-md'

  const sectionBg = darkMode ? 'bg-[#0b0e1b] text-white' : 'bg-gradient-to-b from-[#3B4371]/5 via-white to-transparent text-black'

  return (
    <section id="certifications" className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-extrabold text-3xl md:text-5xl mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications & <span className="gradient-text">Highlights</span>
          </h2>
          <span className="block h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#3B4371] to-[#F3904F] mb-6" />
          <p className={`text-base md:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional credentials and key milestones in my software engineering career
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                className={`p-6 md:p-8 rounded-2xl shadow-lg relative flex flex-col justify-between transition-all duration-300 ${cardStyle}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#F3904F]/15 text-[#F3904F]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F3904F]/15 text-[#F3904F] border border-[#F3904F]/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-[#F3904F] font-semibold text-sm mb-1">{item.issuer}</p>
                  <p className="text-xs text-gray-400 mb-4">{item.date}</p>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Highlights Banner */}
        <motion.div
          className={`p-8 md:p-10 rounded-3xl border border-[#F3904F]/30 ${
            darkMode ? 'glass-dark' : 'bg-gradient-to-r from-[#3B4371]/10 via-[#F3904F]/10 to-[#3B4371]/10'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-[#F3904F] w-7 h-7" />
            <h2 className="text-2xl font-bold">Why Hire Sahbaj Khan?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#F3904F] w-5 h-5 shrink-0 mt-0.5" />
                <p className={`text-sm md:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {h}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Certifications
