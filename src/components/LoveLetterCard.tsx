import type { ReactNode } from "react"

interface LoveLetterCardProps {
  children: ReactNode
  variant?: "finale" | "birthday" | "advance"
}

export default function LoveLetterCard({
  children,
  variant = "finale",
}: LoveLetterCardProps) {
  return (
    <article className={`love-letter-card love-letter-card--${variant} animate-pop-in`}>
      <span className="love-letter-deco love-letter-deco-tl" aria-hidden>
        ✨
      </span>
      <span className="love-letter-deco love-letter-deco-tr" aria-hidden>
        👑
      </span>
      <span className="love-letter-tape" aria-hidden>
        {variant === "birthday"
          ? "🎂 21 Sept — Birthday letter"
          : variant === "advance"
            ? "🎁 Advance Birthday Gift"
            : "💌 Teri Masi ka letter"}
      </span>
      <div className="love-letter-body">{children}</div>
      <span className="love-letter-deco love-letter-deco-bl" aria-hidden>
        🎂
      </span>
      <span className="love-letter-deco love-letter-deco-br" aria-hidden>
        🌟
      </span>
    </article>
  )
}
