import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Layers, Cpu, Database, Cloud, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'
import { playClickSound } from '../utils/soundEffects'

const ARCHITECTURE_DATA = {
  "Kids Code Editor": {
    subtitle: "Real-time Visual & Code Parsing Architecture",
    nodes: [
      {
        id: "client",
        title: "Frontend UI Layer",
        tech: "Next.js 14, React 19, Monaco Editor, Tailwind CSS",
        details: "Renders visual Blockly drag-and-drop blocks alongside VS Code Monaco Editor. Tree-sitter parses syntax in real-time.",
        metrics: "60 FPS Render | Client-side Sandbox",
        icon: Layers
      },
      {
        id: "parser",
        title: "AST & Syntax Parser",
        tech: "WebAssembly, Custom AST Parser, Worker Threads",
        details: "Converts Blockly node outputs into executable JavaScript/Python code safely inside isolated Web Workers.",
        metrics: "< 15ms Parsing Latency",
        icon: Cpu
      },
      {
        id: "backend",
        title: "Execution Engine & API",
        tech: "Node.js, Express REST API",
        details: "Validates code syntax, manages user saved projects, handles snippet sharing with secure CORS origin validation.",
        metrics: "JWT Auth | 100% Stateless",
        icon: Activity
      },
      {
        id: "hosting",
        title: "Edge Hosting & Cloud",
        tech: "Vercel Edge Network, GitHub CI/CD",
        details: "Global CDN distribution with automated previews on GitHub pull requests and instant SSL certificates.",
        metrics: "99.9% Uptime | Edge Caching",
        icon: Cloud
      }
    ]
  },
  "E-Commerce Platform": {
    subtitle: "Full-Stack Production MERN Ecosystem",
    nodes: [
      {
        id: "client",
        title: "React SPA Frontend",
        tech: "React.js, Redux Toolkit, Tailwind CSS, Lucide Icons",
        details: "Dynamic catalog filtering, shopping cart state management, responsive UI, optimistic UI updates for instant feedback.",
        metrics: "Single Page App | Redux Persist",
        icon: Layers
      },
      {
        id: "api",
        title: "RESTful API Server",
        tech: "Node.js, Express.js, Express-Validator, Bcrypt",
        details: "Modular controller architecture handling auth (JWT HTTP-only cookies), product management, order processing, and payment webhooks.",
        metrics: "Token Auth | Rate Limited",
        icon: Cpu
      },
      {
        id: "db",
        title: "Database Cluster",
        tech: "MongoDB Atlas, Mongoose ODM",
        details: "Normalized database schemas with indexed queries for products, users, cart sessions, and audit logging.",
        metrics: "ACID Transactions | Schema Validation",
        icon: Database
      },
      {
        id: "cloud",
        title: "Cloud Infrastructure",
        tech: "Vercel, MongoDB Atlas Cloud, Render",
        details: "Decoupled frontend/backend deployment with SSL, automated database backups, and environment variable secrets.",
        metrics: "Zero-Downtime Deploys",
        icon: Cloud
      }
    ]
  },
  "Blog-Space": {
    subtitle: "Real-time Content Publishing System",
    nodes: [
      {
        id: "client",
        title: "Rich Text Editor Client",
        tech: "React.js, Framer Motion, Tailwind CSS",
        details: "Live markdown preview, dynamic tag search, theme switcher, responsive grid layout for articles.",
        metrics: "Instant Preview | SSR Ready",
        icon: Layers
      },
      {
        id: "api",
        title: "Content API Gateway",
        tech: "Express.js, REST Endpoints",
        details: "CRUD endpoints for post publication, tag analytics, user authentication, and pagination middleware.",
        metrics: "RESTful JSON API | CORS Enabled",
        icon: Cpu
      },
      {
        id: "db",
        title: "Document Database",
        tech: "MongoDB Atlas",
        details: "Document-based storage with full-text search indexing on post titles and tags for rapid content discovery.",
        metrics: "Text Indexing | Scalable Documents",
        icon: Database
      },
      {
        id: "deploy",
        title: "Serverless Deployment",
        tech: "Vercel Serverless Functions",
        details: "Auto-scaling serverless backend execution for instant response times under heavy reader traffic.",
        metrics: "Auto-scaling | Global CDN",
        icon: Cloud
      }
    ]
  }
}

