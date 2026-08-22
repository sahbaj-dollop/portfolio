import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Outer ring */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              className="absolute w-24 h-24 rounded-full border-2 border-orange-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-16 h-16 rounded-full border-2 border-t-orange-500 border-r-amber-500 border-b-transparent border-l-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-8 h-8 rounded-full border-2 border-t-orange-400 border-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            {/* Center dot */}
            <motion.div
              className="w-3 h-3 rounded-full bg-orange-500"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          {/* Name */}
          <motion.h1
            className="text-2xl font-bold gradient-text mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sahbaj Khan
          </motion.h1>

          {/* Subtitle with typing dots */}
          <motion.div
            className="flex items-center gap-1 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>Loading portfolio</span>
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-orange-400"
                animate={{ opacity: [0, 1, 0], y: [0, -4, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div className="mt-8 w-48 h-0.5 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #ff6b00, #f97316, #fb923c)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
