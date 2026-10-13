import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BrandLogo from './BrandLogo'

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('ask_intro_seen'))

  useEffect(() => {
    if (!showIntro) return undefined
    const timer = setTimeout(() => {
      setShowIntro(false)
      sessionStorage.setItem('ask_intro_seen', 'true')
    }, 1500)
    return () => clearTimeout(timer)
  }, [showIntro])

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#070910] pointer-events-none select-none"
        >
          {/* Subtle glowing ambient aura */}
          <div className="absolute w-[400px] h-[400px] bg-[#E4C16B]/15 rounded-full blur-[140px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            <div className="scale-125">
              <BrandLogo />
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#E4C16B] to-transparent"
            />

            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#A8AFBD]/70">
              Creative Technology & Growth
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
