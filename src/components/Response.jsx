/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react"
// import { rateTheJoke } from "../service/openai"
// import { jokeResponse } from "../data/data";

const Response = ({ aiResponse  }) => {


  return (
    <div className="response">
      {aiResponse && aiResponse}  
    </div>
  )
}

export default Response