import { useState } from 'react'

export default function BlurImage({ src, alt, className = '', blurAmount = '8px' }) {
  const [isBlurred, setIsBlurred] = useState(true)

  const toggleBlur = () => setIsBlurred(!isBlurred)

  return (
    <div className={`blur-image-wrapper ${className}`} onClick={toggleBlur}>
      <img
        src={src}
        alt={alt}
        className={`blur-image ${isBlurred ? 'blurred' : 'unblurred'}`}
        style={{ '--blur-amount': blurAmount }}
      />
      {isBlurred && (
        <div className="blur-overlay">
          <span className="blur-hint"></span>
        </div>
      )}
    </div>
  )
}