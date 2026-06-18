import { Link, useParams, Navigate } from "react-router-dom"
import BirthdayCalendar from "../components/BirthdayCalendar"
import LoveLetterCard from "../components/LoveLetterCard"
import PolaroidPhoto from "../components/PolaroidPhoto"
import TeddyMiniLetter from "../components/TeddyMiniLetter"
import { memories } from "../data/story"

export default function Memory() {
  const { slug } = useParams()
  const mem = memories.find((m) => m.slug === slug)
  if (!mem) return <Navigate to="/" replace />

  const idx = memories.findIndex((m) => m.slug === slug)
  const prev = idx > 0 ? memories[idx - 1] : null
  const next = idx < memories.length - 1 ? memories[idx + 1] : null

  if (mem.isMiniLetter) {
    return <TeddyMiniLetter mem={mem} prev={prev} />
  }

  if (mem.isFinale) {
    return (
      <div className="relative z-10 max-w-xl mx-auto pb-16 finale-page">
        <div className="finale-sparkles" aria-hidden>
          {["✨", "👑", "🎂", "💖", "🌟", "🎀", "🎈", "🎁", "🧁"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="finale-advance-banner animate-pop-in">
          <span className="finale-balloon">🎈</span>
          <div>
            <p className="finale-advance-label">advance birthday wish</p>
            <p className="finale-advance-title">Happy Birthday meri Princess!</p>
          </div>
          <span className="finale-balloon finale-balloon-right">🎈</span>
        </div>

        <div className="text-center mb-8 animate-pop-in">
          <span className="finale-crown animate-bounce-soft">👑</span>
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-[0.3em] mt-3">
            ✿ 21 september · 3 saal ki ✿
          </p>
          <p className="text-sm font-extrabold text-purple-400 mt-2">{mem.dateLabel}</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold rainbow-text mt-3 leading-tight">
            {mem.emoji} {mem.title}
          </h1>
          <p className="text-rose-400 font-bold text-base mt-2">{mem.subtitle}</p>
          <p className="finale-gift-tag mt-4">🎁 Pehle se gift — kyunki tu bahut special hai!</p>
        </div>

        <div className="flex justify-center mb-8 animate-pop-in">
          <PolaroidPhoto
            alt={mem.title}
            caption={mem.caption}
            emoji={mem.emoji}
            image={mem.image}
            large
            className="finale-polaroid"
          />
        </div>

        <LoveLetterCard variant="advance">
          <div className="finale-masi-tag">
            <span>👩‍🦱</span> Teri Masi — dil se, pehle se...
          </div>
          <p className="finale-message">{mem.message}</p>
          <div className="finale-says">
            <span className="text-2xl">🎂</span>
            <p>"{mem.masiSays}"</p>
          </div>
          <div className="finale-hearts">
            <span>🎈</span>
            <span className="animate-heartbeat">3</span>
            <span>👑</span>
          </div>
        </LoveLetterCard>

        <BirthdayCalendar />

        <p className="finale-footer-note text-center">
          21 Sept ko calendar mein 21 tap karna — ek aur surprise letter milega! 💌
        </p>

        <div className="flex justify-between items-center mt-8 gap-3 px-1">
          {prev ? (
            <Link to={`/memory/${prev.slug}`} className="memory-nav-btn memory-nav-prev">
              ← {prev.teddy} Pehle
            </Link>
          ) : (
            <Link to="/" className="memory-nav-btn memory-nav-prev">
              ← 🏠 Home
            </Link>
          )}
          {next ? (
            <Link to={`/memory/${next.slug}`} className="memory-nav-btn memory-nav-next">
              Chota letter {next.teddy} →
            </Link>
          ) : (
            <Link to="/" className="finale-home-btn">
              🏠 Home
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 max-w-xl mx-auto pb-16">
      <span className="memory-teddy memory-teddy-tl animate-wiggle">🧸</span>
      <span className="memory-teddy memory-teddy-tr animate-bounce-soft">🎀</span>

      <div className="text-center mb-6 animate-pop-in">
        <span className="memory-page-badge">
          {mem.teddy === "👑" ? "👑" : "🧸"} Memory {idx + 1} / {memories.length}
        </span>
        <p className="text-sm font-extrabold text-purple-400 mt-3">{mem.dateLabel}</p>
        {mem.date !== "—" && (
          <p className="text-xs text-pink-300 font-bold">{mem.date}</p>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold rainbow-text mt-2">
          {mem.emoji} {mem.title}
        </h1>
        <p className="text-rose-400 font-bold text-sm mt-1">{mem.subtitle}</p>
      </div>

      <div className="flex justify-center mb-8 animate-pop-in">
        <PolaroidPhoto
          alt={mem.title}
          caption={mem.caption}
          emoji={mem.emoji}
          image={mem.image}
          video={mem.video}
          large
        />
      </div>

      <article className="memory-page-card animate-pop-in">
        <div className="memory-masi-tag">
          <span>👩‍🦱</span> Masi likhti hai...
        </div>

        <p className={`memory-message ${mem.highlight ? "memory-highlight" : ""}`}>
          {mem.message}
        </p>

        <div className="memory-says">
          <span className="text-xl">{mem.teddy}</span>
          <p className="memory-says-text">"{mem.masiSays}"</p>
        </div>
      </article>

      <div className="flex justify-between items-center mt-10 gap-3">
        {prev ? (
          <Link to={`/memory/${prev.slug}`} className="memory-nav-btn memory-nav-prev">
            ← {prev.teddy} Pehle
          </Link>
        ) : (
          <Link to="/" className="memory-nav-btn memory-nav-prev">
            ← 🏠 Home
          </Link>
        )}

        {next ? (
          <Link to={`/memory/${next.slug}`} className="memory-nav-btn memory-nav-next">
            Aage {next.teddy} →
          </Link>
        ) : (
          <Link to="/" className="memory-nav-btn memory-nav-next">
            🎉 Khatam →
          </Link>
        )}
      </div>
    </div>
  )
}
