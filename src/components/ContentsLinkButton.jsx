import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'

export default function ContentsLinkButton() {
  const { allUnlocked } = useProgress()
  const navigate = useNavigate()

  if (!allUnlocked) return null // до полного прохождения кнопки не существует

  return (
    <button type="button" className="reveal-button" onClick={() => navigate('/contents')}>
      Оглавление
    </button>
  )
}