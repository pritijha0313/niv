import { Link } from "react-router-dom"
import type { Memory } from "../data/story"

interface TeddyMiniLetterProps {
  mem: Memory
  prev: Memory | null
}

const FLOATING = ["🧸", "💕", "🎀", "✨", "🧸", "💖", "🌸", "🧸"]

export default function TeddyMiniLetter({ mem, prev }: TeddyMiniLetterProps) {
  const lines = mem.message.split("\n").filter(Boolean)

  return (
    <div className="relative z-10 max-w-sm mx-auto pb-16 mini-letter-page">
      <div className="mini-letter-floats" aria-hidden>
        {FLOATING.map((e, i) => (
          <span key={`${e}-${i}`} style={{ animationDelay: `${i * 0.4}s` }}>
            {e}
          </span>
        ))}
      </div>

      <div className="text-center mb-5 animate-pop-in">
        <span className="mini-letter-teddy-main animate-bounce-soft">🧸</span>
        <p className="text-xs font-extrabold text-rose-300 uppercase tracking-[0.25em] mt-2">
          ✿ chota sa letter ✿
        </p>
        <h1 className="text-2xl font-extrabold rainbow-text mt-2">
          {mem.emoji} {mem.title}
        </h1>
        <p className="text-rose-400 font-bold text-sm mt-1">{mem.subtitle}</p>
      </div>

      <article className="mini-letter-card animate-pop-in">
        <span className="mini-letter-corner mini-letter-corner-tl">🧸</span>
        <span className="mini-letter-corner mini-letter-corner-tr">🎀</span>

        <p className="mini-letter-from">
          <span>👩‍🦱</span> Teri Masi likhti hai...
        </p>

        <div className="mini-letter-body">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mini-letter-sign">
          <span className="text-xl">🧸</span>
          <p>"{mem.masiSays}"</p>
        </div>

        <div className="mini-letter-bottom">
          <span>💕</span>
          <span className="animate-wiggle">🧸</span>
          <span>💕</span>
        </div>

        <span className="mini-letter-corner mini-letter-corner-bl">✨</span>
        <span className="mini-letter-corner mini-letter-corner-br">🧸</span>
      </article>

      <div className="flex justify-between items-center mt-8 gap-3">
        {prev ? (
          <Link to={`/memory/${prev.slug}`} className="memory-nav-btn memory-nav-prev">
            ← {prev.teddy} Pehle
          </Link>
        ) : (
          <Link to="/" className="memory-nav-btn memory-nav-prev">
            ← 🏠 Home
          </Link>
        )}
        <Link to="/" className="mini-letter-end-btn">
          🎉 The End — Hug! 🧸
        </Link>
      </div>
    </div>
  )
}
