import { Link, useLocation } from "react-router-dom"
import { memories } from "../data/story"
import BackgroundMusic from "./BackgroundMusic"
import CuteBuddy from "./CuteBuddy"
import CursorTeddy from "./CursorTeddy"
import FloatingDecor from "./FloatingDecor"

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingDecor />

      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b-2 border-pink-100 shadow-sm">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl animate-wiggle">🧸</span>
            <div>
              <span className="text-base font-extrabold rainbow-text block leading-tight">
                Niv ki Yaadein
              </span>
              <span className="text-[10px] text-rose-300 font-extrabold">
                🧸 memory book
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className={`px-3.5 py-2 rounded-full text-sm font-extrabold transition-all ${
              location.pathname === "/"
                ? "bg-rose-100 text-rose-600 scale-105"
                : "text-gray-400 hover:bg-rose-50 hover:text-rose-500"
            }`}
          >
            🏠 Timeline
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full px-4 py-8 relative z-10">
        {children}
      </main>

      <footer className="text-center py-6 relative z-10">
        <p className="text-xs text-purple-400 font-extrabold mb-3">
          Teri Masi 🧸💕
        </p>
        <div className="flex justify-center gap-1.5 flex-wrap px-4 max-w-md mx-auto">
          {memories.map((m) => (
            <Link
              key={m.slug}
              to={`/memory/${m.slug}`}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 border border-pink-100 hover:scale-125 hover:bg-rose-50 transition-all text-sm"
              title={m.dateLabel}
            >
              {m.teddy}
            </Link>
          ))}
        </div>
      </footer>

      <CursorTeddy />
      <BackgroundMusic />
      <CuteBuddy />
    </div>
  )
}
