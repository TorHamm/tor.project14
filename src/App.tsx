import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StartMenu from './pages/StartMenu'
import Question from './pages/Question'
import Resault from './pages/Resault'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="/question/:subject" element={<Question />} />
        <Route path="/resault/:subject" element={<Resault />} />
      </Routes>
    </Router>
  )
}

export default App

