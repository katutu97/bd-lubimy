import { useState, useEffect } from 'react'

export default function NumberLock({ code, onSolved }) {
  // code — строка из 5 цифр, например "30925"
  const [digits, setDigits] = useState(Array(code.length).fill(0))
  const [spinning, setSpinning] = useState(Array(code.length).fill(false))

  useEffect(() => {
    if (digits.join('') === code) {
      onSolved()
    }
  }, [digits, code, onSolved])

  function spin(index) {
    setSpinning((prev) => {
      const next = [...prev]
      next[index] = true
      return next
    })

    setTimeout(() => {
      setDigits((prev) => {
        const next = [...prev]
        next[index] = (next[index] + 1) % 10
        return next
      })
      setSpinning((prev) => {
        const next = [...prev]
        next[index] = false
        return next
      })
    }, 150)
  }

  return (
    <div className="number-lock">
      {digits.map((d, i) => (
        <button
          type="button"
          key={i}
          className={`lock-drum ${spinning[i] ? 'spinning' : ''}`}
          onClick={() => spin(i)}
        >
          {d}
        </button>
      ))}
    </div>
  )
}