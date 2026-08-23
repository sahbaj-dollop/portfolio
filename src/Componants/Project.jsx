import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, ExternalLink, Search, Workflow, Sparkles } from 'lucide-react'
import student from '../../public/download.webp'
import Ecommerce from '../../public/image.png'
import Quizz from '../../public/quiz-app-design.png'
import weather from '../../public/image copy 2.png'
import blog from '../../public/image copy 3.png'
import blockly from '../../public/image copy 4.png'
import pschool from '../../public/p-school.jpg'
import zoho from '../../public/school-management-software-zoho.png'
import { useTheme } from '../Context/ThemeContext'
import ArchitectureModal from './ArchitectureModal'
import { playClickSound, playHoverSound, playModalSound } from '../utils/soundEffects'

const Project = () => {
  const { darkMode, recruiterMode, soundEnabled } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArchitectureProject, setSelectedArchitectureProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Kids Code Editor",
      category: "Frontend & Next.js",
      description: "Architected an interactive, drag-and-drop Blockly visual programming suite for kids. Integrated VS Code Monaco Editor, real-time syntax parsing with Tree-sitter, and Next.js for high-speed execution.",
      technologies: ['React', 'Next.js', 'TypeScript', 'Monaco Editor', 'Tree-sitter', 'Tailwind CSS'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '#',
      image: blockly,
      isTopRecruiterProject: true
    },
    {
      id: 2,
      title: "P-School Web Application",
      category: "Frontend & Next.js",
      description: "Engineered a comprehensive ed-tech platform frontend powering interactive learning modules, student analytics, dynamic course enrollment, and fluid REST API integrations built on React & Tailwind CSS.",
      technologies: ['React', 'Tailwind CSS', 'REST APIs', 'JavaScript'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '#',
      image: pschool,
      isTopRecruiterProject: false
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "Full Stack / MERN",
      description: "Built a production-grade full-stack MERN e-commerce application featuring JWT authentication, role-based admin controls, dynamic cart management, and payment gateway integration.",
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      codeLink: 'https://github.com/sahbaj-dollop/ecommerce',
      demoLink: 'https://ecommerce-62.vercel.app/',
      image: Ecommerce,
      isTopRecruiterProject: true
    },
    {
      id: 4,
      title: "Blog-Space",
      category: "Full Stack / MERN",
      description: "Designed a full-stack publishing ecosystem enabling real-time article creation, rich text formatting, tag filtering, user profiles, and cloud database persistence deployed on Vercel.",
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'Atlas'],
      codeLink: 'https://github.com/sahbaj-dollop/Blog-App',
      demoLink: 'https://blog-app-2fvi.vercel.app/',
      image: blog,
      isTopRecruiterProject: false
    },
    {
      id: 5,
      title: "Weather App",
      category: "Utilities",
      description: "Developed a sleek real-time weather analytics application featuring geolocation tracking, dynamic atmospheric forecast visuals, and live OpenWeather REST API data processing.",
      technologies: ["JavaScript", "OpenWeather API", "HTML & CSS"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://weathernow-62.netlify.app/",
      image: weather,
      isTopRecruiterProject: false
    },
    {
      id: 6,
      title: "Student Details",
      category: "Full Stack / MERN",
      description: "Engineered a full-stack CRUD student lifecycle management portal with Node.js, Express, and MongoDB, delivering optimized database querying, data validation, and real-time record synchronization.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://studentapp-six-kappa.vercel.app/",
      image: zoho,
      isTopRecruiterProject: false
    },
  ]

  const categories = ['All', 'Full Stack / MERN', 'Frontend & Next.js', 'Utilities']

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  const cardBg = darkMode ? 'bg-[#0f1226] border border-[#3B4371]/40 text-white' : 'bg-white border border-[#F3904F]/20 text-gray-800'
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600'
  const sectionBg = darkMode ? 'bg-[#0b0e1b]' : 'bg-gradient-to-b from-[#F3904F]/5 via-white to-transparent'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id="projects"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${sectionBg}`}
    >
      {/* Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`font-extrabold text-3xl md:text-5xl mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <span className="block h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#3B4371] to-[#F3904F] mb-6" />
        <p className={`text-base md:text-xl max-w-2xl mx-auto ${mutedText}`}>
          Here are some of my recent projects that showcase my skills and expertise
        </p>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto relative mt-6">
          <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech, keyword (e.g. React, MongoDB)..."
            className={`w-full pl-12 pr-4 py-3 rounded-full text-xs md:text-sm outline-none transition-all ${
              darkMode
                ? 'bg-[#0f1226] border border-[#3B4371]/50 text-white focus:border-[#F3904F]'
                : 'bg-white border border-gray-200 text-gray-800 focus:border-[#F3904F] shadow-sm'
            }`}
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                playClickSound(soundEnabled)
                setActiveCategory(cat)
              }}
              onMouseEnter={() => playHoverSound(soundEnabled)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#3B4371] to-[#F3904F] text-white shadow-lg shadow-[#F3904F]/30 glow-orange'
                  : darkMode
                  ? 'bg-[#0f1226] border border-[#3B4371]/40 text-gray-400 hover:text-white hover:border-[#F3904F]/50'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-[#F3904F] hover:border-[#F3904F]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative ${cardBg} ${
                recruiterMode && project.isTopRecruiterProject
                  ? 'ring-2 ring-[#F3904F] shadow-2xl shadow-[#F3904F]/20'
                  : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onMouseEnter={() => playHoverSound(soundEnabled)}
            >
              {/* Recruiter Spotlight Badge */}
              {recruiterMode && project.isTopRecruiterProject && (
                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-[#F3904F] text-white font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-[#F3904F]/40 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Recruiter Spotlight ⚡</span>
                </div>
              )}

              {/* Image */}
              <div className="h-48 md:h-56 overflow-hidden relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {project.title}
                  </h2>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#3B4371]/20 text-[#F3904F] border border-[#F3904F]/30">
                    {project.category}
                  </span>
                </div>

                <p className={`${mutedText} mb-4 text-sm md:text-base leading-relaxed`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-[#3B4371]/15 text-[#F3904F] border border-[#F3904F]/30 text-xs md:text-sm font-medium rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons Action Bar */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <motion.button
                    onClick={() => {
                      playModalSound(soundEnabled)
                      setSelectedArchitectureProject(project.title)
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 text-center px-3.5 py-2.5 bg-[#3B4371]/20 border border-[#F3904F]/40 text-[#F3904F] rounded-lg hover:bg-[#F3904F] hover:text-white transition font-bold text-xs md:text-sm cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Workflow className="w-4 h-4" />
                    Architecture Flow 🏗️
                  </motion.button>

                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound(soundEnabled)}
                    className="flex-1 flex items-center justify-center gap-1.5 text-center px-3.5 py-2.5 bg-gradient-to-r from-[#3B4371] to-[#F3904F] text-white rounded-lg hover:opacity-95 transition font-bold text-xs md:text-sm shadow-md shadow-[#F3904F]/20"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </motion.a>

                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound(soundEnabled)}
                    className="flex-1 flex items-center justify-center gap-1.5 text-center px-3.5 py-2.5 border border-[#F3904F] text-[#F3904F] rounded-lg hover:bg-[#F3904F] hover:text-white transition font-bold text-xs md:text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => {
              playClickSound(soundEnabled)
              window.open("https://github.com/sahbaj-dollop", "_blank")
            }}
            onMouseEnter={() => playHoverSound(soundEnabled)}
            className="px-6 py-3 border-2 border-[#F3904F] text-[#F3904F] rounded-lg hover:bg-[#F3904F] hover:text-white transition font-semibold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
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