const ArchitectureModal = ({ isOpen, onClose, projectTitle }) => {
  const { darkMode, soundEnabled } = useTheme()
  const [activeNode, setActiveNode] = useState(0)

  if (!isOpen) return null

  const projectData = ARCHITECTURE_DATA[projectTitle] || ARCHITECTURE_DATA["E-Commerce Platform"]

  const handleNodeClick = (index) => {
    playClickSound(soundEnabled)
    setActiveNode(index)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border ${
            darkMode ? "bg-[#0b0e1b] border-[#3B4371]/50 text-white" : "bg-white border-[#F3904F]/30 text-gray-900"
          }`}
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 md:px-8 border-b border-[#F3904F]/20 bg-[#3B4371]/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#F3904F]/20 text-[#F3904F] border border-[#F3904F]/30">
                  Full Stack Architecture Flow
                </span>
              </div>
              <h2 className="font-extrabold text-xl md:text-2xl mt-1 gradient-text">
                {projectTitle} System Design
              </h2>
              <p className="text-xs md:text-sm text-gray-400">
                {projectData.subtitle}
              </p>
            </div>
            <button
              onClick={() => {
                playClickSound(soundEnabled)
                onClose()
              }}
              className="p-2 rounded-full hover:bg-[#3B4371]/30 text-gray-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8">
            
            {/* Architecture Node Pipeline Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {projectData.nodes.map((node, idx) => {
                const Icon = node.icon
                const isActive = activeNode === idx
                return (
                  <motion.div
                    key={node.id}
                    onClick={() => handleNodeClick(idx)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all relative ${
                      isActive
                        ? "bg-gradient-to-br from-[#3B4371]/30 to-[#F3904F]/20 border-[#F3904F] shadow-lg shadow-[#F3904F]/20"
                        : darkMode
                        ? "bg-[#0f1226] border-[#3B4371]/40 hover:border-[#F3904F]/50"
                        : "bg-gray-50 border-gray-200 hover:border-[#F3904F]/50"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl ${isActive ? 'bg-[#F3904F] text-white' : 'bg-[#F3904F]/15 text-[#F3904F]'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-gray-400">0{idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-sm md:text-base mb-1">{node.title}</h3>
                    <p className="text-xs text-[#F3904F] font-semibold truncate">{node.tech}</p>

                    {idx < projectData.nodes.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-4 h-4 text-[#F3904F]" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Active Node Detail Card */}
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-2xl border ${
                darkMode ? "bg-[#0f1226] border-[#3B4371]/50" : "bg-[#F3904F]/5 border-[#F3904F]/20"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#3B4371]/30">
                <div>
                  <h4 className="text-lg font-bold text-[#F3904F] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    {projectData.nodes[activeNode].title} Specification
                  </h4>
                  <p className="text-sm font-semibold text-gray-300 mt-0.5">
                    {projectData.nodes[activeNode].tech}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B4371]/20 border border-[#F3904F]/30 text-xs font-mono font-bold text-[#F3904F]">
                  <Zap className="w-3.5 h-3.5" />
                  {projectData.nodes[activeNode].metrics}
                </div>
              </div>

              <p className={`text-sm md:text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {projectData.nodes[activeNode].details}
              </p>
            </motion.div>

          </div>

          {/* Footer */}
          <div className="p-4 px-6 border-t border-[#3B4371]/30 bg-[#3B4371]/10 flex justify-between items-center text-xs text-gray-400">
            <span>Click any node to inspect data flow details</span>
            <button
              onClick={() => {
                playClickSound(soundEnabled)
                onClose()
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#3B4371] to-[#F3904F] text-white font-semibold text-xs hover:opacity-95 transition"
            >
              Close Visualizer
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ArchitectureModal
