/* eslint-disable react/prop-types */

const JokeRate = ({ jokeRate }) => {
  return (
      <div className="joke-rate">{jokeRate > 0&& jokeRate }</div>
  )
}

export default JokeRate