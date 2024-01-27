/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import './App.css'
import Gifs from './components/Gifs'
import Response from './components/Response'
import Input from './components/Input'
import ScoreBar from './components/ScoreBar'
import ConfettiMessage from './components/ConfettiMessage '

function App() {
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [jokeRate, setJokeRate] = useState(0);
  const [aiResponse, setAiResponse] = useState('');
  const [gif, setGif] = useState('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDZ3aWZtZ2dkZXF3ZGIwcWV3d3NsaXE4bzl4N2EycjlmNHFudWl5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iPdpZJ8tYiHGo/giphy.gif');
  const [conf, setConf] = useState(false);


  return (
    <div className="app">
      <main>
        {
          conf && (<ConfettiMessage />)

        }
        <Gifs count={count} jokeRate={jokeRate} gif={gif} />
        <Response aiResponse={aiResponse} />
        <Input setGif={setGif} setScore={setScore} score={score} setCount={setCount} count={count} setJokeRate={setJokeRate} setAiResponse={setAiResponse} />
      </main>

      <aside>
        <ScoreBar score={score} setConf={setConf} />
      </aside>
    </div>
  )
}

export default App
