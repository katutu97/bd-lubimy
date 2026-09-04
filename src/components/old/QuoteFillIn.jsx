import { useState } from 'react'

export default function QuoteFillIn({ before, after, answer, onSolved }) {
  const [value, setValue] = useState('')
  const [wrong, setWrong] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (value.trim().toLowerCase() === answer.toLowerCase()) {
      setWrong(false)
      onSolved()
    } else {
      setWrong(true)
    }
  }

  return (
    <form className="quote-fill" onSubmit={handleSubmit}>
      <p className="quote-text">
        {before}
        <input
          className="quote-blank"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size={Math.max(answer.length, 4)}
        />
        {after}
      </p>
      <button type="submit" className="btn-primary">Проверить</button>
      {wrong && <p className="error">Как так-то, попробуй ещё раз</p>}
    </form>
  )
}