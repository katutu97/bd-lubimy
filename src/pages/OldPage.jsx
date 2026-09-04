import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import WishCard from '../components/WishCard.jsx'
import ContentsLinkButton from '../components/ContentsLinkButton.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import PhotoTextBlock from '../components/old/PhotoTextBlock.jsx'
import ThreePhotosRow from '../components/old/ThreePhotosRow.jsx'
import QuoteFillIn from '../components/old/QuoteFillIn.jsx'
import GiftBox from '../components/old/GiftBox.jsx'
import RevealButton from '../components/final/RevealButton.jsx'
import FlipNoteGrid from '../components/old/FlipNoteGrid.jsx'
import NumberLock from '../components/old/NumberLock.jsx'
import '../styles/oldPage.css'

const FLIP_NOTE_ITEMS = [
  { photo: '/photos/old/f11.jpg', note: 'Какие' },
  { photo: '/photos/old/f12.jpg', note: 'цифры' },
  { photo: '/photos/old/f13.jpg', note: 'в' },
]

const FLIP_NOTE_ITEMS2 = [
  { photo: '/photos/old/f21.jpg', note: 'парижском' },
  { photo: '/photos/old/f22.jpg', note: 'кабаре' },
  { photo: '/photos/old/f23.jpg', note: 'написал' },
  { photo: '/photos/old/f24.jpg', note: 'брюнет' },
]

const FLIP_NOTE_ITEMS3 = [
  { photo: '/photos/old/f31.jpg', note: 'после' },
  { photo: '/photos/old/f32.jpg', note: 'того' },
  { photo: '/photos/old/f33.jpg', note: 'как' },
]

const FLIP_NOTE_ITEMS4 = [
  { photo: '/photos/old/f41.jpg', note: 'угостил' },
  { photo: '/photos/old/f42.jpg', note: 'меня' },
  { photo: '/photos/old/f43.jpg', note: 'вином' },
]

