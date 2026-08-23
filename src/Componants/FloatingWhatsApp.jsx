import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../Context/ThemeContext'
import { playClickSound, playHoverSound } from '../utils/soundEffects'

const FloatingWhatsApp = () => {
  const { soundEnabled } = useTheme()
  const [isClicked, setIsClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const whatsappUrl = "https://wa.me/916265666859?text=Hi%20Sahbaj,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"

  const handleClick = (e) => {
    playClickSound(soundEnabled)
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 700)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center justify-center group">
      
      {/* Floating Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 mb-3 px-3.5 py-1.5 rounded-xl bg-[#0b0e1b]/95 border border-[#25D366]/60 text-white text-xs font-extrabold shadow-xl shadow-black/50 whitespace-nowrap backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
            Chat on WhatsApp
            {/* Tooltip Arrow */}
            <span className="absolute left-5 -bottom-1.5 w-3 h-3 bg-[#0b0e1b] border-b border-r border-[#25D366]/60 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth Continuous 360 Radial Wave Rings */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]/40 pointer-events-none"
        animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]/30 pointer-events-none"
        animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
      />

      {/* On Click 360 Shockwave Wave Ripple */}
      <AnimatePresence>
        {isClicked && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366] border-2 border-white pointer-events-none z-10"
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: 3.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* WhatsApp Circular Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true)
          playHoverSound(soundEnabled)
        }}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        className="relative z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-colors duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.4)] border-2 border-white/40 cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isClicked
            ? { rotate: 360, scale: [1, 1.2, 1] }
            : { opacity: 1, scale: 1, rotate: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
      >
        <motion.div
          animate={isClicked ? { rotate: -360 } : { rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-md" />
        </motion.div>
      </motion.a>

    </div>
  )
}

export default FloatingWhatsApp
