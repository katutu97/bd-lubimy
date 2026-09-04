import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import FrogGame from '../components/games/FrogGame.jsx'
import EmojiRiddleSequence from '../components/games/EmojiRiddleSequence.jsx'
import FinalPictureMatch from '../components/games/FinalPictureMatch.jsx'
import '../styles/gamesPage.css'
import WinnerPhoto from '../components/games/WinnerPhoto.jsx'

export default function GamesPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()

  // меняется при полном провале финальной игры — заставляет всё пересоздаться заново
  const [sessionKey, setSessionKey] = useState(0)
  const [attemptRound, setAttemptRound] = useState(0) // 0 = первая попытка, 1 = вторая, и т.д.

  const [frogSolved, setFrogSolved] = useState(allUnlocked)
  const [riddlesSolved, setRiddlesSolved] = useState(allUnlocked)
  const [finalSolved, setFinalSolved] = useState(allUnlocked)

  function resetEverything() {
    setSessionKey((k) => k + 1)
    setAttemptRound((r) => r + 1) // следующая попытка получит другую загадку
    setFrogSolved(false)
    setRiddlesSolved(false)
    setFinalSolved(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNext() {
    unlockNext()
    navigate('/seven') 
  }

  return (
    <div className="page games-page">
      <ChapterLabel number="Глава Шестая" title="Игры" />

      <p className="section-lead">
        Наш Лёша очень любит компьютерные игры, поэтому сейчас немного разомнёмся
        и проверим его на удачу, внимательность и смышлёность.
      </p>

      <FrogGame key={`frog-${sessionKey}`} onSolved={() => setFrogSolved(true)} />

      {frogSolved && (
        <EmojiRiddleSequence
            key={`riddles-${sessionKey}`}
            riddleIndex={attemptRound}
            solved={riddlesSolved}
            onSolved={() => setRiddlesSolved(true)}
        />
        )}

        {riddlesSolved && (
        <FinalPictureMatch
          key={`final-${sessionKey}`}
          solved={finalSolved}
          onSolved={() => setFinalSolved(true)}
          onFailAll={resetEverything}
        />
      )}

      {finalSolved && (
        <>
          <WinnerPhoto />
          <div className="nav-buttons">
            <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
            <ContentsLinkButton />
          </div>
        </>
      )}
    </div>
  )
}