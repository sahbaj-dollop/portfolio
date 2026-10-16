import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'
import { Sparkles } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'
import { playHoverSound } from '../utils/soundEffects'

const Experience = () => {
  const { darkMode, recruiterMode, soundEnabled } = useTheme()

  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Dollop Infotech Indore M.P.',
      period: '20 Oct 2025 – Present',
      status: 'Present Work',
      isPrimaryRecruiterFocus: true,
      points: [
        'Architected and deployed responsive, high-performance web applications utilizing React 19, Next.js, and Tailwind CSS.',
        'Engineered secure, scalable RESTful APIs with Node.js, Express.js, and MongoDB for high-volume client communications.',
        'Optimized frontend bundle sizes and component render cycles, enhancing application performance and Lighthouse scores.',
        'Streamlined team collaboration and code quality through structured Git/GitHub version control workflows and code reviews.'
      ],
      tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'Git']
    },
    {
      id: 2,
      role: 'Full Stack Trainee',
      company: 'Placement Adda Indore M.P.',
      period: 'Feb 2025 – Oct 2025',
      status: 'Completed',
      isPrimaryRecruiterFocus: false,
      points: [
        'Designed end-to-end full-stack web applications featuring dynamic UI components and robust backend services.',
        'Constructed database schemas and optimized relational/non-relational queries using MongoDB Atlas and MySQL.',
        'Mastered advanced state management (Redux Toolkit, Context API) and client-side data caching techniques.',
        'Collaborated in agile development sprints, producing clean, maintainable, and well-documented codebases.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JavaScript', 'HTML/CSS', 'Git']
    }
  ]

  const textMuted = darkMode ? 'text-gray-400' : 'text-[#191970]'
  const cardStyle = darkMode
    ? 'bg-[#0f1226] border border-[#191970]/40 text-white hover:border-[#2b3154]/50'
    : 'bg-[#F5F5DC] border border-[#2b3154]/20 text-[#191970] hover:border-[#2b3154]/50 shadow-md'

  return (
    <section
      id="experience"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
        darkMode ? 'bg-[#0b0e1b]' : 'bg-gradient-to-b from-[#191970]/5 via-[#F5F5DC] to-[#2b3154]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-extrabold text-3xl md:text-5xl mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-[#191970]'}`}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <span className="block h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#191970] to-[#2b3154] mb-6" />
          <p className={`text-base md:text-xl max-w-2xl mx-auto ${textMuted}`}>
            My professional journey and hands-on experience in full-stack web development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[#191970]/40 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => playHoverSound(soundEnabled)}
            >
              {/* Icon Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-gradient-to-r from-[#191970] to-[#2b3154] text-white flex items-center justify-center shadow-lg shadow-[#2b3154]/30 z-10">
                <FaBriefcase className="text-sm" />
              </div>

              {/* Card */}
              <div className={`p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 relative ${cardStyle} ${
                recruiterMode && exp.isPrimaryRecruiterFocus
                  ? 'ring-2 ring-[#2b3154] shadow-2xl shadow-[#2b3154]/20'
                  : ''
              }`}>
                {recruiterMode && exp.isPrimaryRecruiterFocus && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2b3154] text-white font-extrabold text-xs mb-3 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recruiter Highlight ⚡ Primary Active Position</span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#2b3154] mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-base font-semibold">
                      <FaBuilding className="text-[#191970] dark:text-[#2b3154]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full bg-[#2b3154]/15 text-[#2b3154] border border-[#2b3154]/30">
                      <FaCalendarAlt />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className={`flex items-start gap-3 text-sm md:text-base leading-relaxed ${textMuted}`}>
                      <FaCheckCircle className="text-[#2b3154] mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#191970]/20">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#191970]/15 text-[#2b3154] border border-[#2b3154]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
