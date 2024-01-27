/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";

const ScoreBar = ({ score }) => {
  
  const [record, setRecord] = useState(33);
  
  function numberToColorHsl(value) {
    // Convert value to a range between 0 and 120 (green to red in HSL)
    const hue = (value * 1.2).toString(10);
    // Return the HSL color string
    return `hsl(${hue}, 100%, 50%)`;
  }

  const newRecord = () => {
    setRecord(score)
  }

  useEffect(() => {
    if(score > record) newRecord();
  },[score])
  
  return (
    <section className="score-bar"
    style={{}}>
    <p className="record" style={{top:`${100-record}%`}}>Record({record})</p>
      <div className="inner-height"
        style={{
          height: `${score}%`, backgroundColor: numberToColorHsl(score) }}>
            { score >0 && score}

      </div>
    </section>
  )
}

export default ScoreBar