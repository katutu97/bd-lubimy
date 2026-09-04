import { useState } from 'react'

// впиши свои события и правильные даты
const EVENTS = [
  { id: 'e1', title: 'Ты признался в своиз чувствах ипредложил встречаться', correctDateId: 'd1' },
  { id: 'e2', title: 'Начала просмотра Сумерек', correctDateId: 'd2' },
  /*{ id: 'e6', title: 'Поход на студию Рики', correctDateId: 'd6' },
  { id: 'e4', title: 'Просмотр последней части Сумерек', correctDateId: 'd4' },
  { id: 'e5', title: 'Первое всякое', correctDateId: 'd5' },
  { id: 'e12', title: 'Поехали в город о котором я так долго мечтала', correctDateId: 'd12' },
  { id: 'e8', title: 'Ходили в зоопарк, где ты подружился с попугаем', correctDateId: 'd8' },
  { id: 'e7', title: 'Плавали на лодке вокруг маленького острова', correctDateId: 'd7' },
  { id: 'e9', title: 'День, когда дoделали нашу легендарную скамейну', correctDateId: 'd9' },
  { id: 'e10', title: 'Мое любимое свидание в Москве (мы ходили смотреть аниме в кино, гуляли по теплому солнечному городу и фоткали конус', correctDateId: 'd10' },
  { id: 'e13', title: 'Ты заставил меня первый раз сесть за руль с тобой', correctDateId: 'd13' },
  { id: 'e14', title: 'Первый раз поехали в электричке вместе', correctDateId: 'd14' },
  { id: 'e3', title: 'Катались на катке в Москве', correctDateId: 'd3' },
  { id: 'e11', title: 'Ходили в ЦЕХ с моими друзьями и Денис уговорявал тебя дождаться моего ответа', correctDateId: 'd11' },
  { id: 'e15', title: 'Катались на открытом картинге в Осетии', correctDateId: 'd15' },
  { id: 'e16', title: 'Первый раз ты вез меня на машине', correctDateId: 'd16' },*/
]

const DATES = [
  { id: 'd1', value: '09.09.2023' },
  { id: 'd2', value: '05.11.2023' },
  /*{ id: 'd3', value: '18.01.2025' },
  { id: 'd4', value: '29.08.2025' },
  { id: 'd5', value: '26.01.2024' },
  { id: 'd6', value: '24.08.2025' },
  { id: 'd7', value: '27.06.2025' },
  { id: 'd8', value: '28.01.2025' },
  { id: 'd9', value: '05.09.2025' },
  { id: 'd10', value: '20.04.2025' },
  { id: 'd11', value: '13.10.2023' },
  { id: 'd12', value: '25.01.2026' },
  { id: 'd13', value: '07.02.2024' },
  { id: 'd14', value: '25.01.2024' },
  { id: 'd15', value: '07.08.2025' },
  { id: 'd16', value: '22.11.2025' },*/
]

export default function DateMatchGame({ onSolved }) {
  const [placements, setPlacements] = useState({}) // { eventId: dateId }
  const [selectedDate, setSelectedDate] = useState(null)
  const [result, setResult] = useState(null) // null | 'error' | { correctIds, wrongIds }

  const usedDateIds = Object.values(placements)
  const availableDates = DATES.filter((d) => !usedDateIds.includes(d.id))

  function handleChipClick(dateId) {
    setSelectedDate((prev) => (prev === dateId ? null : dateId))
  }

  function handleSlotClick(eventId) {

    if (placements[eventId]) {
      // если в слоте уже есть дата — вернуть её обратно в пул
      setPlacements((prev) => {
        const next = { ...prev }
        delete next[eventId]
        return next
      })
      setResult(null)
      return
    }
    if (selectedDate) {
      setPlacements((prev) => ({ ...prev, [eventId]: selectedDate }))
      setSelectedDate(null)
      setResult(null)
    }
  }

  function handleConfirm() {
    const allFilled = EVENTS.every((ev) => placements[ev.id])
    if (!allFilled) {
      setResult('error')
      return
    }
    const correctIds = []
    const wrongIds = []
    EVENTS.forEach((ev) => {
      if (placements[ev.id] === ev.correctDateId) correctIds.push(ev.id)
      else wrongIds.push(ev.id)
    })
    setResult({ correctIds, wrongIds })
    if (wrongIds.length === 0) onSolved()
  }

  function handleRetry() {
    if (!result || result === 'error') return
    setPlacements((prev) => {
      const next = { ...prev }
      result.wrongIds.forEach((id) => delete next[id])
      return next
    })
    setResult(null)
  }

  function slotClassName(eventId) {
    if (!result || result === 'error') return 'date-slot'
    if (result.correctIds.includes(eventId)) return 'date-slot correct'
    if (result.wrongIds.includes(eventId)) return 'date-slot wrong'
    return 'date-slot'
  }

  return (
    <div className="date-match-game">
      <div className="events-list">
        {EVENTS.map((ev) => (
          <div className="event-row" key={ev.id}>
            <span className="event-name">{ev.title}</span>
            <button type="button" className={slotClassName(ev.id)} onClick={() => handleSlotClick(ev.id)}>
              {placements[ev.id] ? DATES.find((d) => d.id === placements[ev.id]).value : ''}
            </button>
          </div>
        ))}
      </div>

      <div className="dates-pool">
        {availableDates.map((d) => (
          <button
            type="button"
            key={d.id}
            className={`date-chip ${selectedDate === d.id ? 'selected' : ''}`}
            onClick={() => handleChipClick(d.id)}
          >
            {d.value}
          </button>
        ))}
      </div>

      {result === 'error' && <p className="error">Не все даты выставлены</p>}

      <div className="game-buttons">
        <button type="button" className="btn-primary" onClick={handleConfirm}>Подтвердить</button>
        {result && result !== 'error' && result.wrongIds.length > 0 && (
          <button type="button" className="btn-secondary" onClick={handleRetry}>Попробовать ещё раз</button>
        )}
      </div>
    </div>
  )
}