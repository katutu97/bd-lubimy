import { useState, useEffect } from 'react'

const PAIR_COUNT = 15
const IMAGE_IDS = Array.from({ length: PAIR_COUNT }, (_, i) => i + 1)

function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function buildDeck() {
  const pairs = IMAGE_IDS.flatMap((id) => [
    { key: `${id}-a`, imageId: id },
    { key: `${id}-b`, imageId: id },
  ])
  return shuffle(pairs)
}

// Загружает картинку в фоне и возвращает промис — резолвится, когда файл реально скачан
function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = resolve
    img.onerror = resolve // даже если ошибка — не блокируем игру навсегда
  })
}

export default function MemoryGame({ onSolved }) {
  const [deck] = useState(buildDeck)
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [wrongPair, setWrongPair] = useState([])
  const [busy, setBusy] = useState(false)
  const [imagesReady, setImagesReady] = useState(false)

  useEffect(() => {
    const urls = IMAGE_IDS.map((id) => `/photos/final/game/${id}.webp`)
    Promise.all(urls.map(preloadImage)).then(() => setImagesReady(true))
  }, [])

  useEffect(() => {
    if (matched.length === PAIR_COUNT) onSolved()
  }, [matched, onSolved])

  function handleCardClick(card) {
    if (busy || flipped.includes(card.key) || matched.includes(card.imageId) || flipped.length === 2) return

    const newFlipped = [...flipped, card.key]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      const [firstKey, secondKey] = newFlipped
      const first = deck.find((c) => c.key === firstKey)
      const second = deck.find((c) => c.key === secondKey)

      setBusy(true)
      if (first.imageId === second.imageId) {
        setTimeout(() => {
          setMatched((prev) => [...prev, first.imageId])
          setFlipped([])
          setBusy(false)
        }, 500)
      } else {
        setWrongPair(newFlipped)
        setTimeout(() => {
          setWrongPair([])
          setFlipped([])
          setBusy(false)
        }, 800)
      }
    }
  }

  if (!imagesReady) {
    return <p className="memory-loading">Фотографии загружаются...</p>
  }
  
  return (
    <div className="memory-game">
      <div className="memory-grid">
        {deck.map((card) => {
          const isOpen = flipped.includes(card.key) || matched.includes(card.imageId)
          const isMatched = matched.includes(card.imageId)
          const isWrong = wrongPair.includes(card.key)

          return (
            <button
              type="button"
              key={card.key}
              className={`memory-card ${isOpen ? 'open' : ''} ${isMatched ? 'matched' : ''} ${isWrong ? 'wrong' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              {isOpen ? <img src={`/photos/final/game/${card.imageId}.webp`} alt="" /> : <span className="memory-card-back" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}