// src/components/NextChapterButton.jsx
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ContentsLinkButton from './ContentsLinkButton.jsx'

export default function NextChapterButton() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()

  function handleNext() {
    if (!allUnlocked) unlockNext()
    navigate('/closing')
  }

  return (
    <div className="nav-buttons">
      <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
      <ContentsLinkButton />
    </div>
  )
}