import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Layers, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const ARCHITECTURE_DATA = {
  "Kids Code Editor (Blockly IDE)": {
    subtitle: "Visual AST Generation & Web Worker Execution Pipeline",
    nodes: [
      {
        id: "client",
        title: "Blockly Studio UI",
        tech: "React 19, Next.js, Blockly Core, Monaco Editor",
        details: "Renders the visual drag-and-drop workspace alongside Monaco Editor, providing real-time two-way synchronization.",
        metrics: "Client-side Sandbox",
        icon: Layers
      },
      {
        id: "parser",
        title: "AST Generator",
        tech: "Web Workers, Abstract Syntax Tree",
        details: "Converts block configurations into executable JavaScript without freezing the browser's main UI thread.",
        metrics: "Isolated Worker Thread",
        icon: Cpu
      },
      {
        id: "backend",
        title: "Snippet Storage API",
        tech: "Node.js, Express REST API, MongoDB",
        details: "Saves and retrieves student projects with user authentication, data validation, and rate limiting.",
        metrics: "RESTful JSON API",
        icon: Database
      },
      {
        id: "hosting",
        title: "Edge Deployment",
        tech: "Vercel, Git CI/CD",
        details: "Continuous deployment from GitHub with automated branch previews and asset compression.",
        metrics: "Global CDN",
        icon: Cloud
      }
    ]
  },
  "MERN E-Commerce Platform": {
    subtitle: "Full-Stack Storefront & Order Processing Pipeline",
    nodes: [
      {
        id: "client",
        title: "Storefront UI",
        tech: "React, Redux Toolkit, Tailwind CSS",
        details: "Fast responsive catalog browsing, product filtering, dynamic cart state management, and user checkout workflows.",
        metrics: "Client State Persist",
        icon: Layers
      },
      {
        id: "api",
        title: "Express Backend API",
        tech: "Node.js, Express.js, JWT, Bcrypt",
        details: "Handles user authentication with secure HTTP-only cookies, inventory management, and order processing endpoints.",
        metrics: "Token Auth & Validation",
        icon: Cpu
      },
      {
        id: "db",
        title: "MongoDB Database",
        tech: "MongoDB Atlas, Mongoose ODM",
        details: "Stores catalog items, user profiles, order logs, and cart sessions with normalized schemas and indexing.",
        metrics: "Indexed Collections",
        icon: Database
      },
      {
        id: "cloud",
        title: "Cloud Hosting",
        tech: "Vercel, MongoDB Atlas",
        details: "Decoupled frontend and backend hosting with SSL encryption, environment secrets, and automated backups.",
        metrics: "Cloud Deployment",
        icon: Cloud
      }
    ]
  },
  "School Management System": {
    subtitle: "Administrative Lifecycle & Record Portal",
    nodes: [
      {
        id: "client",
        title: "Dashboard Views",
        tech: "React, Tailwind CSS, Axios",
        details: "Role-specific views for students and staff with analytics summaries and course enrollment controls.",
        metrics: "Responsive Dashboard",
        icon: Layers
      },
      {
        id: "api",
        title: "REST Gateway",
        tech: "Express.js, JWT Authentication",
        details: "Manages student enrollment status, course records, attendance logs, and staff authorization middleware.",
        metrics: "Protected Routes",
        icon: Cpu
      },
      {
        id: "db",
        title: "Document Storage",
        tech: "MongoDB Atlas, Mongoose",
        details: "Stores courses, students, and academic records with relationships and structured schemas.",
        metrics: "Schema Validation",
        icon: Database
      },
      {
        id: "hosting",
        title: "Production Hosting",
        tech: "Vercel Serverless",
        details: "Fast global CDN delivery with automated build triggers on GitHub commit.",
        metrics: "Automated Deployments",
        icon: Cloud
      }
    ]
  },
  "Blog-Space Publishing Platform": {
    subtitle: "Markdown Publishing & Database Pipeline",
    nodes: [
      {
        id: "client",
        title: "Markdown Editor UI",
        tech: "React.js, Tailwind CSS",
        details: "Provides real-time markdown preview, post creation, tag searches, and responsive reading views.",
        metrics: "Live Preview",
        icon: Layers
      },
      {
        id: "api",
        title: "Publishing API",
        tech: "Node.js, Express.js",
        details: "REST endpoints handling post creation, pagination, user session validation, and tag filtering.",
        metrics: "RESTful Endpoints",
        icon: Cpu
      },
      {
        id: "db",
        title: "MongoDB Cluster",
        tech: "MongoDB Atlas",
        details: "Document persistence with indexing on post titles and tags for rapid content retrieval.",
        metrics: "Text Indexing",
        icon: Database
      },
      {
        id: "deploy",
        title: "Vercel Cloud",
        tech: "Vercel Edge",
        details: "Serverless execution ensuring rapid page loads and zero server maintenance overhead.",
        metrics: "Serverless Deployment",
        icon: Cloud
      }
    ]
  }
}

const ArchitectureModal = ({ isOpen, onClose, projectTitle }) => {
  const { darkMode } = useTheme()
  const [activeNode, setActiveNode] = useState(0)

  if (!isOpen) return null

  const projectData = ARCHITECTURE_DATA[projectTitle] || ARCHITECTURE_DATA["MERN E-Commerce Platform"] || ARCHITECTURE_DATA["Kids Code Editor (Blockly IDE)"]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`relative w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border ${
            darkMode ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 15 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                System Architecture
              </span>
              <h3 className="font-bold text-lg sm:text-xl mt-0.5">
                {projectTitle}
              </h3>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {projectData.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Step Pipeline Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
              {projectData.nodes.map((node, idx) => {
                const Icon = node.icon
                const isActive = activeNode === idx
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(idx)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isActive
                        ? "bg-blue-600/15 border-blue-500 text-blue-400"
                        : darkMode
                        ? "bg-slate-850 border-slate-800 hover:border-slate-700 text-slate-300"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">Step {idx + 1}</span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm mb-0.5">{node.title}</h4>
                    <p className="text-[11px] text-slate-400 truncate">{node.tech}</p>
                  </div>
                )
              })}
            </div>

            {/* Active Node Detail Card */}
            <div className={`p-5 rounded-xl border ${
              darkMode ? "bg-slate-850 border-slate-850 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h4 className="text-base font-bold text-blue-500 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{projectData.nodes[activeNode].title}</span>
                  </h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Technologies: {projectData.nodes[activeNode].tech}
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 font-medium self-start sm:self-auto">
                  {projectData.nodes[activeNode].metrics}
                </span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                {projectData.nodes[activeNode].details}
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>Select any step above to view implementation details</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition"
            >
              Close
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ArchitectureModal
