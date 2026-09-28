import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'

export default function ClosingPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()

  function handleNext() {
    if (!allUnlocked) unlockNext()
    navigate('/one')
  }

  return (
    <div className="page closing-page">
      <ChapterLabel number="Введение" />
      <p className="text-left-indent" style={{ maxWidth: 800, margin: '20px auto 0' }}>
        Эта книга — не просто собрание глав. Это голоса людей, чьи жизни пересеклись с жизнью одного человека. 
      </p>
      <p className="text-left-indent" style={{ maxWidth: 800, margin: '20px auto 0' }}>
        Для кого-то он — случайный попутчик, чей маршрут вызывает лишь мимолётное любопытство. Для кого-то — прохожий, способный подсказать верный путь. Но есть  те, кто делит с ним одну крышу над головой, кто сидит с ним за одной партой или встречает его по утрам на кухне.
      </p>
      <p className="text-left-indent" style={{ maxWidth: 800, margin: '20px auto 0' }}>
        Дальше вас ждут воспоминания: смешные, трогательные и даже немного грустные. Это книга о человеке, который уже 7670 дней, существует на этой планете. Сейчас он просто живёт среди нас, но кто знает, возможно, именно этому человеку суждено оставить след не только в наших сердцах, но и в истории.
      </p>
      <p className="text-left-indent" style={{ maxWidth: 800, margin: '20px auto 0' }}>
        Для лучшего прочтения книги прочитайте советы: <br />
1.	Просматривать всю книгу лучше всего с компьютера или выбора режима ПК <br />
2.	Не бегите по книге, прочитайте все спокойно и почувствуйте себя «в моменте» <br />
3.	Не обращайте внимание на ошибки в тексте, это все авторская грамматика и синтаксис <br />
4.	Когда переходите на новую главу, то закройте глаза и подождите пару секунд для лучшего восприятия <br />
5.	Когда переходите по частям тоже лучше немного подождать) <br />
6. Для более душевного «вайба» вы можете включить плейлист:{' '}
  <a
    href="https://music.yandex.ru/playlists/2f3bfdc7-bba8-cef5-9999-060cbb314394?utm_source=web&utm_medium=copy_link"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#6B8B3D', textDecoration: 'underline' }}
  >
    ссылочка на музычку
  </a> <br />
  7.	Получайте удовольствие и не спешите, можете оставить что-то на потом <br />
      </p>
      <p className="text-left-indent" style={{ maxWidth: 800, margin: '20px auto 0' }}>
        Хорошего прочтения ;)
      </p>

      <video
        src="/bd-lubimy/photos/hello.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ maxWidth: '40%', borderRadius: 12, marginTop: 50}}
      />

      <div className="nav-buttons">
        <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
        <ContentsLinkButton />
      </div>
    </div>
  )
}
