import { useState } from 'react'
import PhotoZoomModal from './PhotoZoomModal.jsx'

const GIFT_PHOTOS = Array.from({ length: 25 }, (_, i) => `/photos/old/gift/${i + 1}.jpg`)

export default function GiftBox() {
  const [opened, setOpened] = useState(false)
  const [activePhoto, setActivePhoto] = useState(null)

  return (
    <div className="gift-fullscreen">
      {!opened && (
        <button type="button" className="gift-box-big" onClick={() => setOpened(true)}>
          {/* Лента — вертикальная и горизонтальная полосы поверх крышки */}
          <span className="ribbon ribbon-v" />
          <span className="ribbon ribbon-h" />

          {/* Бант — два "кольца" из лент + узел по центру */}
          <span className="bow">
            <span className="bow-loop bow-loop-left" />
            <span className="bow-loop bow-loop-right" />
            <span className="bow-tail bow-tail-left" />
            <span className="bow-tail bow-tail-right" />
            <span className="bow-knot" />
          </span>

          {/*<span className="gift-label-big">Ваш приз, откройте чёрный ящик</span>*/}
        </button>
      )}

      {opened && (
        <div className="gift-photos-grid gift-photos-grid-full">
          {GIFT_PHOTOS.map((src, i) => (
            <button type="button" key={i} className="gift-photo-btn" onClick={() => setActivePhoto(src)}>
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}

      {activePhoto && (
        <PhotoZoomModal src={activePhoto} onClose={() => setActivePhoto(null)} />
      )}
    </div>
  )
}