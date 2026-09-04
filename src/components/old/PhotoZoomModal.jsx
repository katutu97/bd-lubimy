import { useState, useEffect } from 'react'

export default function PhotoZoomModal({ src, onClose }) {
  const [closing, setClosing] = useState(false)

  function handleClose() {
    setClosing(true)
    setTimeout(onClose, 250) // ждём конца анимации перед реальным закрытием
  }

  // Закрытие по Esc — приятная мелочь
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={`photo-modal-overlay ${closing ? 'closing' : ''}`} onClick={handleClose}>
      <img className={`photo-modal-img ${closing ? 'closing' : ''}`} src={src} alt="" />
    </div>
  )
}