/* eslint-disable react/prop-types */

const NoOfJokes = ({ count }) => {
    return (
        <>
            {
                count > 0
                    ? (<div className="no-of-jokes">{count}</div>)
                    : null
            }
        </>
    )
}

export default NoOfJokes