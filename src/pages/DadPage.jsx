import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import WishCard from '../components/WishCard.jsx'
import PhotoTextBlock from '../components/old/PhotoTextBlock.jsx'
import GraphicDictation from '../components/dad/GraphicDictation.jsx'
import PhotoDateMatchGame from '../components/dad/PhotoDateMatchGame.jsx'
import QuoteBlock from '../components/QuoteBlock.jsx'
import WinnerPhoto from '../components/dad/WinnerPhoto.jsx'
import '../styles/momPage.css'
import '../styles/finalPage.css'

export default function DadPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()

  const [game1Solved, setGame1Solved] = useState(allUnlocked)
  const [game2Solved, setGame2Solved] = useState(allUnlocked)

  function handleGame1Solved() {
    unlockNext()
    setGame1Solved(true)
  }

  function handleGame2Solved() {
    setGame2Solved(true)
  }

  function handleNext() {
    navigate('/three')
  }

  return (
    <div className="page dad-page">
      <ChapterLabel number="Глава Вторая" title="Папа" />

      <PhotoTextBlock
        layout="photo-left"
        className=" hero-photo-frame"
        photo='/photos/parents/d1.jpg'
        text={
          <>Когда я впервые увидел его, то подумал: "Какой <i>замечательный</i> человек!". Я был <i>счастлив</i>.</>
        }
      />

      <PhotoTextBlock
        layout="photo-right"
        className="photo-horizontal"
        photo='/photos/parents/d2.jpg'
        text={
          <>Ему года <i>3-4</i>, собираемся утром в садик, я наклоняюсь перед ним, чтобы завязать ему <i>шнурки</i>, а Лешка, видя мою голову сверху, <i>тыкает</i> мне указательным <i>пальцем</i> в начинающую появляться лысину и говорит: "Папа, а у тебя в голове <i>дырка</i>!"</>
        }
      />

      <p className="section-lead">Эту легендарную галерею ты должен знать наизусть.</p>
      <PhotoDateMatchGame onSolved={handleGame1Solved} />

      {game1Solved && (
        <>
          <PhotoTextBlock
            layout="photo-left"
            className="photo-horizontal"
            photo='/photos/parents/d3.jpg'
            text={<>Он много чем отливается от остальных, все братья <i>разные</i>, каждый со своим <i>характером</i>.</>}
            text2={<>Лешка <i>держит в себе</i> свои желания и помыслы, редко делится ими и с твердой настойчивостью <i>идёт</i> к намеченной цели.</>}
          />
          <p className="section-lead">С кем Лёха ассоциируется у Папани?</p>
          <QuoteBlock 
            text='5←1↑2←2↑4←1↓1←1↓1←2↓1←6↓1→2↓1→1↓1→1↓2→1↓11→1↑5→1↑ 2→2↑1→1↑1→9↑1←2↑1←2↑1←2↑1→1↑1→4↑2←1↓2←2↓1←1↓1←1↓ 4←1↑1←1↑5←1↓2←1↓1←5↓
              Отступ 1↑11→
              2→2↑2←2↓
              Отступ 6↑4←
              3↑1→1↑1→1↑1←2↑2→1↓2→1↑2→2↓1←1↓1→1↓1→1↓'
            type="quote"
            align="left"
          />
          <GraphicDictation onSolved={handleGame2Solved} />
          
        </>
      )}

      {game2Solved && (
        <>
        <p className="section-lead">С капибарой конечно :)</p>
        <WinnerPhoto />
        <WishCard text="Удачи в начинаниях; постоянного развития; здоровья, само-собой; надёжного близкого человека рядом; не терять присутствия духа в любой ситуации; ну и сбычи мечт." />

        <div className="nav-buttons">
          <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
          <ContentsLinkButton />
        </div>
        </>
      )}
    </div>
  )
}