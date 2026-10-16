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
    ? 'bg-[#0b0e1b] border-y border-[#191970]/30 text-white'
    : 'bg-gradient-to-r from-[#191970]/10 via-[#F5F5DC] to-[#2b3154]/10 border-y border-[#2b3154]/20 text-[#191970]'

  const cardStyle = darkMode
    ? 'glass-dark border border-[#191970]/40 hover:border-[#2b3154]/50 text-white shadow-lg shadow-[#2b3154]/5'
    : 'glass-card border border-[#2b3154]/30 hover:border-[#2b3154] text-[#191970] shadow-md'

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
              <div className="p-3 rounded-xl bg-[#2b3154]/15 text-[#2b3154] border border-[#2b3154]/30 mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight mb-1">
                {stat.value}
              </h3>
              <p className={`font-bold text-sm md:text-base ${darkMode ? 'text-white' : 'text-[#191970]'}`}>
                {stat.label}
              </p>
              <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-gray-400' : 'text-[#191970]'}`}>
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
