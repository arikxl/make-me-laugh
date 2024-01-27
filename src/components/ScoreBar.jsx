/* eslint-disable react/prop-types */

const ScoreBar = ({ score }) => {
  
  const record = 90;
  
  function numberToColorHsl(value) {
    // Convert value to a range between 0 and 120 (green to red in HSL)
    const hue = (value * 1.2).toString(10);

    // Return the HSL color string
    return `hsl(${hue}, 100%, 50%)`;
  }
  
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