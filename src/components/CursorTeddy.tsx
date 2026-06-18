import { useEffect, useRef, useState } from "react"

export default function CursorTeddy() {
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: -100, y: -100, rotate: 0, scale: 1 })
  const [trail, setTrail] = useState<{ id: number; x: number; y: number; emoji: string }[]>([])

  const prev = useRef({ x: -100, y: -100 })
  const rotate = useRef(0)
  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!supportsHover) return

    setReady(true)

    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      const dx = x - prev.current.x

      rotate.current = Math.max(-12, Math.min(12, dx * 2))
      const speed = Math.hypot(dx, y - prev.current.y)

      if (speed > 8 && Math.random() > 0.9) {
        const id = Date.now() + Math.random()
        const emoji = ["💕", "✨"][Math.floor(Math.random() * 2)]
        setTrail((t) => [...t.slice(-3), { id, x, y: y + 6, emoji }])
        setTimeout(() => setTrail((t) => t.filter((p) => p.id !== id)), 600)
      }

      prev.current = { x, y }
      setPos({ x, y, rotate: rotate.current, scale: speed > 4 ? 1.1 : 1 })
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener("mousemove", onMove, { passive: true })
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
    }
  }, [])

  if (!ready) return null

  return (
    <div className="cursor-teddy-wrap" aria-hidden style={{ opacity: visible ? 1 : 0 }}>
      {trail.map((p) => (
        <span key={p.id} className="cursor-teddy-trail" style={{ left: p.x, top: p.y }}>
          {p.emoji}
        </span>
      ))}

      <div
        className="cursor-teddy"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg) scale(${pos.scale})`,
        }}
      >
        <span className="cursor-teddy-body">🧸</span>
      </div>
    </div>
  )
}
