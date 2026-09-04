import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import PhotoCollage from '../components/mom/PhotoCollage.jsx'
import WishCard from '../components/WishCard.jsx'
import MillionaireQuiz from '../components/mom/MillionaireQuiz.jsx'
import PhotoTextBlock from '../components/old/PhotoTextBlock.jsx'
import QuoteBlock from '../components/QuoteBlock.jsx'
import '../styles/momPage.css'
import '../styles/oldPage.css'

const COLLAGE_PHOTOS = [
  { src: '/photos/parents/ml1.jpg', rotate: -4, size: 'lg' },
  { src: '/photos/parents/ml2.jpg', rotate: 3, size: 'sm' },
  { src: '/photos/parents/ml6.jpg', rotate: -2, size: 'md' },
  { src: '/photos/parents/ml8.jpg', rotate: 5, size: 'sm' },
  { src: '/photos/parents/ml5.jpg', rotate: -3, size: 'md' },
  { src: '/photos/parents/ml3.jpg', rotate: 2, size: 'lg' },
]

export default function MomPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()
  const [solved, setSolved] = useState(allUnlocked)

  function handleSolved() {
    unlockNext()
    setSolved(true)
  }

  function handleNext() {
    navigate('/three') // поправь путь на реальный маршрут следующей главы
  }

  return (
    <div className="page mom-page">
      <ChapterLabel number="Глава Первая" title="Мама" />

      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal"
        photo="/photos/parents/m1.jpg"
        text={
            <>
            Первое впечатление, когда он родился: 
            </>
        }
        text2={
            <>
            Он же у меня немножечко подзастрял, родился переношенным. У него долгое время на переносице <i>синенькая полосочка</i> была. И я все время говорю, что он пытался свой <i>нос высунуть</i>, побыстрее вылезти. Это его такая черта. 
            </>
        }
      />
      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/parents/m3.jpg"
        text={
            <>
            Хотелось назвать малыша шипящим, мягким и спокойным именем, потому что у нас уже были Миша и Саша. А так как он еще и родился в год петуха, характер боевой.. Петухи все такие. Поэтому хотелось именем смягчить характер, сделать немного поспокойнее. Как говориться, как корабль назовешь, так он и поплывет.  
            </>
        }
      />
      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal"
        photo="/photos/parents/m4.jpg"
        text={
            <>
            Леша был очень <i>беспокойным</i> ребенком и я, как мама, все время чувствую перед ним какую-то свою <i>вину</i>. Буквально через полтора года у нас появился Севка и мне с ним просто некогда было заниматься. У меня ощущение, что я все время перед ним <i>виновата</i>.  
            </>
        }
      
      />
      <PhotoTextBlock
        layout="photo-right"
        className="photo-horizontal"
        photo="/photos/parents/m2.jpg"
        text={
            <>
            Я очень <i>боюсь</i> за Лешу. Мне один <i>сон</i> однажды плохой, очень реалестичный приснился, что я теперь очень сильно за него <i>переживаю</i>. Самое страшное все началось с детства, когда он <i>утюг</i> на руку сбросил. И мы поэтому все время смеялись, потому что если где-то что-то сломалось, то это значит <i>Лёха сломал</i>. Это как один анекдот… 
            </>
        }
        
      />
      <QuoteBlock 
        text="Решили ученые провести эксперимент. Закрыть в абсолютно герметичной комнате без каких-либо щелей человека, дать ему три стальных шарика и посмотреть, что будет. Для эксперимента взяли американца, китайца и русского. Рассадили по камерам. На следующий день смотрят, кто что делает. Американец сидит, шарики катает. Заглянули к китайцу - сидит, медитирует. Русский же сидит и плачет, а в руке всего один шарик. У него спрашивают: «Где еще два?». «Один сломал, другой потерял» "
        type="joke"
      />

      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/parents/m5.jpg"
        text={
            <>
            Когда мы с ним ходили куда-то, то все время было ощущение <i>солнышка</i>. 
            </>
        }
        text2={
            <>
            В музыкальную школу он в детстве ходил на народные танцы и пение. И там они как-то отмечали <i>масленицу</i>. И на каком-то конкурсе ему доверили нести <i>солнышко</i>. Я сижу и кто-то говорит «ах, а какое солнышко-то у этой группы..». А я про себя думаю «да, это <i>солнышко</i> моё!» 
            </>
        }
      />

      <p className="section-lead">
        Любимые мамины фотографии...
      </p>

      <PhotoCollage photos={COLLAGE_PHOTOS} />

      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal"
        photo="/photos/parents/m6.jpg"
        text={
            <>
            Во <i>взрослой</i> жизни мы Лешку уже почти не видим. Помню только когда он в Москву поступал, мы с ним на <i>Останкинскую башню</i> съездили, по выставке ВДНХ погуляли. <i>Хорошо</i> мы с ним тогда погуляли. 
            </>
        }
       
      />

      <PhotoTextBlock
        layout="photo-right"
        className="photo-horizontal"
        photo="/photos/parents/m7.jpg"
        text={
            <>
            Сам по себе Леша все время был какой-то такой <i>внимательный</i>, очень <i>сердобольный</i> ко всем. Чувствовал у кого-то что болит. Очень <i>ранимым</i> мальчиком был. На мой взгляд, он всегда всем готов<i> помочь</i>.  
            </>
        }
        text2={
            <>
            Он <i>быстро</i> принимает решение, может, не всегда правильные, но старается все это сделать <i>быстро</i>. Но это, как мне кажется, чисто <i>Архиповская</i> линия. Им тоже надо все <i>быстро</i>. Это так бабушка воспитывала Леху.
            </>
        }
      />

      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal"
        photo="/photos/parents/m8.jpg"
        text={
            <>
           Самое главное Леша – <i>технарь-технарь</i>, который пытается все сделать своими руками. Вот всё ему надо докопаться, посмотреть, найти что-то. Он скорее даже инженер, причём <i>инженер-рукотворец</i>. Вот есть инженеры, которые там сели задумались, а он всё на практике, ему это надо сделать. 
           </>
        }
       
      />

      <WishCard text="Желаю больше уравновешенности, больше думать, читать, научиться задавать себе нужные вопросы. 
      И оставаться таким же открытым человеком для людей." />

      <MillionaireQuiz
        question="А самое-то главное то, что мы все говорим, что он не похож на ***, а в большей степени похож на..."
        options={[
          { id: 'a', text: 'Славиного деда' },
          { id: 'b', text: 'Моего деда' },
          { id: 'c', text: 'Своего деда' },
          { id: 'd', text: 'Мою бабушку' },
        ]}
        correctId="b"
        solved={solved}
        onSolved={handleSolved}
      />

      {solved && (
        <>
        <p className="section-lead">  Понимаешь, это его такое тоже достоинство. Очень важное. </p>
        <div className="nav-buttons">
          <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
          <ContentsLinkButton />
        </div>
        </>
      )}
    </div>
  )
}