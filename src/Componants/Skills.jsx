import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Database, Wrench } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Skills = () => {
  const { darkMode } = useTheme()

  const skillGroups = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
        "Tailwind CSS", "HTML5 & CSS3", "Redux Toolkit", "Zustand", "Responsive UI"
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        "Node.js", "Express.js", "RESTful APIs", "JWT Authentication",
        "OAuth2", "WebSockets", "API Middleware", "CORS & Security"
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        "MongoDB", "Mongoose ODM", "MongoDB Atlas", "MySQL",
        "Schema Design", "Database Indexing", "Aggregations"
      ]
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      skills: [
        "Git & GitHub", "Postman", "Thunder Client", "VS Code",
        "Cursor", "Vercel", "Netlify", "npm / yarn"
      ]
    }
  ]

  return (
    <section
      id="skills"
      className={`py-16 md:py-24 px-5 md:px-10 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#090b11] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Skills & Technologies
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Languages, libraries, and tools I use to build full-stack web applications.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className={`p-6 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-850 border-slate-800 hover:border-slate-700 shadow-sm' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border cursor-default select-none ${
                        darkMode 
                          ? 'bg-slate-900 border-slate-750 text-slate-200 hover:border-blue-500/50 hover:text-white' 
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-500/50 hover:text-blue-600'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills
