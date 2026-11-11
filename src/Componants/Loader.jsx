import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#090b11]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Minimalist Monogram */}
          <motion.div
            className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-750 flex items-center justify-center text-white font-bold text-lg tracking-wider mb-4 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-blue-500 font-extrabold">S</span>
            <span className="text-slate-200 font-extrabold">K</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-xs font-medium text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span>Sahbaj Khan</span>
            <span>•</span>
            <span className="text-slate-500">Portfolio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader

