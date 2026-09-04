import { useState } from 'react'

// каждый элемент: { photo: '...', note: 'подсказка: сахар' }
export default function FlipNoteGrid({ items }) {
  const [flipped, setFlipped] = useState([])

  function toggle(i) {
    setFlipped((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )
  }

  return (
    <div className="flip-note-grid">
      {items.map((item, i) => (
        <button
          type="button"
          key={i}
          className={`flip-note-card ${flipped.includes(i) ? 'flipped' : ''}`}
          onClick={() => toggle(i)}
        >
          <div className="flip-note-inner">
            <div className="flip-note-face flip-note-front">
              <img src={item.photo} alt="" />
            </div>
            <div className="flip-note-face flip-note-back">
              <p>{item.note}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}