import { useEffect, useRef, useState } from "react"
import { bgMusic } from "../data/story"

type Status = "loading" | "ready" | "error" | "playing"

const STORAGE_KEY = "niv-music-on"

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [status, setStatus] = useState<Status>("loading")

  const play = async () => {
    const audio = audioRef.current
    if (!audio) return false
    try {
      await audio.play()
      setStatus("playing")
      localStorage.setItem(STORAGE_KEY, "1")
      return true
    } catch {
      return false
    }
  }

  const pause = () => {
    audioRef.current?.pause()
    setStatus("ready")
    localStorage.removeItem(STORAGE_KEY)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.4

    const onReady = async () => {
      setStatus((s) => (s === "playing" ? "playing" : "ready"))
      if (localStorage.getItem(STORAGE_KEY) === "1") {
        await play()
      }
    }
    const onError = () => {
      console.error("Music file load failed:", bgMusic.src)
      setStatus("error")
    }

    audio.addEventListener("canplaythrough", onReady)
    audio.addEventListener("loadeddata", onReady)
    audio.addEventListener("error", onError)
    audio.load()

    return () => {
      audio.removeEventListener("canplaythrough", onReady)
      audio.removeEventListener("loadeddata", onReady)
      audio.removeEventListener("error", onError)
    }
  }, [])

  const toggle = async () => {
    if (status === "error" || status === "loading") return
    if (status === "playing") pause()
    else await play()
  }

  const label =
    status === "error"
      ? "song missing"
      : status === "playing"
        ? "music on"
        : status === "loading"
          ? "loading..."
          : "🎵 chalao"

  return (
    <>
      <audio ref={audioRef} src={bgMusic.src} loop preload="auto" />

      <button
        type="button"
        onClick={toggle}
        disabled={status === "loading" || status === "error"}
        className={`music-btn group ${status === "error" ? "music-btn-error" : ""} ${status === "playing" ? "music-btn-active" : ""}`}
        aria-label={status === "playing" ? "Music band karo" : "Music chalao"}
        title={status === "error" ? "Gaana missing!" : "Niv ke liye soft lullaby 🎵"}
      >
        <span className={`music-icon ${status === "playing" ? "animate-music" : ""}`}>
          {status === "error" ? "📁" : status === "playing" ? "🎶" : "🎵"}
        </span>
        <span className="music-label">{label}</span>
      </button>
    </>
  )
}
