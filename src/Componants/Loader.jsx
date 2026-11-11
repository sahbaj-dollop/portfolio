import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070a0e]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Minimalist Monogram */}
          <motion.div
            className="w-16 h-16 rounded-2xl bg-[#0e161c] border border-[rgba(171,201,203,0.3)] flex items-center justify-center text-white font-bold text-xl tracking-wider mb-4 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[#f45b0b] font-black">S</span>
            <span className="text-[#abc9cb] font-black">K</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-xs font-semibold text-[#abc9cb]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-white">Sahbaj Khan</span>
            <span className="text-[#f45b0b]">•</span>
            <span className="text-[#abc9cb]">Portfolio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
