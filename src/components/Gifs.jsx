/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import JokeRate from "./JokeRate"
import NoOfJokes from "./NoOfJokes"
import NewGame from "./NewGame"

const Gifs = ({ count, jokeRate, gif }) => {
  
  const initGif ='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZuYzB4am9raXY1bGNvdGU2dWxmZTAxbDFnZ2N1OHB2ZHQxY2NkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzrMsKRTuAV2hYQ/giphy.gif'
  
  const [gifToShow, setGifToShow] = useState(initGif)
  // console.log('gifaaa:', gif)

  useEffect(() => {
    setGifToShow(gif)
  },[gif])


  return (
    <section className='gifs'
      style={{
        backgroundImage: `url('${gifToShow}')`}}
    >
      <NoOfJokes count={count} />
      <NewGame count={count} />
      <JokeRate jokeRate={jokeRate } />
    </section>
  )
}

export default Gifs