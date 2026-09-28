import { useState } from 'react'

// два фото, каждому — правильная дата
const PHOTOS = [
  { id: 'p1', src: '/bd-lubimy/photos/parents/d4.jpg', correctDateId: 'd6' },
  { id: 'p2', src: '/bd-lubimy/photos/parents/d5.jpg', correctDateId: 'd2' },
]

// 10 вариантов дат — среди них 2 правильные и 8 "отвлекающих"
const DATES = [
  { id: 'd1', value: 'Я с Лешей' },
  { id: 'd2', value: 'Лёха' },
  { id: 'd3', value: 'Тоже я с Лешей' },
  { id: 'd4', value: 'Леша' },
  { id: 'd5', value: 'Тож я с Лёхой' },
  { id: 'd6', value: 'Я с Лехой' },
  { id: 'd7', value: 'Опять Лёха' },
  { id: 'd8', value: 'Лёшенька' },
  { id: 'd9', value: 'Я с Лёхой' },
  { id: 'd10', value: 'Тоже я с Лехой' },
]

export default function PhotoDateMatchGame({ onSolved }) {
  const [placements, setPlacements] = useState({})
  const [selectedDate, setSelectedDate] = useState(null)
  const [result, setResult] = useState(null)
  const [solved, setSolved] = useState(false)

  const usedDateIds = Object.values(placements)
  const availableDates = DATES.filter((d) => !usedDateIds.includes(d.id))

  function handleChipClick(dateId) {
    setSelectedDate((prev) => (prev === dateId ? null : dateId))
  }

  function handleSlotClick(photoId) {
    if (solved) return
    if (placements[photoId]) {
      setPlacements((prev) => {
        const next = { ...prev }
        delete next[photoId]
        return next
      })
      setResult(null)
      return
    }
    if (selectedDate) {
      setPlacements((prev) => ({ ...prev, [photoId]: selectedDate }))
      setSelectedDate(null)
      setResult(null)
    }
  }

  function handleConfirm() {
    const allFilled = PHOTOS.every((p) => placements[p.id])
    if (!allFilled) {
      setResult('error')
      return
    }
    const correctIds = []
    const wrongIds = []
    PHOTOS.forEach((p) => {
      if (placements[p.id] === p.correctDateId) correctIds.push(p.id)
      else wrongIds.push(p.id)
    })
    setResult({ correctIds, wrongIds })
    if (wrongIds.length === 0) {
      setSolved(true)
      onSolved()
    }
  }

  function handleRetry() {
    if (!result || result === 'error') return
    setPlacements((prev) => {
      const next = { ...prev }
      result.wrongIds.forEach((id) => delete next[id])
      return next
    })
    setResult(null)
  }

  function slotClassName(photoId) {
    if (!result || result === 'error') return 'photo-date-slot'
    if (result.correctIds.includes(photoId)) return 'photo-date-slot correct'
    if (result.wrongIds.includes(photoId)) return 'photo-date-slot wrong'
    return 'photo-date-slot'
  }

  return (
    <div className="photo-date-match-game">
      <div className="photo-date-pairs">
        {PHOTOS.map((photo) => (
          <div className="photo-date-pair" key={photo.id}>
            <img className="photo-date-photo" src={photo.src} alt="" />
            <button
              type="button"
              className={slotClassName(photo.id)}
              onClick={() => handleSlotClick(photo.id)}
              disabled={solved}
            >
              {placements[photo.id] ? DATES.find((d) => d.id === placements[photo.id]).value : ''}
            </button>
          </div>
        ))}
      </div>

      {!solved && (
        <>
          <div className="dates-pool">
            {availableDates.map((d) => (
              <button
                type="button"
                key={d.id}
                className={`date-chip ${selectedDate === d.id ? 'selected' : ''}`}
                onClick={() => handleChipClick(d.id)}
              >
                {d.value}
              </button>
            ))}
          </div>

          {result === 'error' && <p className="error">Не все даты выставлены</p>}

          <div className="game-buttons">
            <button type="button" className="btn-primary" onClick={handleConfirm}>Подтвердить</button>
            {result && result !== 'error' && result.wrongIds.length > 0 && (
              <button type="button" className="btn-secondary" onClick={handleRetry}>Попробовать ещё раз</button>
            )}
          </div>
        </>
      )}
    </div>
  )
}