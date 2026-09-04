import { createContext, useContext, useState } from 'react'

export const STEPS =['login', 'parents', 'brothers', 'friends', 'grandmas', 'me', 'closing', 'contents']

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [unlockedStep, setUnlockedStep] = useState(() => {
    const saved = localStorage.getItem('unlockedStep')
    return saved ? Number(saved) : 0
  })

  // Флаг "весь сайт открыт" — выставляется один раз и хранится навсегда
  const [allUnlocked, setAllUnlocked] = useState(() => {
    return localStorage.getItem('allUnlocked') === 'true'
  })

  function unlockNext() {
    setUnlockedStep((prev) => {
      const next = Math.min(prev + 1, STEPS.length - 1)
      localStorage.setItem('unlockedStep', String(next))
      return next
    })
  }

  function unlockAll() {
    setAllUnlocked(true)
    localStorage.setItem('allUnlocked', 'true')
  }

  return (
    <ProgressContext.Provider value={{ unlockedStep, unlockNext, allUnlocked, unlockAll }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}