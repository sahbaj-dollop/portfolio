import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, ExternalLink, Search } from 'lucide-react'
import student from '../../public/download.webp'
import Ecommerce from '../../public/image.png'
import Quizz from '../../public/quiz-app-design.png'
import weather from '../../public/image copy 2.png'
import blog from '../../public/image copy 3.png'
import blockly from '../../public/image copy 4.png'
import pschool from '../../public/p-school.jpg'
import zoho from '../../public/school-management-software-zoho.png'
import { useTheme } from '../Context/ThemeContext'

const Project = () => {
  const { darkMode } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const projects = [
    {
      id: 1,
      title: "Kids Code Editor",
      category: "Frontend & Next.js",
      description: "Architected an interactive, drag-and-drop Blockly visual programming suite for kids. Integrated VS Code Monaco Editor, real-time syntax parsing with Tree-sitter, and Next.js for high-speed execution.",
      technologies: ['React', 'Next.js', 'TypeScript', 'Monaco Editor', 'Tree-sitter', 'Tailwind CSS'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '#',
      image: blockly
    },
    {
      id: 2,
      title: "P-School Web Application",
      category: "Frontend & Next.js",
      description: "Engineered a comprehensive ed-tech platform frontend powering interactive learning modules, student analytics, dynamic course enrollment, and fluid REST API integrations built on React & Tailwind CSS.",
      technologies: ['React', 'Tailwind CSS', 'REST APIs', 'JavaScript'],
      codeLink: 'https://github.com/sahbaj-dollop',
      demoLink: '#',
      image: pschool
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "Full Stack / MERN",
      description: "Built a production-grade full-stack MERN e-commerce application featuring JWT authentication, role-based admin controls, dynamic cart management, and payment gateway integration.",
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      codeLink: 'https://github.com/sahbaj-dollop/ecommerce',
      demoLink: 'https://ecommerce-62.vercel.app/',
      image: Ecommerce
    },
    {
      id: 4,
      title: "Blog-Space",
      category: "Full Stack / MERN",
      description: "Designed a full-stack publishing ecosystem enabling real-time article creation, rich text formatting, tag filtering, user profiles, and cloud database persistence deployed on Vercel.",
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'Atlas'],
      codeLink: 'https://github.com/sahbaj-dollop/Blog-App',
      demoLink: 'https://blog-app-2fvi.vercel.app/',
      image: blog
    },
    {
      id: 5,
      title: "Weather App",
      category: "Utilities",
      description: "Developed a sleek real-time weather analytics application featuring geolocation tracking, dynamic atmospheric forecast visuals, and live OpenWeather REST API data processing.",
      technologies: ["JavaScript", "OpenWeather API", "HTML & CSS"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://weathernow-62.netlify.app/",
      image: weather
    },
    {
      id: 6,
      title: "Student Details",
      category: "Full Stack / MERN",
      description: "Engineered a full-stack CRUD student lifecycle management portal with Node.js, Express, and MongoDB, delivering optimized database querying, data validation, and real-time record synchronization.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      codeLink: "https://github.com/sahbaj-dollop",
      demoLink: "https://studentapp-six-kappa.vercel.app/",
      image: zoho
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

  const cardBg = darkMode ? 'bg-neutral-900 border border-neutral-800 text-white' : 'bg-white border border-orange-100 text-gray-800'
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600'
  const sectionBg = darkMode ? 'bg-black' : 'bg-orange-50/40'

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
        className="text-center max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={`font-bold text-3xl md:text-4xl mb-4 ${mutedText}`}>
          Featured Projects
        </h1>
        <p className={`text-base md:text-xl ${mutedText}`}>
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
                ? 'bg-neutral-900 border border-neutral-800 text-white focus:border-orange-500'
                : 'bg-white border border-gray-200 text-gray-800 focus:border-orange-500 shadow-sm'
            }`}
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30 glow-orange'
                  : darkMode
                  ? 'bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-white hover:border-orange-500/50'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-orange-600 hover:border-orange-300'
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
              className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${cardBg}`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="h-48 md:h-56 overflow-hidden">
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
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className={`${mutedText} mb-4`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-orange-500/10 text-orange-500 border border-orange-500/20 text-sm font-medium rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition font-medium glow-orange"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
            onClick={() =>
              window.open("https://github.com/sahbaj-dollop", "_blank")
            }
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Project
