import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  onDone?: () => void
}

export default function TypewriterText({
  text,
  speed = 35,
  className = "",
  onDone,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed("")
    setDone(false)
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timer)
        setDone(true)
        onDone?.()
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, onDone])

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="animate-blink text-rose-400">|</span>}
    </span>
  )
}
