import { useCallback, useEffect, useRef, useState } from 'react'

const INTRO_VIDEO_PATH = `${import.meta.env.BASE_URL}videos/ask-digital.mp4`
const INTRO_AUDIO_PATH = `${import.meta.env.BASE_URL}audio/intro.mp3`
const REVEAL_DURATION_MS = 650
const LOAD_TIMEOUT_MS = 12000

export default function IntroVideo({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const videoRef = useRef(null)
  const audioRef = useRef(null)
  const hasFinished = useRef(false)
  const hasRequestedPlay = useRef(false)
  const hasRequestedAudioPlay = useRef(false)

  const stopMedia = useCallback(() => {
    videoRef.current?.pause()
    audioRef.current?.pause()
  }, [])

  const finishIntro = useCallback(() => {
    if (hasFinished.current) return
    hasFinished.current = true
    stopMedia()
    setIsVisible(false)
    onComplete()
  }, [onComplete, stopMedia])

  const revealWebsite = useCallback(() => {
    if (hasFinished.current) return
    hasFinished.current = true
    stopMedia()
    setIsFading(true)
    onComplete()
    window.setTimeout(() => setIsVisible(false), REVEAL_DURATION_MS)
  }, [onComplete, stopMedia])

  const syncAudioToVideo = useCallback(() => {
    const audio = audioRef.current
    const video = videoRef.current
    if (
      !audio ||
      !video ||
      audio.paused ||
      audio.readyState < HTMLMediaElement.HAVE_METADATA ||
      !Number.isFinite(video.currentTime)
    ) return

    const maximumTime = Number.isFinite(audio.duration) && audio.duration > 0
      ? Math.max(0, audio.duration - 0.05)
      : video.currentTime
    const targetTime = Math.min(video.currentTime, maximumTime)
    if (Math.abs(audio.currentTime - targetTime) > 0.35) {
      audio.currentTime = targetTime
    }
  }, [])

  const startAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio || hasFinished.current || hasRequestedAudioPlay.current) return
    hasRequestedAudioPlay.current = true

    try {
      const playAttempt = audio.play()
      playAttempt?.catch((error) => {
        audio.pause()
        if (error.name === 'NotAllowedError') {
          console.info('Intro audio autoplay was blocked by the browser. Audio requires user interaction on this device.')
        } else if (error.name !== 'AbortError') {
          console.error('Unable to play intro audio.', error)
        }
      })
    } catch (error) {
      audio.pause()
      if (error.name === 'NotAllowedError') {
        console.info('Intro audio autoplay was blocked by the browser. Audio requires user interaction on this device.')
      } else {
        console.error('Unable to play intro audio.', error)
      }
    }
  }, [])

  const handleAudioError = useCallback((event) => {
    console.error('Unable to load intro audio.', event.currentTarget.error)
  }, [])

  useEffect(() => () => stopMedia(), [stopMedia])

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
    startAudio()
    video.play().catch(finishIntro)
  }, [finishIntro, startAudio])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] h-[100dvh] w-full overflow-hidden bg-black transition-opacity duration-[650ms] ease-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="ASK Digital Solution introduction"
      aria-modal="true"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={playVideo}
        onTimeUpdate={syncAudioToVideo}
        onSeeking={syncAudioToVideo}
        onEnded={revealWebsite}
        onError={finishIntro}
      >
        <source src={INTRO_VIDEO_PATH} type="video/mp4" />
      </video>
      <audio
        ref={audioRef}
        preload="auto"
        onLoadedMetadata={syncAudioToVideo}
        onPlay={syncAudioToVideo}
        onPlaying={syncAudioToVideo}
        onError={handleAudioError}
      >
        <source src={INTRO_AUDIO_PATH} type="audio/mpeg" />
      </audio>
      <div className="absolute inset-x-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-10 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={revealWebsite}
          className="rounded-full border border-white/25 bg-[#070910]/80 px-4 py-2 text-sm font-medium text-[#f3f0e9] backdrop-blur transition-colors hover:border-[#dfc27f]/70"
          aria-label="Skip introduction"
        >
          Skip intro
        </button>
      </div>
    </div>
  )
}
