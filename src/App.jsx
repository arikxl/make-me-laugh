/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Gifs from './components/Gifs'
import Response from './components/Response'
import Input from './components/Input'
import ScoreBar from './components/ScoreBar'

function App() {
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [jokeRate, setJokeRate] = useState(0);
  const [aiResponse, setAiResponse] = useState('');
  
  return (
    <div className="app">
      <main>
        <Gifs count={count} jokeRate={jokeRate} />
        <Response aiResponse={aiResponse}  />
        <Input setScore={setScore} score={score} setCount={setCount} count={count} setJokeRate={setJokeRate} setAiResponse={setAiResponse} />
      </main>

      <aside>
        <ScoreBar score={score} />
      </aside>
    </div>
  )
}

export default App
