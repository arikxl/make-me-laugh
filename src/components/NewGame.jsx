/* eslint-disable react/prop-types */

const NewGame = ({ count }) => {
  return (

    count > 0 && (
      <button className='btn' onClick={() => window.location.reload(true)}>NewGame</button>
    )

  )
}

export default NewGame