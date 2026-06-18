interface EmojiImageProps {
  emoji: string
  image?: string
  alt?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animate?: boolean
}

const sizeMap = {
  sm: "text-5xl w-24 h-24",
  md: "text-7xl w-36 h-36",
  lg: "text-8xl w-48 h-48",
  xl: "text-9xl w-64 h-64",
}

const stickerMap = {
  sm: "text-sm -top-2 -right-2",
  md: "text-base -top-2 -right-2",
  lg: "text-lg -top-3 -right-3",
  xl: "text-xl -top-3 -right-3",
}

export default function EmojiImage({
  emoji,
  image,
  alt = "story image",
  size = "lg",
  className = "",
  animate = true,
}: EmojiImageProps) {
  if (image) {
    return (
      <div className={`relative inline-block ${className}`}>
        <img
          src={image}
          alt={alt}
          className={`${sizeMap[size]} object-cover rounded-[2rem] emoji-frame ${animate ? "animate-float" : ""}`}
        />
        <span className={`absolute ${stickerMap[size]} animate-wiggle`}>💖</span>
      </div>
    )
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`${sizeMap[size]} flex items-center justify-center rounded-[2rem] emoji-frame ${animate ? "animate-float" : ""}`}
        role="img"
        aria-label={alt}
      >
        <span className="select-none drop-shadow-sm">{emoji}</span>
      </div>
      <span className={`absolute ${stickerMap[size]} animate-sparkle`}>✨</span>
    </div>
  )
}
