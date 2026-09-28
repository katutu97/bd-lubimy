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


export default function FriendPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()
  const [solved, setSolved] = useState(allUnlocked)

  function handleSolved() {
    unlockNext()
    setSolved(true)
  }

  function handleNext() {
    navigate('/six') // поправь путь на реальный маршрут следующей главы
  }

  return (
    <div className="page friend-page">
      <ChapterLabel number="Глава Пятая" title="Друзья" />

      <PhotoTextBlock
        layout="photo-left"
        className="hero-photo-frame"
        photo="/photos/friends/1.jpg"
        text={
            <>
            Наша самое важное событие - это просмотр Звездных Войн. 
            </>
        }
        text2={
            <>
            Просмотр <i>зв</i> с лёхой отдельное приятное воспоминание из жизни. До этого такого <i>кайфа</i> от просмотра не получал.
            </>
        }
      />
      <WishCard text="Желаю оставаться таким же шаловливым.
      Желаю забрать у бабушки дачу и сделать её своим поместьем и жить с Кощихой там.
      Желаю жить долго и счастливо." />


      <PhotoTextBlock
        layout="photo-left"
        className=" hero-photo-frame"
        photo="/photos/friends/2.jpg"
        text={
            <>
            Лёша! aka Лёша ватрушка, aka Леха Пенис, с днем рождения тебя! <br />
            Мы с тобой уже много <i>пережили</i>, хотя и не часто видимся.
            </>
        }
        text2={
            <>
            Периодически в моей жизни наступает <i>момент</i>, когда я думаю: "Эх я давно не видел Леху", а это <i>что-то</i> то значит! 
            </>
        }
        text3={
            <>
            И несмотря на то что ты с восхищением стрелял по <i>уткам</i>, и со злорадной улыбкой обгонял меня на <i>картах</i>, и выпивал годовой запас <i>сапирави</i>, я знаю, что ты очень <i>добрый</i> и очень <i>классный</i>. И я счастлив, что знаком с тобой. Я рад, что ты гостил у меня и отдельно рад, что у нас даже были dlc приключения с тобой и Катей во <i>Владикавказе</i>. Кто еще может таким похвастаться?
            </>
        }
      />
      <p className="text-left-indent">А ты помнишь, наш <i>квест</i>? У тебя было самое грандиозное поздравление с днем <i>рождения</i> из нашей компашки, когда мы придумали и организовали для тебя целый квест, причем абсолютно <i>на ходу</i>. Представь, как ты нас <i>вдохновил</i> своим <i>рождением</i>!<br /> Надеюсь это поздравление для тебя окажется не менее грандиозно!  </p>
      <PhotoTextBlock
        layout="photo-right"
        className="photo-horizontal"
        photo="/photos/friends/4.jpg"
        text={
            <>
            А помнишь все наши радостные игры в <i>армрестлинг</i>. Помнишь, как каждый раз, садясь за стол, знали <i>кто</i> победит и всё равно радостно играли. 
            </>
        }
        text2={
            <>
            Помнишь, что никогда <i>отсутствие</i> стола нам не помешало. Мы могли побороться хоть на натянутой <i>сопле</i> Назара.
            </>
        }
      />
      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal"
        photo="/photos/friends/3.jpg"
        text={
            <>
            А помнишь нашу <i>вайбовую</i> добрую поезду в <i>глобус</i>. Как мы кайфовали с <i>хлебного мяса</i>. Вы мне его буквально <i>презентовали</i>, я ведь не знал о таком раньше. Как мы нашли прикольные <i>макарошки-елочки</i>. Как мы много всего обсудили в такой необычной ламповой <i>компании</i>, которая кстати никогда больше не собиралась в таком составе. Это был <i>эксклюзив</i>! 
            </>
        }
      />
      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/friends/5.jpg"
        text={
            <>
            А помнишь, как ты приметил и долго выжидал и всё же в конце купил тот красивый маленький <i>нож</i> в Осетии? Самый <i>трушный</i> сувенир увёз. Как я вас с <i>Катей</i> провожал. 
            </>
        }
        text2={
            <>
            Не знаю как ты, а я всё это помню. 
            </>
        }
      />
      <WishCard text="Я желаю тебe, Леха, чтобы таких моментов было ещё больше в твоей жизни и с нами моргчелизбашневцами, и с Катей, и с твоими родственниками, и с остальными дорогими тебе людьми. 
И главное желаю тебе собрать своих заветных 50 уток, а остальных... ну ты знаешь." />     

      <PhotoTextBlock
        layout="photo-left"
        className=" hero-photo-frame"
        photo="/photos/friends/6.jpg"
        text={
            <>
            Лёша - один из самых <i>классных</i> людей, с кем мне доводилось пересечься по жизни. И если для того, чтобы повеселиться со многими людьми надо напиться или ещё что-то, с Лёшей никаких <i>дополнительных переменных</i> не нужно. 
            </>
        }
      />
      <WishCard text="Оставайся таким же классным парнем, не бросай свои интересы и плыви по жизни, как ледокол, которому всё нипочём." />  

      <PhotoTextBlock
        layout="photo-left"
        className="photo-horizontal hero-photo-frame"
        photo="/photos/friends/7.jpg"
        text={
            <>
            Хочется сказать, что Леха <i>супер</i> добрый чувак, <i>супер</i> позитивный, <i>очень</i> отзывчивый, <i>очень</i> такой эмпатичный, эмпатичная такая <i>личность</i>.
            </>
        }
        text2={
            <>
            Леха всегда видит позитивно, он прям <i>супер-супер</i> добрый парень. Вот, больше так я не знаю. В общем, да, главная черта – это вот <i>доброта</i>.
            </>
        }
      />

      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/friends/8.jpg"
        text={
            <>
            У меня есть одна замечательная <i>история</i>, и она будет поучительная. Мы тогда поехали в <i>Тверь</i>. И стояли в колее, в которой была пробка. А соседняя колея была свободна. Ну и мы стоим, стоим, что-то Лёха говорит: «Парни, а что мы стоим, что мы в эту соседнюю колею не выйдем?» А там просто на@й фуры летают, б@дь.
            </>
        }
        text2={
            <>
            И вот хочется сказать, <i>Лёх, повнимательнее будь</i>!
            </>
        }
      />

      <WishCard text="Хочется пожелать Лёхе счастья и здоровья, хотя, не знаю, Лёха здоровый пи@ец. 
      Лёхе я даже не знаю что желать. У него вроде всё есть. Он добренький такой, хорошенький мальчик. 
      Желаю, чтобы он Кощиху любил и все дела.. Чтобы он любил её больше, чем меня любит. Потому что меня он сильно любит."/>
      
      
      <PhotoTextBlock
        layout="photo-left"
        className=" hero-photo-frame"
        photo="/photos/friends/9.jpg"
        text={
            <>
            Леха очень крутой и позитивный. На <i>даче</i> его работали, выдал нам джинсы крутые и <i>ежа</i> нашли. Не помню как мы его назвали. </>
        }
        
      />
      <WishCard text="Желаю счастья, здоровья, успехов, любви с Екатериной, всего самого доброго, успехов, ну и будь счастлив. И Назар ещё секса пожелал."/>


        <div className="nav-buttons">
          <button type="button" className="reveal-button" onClick={handleNext}>Далее</button>
          <ContentsLinkButton />
        </div>

    </div>
  )
}