export default function OldPage() {
  const { unlockNext, allUnlocked } = useProgress()
  const navigate = useNavigate()

  const [quoteSolved, setQuoteSolved] = useState(allUnlocked)
  const [showAfterGift, setShowAfterGift] = useState(allUnlocked)
  const [lockSolved, setLockSolved] = useState(allUnlocked)

  function handleFinalNext() {
    unlockNext()
    navigate('/eight')
  }

  return (
    <div className="page old-page">
      <ChapterLabel number="Глава Седьмая" title="Старые друзья" />

      <PhotoTextBlock
        layout="photo-left"
        photo="/photos/old/1.jpg"
        text={
          <>
            Мы оба забыли как мы познакомились, но я припоминаю что по пути со <i>школы</i> просто начали говорить об <i>играх</i>, он меня о чём-то спросил, а я тогда на ютубе видос посмотрел, так и заобщались. Потом начали в вк друг другу иногда писать и <i>мемы</i> всякие кидать, потом друг другу начали <i>лещей давать</i> и называть друг друга официально <i>Даниил</i> и <i>Алексей</i>, плюс еще додумались вместе делать домашку, у меня тогда комп плохой был, но мы всё равно делали созвоны и ещё в кс играли много.
          </>
        }
      />

      <PhotoTextBlock
        layout="photo-center"
        photo="/photos/old/2.jpg"
        text={
          <>
            Еще я дома качал мемные игры про <i>хомяков</i> и <i>жаб</i> на телефон и в школе мы их оценивали. Ну и про Flying Gorilla тоже мы не забыли с ним. Eще стикер мемный, <i>наш</i> с ним любимый был, вот этот...
          </>
        }
      />

      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/old/3.jpg"
        text={
          <>
            В какой-то момент мы вместе начали в школу ходить, он меня ждал на <i>нашем месте</i>, а я постоянно опаздывал и нам часто бежать приходилось чтоб успеть, он всегда меня упрекал, а мне просто впадлу было раньше вставать, поэтому обычно было вот так)
          </>
        }
        text2={
          <>
            Eще я у него в гостях был, мы в геншин зашли, он перед тем как крутить <i>говорит</i>: « Щас козу выбью » и реально выпала с <i>первой крутки</i>, мы тогда оба офигели, он сидел там угарал <i>гад</i>)
          </>
        }
      />

      <ThreePhotosRow
        photos={['/photos/old/5.jpg', '/photos/old/6.jpg', '/photos/old/7.jpg']}
      />

      <PhotoTextBlock
        layout="photo-right"
        photo="/photos/old/8.jpg"
        text="Было дело что нас с уроков отпустила классуха чтоб мы таблички отвезли на конкурс, мы тогда с кайфом прогулялись еще и шавуху себе купили, кайфовый день был."
        text2="Еще мы с ним и Севой как-то озвучивали ДжоДжо, жаль у меня нет видосов, но получилось мемно тогда, кажется будто это вообще вчера было."
      />

      <QuoteFillIn
        before="«С кс было много мемов, особенно про  "
        answer="Жажо"
        after=" , он поймёт»"
        onSolved={() => setQuoteSolved(true)}
      />

      {quoteSolved && (
        <>
          <p className="section-lead">А вот и твой приз!</p>
          <GiftBox />

            <WishCard text="У меня всегда туговато с пожеланиями, но 
            Алексею я бы пожелал быть таким же крутым балбесом, он и так уже почти идеален. Хотя желаю ему отъесть огромное пузо и пожать сотку от груди, остальное у него уже есть))" />

          {!showAfterGift && <RevealButton onClick={() => setShowAfterGift(true)} />}
        </>
      )}

      {showAfterGift && (
        <>
          <PhotoTextBlock
            layout="photo-left"
            className="photo-horizontal"
            photo="/photos/old/9.jpg"
            text={
              <>
                Я тут думала-думала и поняла, что тоже не особо помню что-то с нашего совместного детства, когда дружили родители. Помню, как мы выбирали <i>домик для рыбок</i> в аквариум и как мы пришли к какому-то <i>мальчику</i> дарить этот домик. Получается, мы примерно одинокого помним наше знакомство. После этого помню мы играли в прятки с кучей каких-то детей там в квартире, и в принципе, на этом все. Класса так до 4 это единственные мои воспоминания.
              </>
            }
          />

          <PhotoTextBlock
            layout="photo-right"
            className="photo-horizontal"
            photo="/photos/old/10.jpg"
            text={
              <>
                Потом помню, как наша семья постоянно приходили на новый год к семье Крючковых и там тусовались. Очень хорошо помню момент, когда я сказала, что во что-то поиграем и резко отрубилась на маленькой кровати в детской.
              </>
            }
            
          />

          <PhotoTextBlock
            layout="photo-left"
            className="photo-horizontal"
            photo="/photos/old/11.jpg"
            text="Раньше в детстве Лешка был сильно ниже меня, и я поэтому играла с Сашей) Но потом Саше стало со мной скучно и пришлось играть с Лешей и Севой. "
            text2={
              <>
                Со временем мы стали часто общаться и ходить друг к другу в <i>гости</i>. У меня дома снимали <i>трансляции</i> какие-то в ВК и выкладывали кринжовые <i>истории</i>, стыдно, но ладно. Это была часть нашей <i>истории</i>, которая наверно останется <i>в архиве</i> в ВК. 
              </>
            }
          />

          <FlipNoteGrid items={FLIP_NOTE_ITEMS} />

          <PhotoTextBlock
            layout="photo-right"
            photo="/photos/old/12.jpg"
            text={
              <>
                Потом катались на море с моей мамой в <i>Лермонтово</i>. Там было очень круто. Помню, как мы оставили Севу в номере, потому что он <i>обиделся</i>, а мы ушли гулять по берегу, ели <i>черное мороженое</i> и все испачкались сильно. Еще помню как я учила Лешу <i>совести</i> (так и не научила). Он извинялся, я спрашивала за что, он не понимал, и я все еще <i>обижалась</i>. 
              </>
            }
          />

          <FlipNoteGrid items={FLIP_NOTE_ITEMS2} />

          <PhotoTextBlock
            layout="photo-left"
            className="photo-horizontal"
            photo="/photos/old/13.jpg"
            text2={
              <>
                Ездили в <i>Орленок</i> вместе. Там было круто. Леша меня там первый раз <i>поцеловал</i>, притянув к себе <i>больному</i> в кровати… Я была в большом шоке. Я весь лагерь говорила, что он <i>боится девочек</i> и даже не обнимается со мной, хотя мы знакомы <i>всю</i> жизнь. И тут такое… Ну и девочек ему там много понравилось, как я понимаю, для него это был <i>переломный-подростковый</i> лагерь.
              </>
            }
          />

          <FlipNoteGrid items={FLIP_NOTE_ITEMS3} />

          <PhotoTextBlock
            layout="photo-left"
            className="photo-horizontal"
            photo="/photos/old/14.jpg"
            text2={
              <>
                Последнее наше лето, как <i>лучшие друзья</i>, мы ходили гуляли по магазинам, мерили одежду и просто гуляли по центру города. Было здорово. Еще на дачу ездили что-то делали и аниме смотрели. Наконец-то нашла друга, с которым можно смотреть и обсуждать аниме)) 
              </>
            }
          />

          <FlipNoteGrid items={FLIP_NOTE_ITEMS4} />

          <p className="section-lead">А теперь набери правильный код...</p>
          <p className="section-lead">Если не знаешь что вводить, значит плохо смотрел фотографии</p>
          <NumberLock code="54107" onSolved={() => setLockSolved(true)} />

          {lockSolved && (
            <div className="nav-buttons">
              <button type="button" className="reveal-button" onClick={handleFinalNext}>
                Далее
              </button>
              <ContentsLinkButton />
            </div>
          )}
        </>
      )}
    </div>
  )
}