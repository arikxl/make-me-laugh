/* eslint-disable react/prop-types */
import JokeRate from "./JokeRate"
import NoOfJokes from "./NoOfJokes"

const Gifs = ({ count, jokeRate }) => {
  return (
    <section className='gifs'
      style={{
        backgroundImage: `url(' https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZuYzB4am9raXY1bGNvdGU2dWxmZTAxbDFnZ2N1OHB2ZHQxY2NkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzrMsKRTuAV2hYQ/giphy.gif')`}}
    >
      <NoOfJokes count={count} />
      <JokeRate jokeRate={jokeRate } />
    </section>
  )
}

export default Gifs