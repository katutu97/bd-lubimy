import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import '../styles/contents.css'

export default function ContentsPage() {
  const { unlockAll } = useProgress()

  useEffect(() => {
    unlockAll()
  }, [unlockAll])

  // Массив с названиями и декоративными символами
  const chapters = [
    { path: '/intro', title: 'Введение', ornament: '✧' },
    { path: '/one', title: 'Глава Первая', ornament: '♛' },
    { path: '/two', title: 'Глава Вторая', ornament: '♚' },
    { path: '/three', title: 'Глава Третья', ornament: '☀' },
    { path: '/four', title: 'Глава Четвёртая', ornament: '⚔' },
    { path: '/five', title: 'Глава Пятая', ornament: '✌' },
    { path: '/six', title: 'Глава Шестая', ornament: '🐟︎' },
    { path: '/seven', title: 'Глава Седьмая', ornament: '❀' },
    { path: '/eight', title: 'Глава Восьмая', ornament: '♡' },
    { path: '/closing', title: 'Заключение', ornament: '✧' },
  ]

  return (
    <div className="page contents-page">
      <ChapterLabel number="Оглавление" />

      <ul className="contents-list">
        {chapters.map((chapter) => (
          <li key={chapter.path}>
            <Link to={chapter.path}>{chapter.title}</Link>
            <span className="chapter-ornament">{chapter.ornament}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}