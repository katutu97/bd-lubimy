import { Navigate } from 'react-router-dom'
import { useProgress, STEPS } from '../context/ProgressContext.jsx'

export default function ProtectedRoute({ stepName, children }) {
  const { unlockedStep, allUnlocked } = useProgress()

  // Если сайт уже полностью открыт — пускаем куда угодно без проверок
  if (allUnlocked) return children

  const requiredIndex = STEPS.indexOf(stepName)
  if (unlockedStep < requiredIndex) {
    return <Navigate to="/" replace />
  }

  return children
}