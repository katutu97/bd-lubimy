import { useState, useRef, useLayoutEffect, useCallback } from 'react'

const ROUNDS = [
  {
    pads: [
      { img: '/bd-lubimy/photos/games/lily-8.png', correct: false },
      { img: '/bd-lubimy/photos/games/lily-3.png', correct: true },
    ],
  },
  {
    pads: [
      { img: '/bd-lubimy/photos/games/lily-5.png', correct: false },
      { img: '/bd-lubimy/photos/games/lily-7.png', correct: true },
      { img: '/bd-lubimy/photos/games/lily-2.png', correct: false },
    ],
  },

]

export default function FrogGame({ onSolved }) {
  const trackRef = useRef(null)
  const startStoneRef = useRef(null)
  const roundRefs = useRef([])
  const padRefs = useRef({})

  const [solvedTrail, setSolvedTrail] = useState([]) // [{ roundIndex, padIndex }]
  const [activeRound, setActiveRound] = useState(0)   // -1 = игра пройдена
  const [jumping, setJumping] = useState(false)
  const [frogPos, setFrogPos] = useState(null)        // { top, left } в px внутри track
  const [missKey, setMissKey] = useState(null)

  // Ставит лягушку ровно по центру переданного элемента (координаты — относительно track)
  const placeFrogAt = useCallback((el) => {
    if (!el || !trackRef.current) return
    const trackRect = trackRef.current.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setFrogPos({
      top: elRect.top - trackRect.top + elRect.height / 2,
      left: elRect.left - trackRect.left + elRect.width / 2,
    })
  }, [])

  // При первом появлении игры — лягушка садится на стартовый камень
  useLayoutEffect(() => {
    placeFrogAt(startStoneRef.current)
  }, [placeFrogAt])

  function handlePadClick(roundIndex, padIndex, pad) {
    if (jumping) return
    const key = `${roundIndex}-${padIndex}`
    const el = padRefs.current[key]
    if (!el) return

    setJumping(true)
    placeFrogAt(el) // CSS-переход сам плавно "перенесёт" лягушку на эту кувшинку

    setTimeout(() => {
      if (pad.correct) {
        setSolvedTrail((prev) => [...prev, { roundIndex, padIndex }])
        setJumping(false)

        if (roundIndex === ROUNDS.length - 1) {
          onSolved()
          setActiveRound(-1)
        } else {
          const next = roundIndex + 1
          setActiveRound(next)
          requestAnimationFrame(() => {
            roundRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          })
        }
      } else {
        setMissKey(key)
        setTimeout(() => {
          setMissKey(null)
          setSolvedTrail([])
          setActiveRound(0)
          setJumping(false)
          placeFrogAt(startStoneRef.current)
          startStoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 500)
      }
    }, 600) // должно совпадать с длительностью transition в CSS у .frog-character
  }

  return (
    <div className="frog-game" ref={trackRef}>
      <img
        className={`frog-character ${jumping ? 'jumping' : ''}`}
        src={jumping ? '/bd-lubimy/photos/games/frog-jump.png' : '/bd-lubimy/photos/games/frog-idle.png'}
        style={frogPos ? { top: frogPos.top, left: frogPos.left } : { opacity: 0 }}
        alt="лягушка"
      />

      <div className="start-stone-row">
        <div className="start-stone" ref={startStoneRef} />
      </div>

      {/* Уже пройденные ряды — остаются на странице, просто без кликов */}
      {solvedTrail.map(({ roundIndex, padIndex }, i) => (
        <div className="lily-row solved" key={i}>
          {ROUNDS[roundIndex].pads.map((pad, j) => (
            <img
              key={j}
              className={`lily-pad-img ${j === padIndex ? 'chosen' : 'faded'}`}
              src={pad.img}
              alt=""
            />
          ))}
        </div>
      ))}

      {/* Текущий активный ряд — кликабельный */}
      {activeRound >= 0 && (
        <div className="lily-row active" ref={(el) => (roundRefs.current[activeRound] = el)}>
          {ROUNDS[activeRound].pads.map((pad, j) => {
            const key = `${activeRound}-${j}`
            return (
              <button
                type="button"
                key={j}
                ref={(el) => (padRefs.current[key] = el)}
                className={`lily-pad-btn ${missKey === key ? 'miss' : ''}`}
                onClick={() => handlePadClick(activeRound, j, pad)}
                disabled={jumping}
              >
                <img src={pad.img} alt="кувшинка" />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}