/* eslint-disable react/prop-types */
import { useState } from 'react'

import { rateTheJoke } from '../service/openai';
import { jokeResponse } from '../data/data';
import { getGif } from '../service/giphy';

const Input = ({ setGif, setScore, score, setJokeRate, setAiResponse, count, setCount }) => {

  const [text, setText] = useState('');
  const [enText, setEnText] = useState('');

  const handleGo = () => {
    if (text === '' || text.length < 10) return;
    
    const fetchJokeRate = async () => {
      try {
        await translate(text)
        const rate = await rateTheJoke(enText);
        typeof (rate) === 'number' ? setJokeRate(rate) : setJokeRate(Math.random() *10);
        const rnd = Math.floor(Math.random() * jokeResponse[rate].length);
        setAiResponse(jokeResponse[rate][rnd])
        const newGif = await  getGif(jokeResponse[rate][rnd])
        setGif(newGif);
        setScore(rate + score);
        setCount(count += 1)
      } catch (error) {
        console.error('Error while fetching joke rate:', error);
      }
    };

    fetchJokeRate();
    setTimeout(() => {
      // setText('');
    },5000);
  }

  
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'he-IL'; // Set language
  recognition.interimResults = false; // Get final results only

  let timerId;

  // Event handler for when speech recognition results are available
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    // console.log('Transcript:', transcript);
    setText(transcript)
    // Do something with the transcript (e.g., update UI)
  };

  // Event handler for errors during recognition
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };

  // Start speech recognition when user initiates (e.g., button click)
  function startRecognition() {
    recognition.start();
    console.log('Speech recognition started.');

    // Set a timer to stop recognition after 10 seconds (adjust as needed)
    timerId = setTimeout(stopRecognition, 15000);
  }



  // Stop speech recognition if needed
  function stopRecognition() {
    recognition.stop();
    console.log('Speech recognition stopped.');

    // Clear the timer
    clearTimeout(timerId);
  }

  function translate(movie) {
    let apiUrl = `https://api.mymemory.translated.net/get?q=${movie}&langpair=he-IL|en-US`;
    fetch(apiUrl).then(res => res.json()).then(data => {
      setEnText(data.responseData.translatedText)
    })
  }



  return (
    <section className="input">
      {/* <button onClick={() => setGif('aaaaaaaasddsdfsdf')}>AAA</button> */}
      <button disabled={count > 9} onClick={startRecognition}>
        🎙️
        <br />
        15s
      </button>
      <textarea disabled={count > 9} rows="5" onChange={(e) => setText(e.target.value)} value={text} />


      <button disabled={count > 9} onClick={handleGo}>GO!</button>
    </section>
  )
}

export default Input