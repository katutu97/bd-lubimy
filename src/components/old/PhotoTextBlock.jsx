export default function PhotoTextBlock({ layout, photo, className, text, text2, text3 }) {
  // layout: 'photo-left' | 'photo-right' | 'photo-center' | 'photo-left-text-left'
  return (
    <div className={`photo-text-block ${layout}`}>
      <img className={`pt-photo ${className || ''}`} src={photo} alt="" />
      <div className="pt-text-wrapper">
        <p className="pt-text">{text}</p>
        {text2 && <p className="pt-text">{text2}</p>}
        {text3 && <p className="pt-text">{text3}</p>}
      </div>
    </div>
  )
}