import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import ParentsPage from './pages/ParentsPage.jsx'
import FinalPage from './pages/FinalPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ClosingPage from './pages/ClosingPage.jsx'
import ContentsPage from './pages/ContentsPage.jsx'
import OldPage from './pages/OldPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import GrandmaPage from './pages/GrandmaPage.jsx'
import GamesPage from './pages/GamesPage.jsx'
import MomPage from './pages/MomPage.jsx'


export default function App() {
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/one"
            element={<ProtectedRoute stepName="mom"><MomPage /></ProtectedRoute>}
          />
          <Route
            path="/three"
            element={<ProtectedRoute stepName="grandma"><GrandmaPage /></ProtectedRoute>}
          />
          <Route
            path="/six"
            element={<ProtectedRoute stepName="games"><GamesPage /></ProtectedRoute>}
          />
          <Route
            path="/seven"
            element={<ProtectedRoute stepName="old"><OldPage /></ProtectedRoute>}
          />
          <Route
            path="/eight"
            element={<ProtectedRoute stepName="final"><FinalPage /></ProtectedRoute>}
          />
          <Route 
            path="/closing" 
            element={<ProtectedRoute stepName="closing"><ClosingPage /></ProtectedRoute>} 
          />
          <Route 
            path="/contents" 
            element={<ProtectedRoute stepName="contents"><ContentsPage /></ProtectedRoute>} 
          />
        </Routes>
    </>
  )
}

//cd C:\Users\Katya\Desktop\bd-lubimy
//npm run dev