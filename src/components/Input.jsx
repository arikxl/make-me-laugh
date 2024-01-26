/* eslint-disable react/prop-types */
import { useState } from 'react'

import { rateTheJoke } from '../service/openai';
import { jokeResponse } from '../data/data';

const Input = ({ setJoke, setJokeRate, setAiResponse, setScore }) => {

  const [text, setText] = useState('');

  const handleGo = () => {
    setJoke(text)
    const fetchJokeRate = async () => {
      try {
        const rate = await rateTheJoke(text);
        console.log('rate:', rate)
        typeof (rate) === 'number' ? setJokeRate(rate) : setJokeRate(7.2);
        setAiResponse(jokeResponse[rate][Math.ceil(Math.random() * 10)])
        setScore(rate)
      } catch (error) {
        console.error('Error while fetching joke rate:', error);
      }
    };

    fetchJokeRate();
  }


  return (
    <section className="input">
      <button>🎙️</button>
      <textarea rows="5" onChange={(e) => setText(e.target.value)}/>


      <button onClick={handleGo}>GO!</button>
    </section>
  )
}

export default Input