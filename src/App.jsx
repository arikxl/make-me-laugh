import { useState } from 'react'

import './App.css'
import Gifs from './components/Gifs'
import Response from './components/Response'
import Input from './components/Input'
import ScoreBar from './components/ScoreBar'

function App() {
  const [score, setscore] = useState(75)

  return (
    <div className="app">
      <main>
        <Gifs />
        <Response />
        <Input />
      </main>

      <aside>
        <ScoreBar score={score} />
      </aside>
    </div>
  )
}

export default App
