import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const TerminalDrawer = () => {
  const { darkMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Sahbaj Khan Developer CLI v1.0.0 [Type "help" for commands]' },
    { type: 'system', text: 'Type "skills", "experience", "projects", "contact", or "clear".' },
  ])
  const bottomRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history, isOpen])

  const handleCommand = (e) => {
    e.preventDefault()
    const cmd = inputVal.trim().toLowerCase()
    if (!cmd) return

    const newHistory = [...history, { type: 'user', text: `> ${inputVal}` }]

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
- help       : Show list of commands
- skills     : List core technologies & tools
- experience : View work experience
- projects   : View key projects
- contact    : View email & phone
- whoami     : Display developer profile summary
- clear      : Clear terminal screen`,
        })
        break

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `⚡ Tech Stack:
- Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit
- Backend:  Node.js, Express.js, REST APIs, Authentication
- Database: MongoDB, Mongoose, Basics of SQL
- Tools:    Git, GitHub, VS Code, Cursor, Antigravity, Postman`,
        })
        break

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `💼 Work Experience:
1. Full Stack Developer @ Dollop Infotech (20 Oct 2025 - Present)
2. Full Stack Trainee @ Placement Adda (Feb 2025 - Oct 2025)`,
        })
        break

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `🚀 Featured Projects:
1. Kids Code Editor (React, Next.js, Monaco, Tree-sitter)
2. P-School Web App (React, Tailwind CSS, REST APIs)
3. MERN E-Commerce Platform (React, Node, Express, MongoDB)
4. Blog-Space (MERN Stack, Vercel)`,
        })
        break

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `📫 Contact Sahbaj:
- Email:    sahbajkhan6593@gmail.com
- Phone:    +91 6265666859
- GitHub:   https://github.com/sahbaj-dollop
- LinkedIn: https://www.linkedin.com/in/sahbaj-khan-24138a338/`,
        })
        break

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `👨‍💻 Sahbaj Khan: Full Stack Developer (MERN / Next.js) based in Indore, India. Dedicated to clean code, high performance, and scalable web solutions.`,
        })
        break

      case 'clear':
        setHistory([
          { type: 'system', text: 'Sahbaj Khan Developer CLI v1.0.0' },
        ])
        setInputVal('')
        return

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for available commands.`,
        })
        break
    }

    setHistory(newHistory)
    setInputVal('')
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-34 md:bottom-36 right-6 md:right-8 z-40 p-3.5 md:p-4 rounded-full bg-[#0b0e1b] border border-[#F3904F]/40 text-[#F3904F] shadow-xl flex items-center justify-center gap-2 group hover:border-[#F3904F] transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open CLI Terminal"
      >
        <Terminal className="w-5 h-5 text-[#F3904F]" />
        <span className="hidden md:inline text-xs font-mono font-bold text-white pr-1">
          CLI Terminal
        </span>
      </motion.button>

      {/* Terminal Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl h-[420px] rounded-2xl bg-[#0b0e1b] border border-[#3B4371]/60 shadow-2xl flex flex-col overflow-hidden font-mono text-sm"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f1226] border-b border-[#3B4371]/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F3904F]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs text-gray-400 font-semibold ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#F3904F]" /> sahbaj@portfolio:~
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded hover:bg-neutral-800 text-gray-400 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Terminal Output */}
              <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs md:text-sm">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className={
                      item.type === 'user'
                        ? 'text-[#F3904F] font-bold'
                        : item.type === 'error'
                        ? 'text-red-400'
                        : item.type === 'system'
                        ? 'text-gray-400 italic'
                        : 'text-gray-200 whitespace-pre-wrap leading-relaxed'
                    }
                  >
                    {item.text}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Terminal Command Input Form */}
              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2 px-4 py-3 bg-[#0f1226]/90 border-t border-[#3B4371]/40"
              >
                <span className="text-[#F3904F] font-bold">&gt;</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder='Type a command ("help", "skills", "projects", "clear")...'
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-neutral-600 text-xs md:text-sm"
                  autoFocus
                />
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TerminalDrawer
