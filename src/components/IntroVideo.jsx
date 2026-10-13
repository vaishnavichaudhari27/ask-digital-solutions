import { useCallback, useEffect, useRef, useState } from 'react'

const INTRO_VIDEO_PATH = '/videos/ask-digital.mp4'
const REVEAL_DURATION_MS = 650
const LOAD_TIMEOUT_MS = 12000

export default function IntroVideo({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const videoRef = useRef(null)
  const hasFinished = useRef(false)
  const hasRequestedPlay = useRef(false)

  const finishIntro = useCallback(() => {
    if (hasFinished.current) return
    hasFinished.current = true
    setIsVisible(false)
    onComplete()
  }, [onComplete])

  const revealWebsite = useCallback(() => {
    if (hasFinished.current) return
    hasFinished.current = true
    setIsFading(true)
    onComplete()
    window.setTimeout(() => setIsVisible(false), REVEAL_DURATION_MS)
  }, [onComplete])

  useEffect(() => {
    if (!isVisible) {
      onComplete()
      return undefined
    }

    const timeout = window.setTimeout(() => {
      if (videoRef.current && videoRef.current.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
        finishIntro()
      }
    }, LOAD_TIMEOUT_MS)

    return () => window.clearTimeout(timeout)
  }, [finishIntro, isVisible, onComplete])

  const playVideo = useCallback(() => {
    const video = videoRef.current
    if (!video || hasFinished.current || hasRequestedPlay.current) return
    hasRequestedPlay.current = true
    video.currentTime = 0
    video.play().catch(finishIntro)
  }, [finishIntro])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] h-[100dvh] w-screen overflow-hidden bg-black transition-opacity duration-[650ms] ease-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="ASK Digital Solution introduction"
      aria-modal="true"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={playVideo}
        onEnded={revealWebsite}
        onError={finishIntro}
      >
        <source src={INTRO_VIDEO_PATH} type="video/mp4" />
      </video>
    </div>
  )
}
