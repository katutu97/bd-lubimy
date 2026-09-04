import { useState } from 'react'

// Массив с фото и подписями
const GALLERY_PHOTOS = [
  { src: '/photos/final/gallery/gallery-1.webp', caption: '09.09.2023 - Наш первый день города Москвы. Единственная совместная фотка на моем телефоне с того дня. С кучей камней и твоим недовольным лицом.' },
  { src: '/photos/final/gallery/gallery-2.webp', caption: '30.09.2023 - Я доделала закладку, которая получилась очень круто и с большим трудом, оторвав от сердца, решила подарить её тебе (фоткала в твоем букуте)' },
  { src: '/photos/final/gallery/gallery-3.webp', caption: '04.11.2023 - Последний букет, подаренный тобой как другом' },
  { src: '/photos/final/gallery/gallery-4.webp', caption: '19.01.2024 - Скорее всего это одна из наших первых ночевок и переходов на родительскую кровать. Ты тогда пил смешной голубой чай' },
  { src: '/photos/final/gallery/gallery-5.webp', caption: '25.01.2024 - Тут мы едем в электричке домой и я помню это необычное ощущение, что я еду не одна, а с любимым. На удивление, для меня это до сих пор необычно, странно, захватывающе и очень уютно. ' },
  { src: '/photos/final/gallery/gallery-6.webp', caption: '02.02.2024 - Тебе очень нравится эта фотка, где я тебя целую, хотя ты скинул её мне не вместе со всеми, а позже' },
  { src: '/photos/final/gallery/gallery-6-5.webp', caption: '02.02.2024 - Скриншот с видео, где я проверяю на тебе тренд. Ты просто должен был поднять меня и все, но ты до этого додумывался 5 минут. Ну я не против, додумался вот так, даже лучше, чем должно было быть)'}, 
  { src: '/photos/final/gallery/gallery-7.webp', caption: '05.02.2024 - Ты встретил меня из вуза и подарил букет с тремя розочками,  символизирующими наши 3 месяца отношений. И после этого мы шли пару остановок пешком, чтобы похвастаться букетом всем прохожим' },
  { src: '/photos/final/gallery/gallery-8.webp', caption: '07.02.2024 - Я села за руль, хотя мне было очень страшно, но ты меня уговорил.' },
  { src: '/photos/final/gallery/gallery-9.webp', caption: '17.02.2024 - Я сделала тебе котика, который в дальнейшем пропадет в бермудском треугольнике в Питере, но ты посмотришь на него хотя бы тут еще раз))' },
  { src: '/photos/final/gallery/gallery-10.webp', caption: '19.02.2024 - Ходили мерять фигню всякую в секонде' },
  { src: '/photos/final/gallery/gallery-10-5.webp', caption: '12.04.2024 - Я готовлю для тебя футболку с поцелуйчиками'},
  { src: '/photos/final/gallery/gallery-11.webp', caption: '24.02.2024 - Смешная фотка с выставки России. Ты мне тогда подарил цепочку, которую я надеваю почти каждый день и при этом думаю о тебе.' },
  { src: '/photos/final/gallery/gallery-12.webp', caption: '13.04.2024 - Фоткались с альпаками и грибами в каком-то странном парке' },
  { src: '/photos/final/gallery/gallery-13.webp', caption: '22.04.2024 - Я пришла с выступления СтудВесны и мы ночевали у бабушек ' },
  { src: '/photos/final/gallery/gallery-14.webp', caption: '08.05.2024 - Это я купила тебе первые трусы с лягушками и мерила на себя (типа проверяя подойдут тебе или нет)' },
  { src: '/photos/final/gallery/gallery-15.webp', caption: '18.05.2024 - Мы смотрели "Госпожа Кагуя: В любви как на войне" и ели пиццу Леби-Баг из Додо (и получили супер пупер висюльку на ключи для машины)' },
  { src: '/photos/final/gallery/gallery-16.webp', caption: '19.05.2024 - Фоткались у сакуры владимирской и с новым брелком от машины)' },
  { src: '/photos/final/gallery/gallery-17.webp', caption: '09.06.2024 - Мы ходили на краски холи и после этого нас чуть не застрелили на остановке' },
  { src: '/photos/final/gallery/gallery-18.webp', caption: '09.06.2024 - Я помылась с макияжем и сделала вид как будто плакала из-за тебя, а ты смеялся и месил тесто для хачапури' },
  { src: '/photos/final/gallery/gallery-19.webp', caption: '22.06.2024 - Гуляли по Москве с Денисом и я фоткалась еще с обезьяной и зеркалом)' },
  { src: '/photos/final/gallery/gallery-20.webp', caption: '06.07.2024 - Поездка в тверь - наша первая поездка с твоими друзьями' },
  { src: '/photos/final/gallery/gallery-21.webp', caption: '17.07.2024 - Поездка в Нижний - наша первая поездка, которую я ощущала как романтичную поездку вдвоем. Мы много гуляли вместе по набережной и разговаривали о личном и  много времени провели в джакузи (тогда мы его так сильно и полюбили)' },
  { src: '/photos/final/gallery/gallery-22.webp', caption: '23.07.2024 - Наша первая поездка в Питер как "пары". Мы тут сидим в ресторанчике и ждем хинкали' },
  { src: '/photos/final/gallery/gallery-23.webp', caption: '24.07.2024 - Это мы в Питерском метро такие смешные (мне всегда очень смешно с этой фотки, но ты почему-то не смеешься)' },
  { src: '/photos/final/gallery/gallery-24.webp', caption: '26.07.2024 - Мы смотрели на развод мостов, я смотрела это впервые. Обратно домой мы поехали на самокатах, чтоб успеть до развода последнего моста' },
  { src: '/photos/final/gallery/gallery-25.webp', caption: '31.07.2024 - Ты сводил меня в ботанический сад и тем самым исполнил еще одну мою мечту. Почему то до этого я никогда туда не ходила, но всегда мечтала.' },
  { src: '/photos/final/gallery/gallery-26.webp', caption: '09.08.2024 - Это мы ходим по Русскому музею (вроде), вместе с Ирой и она нас, милашек, фоткает втихаря' },
  { src: '/photos/final/gallery/gallery-27.webp', caption: '13.08.2024 - Заставила тебя съездить в Выборг и мы договорились поехать туда еще раз, но уже с экскурсией)' },
  { src: '/photos/final/gallery/gallery-28.webp', caption: '15.08.2024 - Ты сводил меня в еще один ботанический сад. Там мне очень очень сильно понравилось' },
  { src: '/photos/final/gallery/gallery-29.webp', caption: '16.08.2024 - Ты купил мне букет ромашек напоследок, перед Казанским собором у бабушки' },
  { src: '/photos/final/gallery/gallery-30.webp', caption: '16.08.2024 - Посетили бесплатную экскурсию в Исаакиевском соборе и поднялись на него' },
  { src: '/photos/final/gallery/gallery-31.webp', caption: '30.09.2024 - Это я примеряю усы на ночевке у тебя в общаге. Тогда я купила себе новый телефон и мои первые фотки на нем это те, где ты фоткаешь меня спящей и вот эта' },
  { src: '/photos/final/gallery/gallery-32.webp', caption: '04.11.2024 - Празднуем день рождение Миши в красивом доме за городом' },
  { src: '/photos/final/gallery/gallery-33.webp', caption: '29.11.2024 - Ты пришел поддерживать нас на "Ты-лидере", хоть и не на долго, но мне было очень приятно' },
  { src: '/photos/final/gallery/gallery-34.webp', caption: '31.12.2024 - У нас нет общих фоток с того дня, к сожалению, но есть эта, где я готовлюсь, а ты подкрался и фоткаешь меня в туалете бабушек. Это был первый новый год, который мы встретили вместе.' },
  { src: '/photos/final/gallery/gallery-35.webp', caption: '18.01.2025 - Мы ходили на каток в Москве, но я не помню что за парк. Тогда я надела свитер, который мне подарили твои родители' },
  { src: '/photos/final/gallery/gallery-36.webp', caption: '26.01.2025 - В главной роли местная легенда!' },
  { src: '/photos/final/gallery/gallery-37.webp', caption: '27.01.2025 - Я думаю тут не нужно слов' },
  { src: '/photos/final/gallery/gallery-38.webp', caption: '28.01.2025 - Ты со своим другом' },
  { src: '/photos/final/gallery/gallery-39.webp', caption: '28.01.2025 - Я со своим другом' },
  { src: '/photos/final/gallery/gallery-40.webp', caption: '28.01.2025 - Счастливый инопланетянин (я думала мы до такого никогда не дойдем)' },
  { src: '/photos/final/gallery/gallery-41.webp', caption: '03.02.2025 - Самый сексуальный мужчина в мире' },
  { src: '/photos/final/gallery/gallery-42.webp', caption: '15.02.2025 - Приехал ко мне лысик и пошли на концерт при свечах, где ты меня ругал за то что я хлопаю и снимаю' },
  { src: '/photos/final/gallery/gallery-43.webp', caption: '16.02.2025 - День масочек-чек' },
  { src: '/photos/final/gallery/gallery-44.webp', caption: '24.02.2025 - Тут ты мне подарил красивый букетик и я счастлива, хотя меня так ужасно покрасили и ты лысый (что-то с прическами у нас в том месяце не задалось)' },
  { src: '/photos/final/gallery/gallery-45.webp', caption: '24.02.2025 - Тут ты сделал улыбку кролику и счастлив' },
  { src: '/photos/final/gallery/gallery-46.webp', caption: '16.03.2025 - Мы гуляли по Москве и где-то ты сфоткался с быком' },
  { src: '/photos/final/gallery/gallery-47.webp', caption: '29.03.2025 - Глазастик' },
  { src: '/photos/final/gallery/gallery-48.webp', caption: '30.03.2025 - Сходили в бассейн на Лыбеде и едим рузики в машине' },
  { src: '/photos/final/gallery/gallery-49.webp', caption: '20.04.2025 - То самое мое любимое свидание. Солнечный теплый день и ты с камерой.' },
  { src: '/photos/final/gallery/gallery-50.webp', caption: '20.04.2025 - Конус, который невозможно забыть' },
  { src: '/photos/final/gallery/gallery-51.webp', caption: '10.05.2025 - Гуляем по городу, ты фоткаешь достопримечательности и меня, а я фоткаю нас' },
  { src: '/photos/final/gallery/gallery-52.webp', caption: '10.05.2025 - Легендарная курица, похожая на меня сонную (как ты сказал)' },
  { src: '/photos/final/gallery/gallery-53.webp', caption: '22.05.2025 - Приехала к тебе с твоим любимым цветом волос' },
  { src: '/photos/final/gallery/gallery-54.webp', caption: '30.05.2025 - Ну мы конечно супер мощные' },
  { src: '/photos/final/gallery/gallery-55.webp', caption: '30.05.2025 - Я люблю есть цветы, которые ты мне подарил)) Тем более если еще и встретил меня с ними с вуза' },
  { src: '/photos/final/gallery/gallery-56.webp', caption: '03.06.2025 - Кушаем кексы, которые сделали сами у меня дома' },
  { src: '/photos/final/gallery/gallery-57.webp', caption: '19.06.2025 - Я снова перекрасилась, а ты такой на пафосе идешь выкидывать мусор' },
  { src: '/photos/final/gallery/gallery-58.webp', caption: '24.06.2025 - Мы снова в Питере и под дождем. Тебе как будто что-то не нравится. Может, не устраивает, что я заставляю тебя куда-то ходить?! Даже не знаю...' },
  { src: '/photos/final/gallery/gallery-59.webp', caption: '24.06.2025 - А еще похоже, что хинкали в Питере стали для нас какой-то тенденцией. Это был очень уютный ресторанчик и вкусный, тем более после посещения Эрмитажа.' },
  { src: '/photos/final/gallery/gallery-60.webp', caption: '26.06.2025 - Прогнал бабушек из аквариума и радуется' },
  { src: '/photos/final/gallery/gallery-61.webp', caption: '27.06.2025 - Мы доплыли до острова на лодке. На острове мы пели "а-а-а-а-аааа" и готовились к Сумеркам, ты же уже полюбил их' },
  { src: '/photos/final/gallery/gallery-62.webp', caption: '28.06.2025 - И вот мы уже в Москве на СИМФО мультимедиа "Сумерки"' },
  { src: '/photos/final/gallery/gallery-63.webp', caption: '17.07.2025 - Мы на твоей даче, разбираем бабушкин огород. Ты такой крутой в плавках, очках и футболке "Кощей"' },
  { src: '/photos/final/gallery/gallery-64.webp', caption: '18.07.2025 - Ты опять показываешь это свое лицо, а я типа тебя поддерживаю (ты мне просто перед этим приготовил очень вкусные вафли)' },
  { src: '/photos/final/gallery/gallery-65.webp', caption: '21.07.2025 - Мы первый раз в джакузи-кинотеатре. Я сделала тебе такой сюрприз и ты даже не догадывался о нём. Надеюсь я тебя очень приятно удивила в тот раз и надеюсь буду продолжать удивлять)' },
  { src: '/photos/final/gallery/gallery-66.webp', caption: '26.07.2025 - Мы на Йога-фесте от "Новых людей". Сгорели на солнце, устали, но зато получили кучу крутых эмоций, выучили танец твоего любимого исполнителя и самое главное получили кучу бесплатной фигни! ' },
  { src: '/photos/final/gallery/gallery-67.webp', caption: '29.07.2025 - Едем на электричке в Москву, чтоб поехать в Осетию. По дороге фоткаемся со смешной рекламой' },
  { src: '/photos/final/gallery/gallery-68.webp', caption: '31.07.2025 - Приехали два туриста' },
  { src: '/photos/final/gallery/gallery-69.webp', caption: '31.07.2025 - Ты, такой заботливый, фоткаешь свою милую девочку, пока твои пацаны ждут) ' },
  { src: '/photos/final/gallery/gallery-70.webp', caption: '02.08.2025 - Мы на скамейке в горах. Момент в который хочется возвращаться и возвращаться' },
  { src: '/photos/final/gallery/gallery-71.webp', caption: '06.08.2025 - Я знаю, что ты не любишь со мной фоткаться и что я тебя заставляю это делать...' },
  { src: '/photos/final/gallery/gallery-72.webp', caption: '11.08.2025 - Мы едем обратно вдвоем два дня на поезде, мы все сгорели на теплых источниках и я фоткаю самого красивого мальчика в мире' },
  { src: '/photos/final/gallery/gallery-73.webp', caption: '24.08.2025 - Ты исполняешь очередную мою мечту и мы идем в студию Рики. Там мы узнали о новом фильме Смешариков, посмотрели просто огромную коллекцию игрушек и нам провели отдельную бесплатную экскурсию, хотя детская мне тоже понравилась) С этого момента началась моя сильная любовь к Смешарикам.' },
  { src: '/photos/final/gallery/gallery-74.webp', caption: '24.08.2025 - Мы зашли на какаю-то выставу неизвестного художника (или кто это вообще..)' },
  { src: '/photos/final/gallery/gallery-75.webp', caption: '24.08.2025 - Поднялись на Питерскую крышу, ты пытался съесть мое ухо, а я пела сасагио сасагио' },
  { src: '/photos/final/gallery/gallery-76.webp', caption: '27.08.2025 - Тебя опять заставили идти на какую то выставку' },
  { src: '/photos/final/gallery/gallery-77.webp', caption: '05.09.2025 - Ты встречаешь меня с вуза с цветами, так как успешно сдал на права и я очень рада за тебя (и за себя, ведь теперь я могу пить). А еще я заметила что ты получил права примерно за 3 недели до др и я тоже)' },
  { src: '/photos/final/gallery/gallery-78.webp', caption: '05.09.2025 - Мы закончили делать самую обалденную скамейку на свете!' },
  { src: '/photos/final/gallery/gallery-79.webp', caption: '05.10.2025 - Немного поздно, но все же мы празднуем твое др у меня на даче с моей семьей' },
  { src: '/photos/final/gallery/gallery-80.webp', caption: '17.10.2025 - Я приехала к тебе сюрпризом вместе с Ариной и встретила тебя из вуза. Фоткаемся на твой новый телефон с какоим-то странным фильтром' },
  { src: '/photos/final/gallery/gallery-81.webp', caption: '19.10.2025 - Мы купили два вкуснейших милкшейка в нашей любимой То-то пицце, но чуть не умерли от них' },
  { src: '/photos/final/gallery/gallery-82.webp', caption: '06.12.2025 - Ты повторяешь мою фотку' },
  { src: '/photos/final/gallery/gallery-83.webp', caption: '28.12.2025 - Я приехала с Китая и Ваня фоткает тебя на мой телефон и ты становишься его первым подписчиком' },
  { src: '/photos/final/gallery/gallery-84.webp', caption: '29.12.2025 - Ты устраиваешь мне сюрприз, так как я сказала, что очень устала и хочу где то расслабиться ' },
  { src: '/photos/final/gallery/gallery-85.webp', caption: '15.01.2026 - Ходили смотреть на новогоднюю Москву, попросили нас сфоткать около мандариновых ёлок и ты сказал делать синиму' },
  { src: '/photos/final/gallery/gallery-86.webp', caption: '15.01.2026 - Потерялся среди роботов' },
  { src: '/photos/final/gallery/gallery-87.webp', caption: '25.01.2026 - Мы едем в ЙОШКАР-ОЛУ УРАААА!' },
  { src: '/photos/final/gallery/gallery-88.webp', caption: '27.01.2026 - Ты приготовил мне суп в первый раз' },
  { src: '/photos/final/gallery/gallery-89.webp', caption: '28.01.2026 - Взяли экскурсию по Йошкар-оле и нашли всех котов, загадали желание Йошкиному коту, узнали странную историю этого города.' },
  { src: '/photos/final/gallery/gallery-90.webp', caption: '29.01.2026 - Перед отъездом домой зашли на экскурсию в Кремль и я была с твоей любимой помадой на губах, ты был из-за этого очень рад. Потом я её съела в столовой)' },
  { src: '/photos/final/gallery/gallery-91.webp', caption: '17.02.2026 - Ты подарил мне букетик на день всех влюбленных и я радостно жила с ними в Профилаге' },
  { src: '/photos/final/gallery/gallery-92.webp', caption: '22.02.2026 - Ты цезарь' },
  { src: '/photos/final/gallery/gallery-93.webp', caption: '23.12.2026 - Очередной раз пробудем маску от угрей на нос. Я рада, ты не очень. ' },
  { src: '/photos/final/gallery/gallery-94.webp', caption: '24.02.2026 - Ты купил мне ОГРОМНУЮ пачку чиплов на день рождение и это был лучший подарок' },
  { src: '/photos/final/gallery/gallery-95.webp', caption: '28.02.2026 - Гуляем по красной площади и ярмарке' },
  { src: '/photos/final/gallery/gallery-96.webp', caption: '28.02.2026 - Зашли на какую то выставку фотографий и все таки не зря, там было безумно красиво и интересно' },
  { src: '/photos/final/gallery/gallery-97.webp', caption: '15.03.2026 - Картина "найдите Лешу"' },
  { src: '/photos/final/gallery/gallery-98.webp', caption: '16.03.2026 - На последнем снегу второпях строим Егора Алексеевича' },
  { src: '/photos/final/gallery/gallery-99.webp', caption: '22.03.2026 - Общаемся в дискорде и почему-то только я по видео...' },
  { src: '/photos/final/gallery/gallery-100.webp', caption: '26.04.2026 - Построили милого снеговика (и не важно, что из морозильника)' },
  { src: '/photos/final/gallery/gallery-101.webp', caption: '02.05.2026 - Спрятался в одеялке ютютюшечка' },
  { src: '/photos/final/gallery/gallery-102.webp', caption: '06.05.2026 - Отстаем от Вани и Иры, чтоб сделать такую фотографию (одна из моих самых любимых фоток вместе)' },
  { src: '/photos/final/gallery/gallery-103.webp', caption: '06.05.2026 - Фоткаемся как будто мы на 9 мая в Москве на ВДНХ, а Ванька вообще как будто наш ребенок и мы милая семья' },
  { src: '/photos/final/gallery/gallery-104.webp', caption: '30.05.2026 - "Силач" как сказал Ваня. А Ира там смешно так подглядывает -_-' },
  { src: '/photos/final/gallery/gallery-105.webp', caption: '10.06.2026 - Едем в Питер к твоим родителям и не спим всю ночь из-за неудобных кресел, но зато вдвоем)' },
  { src: '/photos/final/gallery/gallery-106.webp', caption: '11.06.2026 - Мы в Петергофе. На удивление мы еще ни разу там не были вместе.' },
  { src: '/photos/final/gallery/gallery-107.webp', caption: '16.06.2026 - Не могу понять с какой стороны мой Леша стоит. Два одинаковых лица...' },
  { src: '/photos/final/gallery/gallery-108.webp', caption: '17.06.2026 - Ловим гепарда на селфи в Московском зоопарке' },
  { src: '/photos/final/gallery/gallery-109.webp', caption: '24.06.2026 - Обкатали все горки в Острове Мечты и на последок купили коктейль "love is..." ' },
  { src: '/photos/final/gallery/gallery-110.webp', caption: '03.07.2026 - Мы у тебя на даче жестко работаем' },
  { src: '/photos/final/gallery/gallery-111.webp', caption: '05.07.2026 - Жестко веселимся на Ванином дне рождении' },
  { src: '/photos/final/gallery/gallery-112.webp', caption: '19.07.2026 - Мы у меня на даче и не жестко работаем, а отдыхаем и ночуем в лесу. Остановились в поле посмотреть на закат и подурачиться как дети. Хочу, чтоб так было почаще, только вот матрас нужен получше.' },

]

