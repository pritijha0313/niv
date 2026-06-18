import { Link } from "react-router-dom"
import HugButton from "../components/HugButton"
import PolaroidPhoto from "../components/PolaroidPhoto"
import TypewriterText from "../components/TypewriterText"
import { dedication, letter, memories } from "../data/story"
import f1Image from "../components/f1.jpeg"

export default function Home() {
  return (
    <div className="relative z-10 max-w-xl mx-auto pb-16">
      <header className="text-center mb-8 animate-pop-in">
        <span className="text-4xl inline-block animate-bounce-soft mb-2">🧸</span>
        <p className="text-xs font-extrabold text-rose-300 uppercase tracking-[0.3em] mb-2">
          ✿ niv ki memory book ✿
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold rainbow-text mb-1">
          {dedication.to}
        </h1>
        <p className="text-purple-400 font-extrabold text-sm mb-4">
          — {dedication.from} 🧸💕
        </p>
        <p className="text-rose-400 font-bold text-sm max-w-sm mx-auto">
          <TypewriterText
            text="Har date, har yaad — jaise jaise mile hum..."
            speed={38}
          />
        </p>
      </header>

      {/* pehli photo */}
      <div className="flex justify-center mb-10 animate-pop-in">
        <PolaroidPhoto
          alt="Niv"
          caption="Meri jaan 💕"
          emoji="👧"
          image={f1Image}
          large
          className="-rotate-2"
        />
      </div>

      {/* timeline */}
      <div className="timeline relative pl-6">
        <div className="timeline-line" aria-hidden />

        {memories.map((mem, i) => (
          <Link
            key={mem.slug}
            to={`/memory/${mem.slug}`}
            className="timeline-item group animate-pop-in block mb-6"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="timeline-dot">
              <span className="text-sm">{mem.teddy}</span>
            </div>

            <article className="memory-card group-hover:scale-[1.02] transition-all">
              <div className="memory-card-date">
                <span className="memory-date-badge">{mem.dateLabel}</span>
                {mem.date !== "—" && (
                  <span className="memory-date-iso">{mem.date}</span>
                )}
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-3xl group-hover:animate-wiggle shrink-0">
                  {mem.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold text-gray-700 group-hover:text-rose-500 transition-colors">
                    {mem.title}
                  </h2>
                  <p className="text-xs text-gray-400 font-semibold mt-0.5">
                    {mem.subtitle}
                  </p>
                  <p className="text-[11px] text-purple-400 font-extrabold mt-2 flex items-center gap-1">
                    <span>🧸</span> padho yaad
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <p className="text-center text-rose-300 font-extrabold italic text-sm mb-6 mt-10">
        {letter.signOff}
      </p>

      <div className="flex justify-center">
        <HugButton />
      </div>
    </div>
  )
}
