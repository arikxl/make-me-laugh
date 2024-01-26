/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react"
// import { rateTheJoke } from "../service/openai"
// import { jokeResponse } from "../data/data";

const Response = ({ aiResponse, jokeRate  }) => {


  
  // useEffect(() => {
  //   const fetchJokeRate = async () => {
  //     try {
  //       const rate = await rateTheJoke(joke);        
  //       console.log('rate:', rate)
  //       typeof (rate) === 'number' ? setJokeRate(rate) : setJokeRate(7.2); 
  //       setAiResponse(jokeResponse[rate][Math.ceil(Math.random() * 10)])
  //       setScore(rate)
  //     } catch (error) {
  //       console.error('Error while fetching joke rate:', error);
  //     }
  //   };

  //   fetchJokeRate();
  //   }, [])
    
  


  return (
    <div className="response">
      {aiResponse && aiResponse}
       { jokeRate > 0?  jokeRate  : null}
  
    </div>
  )
}

export default Response