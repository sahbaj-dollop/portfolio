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
  { name: 'React 19', icon: FaReact, color: '#abc9cb' },
  { name: 'Next.js 15', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#abc9cb' },
  { name: 'Node.js', icon: FaNodeJs, color: '#f45b0b' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#abc9cb' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#abc9cb' },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#f45b0b' },
  { name: 'REST APIs', icon: Code2, color: '#f45b0b' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: '#f45b0b' },
  { name: 'Postman', icon: SiPostman, color: '#f45b0b' },
  { name: 'Open Source', icon: FaGithub, color: '#ffffff' },
]

const TechMarquee = () => {
  const { darkMode } = useTheme()

  // Duplicate items for seamless continuous looping
  const marqueeItems = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div
      className={`relative w-full py-6 overflow-hidden border-y transition-colors duration-300 backdrop-blur-xl z-10 ${
        darkMode 
          ? 'bg-[#060a0f]/60 border-[rgba(171,201,203,0.2)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]' 
          : 'bg-[#e2edee]/70 border-[#abc9cb]/70 shadow-sm'
      }`}
    >
      {/* Left & Right Glass Fade Masks for Smooth Infinite Look */}
      <div 
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-20 ${
          darkMode 
            ? 'bg-gradient-to-r from-[#060a0f] via-[#060a0f]/70 to-transparent' 
            : 'bg-gradient-to-r from-[#e2edee] via-[#e2edee]/70 to-transparent'
        }`}
      />
      <div 
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-20 ${
          darkMode 
            ? 'bg-gradient-to-l from-[#060a0f] via-[#060a0f]/70 to-transparent' 
            : 'bg-gradient-to-l from-[#e2edee] via-[#e2edee]/70 to-transparent'
        }`}
      />

      {/* Marquee Track with Frosted Glass Badges */}
      <div className="animate-marquee flex items-center gap-4 sm:gap-6 cursor-default">
        {marqueeItems.map((tech, idx) => {
          const Icon = tech.icon
          return (
            <div
              key={`${tech.name}-${idx}`}
              className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl border transition-all duration-300 shrink-0 select-none overflow-hidden group hover:scale-105 cursor-pointer ${
                darkMode 
                  ? 'bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] border-[rgba(171,201,203,0.25)] text-white hover:border-[#f45b0b] hover:text-[#f45b0b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_0_18px_rgba(244,91,11,0.35)] backdrop-blur-lg' 
                  : 'bg-white/65 border-[#abc9cb] text-[#081014] hover:border-[#f45b0b] hover:text-[#f45b0b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.06)] backdrop-blur-lg'
              }`}
            >
              {/* Glass Pill Top Specular Highlight */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent pointer-events-none rounded-t-2xl" />

              <Icon 
                className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
                style={{ color: tech.color }} 
              />
              <span className="relative z-10 text-xs sm:text-sm font-semibold tracking-wide">
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
