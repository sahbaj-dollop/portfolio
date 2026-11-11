import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X } from 'lucide-react'

const TerminalDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Sahbaj Khan Developer Shell [Type "help" for available commands]' },
    { type: 'system', text: 'Full Stack Developer — React, Next.js & Node.js' },
  ])
  const bottomRef = useRef(null)

  // Global hotkey listener for `~` and custom event listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
    }
    const handleToggle = () => setIsOpen(prev => !prev)
    const handleOpen = () => setIsOpen(true)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('toggle-terminal', handleToggle)
    window.addEventListener('open-terminal', handleOpen)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('toggle-terminal', handleToggle)
      window.removeEventListener('open-terminal', handleOpen)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history, isOpen])

  const handleCommand = (e) => {
    e.preventDefault()
    const rawCmd = inputVal.trim()
    const cmd = rawCmd.toLowerCase()
    if (!cmd) return

    const newHistory = [...history, { type: 'user', text: `$ ${rawCmd}` }]

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • whoami     : About Sahbaj Khan
  • skills     : Technical skills & languages
  • experience : Professional experience summary
  • projects   : Key web applications
  • resume     : Open resume PDF in new tab
  • contact    : Email & social links
  • clear      : Clear console`,
        })
        break

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Sahbaj Khan — Full Stack Developer based in Indore, India.
2+ years of experience building web apps with React, Next.js, and Node.js.
Currently at Dollop Infotech.`,
        })
        break

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit
Backend : Node.js, Express.js, REST APIs, JWT Auth
Database: MongoDB, Mongoose, MySQL
Tools   : Git, GitHub, Postman, VS Code, Vercel`,
        })
        break

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `1. Full Stack Developer @ Dollop Infotech (Oct 2024 - Present)
   Building visual code editors and web apps with Next.js & Node.js.
2. Full Stack Trainee @ Placement Adda (Feb 2024 - Oct 2024)
   Hands-on training in full stack MERN development.`,
        })
        break

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. Kids Code Editor (Blockly IDE): Next.js, Monaco Editor, Blockly
2. MERN E-Commerce Platform: React, Node.js, Express, MongoDB, Redux
3. School Management System: React, REST APIs, Tailwind CSS
4. Blog-Space CMS: React, Node.js, Express, MongoDB`,
        })
        break

      case 'resume':
        window.open('/sahbajkhan.pdf', '_blank')
        newHistory.push({
          type: 'output',
          text: `Opening resume: /sahbajkhan.pdf`,
        })
        break

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email   : sahbajkhan6593@gmail.com
Phone   : +91 6265666859
WhatsApp: https://wa.me/916265666859
GitHub  : https://github.com/sahbaj-dollop
LinkedIn: https://www.linkedin.com/in/sahbaj-khan-24138a338/`,
        })
        break

      case 'clear':
        setHistory([
          { type: 'system', text: 'Sahbaj Khan Developer Shell [Type "help" for commands]' },
        ])
        setInputVal('')
        return

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${rawCmd}". Type "help" for a list of commands.`,
        })
        break
    }

    setHistory(newHistory)
    setInputVal('')
  }

  return (
    <>
      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl h-[420px] rounded-2xl bg-[#070a0e] border border-[rgba(171,201,203,0.3)] shadow-2xl flex flex-col overflow-hidden font-mono text-xs sm:text-sm text-slate-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e161c] border-b border-[rgba(171,201,203,0.2)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f45b0b]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs text-[#abc9cb] ml-2 font-bold">sahbaj@portfolio:~</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Log Output */}
              <div className="flex-1 p-4 overflow-y-auto space-y-1.5 leading-relaxed">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className={
                      item.type === 'user'
                        ? 'text-[#f45b0b] font-bold'
                        : item.type === 'error'
                        ? 'text-red-400'
                        : item.type === 'system'
                        ? 'text-[#abc9cb]'
                        : 'text-slate-200 whitespace-pre-wrap'
                    }
                  >
                    {item.text}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2 px-4 py-3 bg-[#0e161c] border-t border-[rgba(171,201,203,0.2)]"
              >
                <span className="text-[#f45b0b] font-bold">&gt;</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder='Type a command ("help", "skills", "projects", "clear")...'
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-500 text-xs sm:text-sm"
                  autoFocus
                />
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TerminalDrawer
