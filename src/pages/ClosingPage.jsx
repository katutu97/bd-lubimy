import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'

export default function ClosingPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()

  function handleNext() {
    if (!allUnlocked) unlockNext()
    navigate('/contents')
  }

  return (
    <div className="page closing-page">
      <ChapterLabel number="Заключение" />
      <p className="framed-card-text" style={{ maxWidth: 700, margin: '20px auto 0' }}>
        Впиши финальный текст заключения...
      </p>

      <div className="nav-buttons">
        <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
        <ContentsLinkButton />
      </div>
    </div>
  )
}