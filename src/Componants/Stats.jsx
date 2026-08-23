import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Code2, Cpu, CheckCircle2 } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Stats = () => {
  const { darkMode } = useTheme()

  const statsData = [
    {
      id: 1,
      value: "1+",
      label: "Years Experience",
      subtext: "Full Stack Development",
      icon: Briefcase,
    },
    {
      id: 2,
      value: "6+",
      label: "Featured Projects",
      subtext: "Live & Deployed Apps",
      icon: Code2,
    },
    {
      id: 3,
      value: "15+",
      label: "Technologies",
      subtext: "MERN, Next.js & Tools",
      icon: Cpu,
    },
    {
      id: 4,
      value: "100%",
      label: "Clean Code",
      subtext: "Responsive & Scalable",
      icon: CheckCircle2,
    },
  ]

  const containerBg = darkMode
    ? 'bg-[#0b0e1b] border-y border-[#3B4371]/30 text-white'
    : 'bg-gradient-to-r from-[#3B4371]/10 via-white to-[#F3904F]/10 border-y border-[#F3904F]/20 text-black'

  const cardStyle = darkMode
    ? 'glass-dark border border-[#3B4371]/40 hover:border-[#F3904F]/50 text-white shadow-lg shadow-[#F3904F]/5'
    : 'glass-card border border-[#F3904F]/30 hover:border-[#F3904F] text-gray-900 shadow-md'

  return (
    <div className={`py-12 px-4 md:px-8 lg:px-16 transition-colors duration-500 ${containerBg}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.id}
              className={`p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${cardStyle}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="p-3 rounded-xl bg-[#F3904F]/15 text-[#F3904F] border border-[#F3904F]/30 mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight mb-1">
                {stat.value}
              </h3>
              <p className={`font-bold text-sm md:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.label}
              </p>
              <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.subtext}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Stats
