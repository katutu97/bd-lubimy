import { useState } from 'react'
import { useProgress } from '../context/ProgressContext.jsx'
import HeroSection from '../components/final/HeroSection.jsx'
import TimelineSection from '../components/final/TimelineSection.jsx'
import DateMatchGame from '../components/final/DateMatchGame.jsx'
import GallerySection from '../components/final/GallerySection.jsx'
import MemoryGame from '../components/final/MemoryGame.jsx'
import FaqSection from '../components/final/FaqSection.jsx'
import RevealButton from '../components/final/RevealButton.jsx'
import NextChapterButton from '../components/NextChapterButton.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import WishCard from '../components/WishCard.jsx'
import '../styles/finalPage.css'

export default function FinalPage() {
  const { allUnlocked } = useProgress()

  const [game1Passed, setGame1Passed] = useState(allUnlocked)
  const [showGallery, setShowGallery] = useState(allUnlocked)
  const [game2Passed, setGame2Passed] = useState(allUnlocked)
  const [showFaq, setShowFaq] = useState(allUnlocked)

  return (
    <div className="page me-page">
      <ChapterLabel number="Глава Восьмая" title="Бесконечность" />

      <HeroSection photoSrc="/photos/final/me-1.jpg" />
      <TimelineSection sentence={
      `Уже почти 3 года мы идём с тобой рука об руку,
      помогаем и поддерживаем друг друга, хоть и на расстоянии, но всё равно вместе. Мне кажется, у нас есть небольшая традиция — 
      отмечать «День города Москвы» на ВДНХ каждый год. И я хочу, чтобы это продолжалось, а стрелочек становилось всё больше.` } />

      <p className="section-lead">Я уже немного помогла тебе, теперь ты сам  :)</p>
      <DateMatchGame locked={game1Passed} onSolved={() => setGame1Passed(true)} />

      {game1Passed && !showGallery && <RevealButton onClick={() => setShowGallery(true)} />}

      {showGallery && (
        <>
          <p className="section-lead">Вот наша небольшая галерея за это время.</p>
          <p className="section-lead">Я до этого всегда думала, что мы скучно живем и у нас в жизни почти ничего не происходит, совсем редко только, мы же даже встречаемся на расстоянии. Но пока я собирала эту галерею, я поняла, что это совсем не так. Я надеюсь, ты посмотришь ее и улыбнешься и будешь возвращаться к ней время от времени.</p>
          <GallerySection />
          <p className="section-lead">Тебе было наверное недостаточно фотографий, поэтому вот еще</p>
          <MemoryGame onSolved={() => setGame2Passed(true)} />
        </>
      )}

      {game2Passed && !showFaq && <RevealButton onClick={() => setShowFaq(true)} />}

      {showFaq && (
        <>
          <p className="section-lead">
            Я всё время задавала тебе неудобные вопросы, ты отвечал, а я — нет. Поэтому у меня взяли интервью и ты можешь в любой момент почитать мои ответы на те или иные, может быть, интересующие тебя вопросы. Можешь их читать не сразу, а когда сердце подскажет, что сейчас ты хочешь узнать ответ на этот вопрос. Может быть тебе будут помогать эти ответы во время каких-то ссор, где мы снова вспомним про нашу любовь.
          </p>
          <FaqSection />
        </>
      )}

      {showFaq && (
        <>
          <WishCard text="Любимый мой котенок, я желаю тебе крепкого здоровья, 
          потому что мне очень страшно, когда ты болеешь. Желаю брать от жизни все и наслаждаться ею, 
          но не забывать, что нужно ставить перед собой еще более высокие цели и добиваться их, 
          а я тебе постараюсь помочь во всем. Будь самим собой и никогда не сомневайся в себе. 
          Ты самый лучший!" />
          <NextChapterButton />
        </>
      )}
    </div>
  )
}