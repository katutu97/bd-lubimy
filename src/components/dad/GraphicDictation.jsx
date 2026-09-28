import { useState } from 'react'

const CORRECT_ANSWER = 'капибара'

export default function GraphicDictation({ onSolved }) {
  const [answer, setAnswer] = useState('')
  const [wrong, setWrong] = useState(false)
  const [correct, setCorrect] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (answer.trim().toLowerCase() === CORRECT_ANSWER) {
      setWrong(false)
      setCorrect(true)
      onSolved()
    } else {
      setWrong(true)
      setCorrect(false)
    }
  }

    // Чтобы убрать подсветку, когда пользователь снова начинает печатать
  function handleChange(e) {
    setAnswer(e.target.value)
    setWrong(false)
    setCorrect(false)  
  }

  return (
    <div className="graphic-dictation">
      <form className="dictation-form" onSubmit={handleSubmit}>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Кто это?"
          autoComplete="off"
          className={correct ? 'correct' : ''}
        />
        <button type="submit" className="btn-primary">Подтвердить</button>
      </form>

      {wrong && <p className="error">Не то, попробуй ещё раз</p>}
    </div>
  )
}