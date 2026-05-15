import React from 'react'
import { motion } from 'framer-motion'
import student from '../../public/download.webp'
import Ecommerce from '../../public/image.png'
import Quizz from '../../public/quiz-app-design.png'
import weather from '../../public/image copy 2.png'
import blog from '../../public/image copy 3.png'
import blockly from '../../public/image copy 4.png'
import { useTheme } from '../Context/ThemeContext'
import { image } from 'framer-motion/client'

const Project = () => {
  const { darkMode } = useTheme()

  const projects = [
    {
      id:1,
      title:"Blog-Space",
      description:"Discover Amazing Stories Read, write, and connect with writers from around the world.",
      technologies:['React Js','Node js','Express Js','MongoDB','Vercel','Atlas'],
      codeLink:'https://github.com/shahbazkhan075/Blog-App',
      demoLink:'https://blog-app-2fvi.vercel.app/',
      image:blog
    },
    {
      id:2,
      title:"Kids Coding Plateform",
      description:"A kids Coding plateform like blockly.com its kids friendly coding plateform where kids can drag and drop the block in workspace and workspace auto generate the code that block.",
      technologies:['Next js','TypeScript','Monaco','Tree sitter','Tailwind Css'],
      codeLink:'',
      demoLink:'',
      image:blockly

    },
    {
      id: 3,
      title: "Student Details",
      description:
        "Store basic information of students with update and delete functionality.",
      technologies: ["Node.js", "MongoDB", "Express"],
      codeLink: "https://github.com/yourusername/project1",
      demoLink: "https://studentapp-six-kappa.vercel.app/",
      image: student
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "A responsive e-commerce platform with product listing and modern UI.",
      technologies: ["HTML", "CSS"],
      codeLink: "https://github.com/shahbazkhan075/ecommerce",
      demoLink: "https://ecommerce-62.vercel.app/",
      image: Ecommerce
    },
    {
      id: 5,
      title: "Quiz App",
      description:
        "Interactive quiz application with score tracking and clean UI.",
      technologies: ["React", "Tailwind CSS"],
      codeLink: "https://github.com/shahbazkhan075/quizApp",
      demoLink: "#",
      image: Quizz
    },
    {
      id: 6,
      title: "Weather App",
      description:
        "Weather application with real-time data using OpenWeather API.",
      technologies: ["JavaScript", "API", "HTML & CSS"],
      codeLink: "https://github.com/shahbazkhan075",
      demoLink: "https://weathernow-62.netlify.app/",
      image: weather
    },
    
  ]

  const cardBg = darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600'
  const sectionBg = darkMode ? 'bg-gray-900' : 'bg-gray-50'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        <h1 className={`font-bold text-3xl md:text-4xl mb-4 ${mutedText}`}>
          Featured Projects
        </h1>
        <p className={`text-base md:text-xl ${mutedText}`}>
          Here are some of my recent projects that showcase my skills and expertise
        </p>
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
          {projects.map(project => (
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
                      className="px-3 py-1 bg-blue-600/20 text-blue-500 text-sm font-medium rounded-full"
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
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-blue-600 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
              window.open("https://github.com/shahbazkhan075", "_blank")
            }
            className="px-6 py-3 border-2 border-blue-600 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
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
