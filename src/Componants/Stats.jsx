import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, FolderGit2, Code2, MapPin } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Stats = () => {
  const { darkMode } = useTheme()

  const statsData = [
    {
      id: 1,
      value: "2+ Years",
      label: "Experience",
      subtext: "Full Stack Development",
      icon: Briefcase,
    },
    {
      id: 2,
      value: "6+ Apps",
      label: "Core Projects",
      subtext: "Live & Open Source",
      icon: FolderGit2,
    },
    {
      id: 3,
      value: "MERN & Next",
      label: "Specialization",
      subtext: "React 19 & Node.js",
      icon: Code2,
    },
    {
      id: 4,
      value: "Indore, MP",
      label: "Location",
      subtext: "Open to Remote",
      icon: MapPin,
    },
  ]

  return (
    <div className={`py-10 px-5 md:px-10 border-y transition-colors duration-300 ${
      darkMode ? 'bg-[#0b0e17] border-slate-800 text-white' : 'bg-slate-100/60 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`p-4 sm:p-5 rounded-2xl border flex flex-col items-center text-center transition-all ${
                darkMode ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-black/20' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 mb-2.5">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight mb-0.5">
                {stat.value}
              </span>
              <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {stat.label}
              </span>
              <span className={`text-[11px] mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.subtext}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Stats
