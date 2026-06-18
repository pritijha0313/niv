import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { letter, memories } from "../data/story"
import TypewriterText from "./TypewriterText"

const homeLines = [
  "Niv! Har page ek yaad hai — jaise jaise mile! 🧸",
  "Timeline dekho, har date cute hai! 💕",
  "Teddy bhi saath hai hamesha! 🤗",
]

export default function CuteBuddy() {
  const location = useLocation()
  const { slug } = useParams()
  const mem = slug ? memories.find((m) => m.slug === slug) : null

  const lines = mem
    ? [mem.masiSays, "Yaad hai wo din? 🥰", letter.signOff]
    : location.pathname === "/"
      ? homeLines
      : [letter.signOff]

  const [index, setIndex] = useState(0)
  const [key, setKey] = useState(0)

  const nextLine = () => {
    setIndex((i) => (i + 1) % lines.length)
    setKey((k) => k + 1)
  }

  return (
    <button
      onClick={nextLine}
      className="fixed bottom-6 right-4 sm:right-8 z-50 flex items-end gap-2 group bg-transparent border-none p-0 text-left"
      aria-label="Masi se baat karo"
    >
      <div className="story-card rounded-2xl rounded-br-md px-4 py-3 max-w-[220px] shadow-xl group-hover:scale-105 transition-transform border-purple-100">
        <p className="text-[11px] font-extrabold text-purple-500 mb-1">
          🧸 Masi bol rahi hai...
        </p>
        <p className="text-sm font-bold text-gray-600 leading-snug" key={key}>
          <TypewriterText text={lines[index]} speed={26} />
        </p>
      </div>
      <span className="text-4xl animate-bounce-soft group-hover:animate-wiggle">👩‍🦱</span>
    </button>
  )
}
