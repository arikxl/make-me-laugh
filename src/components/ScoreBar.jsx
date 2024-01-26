/* eslint-disable react/prop-types */

const ScoreBar = ({ score}) => {
  return (
    <section className="score-bar"
      style={{}}>
      ScoreBar { score}
      <div className="inner-height"
        style={{ height: `${score}%` }}>

      </div>
    </section>
  )
}

export default ScoreBar