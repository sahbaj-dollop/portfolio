import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  ExternalLink, 
  Search, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  FolderGit2
} from 'lucide-react'
import Ecommerce from '../../public/image.png'
import weather from '../../public/image copy 2.png'
import blog from '../../public/image copy 3.png'
import blockly from '../../public/image copy 4.png'
import pschool from '../../public/p-school.jpg'
import zoho from '../../public/school-management-software-zoho.png'
import { useTheme } from '../Context/ThemeContext'
import ArchitectureModal from './ArchitectureModal'
import { playClickSound } from '../utils/soundEffects'

const Project = () => {
  const { darkMode } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArchitectureProject, setSelectedArchitectureProject] = useState(null)
  
  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Kids Code Editor (Blockly IDE)",
      category: "Frontend & Next.js",
      description: "An interactive visual programming playground built with Next.js, Google Blockly, and Monaco Editor. Allows young students to assemble drag-and-drop blocks to generate clean JavaScript code in real time.",
      technologies: ['React', 'Next.js', 'TypeScript', 'Monaco Editor', 'Blockly', 'Tailwind CSS'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '',
      image: blockly,
      hasArchitecture: true,
      stats: 'Drag & Drop Blocks • Real-time Output'
    },
    {
      id: 2,
      title: "MERN E-Commerce Platform",
      category: "Full Stack / MERN",
      description: "A complete full-stack e-commerce web application featuring user authentication, product catalog filtering, cart state management using Redux Toolkit, and a comprehensive admin dashboard for inventory management.",
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT'],
      codeLink: 'https://github.com/sahbaj-dollop/ecommerce',
      demoLink: 'https://ecommerce-62.vercel.app/',
      image: Ecommerce,
      hasArchitecture: true,
      stats: 'Redux State • JWT Auth • Cart & Checkout'
    },
    {
      id: 3,
      title: "School Management System",
      category: "Frontend & Next.js",
      description: "A comprehensive web platform engineered for educational institutions to manage student analytics, course enrollments, attendance records, and faculty communication.",
      technologies: ['React', 'Tailwind CSS', 'REST APIs', 'JavaScript', 'Axios'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '',
      image: pschool,
      hasArchitecture: true,
      stats: 'Student Analytics • Course & Records'
    },
    {
      id: 4,
      title: "Blog-Space Publishing Platform",
      category: "Full Stack / MERN",
      description: "A content publishing platform with markdown post creation, category filtering, search functionality, and persistent cloud storage deployed with high performance on Vercel.",
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
      codeLink: 'https://github.com/sahbaj-dollop/Blog-App',
      demoLink: 'https://blog-app-2fvi.vercel.app/',
      image: blog,
      hasArchitecture: true,
      stats: 'Markdown Editor • Cloud Storage • Fast CRUD'
    },
    {
      id: 5,
      title: "Weather Analytics Web App",
      category: "Utilities",
      description: "A fast, responsive weather forecast application utilizing the OpenWeather API with geolocation detection, dynamic atmospheric visuals, and local caching for high responsiveness.",
      technologies: ["JavaScript", "OpenWeather API", "HTML5", "CSS3"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://weathernow-62.netlify.app/",
      image: weather,
      hasArchitecture: false,
      stats: 'Geolocation • Forecast API • Instant Refresh'
    },
    {
      id: 6,
      title: "Student Records Portal",
      category: "Full Stack / MERN",
      description: "A lightweight CRUD application built with Node.js and MongoDB to manage student enrollment lifecycles and records with fast indexed querying.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://studentapp-six-kappa.vercel.app/",
      image: zoho,
      hasArchitecture: false,
      stats: 'Full CRUD • REST APIs • MongoDB Schema'
    },
  ]

  const categories = ['All', 'Full Stack / MERN', 'Frontend & Next.js', 'Utilities']

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory
    const query = searchQuery.toLowerCase().trim()
    if (!query) return matchesCategory
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  // Keep currentIndex valid when filtering
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory, searchQuery])

  const total = filteredProjects.length

  const handleNext = () => {
    if (total <= 1) return
    playClickSound(true)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  const handlePrev = () => {
    if (total <= 1) return
    playClickSound(true)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  const goToSlide = (idx) => {
    if (idx === currentIndex) return
    playClickSound(true)
    setDirection(idx > currentIndex ? 1 : -1)
    setCurrentIndex(idx)
  }

  // Auto-play timer: runs automatically by default, pauses on hover
  useEffect(() => {
    if (isHovered || total <= 1) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 4500)
    return () => clearInterval(timer)
  }, [isHovered, total])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement?.tagName === 'INPUT') return
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [total])

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0]

  // Slide animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 70 : -70,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.28 },
        scale: { duration: 0.28 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -70 : 70,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  }

  return (
    <section
      id="projects"
      className={`py-16 md:py-24 px-5 md:px-10 border-t transition-colors duration-300 relative ${
        darkMode ? 'bg-[#090b11] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto" ref={containerRef}>

        {/* Section Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                darkMode ? 'bg-slate-800/80 border-slate-700 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
              }`}>
                <FolderGit2 className="w-3.5 h-3.5 text-blue-500" />
                <span>Showcase Slider • {filteredProjects.length} Projects</span>
              </div>
            </div>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Interactive slider showcasing selected full-stack and web applications.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border outline-none transition-all ${
                darkMode 
                  ? 'bg-slate-850 border-slate-750 text-white focus:border-blue-500' 
                  : 'bg-white border-slate-300 text-slate-900 focus:border-blue-500'
              }`}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => {
                  playClickSound(true)
                  setActiveCategory(cat)
                }}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer select-none ${
                  isActive
                    ? 'text-white'
                    : darkMode 
                    ? 'bg-slate-850 text-slate-400 hover:text-white border border-slate-800' 
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-xl bg-blue-600 z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-2xl border ${
            darkMode ? 'bg-slate-850/50 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
          }`}>
            <p className="text-sm mb-3">No projects matched your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
              className="text-xs font-semibold text-blue-500 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          /* Main Project Slider Showcase */
          <div 
            className="flex flex-col gap-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slider Controls Bar */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${
                  darkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  <span className="text-blue-500 font-bold">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
                </span>
                <span className={`text-xs font-medium hidden sm:inline ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {currentProject?.category}
                </span>
              </div>

              {/* Prev / Next navigation */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Project"
                  className={`p-2 rounded-lg border transition cursor-pointer ${
                    darkMode
                      ? 'bg-slate-850 border-slate-750 text-slate-200 hover:bg-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Project"
                  className={`p-2 rounded-lg border transition cursor-pointer ${
                    darkMode
                      ? 'bg-slate-850 border-slate-750 text-slate-200 hover:bg-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slider Main Stage Card */}
            <div className="relative overflow-hidden rounded-2xl min-h-[460px] md:min-h-[420px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentProject.id}
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
                  className={`w-full rounded-2xl p-6 md:p-8 border shadow-xl flex flex-col md:flex-row gap-8 items-stretch cursor-grab active:cursor-grabbing select-none ${
                    darkMode
                      ? 'bg-slate-850/90 border-slate-800 shadow-black/40 backdrop-blur-md'
                      : 'bg-white border-slate-200/90 shadow-slate-200/60'
                  }`}
                >
                  {/* Left Column: Image Banner */}
                  <div className="w-full md:w-1/2 min-h-[220px] sm:min-h-[260px] md:min-h-[320px] rounded-xl overflow-hidden bg-slate-900 relative group shrink-0 border border-slate-800/40">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/85 text-blue-400 border border-slate-700/80 backdrop-blur-md">
                        {currentProject.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      {currentProject.stats && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-950/85 text-slate-300 border border-slate-800 backdrop-blur-md">
                          {currentProject.stats}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Project Info & Actions */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                          Project #{String(currentProject.id).padStart(2, '0')}
                        </span>
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                        }`}>
                          Swipe or use arrows
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                        {currentProject.title}
                      </h3>

                      <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {currentProject.description}
                      </p>

                      {/* Tech stack pills */}
                      <div className="mb-6">
                        <span className={`block text-[11px] font-semibold uppercase tracking-wider mb-2 ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Technologies & Frameworks
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentProject.technologies.map((t) => (
                            <span
                              key={t}
                              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                                darkMode 
                                  ? 'bg-slate-800/90 text-slate-200 border border-slate-700/60' 
                                  : 'bg-slate-100 text-slate-700 border border-slate-200'
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2.5 text-xs font-semibold">
                      {currentProject.hasArchitecture && (
                        <motion.button
                          whileTap={{ scale: 0.96 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            playClickSound(true)
                            setSelectedArchitectureProject(currentProject.title)
                          }}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border transition cursor-pointer ${
                            darkMode 
                              ? 'border-slate-700 hover:bg-slate-800 text-slate-200' 
                              : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5 text-blue-500" />
                          <span>System Flow</span>
                        </motion.button>
                      )}

                      <motion.a
                        whileTap={{ scale: 0.96 }}
                        href={currentProject.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border transition ${
                          darkMode 
                            ? 'border-slate-700 hover:bg-slate-800 text-slate-200' 
                            : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <Code className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </motion.a>

                      {currentProject.demoLink && (
                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={currentProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-sm font-semibold"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pt-2">
              {filteredProjects.map((proj, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={proj.id}
                    onClick={() => goToSlide(idx)}
                    className={`group text-left p-2 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                      isActive
                        ? 'border-blue-500 ring-2 ring-blue-500/20 ' + (darkMode ? 'bg-slate-800/90' : 'bg-blue-50/70')
                        : darkMode
                        ? 'bg-slate-850/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <div className="w-full h-12 rounded-lg overflow-hidden bg-slate-900 relative">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                          isActive ? 'scale-105' : 'group-hover:scale-105 opacity-80'
                        }`}
                      />
                      <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-slate-950/80 text-white">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold truncate leading-tight">
                      {proj.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

      </div>

      {/* Architecture Flow Modal */}
      <ArchitectureModal
        isOpen={Boolean(selectedArchitectureProject)}
        onClose={() => setSelectedArchitectureProject(null)}
        projectTitle={selectedArchitectureProject}
      />
    </section>
  )
}

export default Project
