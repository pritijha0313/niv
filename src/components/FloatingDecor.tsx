const floaters = ["💕", "✨", "🌸", "⭐", "🎀", "💖", "🦋", "🌷", "🧸", "💫", "🌺", "💝"]

const drifters = ["💕", "💖", "✨", "🌸", "💗"]

export default function FloatingDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {/* soft clouds */}
      <div className="cloud absolute w-32 h-10 top-[8%] left-[5%] animate-sway opacity-60" />
      <div className="cloud absolute w-24 h-8 top-[15%] right-[8%] animate-sway opacity-50" style={{ animationDelay: "1s" }} />
      <div className="cloud absolute w-20 h-7 bottom-[20%] left-[10%] animate-sway opacity-40" style={{ animationDelay: "2s" }} />

      {/* floating emojis */}
      {floaters.map((emoji, i) => (
        <span
          key={`f-${i}`}
          className="absolute text-xl sm:text-2xl opacity-25 animate-float-random select-none"
          style={{
            left: `${5 + i * 8}%`,
            top: `${3 + (i % 5) * 18}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${3.5 + i * 0.4}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* rising hearts */}
      {drifters.map((emoji, i) => (
        <span
          key={`d-${i}`}
          className="absolute text-lg opacity-0 animate-drift-up select-none"
          style={{
            left: `${15 + i * 18}%`,
            animationDuration: `${8 + i * 2}s`,
            animationDelay: `${i * 2.5}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* twinkle dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={`t-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-pink-300 animate-twinkle"
          style={{
            left: `${8 + i * 8}%`,
            top: `${10 + (i % 6) * 14}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  )
}
