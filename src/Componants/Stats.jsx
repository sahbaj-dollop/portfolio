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
    <div className={`py-12 px-5 md:px-10 border-y transition-colors duration-300 backdrop-blur-md relative z-20 ${
      darkMode ? 'bg-[#070b10]/65 border-[rgba(171,201,203,0.18)] text-white' : 'bg-[#e5eff1]/75 border-[#abc9cb]/60 text-[#081014]'
    }`}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative p-5 sm:p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 group cursor-default overflow-hidden ${
                darkMode 
                  ? 'bg-gradient-to-b from-[#14232c]/65 via-[#0d1820]/50 to-[#081016]/75 border-[rgba(171,201,203,0.25)] hover:border-[#f45b0b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_15px_35px_-10px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_40px_-5px_rgba(244,91,11,0.28),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-xl' 
                  : 'bg-white/75 border-[#abc9cb] shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_10px_25px_-5px_rgba(171,201,203,0.35)] hover:border-[#f45b0b] hover:shadow-lg backdrop-blur-xl'
              }`}
            >
              {/* Specular Top Glass Reflection Sheen */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none rounded-t-3xl" />

              {/* Ambient Glow Behind Icon on Hover */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#f45b0b]/15 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Frosted Glass Icon Badge */}
              <div className="relative z-10 p-3 rounded-2xl bg-gradient-to-br from-[#f45b0b]/20 to-[#f45b0b]/5 border border-[#f45b0b]/35 text-[#f45b0b] mb-3 shadow-[0_0_15px_rgba(244,91,11,0.25)] group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5" />
              </div>

              {/* Stat Value */}
              <span className="relative z-10 text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                {stat.value}
              </span>

              {/* Stat Label */}
              <span className={`relative z-10 text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-[#081014]'}`}>
                {stat.label}
              </span>

              {/* Stat Subtext */}
              <span className="relative z-10 text-[11px] mt-1 text-[#abc9cb] font-medium tracking-wide">
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
