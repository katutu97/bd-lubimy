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
      <p className="text-left-indent" style={{ maxWidth: 700, margin: '20px auto 0' }}>
        Ну вот вы и добрались до последней страницы. Точнее, до последней страницы этой книги — потому что история, о которой вы только что читали, на этом не заканчивается.
      </p>
      <p className="text-left-indent" style={{ maxWidth: 700, margin: '20px auto 0' }}>
        Мы собрали здесь лишь несколько голосов из тысяч дней. Кто-то вспомнил детство, кто-то — смешной случай, кто-то — момент, о котором давно молчал. Но даже из этих кусочков уже видно главное: человек, которому посвящена эта книга, умеет оставлять след. Не громкий, не напоказ — просто тёплый след в сердцах тех, кто оказался рядом.
      </p>
      <p className="text-left-indent" style={{ maxWidth: 700, margin: '20px auto 0' }}>
        7670 дней позади. Впереди — ещё больше. Будут новые встречи, новые истории, новые люди, которые однажды скажут: «Я знаю его», «Это же тот самый!». И мы очень надеемся, что однажды эта книга потребует продолжения.
      </p>
      <p className="text-left-indent" style={{ maxWidth: 700, margin: '20px auto 0' }}>
        Спасибо всем, кто вложил в эту книгу частичку себя. Спасибо тебе, что ты есть. Спасибо, что ты — это ты.
      </p>
      <p className="text-left-indent" style={{ maxWidth: 700, margin: '20px auto 0' }}>
        И это не финал. Это просто пауза перед следующей главой.
      </p>
      <p className="text-left-indent" style={{maxWidth: 700, margin: '20px auto 0', textAlign: 'right', textIndent: 0, color: 'var(--color-olive-dark)', fontStyle: 'italic',}}>
        С любовью, на день рождения любимому <br />
        твоя Катя
      </p>

      <div className="nav-buttons">
        <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
        <ContentsLinkButton />
      </div>
    </div>
  )
}