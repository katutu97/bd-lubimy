import { useState } from 'react'

export default function Riddle({ question, answer, onSolved }) {
  const [value, setValue] = useState('')
  const [wrong, setWrong] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (value.trim().toLowerCase() === answer.toLowerCase()) {
      onSolved()
    } else {
      setWrong(true)
    }
  }

  return (
    <div className="riddle">
      <p>{question}</p>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Проверить</button>
      </form>
      {wrong && <p className="error">Не то, попробуй ещё раз!</p>}
    </div>
  )
}