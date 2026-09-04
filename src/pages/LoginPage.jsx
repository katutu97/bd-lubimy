import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import '../styles/loginPage.css'

const CORRECT_LOGIN = 'любимый'
const CORRECT_PASSWORD = '30092005'

const HINTS = [
  'У жабы первая подсказка',
  'Пароль состоит из 8 цифр',
  'Самая прекрасная дата в истории человечества',
]

export default function LoginPage() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [hintIndex, setHintIndex] = useState(null)

  const { unlockNext } = useProgress()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const isCorrect =
      login.trim().toLowerCase() === CORRECT_LOGIN &&
      password.trim().toLowerCase() === CORRECT_PASSWORD

    if (isCorrect) {
      unlockNext()
      navigate('/one')
    } else {
      setError('Что-то не так... подумай ещё :)')
    }
  }

  function handleReset() {
    setLogin('')
    setPassword('')
    setError('')
    setHintIndex(null)
  }

  function handleHintClick() {
    if (hintIndex === null) {
      // Первое нажатие — показываем первую подсказку
      setHintIndex(0)
    } else {
      // Следующие нажатия — листаем по кругу
      setHintIndex((prev) => (prev + 1) % HINTS.length)
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <span className="corner corner--tl" />
        <span className="corner corner--tr" />
        <span className="corner corner--bl" />
        <span className="corner corner--br" />

        <h1 className="hero-text">Вход</h1>
        <p className="subtitle">подумай головой и введи пароль</p>

        <form onSubmit={handleSubmit}>
          <label>
            Логин
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="button-row">
            <button type="button" className="btn-secondary" onClick={handleReset}>
              Сбросить
            </button>
            <button type="submit" className="btn-primary">
              Войти
            </button>
          </div>
        </form>

        {error && <p className="error">{error}</p>}

        <button type="button" className="hint-button" onClick={handleHintClick}>
          Подсказка
        </button>

        {hintIndex !== null && <p className="hint-text">{HINTS[hintIndex]}</p>}
      </div>
    </div>
  )
}