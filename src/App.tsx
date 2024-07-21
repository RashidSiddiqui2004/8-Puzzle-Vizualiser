
import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GameZone from './components/GameZone'; 
import AboutGame from './components/AboutGame';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/8-puzzle-game-play" element={<GameZone />} />
        <Route path="/8-puzzle-game-about" element={<AboutGame/>} />
      </Routes>
    </>
  )
}


export default App
