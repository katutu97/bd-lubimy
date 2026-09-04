import { useState } from 'react'

const LETTERS = ['А', 'Б', 'В', 'Г']

export default function MillionaireQuiz({ question, options, correctId, onSolved, solved }) {
  const [selectedId, setSelectedId] = useState(solved ? correctId : null)
  const [error, setError] = useState('')
  const [wrong, setWrong] = useState(false)

  function handleSelect(id) {
    if (solved) return
    setSelectedId(id)
    setError('')
    setWrong(false)
  }

  function handleConfirm() {
    if (solved) return
    if (!selectedId) {
      setError('Ни один вариант не выбран')
      return
    }
    if (selectedId === correctId) {
      setError('')
      setWrong(false)
      onSolved()
    } else {
      setWrong(true)
      setError('')
    }
  }

  return (
    <div className="millionaire-quiz">
      <p className="quiz-question">{question}</p>

      <div className="quiz-options-grid">
        {options.map((opt, i) => {
          const isSelected = selectedId === opt.id
          const isCorrectHighlight = solved && opt.id === correctId
          return (
            <button
              type="button"
              key={opt.id}
              className={`quiz-option ${isSelected ? 'selected' : ''} ${isCorrectHighlight ? 'correct' : ''}`}
              onClick={() => handleSelect(opt.id)}
              disabled={solved}
            >
              <span className="quiz-option-letter">{LETTERS[i]}</span>
              <span className="quiz-option-text">{opt.text}</span>
            </button>
          )
        })}
      </div>

      {!solved && (
        <button type="button" className="btn-primary quiz-confirm" onClick={handleConfirm}>
          Подтвердить
        </button>
      )}

      {error && <p className="error">{error}</p>}
      {wrong && <p className="error">Как так-то, давайте ещё раз попробуем</p>}
    </div>
  )
}