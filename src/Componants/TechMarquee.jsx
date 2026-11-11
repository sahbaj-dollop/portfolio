import React from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss, 
  SiExpress, 
  SiRedux, 
  SiPostman 
} from 'react-icons/si'
import { Code2 } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const TECH_ITEMS = [
  { name: 'React 19', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js 15', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
  { name: 'Express.js', icon: SiExpress, color: '#a3a3a3' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
  { name: 'REST APIs', icon: Code2, color: '#F59E0B' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Open Source', icon: FaGithub, color: '#94A3B8' },
]

const TechMarquee = () => {
  const { darkMode } = useTheme()

  // Duplicate items for seamless continuous looping
  const marqueeItems = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div
      className={`relative w-full py-6 overflow-hidden border-y transition-colors duration-300 ${
        darkMode 
          ? 'bg-[#070a12] border-slate-800/80' 
          : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      {/* Left & Right Fade Masks for Smooth Infinite Look */}
      <div 
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 ${
          darkMode 
            ? 'bg-gradient-to-r from-[#070a12] to-transparent' 
            : 'bg-gradient-to-r from-slate-100/90 to-transparent'
        }`}
      />
      <div 
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 ${
          darkMode 
            ? 'bg-gradient-to-l from-[#070a12] to-transparent' 
            : 'bg-gradient-to-l from-slate-100/90 to-transparent'
        }`}
      />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-8 cursor-default">
        {marqueeItems.map((tech, idx) => {
          const Icon = tech.icon
          return (
            <div
              key={`${tech.name}-${idx}`}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border transition-all duration-200 shrink-0 select-none ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white hover:bg-slate-850' 
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm'
              }`}
            >
              <Icon 
                className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" 
                style={{ color: tech.color }} 
              />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechMarquee
