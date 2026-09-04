import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import WishCard from '../components/WishCard.jsx'
import Riddle from '../components/Riddle.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'

export default function ParentsPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()
  const [solved, setSolved] = useState(allUnlocked) // если всё открыто — сразу true

  function handleSolved() {
    unlockNext()
    setSolved(true)
  }

  return (
    <div className="page">
      <ChapterLabel number="Глава Первая" />

      <WishCard text="Текст пожелания от родителей..." />
      <Riddle
        question="Загадка про семью..."
        answer="ответ"
        onSolved={handleSolved}
      />

      {!solved && <Riddle question="..." answer="..." onSolved={handleSolved} />}

      {solved && (
        <div className="nav-buttons">
          <button type="button" className="reveal-button" onClick={() => navigate('/seven')}>
            Далее
          </button>
          <ContentsLinkButton />
        </div>
      )}
    </div>
  )
}