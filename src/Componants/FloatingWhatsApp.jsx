import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappUrl = "https://wa.me/916265666859?text=Hi%20Sahbaj,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20Full%20Stack%20opportunity!"

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center justify-center group">
      
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 mb-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-medium shadow-lg whitespace-nowrap backdrop-blur-md flex items-center gap-2 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>Chat on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Circular Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        className="relative z-20 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-transform duration-200 shadow-md cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="w-6 h-6 text-white" />
      </motion.a>

    </div>
  )
}

export default FloatingWhatsApp

