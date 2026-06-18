import { useState } from "react"

const hugs = [
  "🤗 Muaah! Pyaar bheja!",
  "💖 Niv ko bahut pyaar!",
  "🥰 Tere liye hug!",
  "💕 Masi ka pyaar!",
  "🌸 Cute cute hug!",
]

export default function HugButton() {
  const [msg, setMsg] = useState<string | null>(null)
  const [hearts, setHearts] = useState<number[]>([])

  const hug = () => {
    setMsg(hugs[Math.floor(Math.random() * hugs.length)])
    const id = Date.now()
    setHearts((h) => [...h, id])
    setTimeout(() => setHearts((h) => h.filter((x) => x !== id)), 2000)
    setTimeout(() => setMsg(null), 2500)
  }

  return (
    <div className="relative inline-block mb-8">
      {hearts.map((id) => (
        <span
          key={id}
          className="absolute text-2xl animate-drift-up pointer-events-none"
          style={{
            left: `${20 + Math.random() * 60}%`,
            bottom: "100%",
            animationDuration: "2s",
          }}
        >
          {["💕", "💖", "✨", "🌸"][Math.floor(Math.random() * 4)]}
        </span>
      ))}

      <button
        onClick={hug}
        className="px-6 py-3 rounded-full bg-white border-2 border-pink-200 text-rose-500 font-extrabold text-sm shadow-md hover:scale-110 hover:border-rose-300 hover:bg-rose-50 transition-all active:scale-95 animate-sway"
      >
        🤗 Masi ka Virtual Hug Lo!
      </button>

      {msg && (
        <p className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-sm font-extrabold text-rose-400 whitespace-nowrap animate-pop-in">
          {msg}
        </p>
      )}
    </div>
  )
}
