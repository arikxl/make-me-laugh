/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";

const ScoreBar = ({ score, setConf }) => {

  const [record, setRecord] = useState(+localStorage.getItem('ggj-record') ||0);

  function numberToColorHsl(value) {
    // Convert value to a range between 0 and 120 (green to red in HSL)
    const hue = (value * 1.2).toString(10);
    // Return the HSL color string
    return `hsl(${hue}, 100%, 50%)`;
  }

  const newRecord = () => {
    setRecord(score)
    localStorage.setItem('ggj-record', score);
    setConf(true)
  }

  useEffect(() => {
    if (score > record) newRecord();
  }, [score])

  return (
    <section className="score-bar"
      style={{}}>

      <p className="record" style={{ top: `${95 - record}%` }}>
        Record({record})
      </p>
      <div className="inner-height"
        style={{
          height: `${score}%`, backgroundColor: numberToColorHsl(score)
        }}>
        {score > 0 && score}

      </div>
    </section>
  )
}

export default ScoreBar