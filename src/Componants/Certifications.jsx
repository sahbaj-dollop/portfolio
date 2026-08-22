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
    ? 'bg-neutral-900 border border-neutral-800 text-white'
    : 'bg-white border border-orange-100 text-gray-800'

  const sectionBg = darkMode ? 'bg-black text-white' : 'bg-white text-black'

  return (
    <section id="certifications" className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-3xl md:text-4xl mb-4">
            Certifications & Highlights
            <span className="block h-1 w-24 mx-auto mt-3 rounded-full bg-orange-500"></span>
          </h1>
          <p className={`mt-4 text-base md:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                className={`p-6 md:p-8 rounded-2xl shadow-lg relative flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 ${cardStyle}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-orange-500 font-semibold text-sm mb-1">{item.issuer}</p>
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
          className={`p-8 md:p-10 rounded-3xl border border-orange-500/20 ${
            darkMode ? 'glass-dark' : 'bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-orange-500 w-7 h-7" />
            <h2 className="text-2xl font-bold">Why Hire Sahbaj Khan?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0 mt-0.5" />
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
