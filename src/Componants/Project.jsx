import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  ExternalLink, 
  Search, 
  Layers, 
  ChevronLeft, 
  ChevronRight,
  Globe,
  Sparkles
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
  
  // Default to index 0 (MERN E-Commerce Platform) so visitors immediately see a live full-stack flagship project
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  const projects = [
    {
      id: 1,
      badgeNumber: "01",
      title: "MERN E-Commerce Platform",
      category: "Full Stack / MERN",
      categoryShort: "FULL STACK / MERN",
      description: "Full-featured online storefront built end-to-end with JWT role-based authentication, smart catalog filtering, persistent Redux Toolkit cart & checkout flows, and an admin dashboard for inventory and order management.",
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT'],
      codeLink: 'https://github.com/sahbaj-dollop/ecommerce',
      demoLink: 'https://ecommerce-62.vercel.app/',
      image: Ecommerce,
      hasArchitecture: true,
      stats: 'Live Storefront • Redux Cart • Admin Dashboard',
      tag: 'Featured'
    },
    {
      id: 2,
      badgeNumber: "02",
      title: "Kids Code Editor (Blockly IDE)",
      category: "Frontend & Next.js",
      categoryShort: "FRONTEND & NEXT.JS",
      description: "Interactive browser-based coding studio pairing Next.js, Google Blockly, and Monaco Editor. Learners assemble drag-and-drop logic blocks that compile into clean, live JavaScript inside an isolated execution sandbox.",
      technologies: ['React', 'Next.js', 'TypeScript', 'Monaco Editor', 'Blockly', 'Tailwind CSS'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '',
      image: blockly,
      hasArchitecture: true,
      stats: 'Visual Blockly + Monaco • Real-Time JS Output',
      tag: 'Interactive'
    },
    {
      id: 3,
      badgeNumber: "03",
      title: "School Management System",
      category: "Frontend & Next.js",
      categoryShort: "FRONTEND & NEXT.JS",
      description: "Role-based institutional web portal engineered to centralize student analytics, course enrollments, attendance tracking, and faculty communication inside a clean, responsive dashboard.",
      technologies: ['React', 'Tailwind CSS', 'REST APIs', 'JavaScript', 'Axios'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '',
      image: pschool,
      hasArchitecture: true,
      stats: 'Role-Based Portal • Analytics • Enrollment Flows',
      tag: 'Enterprise'
    },
    {
      id: 4,
      badgeNumber: "04",
      title: "Blog-Space Publishing Platform",
      category: "Full Stack / MERN",
      categoryShort: "FULL STACK / MERN",
      description: "Full-stack content publishing platform featuring a live Markdown editor, category & tag search, cloud-backed MongoDB persistence, and fast, SEO-ready reading views deployed on Vercel.",
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
      codeLink: 'https://github.com/sahbaj-dollop/Blog-App',
      demoLink: 'https://blog-app-2fvi.vercel.app/',
      image: blog,
      hasArchitecture: true,
      stats: 'Live Demo • Markdown CMS • Cloud Persistence',
      tag: 'Production'
    },
    {
      id: 5,
      badgeNumber: "05",
      title: "Student Records Portal",
      category: "Full Stack / MERN",
      categoryShort: "FULL STACK / MERN",
      description: "High-speed academic records and enrollment lifecycle portal powered by Node.js, Express, and indexed MongoDB schemas for reliable CRUD workflows and rapid search.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://studentapp-six-kappa.vercel.app/",
      image: zoho,
      hasArchitecture: false,
      stats: 'Live Portal • REST APIs • Indexed MongoDB',
      tag: 'Portal'
    },
    {
      id: 6,
      badgeNumber: "06",
      title: "Weather Analytics Web App",
      category: "Utilities",
      categoryShort: "UTILITIES",
      description: "Responsive geolocation-aware weather dashboard powered by the OpenWeather API, featuring adaptive atmospheric visuals, instant city lookups, and local caching for fast refreshes.",
      technologies: ["JavaScript", "OpenWeather API", "HTML5", "CSS3"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://weathernow-62.netlify.app/",
      image: weather,
      hasArchitecture: false,
      stats: 'Live App • Geolocation • Real-Time Forecasts',
      tag: 'Utility'
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

  const total = filteredProjects.length
  const safeIndex = Math.min(currentIndex, Math.max(0, total - 1))
  const currentProject = filteredProjects[safeIndex] || filteredProjects[0]

  const handleNext = useCallback(() => {
    if (total <= 1) return
    playClickSound(true)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const handlePrev = useCallback(() => {
    if (total <= 1) return
    playClickSound(true)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

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
    }, 6000)
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
  }, [handleNext, handlePrev])

  // Slide animation variants - physical seamless slide from right/left
  const slideVariants = {
    enter: (dir) => ({
      x: dir >= 0 ? '100%' : '-100%',
      opacity: 0.2,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir >= 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    })
  }

  const formattedIndex = String(safeIndex + 1).padStart(2, '0')
  const formattedTotal = String(total).padStart(2, '0')

  return (
    <section
      id="projects"
      className={`py-16 sm:py-24 border-t relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#070a0e] border-[rgba(171,201,203,0.18)] text-white' : 'bg-[#eef5f6] border-[#abc9cb]/60 text-[#081014]'
      }`}
    >
      {/* ── Background Ambient Lighting Effects ── */}
      {/* Left Warm Amber/Orange Atmospheric Glow */}
      <div 
        className={`absolute top-20 left-[-6%] w-[620px] h-[620px] rounded-full pointer-events-none blur-[150px] transition-opacity ${
          darkMode ? 'opacity-55' : 'opacity-20'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(244,91,11,0.5) 0%, rgba(244,91,11,0.12) 50%, transparent 80%)'
        }}
      />
      {/* Right Electric Cyan Atmospheric Glow */}
      <div 
        className={`absolute top-20 right-[-6%] w-[620px] h-[620px] rounded-full pointer-events-none blur-[150px] transition-opacity ${
          darkMode ? 'opacity-45' : 'opacity-18'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.45) 0%, rgba(0,210,255,0.1) 50%, transparent 80%)'
        }}
      />

      <div className="site-container relative z-10" ref={containerRef}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 ${
            darkMode ? 'text-white' : 'text-[#081014]'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xs sm:text-sm font-semibold ${
            darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'
          }`}>
            Production-ready web apps showcasing full-stack architecture, clean UX, and real business impact.
          </p>
        </motion.div>

        {/* ── Top Bar: Filter Tabs (Left) & Search Input (Right) ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClickSound(true)
                    setActiveCategory(cat)
                    setCurrentIndex(0)
                  }}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-white shadow-lg shadow-[#f45b0b]/40'
                      : darkMode
                      ? 'bg-[#121a24]/75 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md'
                      : 'bg-white text-slate-700 hover:text-[#081014] border border-[#abc9cb] shadow-sm hover:border-[#f45b0b]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-[#f45b0b] z-0"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 self-start md:self-auto">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-400' : 'text-[#abc9cb]'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentIndex(0)
              }}
              placeholder="Search projects..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm outline-none transition-all duration-200 ${
                darkMode
                  ? 'bg-[#121a24]/75 border border-white/10 text-white placeholder-slate-400 focus:border-[#f45b0b] focus:ring-1 focus:ring-[#f45b0b]/40 backdrop-blur-md'
                  : 'bg-white border border-[#abc9cb] text-[#081014] placeholder-slate-500 focus:border-[#f45b0b] shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* ── Empty State ── */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-3xl border ${
            darkMode ? 'bg-[#0e1622]/80 border-white/10 text-slate-400' : 'bg-white border-[#abc9cb] text-slate-600'
          }`}>
            <p className="text-sm mb-3">No projects matched your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
              className="text-xs font-bold text-[#f45b0b] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div 
            className="flex flex-col gap-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* ── Main Featured Showcase Card with Subtle Glass Effect ── */}
            <div className="relative">
              
              {/* Outer atmospheric edge gradient */}
              <div 
                className="absolute -inset-[1px] rounded-[30px] opacity-35 blur-[2px] pointer-events-none"
                style={{
                  background: darkMode 
                    ? 'linear-gradient(135deg, rgba(244,91,11,0.25) 0%, rgba(56,189,248,0.28) 60%, rgba(244,91,11,0.15) 100%)'
                    : 'linear-gradient(135deg, rgba(244,91,11,0.18) 0%, rgba(171,201,203,0.35) 100%)'
                }}
              />

              {/* The Master Glass Card Container */}
              <div 
                className="relative rounded-[30px] overflow-hidden transition-all duration-300"
                style={{
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(20, 32, 46, 0.72) 0%, rgba(12, 20, 30, 0.85) 50%, rgba(8, 14, 22, 0.92) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 250, 0.9) 100%)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: darkMode ? '1px solid rgba(171, 201, 203, 0.22)' : '1px solid rgba(171, 201, 203, 0.7)',
                  boxShadow: darkMode
                    ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 24px 55px -15px rgba(0, 0, 0, 0.7)'
                    : '0 20px 50px -15px rgba(171,201,203,0.35)'
                }}
              >
                
                {/* Subtle Top-Right Cyan Glow */}
                <div 
                  className="absolute -top-12 -right-12 w-56 h-44 rounded-full pointer-events-none blur-2xl opacity-25"
                  style={{
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)'
                  }}
                />

                {/* Subtle top edge specular reflection */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

                {/* Auto-Play Progress Bar (pauses on hover) */}
                {total > 1 && !isHovered && (
                  <motion.div
                    key={`progress-${currentProject.id}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#f45b0b] via-[#ff8c42] to-cyan-400/80 z-20 pointer-events-none"
                  />
                )}

                <div className="relative min-h-[540px] sm:min-h-[500px] lg:min-h-[460px] flex items-center">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
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
                      className="w-full p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-11 select-none cursor-grab active:cursor-grabbing relative z-10"
                    >
                    
                    {/* ── Left Column: Realistic Browser Mockup Frame (Image 2 style) ── */}
                    <div className="w-full lg:w-[54%] shrink-0">
                      <div className={`rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 group ${
                        darkMode 
                          ? 'bg-[#090f16]/90 border-white/20 shadow-black/80 backdrop-blur-md' 
                          : 'bg-[#18222d] border-slate-700 shadow-slate-400/20'
                      }`}>
                        
                        {/* Browser Window Chrome */}
                        <div className="px-4 py-2.5 bg-[#0b131c]/90 border-b border-white/10 flex items-center justify-between gap-3">
                          {/* Traffic light dots */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                          </div>

                          {/* URL Bar Simulator */}
                          <div className="flex-1 max-w-[280px] sm:max-w-xs mx-auto">
                            <div className="w-full px-3 py-0.5 rounded-md bg-[#05090e]/80 border border-white/10 flex items-center justify-center gap-1.5 text-[11px] text-slate-300 font-mono truncate">
                              <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                              <span className="truncate">
                                {currentProject.demoLink 
                                  ? currentProject.demoLink.replace(/^https?:\/\//, '').replace(/\/$/, '')
                                  : `${currentProject.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app`
                                }
                              </span>
                            </div>
                          </div>

                          {/* Right mini indicator */}
                          <div className="w-8 shrink-0 flex justify-end gap-1 text-[10px] text-slate-500 font-mono">
                            <span>⌘</span>
                          </div>
                        </div>

                        {/* Browser Viewport Area (Image + Badges) */}
                        <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-slate-950">
                          <img
                            src={currentProject.image}
                            alt={`${currentProject.title} — ${currentProject.category} web application preview`}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Top-Left Badge: "Latest" / "Production" */}
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span className="px-3.5 py-1 rounded-full text-[11px] font-bold bg-[#f45b0b] text-white shadow-md shadow-[#f45b0b]/40 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              {currentProject.tag || 'Latest'}
                            </span>
                          </div>

                          {/* Bottom Glass Overlay Pill */}
                          {currentProject.stats && (
                            <div className="absolute bottom-3 inset-x-3 flex justify-center pointer-events-none">
                              <span className="px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#070d14]/85 text-slate-100 border border-white/20 backdrop-blur-md shadow-lg truncate max-w-[94%]">
                                {currentProject.stats}
                              </span>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* ── Right Column: Project Details & Action Buttons ── */}
                    <div className="w-full lg:w-[46%] flex flex-col justify-between items-start text-left">
                      
                      {/* Kicker: e.g. 01 / 06 - FULL STACK / MERN */}
                      <div className="mb-2">
                        <span className={`text-xs sm:text-sm font-extrabold tracking-wider font-mono ${
                          darkMode ? 'text-slate-200' : 'text-slate-700'
                        }`}>
                          {currentProject.badgeNumber || formattedIndex} / {formattedTotal} - {currentProject.categoryShort || currentProject.category.toUpperCase()}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className={`text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight leading-tight mb-3 ${
                        darkMode ? 'text-white' : 'text-[#081014]'
                      }`}>
                        {currentProject.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                        darkMode ? 'text-slate-300/90' : 'text-slate-600'
                      }`}>
                        {currentProject.description}
                      </p>

                      {/* Technology Badges (Frosted glass capsules matching Image 2) */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {currentProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                              darkMode
                                ? 'bg-white/[0.06] backdrop-blur-md text-slate-200 border-white/15 hover:border-cyan-400/50 hover:bg-white/[0.1]'
                                : 'bg-slate-100 text-slate-800 border-slate-300 hover:border-[#f45b0b]'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons Row (Unified clean row) */}
                      <div className="flex flex-wrap items-center gap-3 w-full">
                        {/* Live Demo (Vibrant Orange Button with Glow) */}
                        {currentProject.demoLink ? (
                          <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href={currentProject.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation()
                              playClickSound(true)
                            }}
                            className="btn-sheen inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f45b0b] hover:bg-[#e04f05] text-white font-bold text-xs sm:text-sm shadow-[0_4px_22px_rgba(244,91,11,0.5)] transition-all cursor-pointer group"
                          >
                            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            <span>Live Demo</span>
                          </motion.a>
                        ) : (
                          <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href={currentProject.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation()
                              playClickSound(true)
                            }}
                            className="btn-sheen inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f45b0b] hover:bg-[#e04f05] text-white font-bold text-xs sm:text-sm shadow-[0_4px_22px_rgba(244,91,11,0.5)] transition-all cursor-pointer"
                          >
                            <Code className="w-4 h-4" />
                            <span>Explore Repo</span>
                          </motion.a>
                        )}

                        {/* Source Code (Frosted Glass Button) */}
                        <motion.a
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          href={currentProject.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation()
                            playClickSound(true)
                          }}
                          className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm border transition-all cursor-pointer ${
                            darkMode
                              ? 'bg-white/[0.05] hover:bg-white/[0.1] border-white/20 text-slate-200 hover:text-white backdrop-blur-md'
                              : 'bg-transparent hover:bg-slate-100 border-slate-400 text-slate-800'
                          }`}
                        >
                          <Code className={`w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-slate-700'}`} />
                          <span>Source Code</span>
                        </motion.a>

                        {/* System Flow (Architecture Modal) Button */}
                        {currentProject.hasArchitecture && (
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              playClickSound(true)
                              setSelectedArchitectureProject(currentProject.title)
                            }}
                            className={`inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                              darkMode
                                ? 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-400/30 text-cyan-300 backdrop-blur-md'
                                : 'bg-white hover:bg-[#edf5f6] border-[#abc9cb] text-[#081014] shadow-sm'
                            }`}
                          >
                            <Layers className={`w-3.5 h-3.5 ${darkMode ? 'text-cyan-400' : 'text-[#2c6670]'}`} />
                            <span>Architecture</span>
                          </motion.button>
                        )}
                      </div>

                    </div>

                  </motion.div>
                </AnimatePresence>
                </div>

              </div>

              {/* Subtle Bottom Cyan Accent Flare */}
              <div 
                className={`absolute -bottom-2 left-[36%] -translate-x-1/2 w-40 sm:w-52 h-2.5 rounded-full blur-[7px] pointer-events-none z-20 ${
                  darkMode ? 'opacity-45' : 'opacity-20'
                }`}
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 229, 255, 0.85) 0%, rgba(56, 189, 248, 0.4) 45%, transparent 80%)'
                }}
              />
            </div>

            {/* ── Navigation Arrows Row (Above Thumbnails on Right) ── */}
            <div className="flex items-center justify-end gap-2 px-1">
              <button
                onClick={handlePrev}
                aria-label="Previous Project"
                className={`w-9 h-9 rounded-full border transition-all duration-200 flex items-center justify-center cursor-pointer ${
                  darkMode
                    ? 'bg-[#101824]/80 border-white/15 text-slate-300 hover:text-white hover:border-[#f45b0b] backdrop-blur-md'
                    : 'bg-white border-[#abc9cb] text-slate-700 hover:border-[#f45b0b] shadow-sm'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Project"
                className={`w-9 h-9 rounded-full border transition-all duration-200 flex items-center justify-center cursor-pointer ${
                  darkMode
                    ? 'bg-[#101824]/80 border-white/15 text-slate-300 hover:text-white hover:border-[#f45b0b] backdrop-blur-md'
                    : 'bg-white border-[#abc9cb] text-slate-700 hover:border-[#f45b0b] shadow-sm'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* ── Bottom Thumbnail Track (Timeline / Carousel) ── */}
            <div className="relative pt-1 pb-3">
              {/* Horizontal timeline connecting accent line */}
              <div 
                className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 pointer-events-none z-0 hidden sm:block"
                style={{
                  background: 'linear-gradient(90deg, rgba(244,91,11,0.2) 0%, rgba(56,189,248,0.25) 50%, rgba(244,91,11,0.2) 100%)'
                }}
              />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
                {filteredProjects.map((proj, idx) => {
                  const isActive = idx === safeIndex
                  return (
                    <motion.button
                      key={proj.id}
                      onClick={() => goToSlide(idx)}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative group text-left p-1.5 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                        isActive
                          ? 'border-2 border-[#f45b0b] shadow-[0_0_20px_rgba(244,91,11,0.55)] ' + (darkMode ? 'bg-[#121a24]/90' : 'bg-white')
                          : darkMode
                          ? 'bg-[#0d141d]/75 border-white/15 hover:border-white/35 opacity-75 hover:opacity-100 backdrop-blur-sm'
                          : 'bg-white/90 border-[#abc9cb] hover:border-[#f45b0b] opacity-85 hover:opacity-100 shadow-sm'
                      }`}
                    >
                      {/* Thumbnail Image Viewport */}
                      <div className="w-full h-14 sm:h-16 rounded-lg overflow-hidden bg-slate-900 relative">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className={`w-full h-full object-cover transition-transform duration-300 ${
                            isActive ? 'scale-105' : 'group-hover:scale-105'
                          }`}
                        />

                        {/* Top-Left Badge (01, 02, etc.) */}
                        <div className="absolute top-1 left-1">
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                            isActive
                              ? 'bg-[#f45b0b] text-white'
                              : 'bg-black/80 text-slate-300 border border-white/10'
                          }`}>
                            {proj.badgeNumber || String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Project Title Label */}
                      <div className="pt-1.5 px-0.5">
                        <p className={`text-[11px] font-bold truncate leading-tight ${
                          isActive 
                            ? 'text-[#f45b0b]' 
                            : darkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-[#081014]'
                        }`}>
                          {proj.title}
                        </p>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
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