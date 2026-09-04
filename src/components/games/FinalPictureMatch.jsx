import { useState, useMemo } from 'react'

// Несколько наборов "картинка + 12 вариантов" — при сбросе игры выбирается случайный,
// чтобы вопрос отличался от предыдущей попытки
const POOL = [
  {
    image: '/photos/games/1.png',
    options: [
      { id: 'a', label: '10 🐸' }, { id: 'b', label: '9 🐳' }, { id: 'c', label: '15 💧' }, { id: 'd', label: '11 🦎' },
      { id: 'e', label: '10 💎' }, { id: 'f', label: '14 🌲' }, { id: 'g', label: '11 🍀' }, { id: 'h', label: '13 🌊' },
      { id: 'i', label: '10 🐍' }, { id: 'j', label: '13 🐟' }, { id: 'k', label: '14 ❄️' }, { id: 'l', label: '14 🥒' },
    ],
    correctId: 'j',
  },
]

export default function FinalPictureMatch({ solved, onSolved, onFailAll }) {
  // выбирается один раз при создании компонента (при пересоздании через key будет новый)
  const puzzle = useMemo(() => POOL[Math.floor(Math.random() * POOL.length)], [])

  const [selected, setSelected] = useState(null)
  const [placed, setPlaced] = useState(solved ? puzzle.correctId : null)
  const [attemptsLeft, setAttemptsLeft] = useState(3)
  const [wrong, setWrong] = useState(false)

  function pickOption(id) {
    setSelected(id)
    setWrong(false)
  }

  function placeIntoTarget() {
    if (!selected) return
    setPlaced(selected)
    setSelected(null)
  }

  function clearTarget() {
    setPlaced(null)
  }

  function handleCheck() {
    if (!placed) return
    if (placed === puzzle.correctId) {
      onSolved()
    } else {
      const left = attemptsLeft - 1
      setAttemptsLeft(left)
      setWrong(true)
      setPlaced(null)
      if (left <= 0) {
        setTimeout(() => onFailAll(), 1200)
      }
    }
  }

  return (
    <div className="final-match">
      <img className="final-match-photo" src={puzzle.image} alt="" />

      {solved ? (
        <p className="final-solved-answer">Правильный ответ: {puzzle.options.find((o) => o.id === puzzle.correctId).label}</p>
      ) : (
        <>
          <div className="final-options-grid">
            {puzzle.options
              .filter((opt) => opt.id !== placed)
              .map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  className={`final-option ${selected === opt.id ? 'selected' : ''}`}
                  onClick={() => pickOption(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
          </div>

          <button type="button" className="final-target-slot" onClick={placed ? clearTarget : placeIntoTarget}>
            {placed ? puzzle.options.find((o) => o.id === placed).label : ''}
          </button>

          <div className="final-match-controls">
            <button type="button" className="btn-primary" onClick={handleCheck}>Подтвердить</button>
            <p className="attempts-left">Осталось попыток: {attemptsLeft}</p>
          </div>

          {wrong && attemptsLeft > 0 && <p className="error">Неправильно, попробуй ещё раз</p>}
          {attemptsLeft <= 0 && <p className="error">Попытки закончились — начинаем сначала...</p>}
        </>
      )}
    </div>
  )
}
