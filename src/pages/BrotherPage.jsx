import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import WishCard from '../components/WishCard.jsx'
import PhotoTextBlock from '../components/old/PhotoTextBlock.jsx'
import QuoteBlock from '../components/QuoteBlock.jsx'
import ThreePhotosRowExtended from '../components/ThreePhotosRowExtended.jsx'
import '../styles/momPage.css'
import '../styles/oldPage.css'
import RevealButton from '../components/final/RevealButton.jsx'
import QuoteFillIn from '../components/old/QuoteFillIn.jsx'
import WinnerPhoto from '../components/mom/WinnerPhoto.jsx'

export default function BrotherPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()
  const [showAfterGift, setShowAfterGift] = useState(allUnlocked)
  const [showFinalPart, setShowFinalPart] = useState(allUnlocked)
  const [showSister, setShowSister] = useState(allUnlocked)
  const [quoteSolved, setQuoteSolved] = useState(false)

  function handleNext() {
    navigate('/five') // поправь путь на реальный маршрут следующей главы
  }

  return (
    <div className="page brither-page">
      <ChapterLabel number="Глава Четвертая" title="Братья" />

      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal hero-photo-frame"
        photo="/photos/brothers/m1.jpg"
        text={
            <>
            Все <i>истории</i> с Лёшкой обычно делятся на две категории: <br />
            1. Он что то <i>собрал</i> крутое <br />
            2. Он что то <i>сломал</i> крутое
            </>
        }
        text3={
            <>
            Самое интересное, что сломал - это всегда <i>случайно</i> и <i>само</i> по себе. Он не роняет, не разламывает, просто <i>смотрит</i> и все, вещь сломалась.
            </>
        }
      />

      <PhotoTextBlock
        layout="photo-right"
        className="photo-horizontal"
        photo="/photos/brothers/m3.jpg"
        text={
            <>
            За Лёшей с самого детства сохраняется <i>любовь</i> ко всему живому. Он <i>любит</i> собак, кошек, рыбок. Любая <i>жизнь</i> для него очень важна и бесценна.
            </>
          }
        text2={
            <>
            <i>Кто же там спрятан на фото... Наверное, лягушка. Целует ее, чтоб расколдовать принцессу и стать принцем.</i>
            </>
          }
      />
      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal"
        photo="/photos/brothers/m4.jpg"
        text={
            <>
            «Старший брат - это самый близкий и родной человек, который всегда будет рядом в трудную минуту. Он может быть опорой и поддержкой, а также научить нас многому. Мудрость брата может помочь нам в жизни, дать советы и рекомендации, которые помогут нам стать лучше и успешнее.»
            </>
          }
      />
      <QuoteBlock 
        text="Хочется, что бы Алексей смотрел на мир более категоричным взглядом, понимал последствия не на момент свершения действия, а за два шага до. Так как чем старше становишься  тем последствия любых действий становятся тяжелее. Особенно те, что могут отразиться в далеком будущем."
        type="lesson"
      />
      <ThreePhotosRowExtended
        photos={['/photos/brothers/m6.jpg', '/photos/brothers/m5.jpg', '/photos/brothers/m7.jpg']}
      />

      <WishCard text="Хочется что бы Лёшка оставался таким же добрым человеком, не боялся открываться родным и близким, ведь мы всегда поддержим и подскажем как действовать в любой ситуации." />
      
      {!showAfterGift && <RevealButton onClick={() => setShowAfterGift(true)} />}
      {showAfterGift && (
        <>
        <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal hero-photo-frame"
        photo="/photos/brothers/a1.jpg"
        text={
            <>
            Леша очень <i>любопытный</i>, но в детстве это не всегда играло ему на руку, а один раз сыграло на руку <i>буквально</i>. Потянув за провод с <i>утюгом</i> он получил ожог на всю жизнь. 
            </>
        } 
        text2={
            <>
            В другой момент <i>решил</i> засунуть пальцы в педали от компьютерного руля, с Мишей <i>вытаскивали</i>, бегал в <i>аптеку</i> за бинтами.</>
        } 
      />
      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/brothers/a3.jpg"
        text={
            <>
            Как-то раз Леша <i>играл</i> в телефон и <i>не делал</i> уроки, я забрал телефон, меня попросили проконтролировать, чтобы он <i>не играл</i>. На следующий день преподаватель по математике говорит мне, что <i>злой</i> старший брат пришел и <i>выхватил</i> телефон, и из-за этого Леша не смог выполнить <i>домашнее задание</i>. 
            </>
        } 
      />
      <ThreePhotosRowExtended
        photos={['/photos/brothers/a2.jpg', '/photos/brothers/a6.jpg', '/photos/brothers/a7.jpg']}
      />
      <PhotoTextBlock
        layout="photo-left"
        photo="/photos/brothers/a4.jpg"
        text={
            <>
            Лешка очень любил своих <i>морских свинок</i> от Твистера и Трикси родились <i>детеныши</i>, но понять кто из них мальчик, а кто девочка мы так и не смогли.
            </>
        } 
        text2={
            <>
            Когда умер Твистер, мы поехали за город его хоронить, пока мы копали яму рядом остановилась <i>полиция</i> и начали интересоваться, что мы делаем ночью в лесу с <i>лопатой</i>. Ситуация неоднозначная, но вроде объяснились.
            </>
        }
      />
      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/brothers/a5.jpg"
        text={
            <>
            Ну из <i>известного</i>, все, что Леша брал <i>«потрогать» </i> ломалось без исключения.
            </>
        } 
        text2={
            <>
            Есть еще сохранившийся на видео знаменитый Лешин <i>репортаж</i>, можно сказать его первый полноценный <i>видеоблог</i>. Теперь это семейная <i>реликвия</i>, иногда пересматриваем и вспоминаем то время.
            </>
        }
        text3={
            <>
            <i>Справа фотография Очень красивого, Очень доброго, Очень красивого, Очень умного Лёшки.</i>
            </>
        }
      />
      <WishCard text="Прислушивайся к своим интересам и желаниям и двигайся в ту сторону, которая приносит тебе удовольствие." />
      
        {!showFinalPart && <RevealButton onClick={() => setShowFinalPart(true)} />}
        {showFinalPart && (
          <>
          <PhotoTextBlock
            layout="photo-left"
            className="photo-horizontal hero-photo-frame"
            photo="/photos/brothers/s2.jpg"
            text={
                <>
                Алексей, в этот определенно <i>важный</i> для нас и особенный для тебя день хочу <i>поздравить</i> тебя с днем рождения, и повспоминать важные и совместные <i>события</i> из наших с тобой <i>жизней</i>.
                </>
            }  
          />
          <PhotoTextBlock
            layout="photo-right"
            className="photo-kvadrat"
            photo="/photos/brothers/s3.jpg"
            text={
                <>
                Безусловно вспоминается очень много всего из <i>детства</i>, наши поездки куда бы то ни было: я помню как в греции мы играли в эту <i>свинью</i>, или как в каждую из наших поездок в <i>Лермонтово</i> проводили вместе время, тогда мы почти <i>не разлучались</i>…
                </>
            }  
            text2={
                <>
                Я помню наши детские поездки во <i>Владимир</i>, время с тобой проведенное у <i>бабушек</i>, и вспоминая это я испытываю только светлые и теплые чувства.
                </>
            }
          />
          <PhotoTextBlock
            layout="photo-left"
            className="photo-kvadrat"
            photo="/photos/brothers/s4.jpg"
            text={
                <>
                Наших общих воспоминаний очень много, и это очень важно для близкой <i>братской связи</i>. Много-много всего мы проходили <i>вместе</i>, вместе что-то узнавали, где-то спорили, но это делает наши узы только <i>крепче</i>.
                </>
            }  
            text2={
                <>
                Мои воспоминания о записях табс и арка, наши прохождения хранятся у меня <i>в памяти</i>, и я не буду их оттуда вычеркивать как можно дольше, эти <i>воспоминания</i> меня греют и дарят тепло. Люблю тебя <i>брат</i>.
                </>
            }
          />
          <ThreePhotosRowExtended
            photos={['/photos/brothers/s5.jpg', '/photos/brothers/s6.jpg', '/photos/brothers/s7.jpg']}
          />
          <WishCard text="Счастья, здоровья, и моментами побольше серьезности, все остальное ты сам знаешь:)" />
        
        
            {!showSister && <RevealButton onClick={() => setShowSister(true)} />}
                {showSister && (
                  <>
                  <p className="section-lead">
                    Ну и как же без "сестёр"... 
                  </p>
                  <ThreePhotosRowExtended
                  photos={['/photos/brothers/sis1.jpg', '/photos/brothers/sis2.jpg', '/photos/brothers/sis3.jpg']}
                  />
                  <p className="section-lead">
                    Поздравление от Томочки: 
                  </p>
                  <WishCard text="С днём рождения, Леша! 
                    В 21 теперь можно ну просто все!
                    А если серьезно, то желаю  тебе, чтобы уходя со студенческой скамьи, ты сразу встал на ноги и пошёл своим путём. Пусть энергия, оптимизм и молодость помогут тебе свернуть любые горы. 
                    Удачи на экзаменах, вдохновения в работе и счастья в личном!" />

                  <p className="section-lead">
                    Поздравление от Ирочки: 
                  </p>
                  <WishCard text="Лёша, поздравляю тебя с днём рождения! Оставайся таким же добрым и веселым, занимайся тем, что приносит тебе радость и пусть рядом будут надежные и любящие люди!" />
                  <p className="section-lead">
                    И конечно же слова от самого младшего БРАТА... Он тут загадку придумал специально для тебя)
                  </p>
                  <QuoteFillIn
                    before="Круглая, но не таблетка, все измеряет.. "
                    answer="Рулетка"
                    onSolved={() => setQuoteSolved(true)}
                  />
                  
                  {quoteSolved && (
                    <>
                    <WinnerPhoto />
                    <div className="nav-buttons">
                      <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
                      <ContentsLinkButton />
                    </div>
                    </>
                  )}
              </>
              )}
          </>
        )}
         
        
      </>
      )}

      
    </div>
  )
}