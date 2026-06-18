interface PolaroidPhotoProps {
  alt: string
  caption: string
  emoji: string
  image?: string
  video?: string
  large?: boolean
  className?: string
}

export default function PolaroidPhoto({
  alt,
  caption,
  emoji,
  image,
  video,
  large = false,
  className = "",
}: PolaroidPhotoProps) {
  return (
    <figure className={`polaroid ${large ? "polaroid-lg" : ""} ${className}`}>
      <div className="polaroid-img-wrap">
        {video ? (
          <video
            src={video}
            className="polaroid-img polaroid-video"
            controls
            playsInline
            preload="metadata"
            aria-label={alt}
          />
        ) : image ? (
          <img src={image} alt={alt} className="polaroid-img" />
        ) : (
          <div className="polaroid-dummy" role="img" aria-label={alt}>
            <span className="polaroid-emoji">{emoji}</span>
            <span className="polaroid-dummy-label">photo baad mein 📸</span>
          </div>
        )}
      </div>
      <figcaption className="polaroid-caption">{caption}</figcaption>
    </figure>
  )
}