export default function GallerySection({ text }) {
  const [index, setIndex] = useState(0)
  const total = GALLERY_PHOTOS.length

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)
  const prevPhoto = GALLERY_PHOTOS[(index - 1 + total) % total]
  const nextPhoto = GALLERY_PHOTOS[(index + 1) % total]

  return (
        <section className="gallery-section">
      <p className="gallery-text">{text}</p>
      <div className="carousel">
        <button type="button" className="carousel-arrow" onClick={prev}>‹</button>
        <div className="carousel-track">
          <div className="carousel-item side">
            <img className="carousel-photo side" src={prevPhoto.src} alt={prevPhoto.caption} />
          </div>
          <div className="carousel-item main">
            <img className="carousel-photo main" src={GALLERY_PHOTOS[index].src} alt={GALLERY_PHOTOS[index].caption} />
            <p className="photo-caption">{GALLERY_PHOTOS[index].caption}</p>
          </div>
          <div className="carousel-item side">
            <img className="carousel-photo side" src={nextPhoto.src} alt={nextPhoto.caption} />
          </div>
        </div>
        <button type="button" className="carousel-arrow" onClick={next}>›</button>
      </div>
      {/*<div className="carousel-indicator">
        {GALLERY_PHOTOS.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>*/}
    </section>
  )
}