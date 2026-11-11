import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Milestone
} from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'
import { playClickSound } from '../utils/soundEffects'

const Experience = () => {
  const { darkMode } = useTheme()
  const [activeMilestone, setActiveMilestone] = useState(0)
  const [direction, setDirection] = useState(0)

  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Dollop Infotech',
      location: 'Indore, M.P.',
      period: 'Oct 2024 – Present',
      status: 'Current Role',
      isCurrent: true,
      tagline: 'Production Engineering & Visual IDE Systems',
      points: [
        'Building responsive, accessible web applications utilizing React, Next.js, and modern Tailwind CSS.',
        'Engineered an interactive visual Blockly code editor integrated with Monaco Editor for real-time syntax generation.',
        'Developed secure RESTful backend APIs in Node.js and Express with JWT authentication, role management, and input validation.',
        'Designed normalized MongoDB database schemas, compound indexes, and aggregation queries for client platforms.',
        'Collaborated on code reviews, Git branching strategies, and deployment pipelines using GitHub.'
      ],
      tech: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git']
    },
    {
      id: 2,
      role: 'Full Stack Trainee',
      company: 'Placement Adda',
      location: 'Indore, M.P.',
      period: 'Feb 2024 – Oct 2024',
      status: 'Completed',
      isCurrent: false,
      tagline: 'Intensive Full Stack Development & Architecture Training',
      points: [
        'Underwent comprehensive hands-on development training covering the full MERN stack.',
        'Built full-stack CRUD applications, learning relational and non-relational database design with MongoDB and MySQL.',
        'Implemented global client-side state management using Redux Toolkit and React Context API.',
        'Tested and documented RESTful API endpoints using Postman.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'Redux Toolkit', 'Postman']
    }
  ]

  const total = experiences.length

  const handleNext = () => {
    playClickSound(true)
    setDirection(1)
    setActiveMilestone((prev) => (prev + 1) % total)
  }

  const handlePrev = () => {
    playClickSound(true)
    setDirection(-1)
    setActiveMilestone((prev) => (prev - 1 + total) % total)
  }

  const selectMilestone = (idx) => {
    if (idx === activeMilestone) return
    playClickSound(true)
    setDirection(idx > activeMilestone ? 1 : -1)
    setActiveMilestone(idx)
  }

  // Keyboard navigation for Experience slider
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement?.tagName === 'INPUT') return
      // Only handle if in viewport or focused
      if (e.key === 'ArrowRight' && document.getElementById('experience')?.getBoundingClientRect().top < window.innerHeight / 2) {
        handleNext()
      } else if (e.key === 'ArrowLeft' && document.getElementById('experience')?.getBoundingClientRect().top < window.innerHeight / 2) {
        handlePrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeMilestone])

  const current = experiences[activeMilestone]

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  }

  return (
    <section
      id="experience"
      className={`py-16 md:py-24 px-5 md:px-10 border-t transition-colors duration-300 relative ${
        darkMode ? 'bg-[#090b11] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Work Experience
              </h2>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                darkMode ? 'bg-slate-800/80 border-slate-700 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
              }`}>
                <Milestone className="w-3.5 h-3.5 text-blue-500" />
                <span>Career Timeline Slider</span>
              </div>
            </div>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Navigate through professional career milestones and engineering roles.
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-2 self-center md:self-auto">
            <span className={`text-xs font-mono font-semibold px-2.5 py-1.5 rounded-lg border ${
              darkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              Milestone <span className="text-blue-500 font-bold">{activeMilestone + 1}</span> of {total}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous Milestone"
              className={`p-2 rounded-lg border transition cursor-pointer ${
                darkMode
                  ? 'bg-slate-850 border-slate-750 text-slate-200 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Milestone"
              className={`p-2 rounded-lg border transition cursor-pointer ${
                darkMode
                  ? 'bg-slate-850 border-slate-750 text-slate-200 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestone Timeline Rail Navigation */}
        <div className="mb-8 relative">
          {/* Background Connecting Line */}
          <div className={`hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 ${
            darkMode ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {experiences.map((exp, idx) => {
              const isActive = idx === activeMilestone
              return (
                <button
                  key={exp.id}
                  onClick={() => selectMilestone(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? 'border-blue-500 ring-2 ring-blue-500/20 ' + (darkMode ? 'bg-slate-850 shadow-lg shadow-black/30' : 'bg-blue-50/70 shadow-md')
                      : darkMode
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600 shadow-sm'
                  }`}
                >
                  {/* Top indicator & date */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : darkMode
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="text-xs font-mono font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Company & Role */}
                  <div>
                    <h4 className={`text-base font-bold ${
                      isActive 
                        ? (darkMode ? 'text-white' : 'text-slate-900') 
                        : (darkMode ? 'text-slate-300' : 'text-slate-700')
                    }`}>
                      {exp.role}
                    </h4>
                    <p className="text-xs text-blue-500 font-medium flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3" />
                      {exp.company}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Milestone Detail Slider Card */}
        <div className="relative overflow-hidden rounded-2xl min-h-[380px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50
                if (offset.x < -swipeThreshold || velocity.x < -300) {
                  handleNext()
                } else if (offset.x > swipeThreshold || velocity.x > 300) {
                  handlePrev()
                }
              }}
              className={`w-full rounded-2xl p-6 sm:p-8 md:p-9 border shadow-xl flex flex-col justify-between cursor-grab active:cursor-grabbing select-none ${
                darkMode
                  ? 'bg-slate-850/90 border-slate-800 shadow-black/40 backdrop-blur-md'
                  : 'bg-white border-slate-200/90 shadow-slate-200/60'
              }`}
            >
              {/* Card Header */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="p-2 rounded-lg bg-blue-600/10 text-blue-500">
                        <Briefcase className="w-5 h-5 text-blue-500" />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                        {current.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium mt-2">
                      <span className="font-semibold text-blue-500 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {current.company}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className={`flex items-center gap-1 text-xs ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {current.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 self-start sm:self-auto">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border bg-slate-100 dark:bg-slate-800 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{current.period}</span>
                    </div>
                    {current.isCurrent && (
                      <span className="text-[11px] font-semibold text-emerald-500 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Full-time Commercial Role
                      </span>
                    )}
                  </div>
                </div>

                {/* Tagline / Subtitle */}
                {current.tagline && (
                  <p className={`text-xs sm:text-sm font-medium italic mb-4 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    "{current.tagline}"
                  </p>
                )}

                {/* Key Points / Achievements */}
                <div className="mb-6">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {current.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className={`text-xs sm:text-sm leading-relaxed flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                          darkMode 
                            ? 'hover:bg-slate-800/40 text-slate-300' 
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Core Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {current.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                          darkMode 
                            ? 'bg-slate-800 text-slate-200 border border-slate-700/60' 
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Footer Navigation */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={handlePrev}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border transition cursor-pointer ${
                    darkMode
                      ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                      : 'border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm'
                  }`}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous Milestone</span>
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-1.5">
                  {experiences.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectMilestone(idx)}
                      aria-label={`Go to milestone ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeMilestone 
                          ? 'w-6 bg-blue-600' 
                          : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border transition cursor-pointer ${
                    darkMode
                      ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                      : 'border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm'
                  }`}
                >
                  <span>Next Milestone</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default Experience
