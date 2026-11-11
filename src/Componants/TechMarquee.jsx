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
      className={`relative w-full py-6 overflow-hidden border-y transition-colors duration-300 ${
        darkMode 
          ? 'bg-[#06090d] border-[rgba(171,201,203,0.18)]' 
          : 'bg-[#e2edee] border-[#abc9cb]/70'
      }`}
    >
      {/* Left & Right Fade Masks for Smooth Infinite Look */}
      <div 
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 ${
          darkMode 
            ? 'bg-gradient-to-r from-[#06090d] to-transparent' 
            : 'bg-gradient-to-r from-[#e2edee] to-transparent'
        }`}
      />
      <div 
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 ${
          darkMode 
            ? 'bg-gradient-to-l from-[#06090d] to-transparent' 
            : 'bg-gradient-to-l from-[#e2edee] to-transparent'
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
                  ? 'bg-[#0e161c] border-[rgba(171,201,203,0.22)] text-white hover:border-[#f45b0b] hover:text-[#f45b0b]' 
                  : 'bg-white border-[#abc9cb] text-[#081014] hover:border-[#f45b0b] hover:text-[#f45b0b] shadow-sm'
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
