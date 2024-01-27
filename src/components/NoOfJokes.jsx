/* eslint-disable react/prop-types */

const NoOfJokes = ({ count }) => {
    return (
        <>
            {
                count > 0
                    ? (<div
                        className={`${count> 8
                            ? 'no-of-jokes small'
                            : count === 6? 'underline no-of-jokes'
                            :'no-of-jokes'}`}
                    >
                        { count >9 ? 'FINISH' : count === 9 ? 'Last One' : count}</div>)
                    : null
            }
        </>
    )
}

export default NoOfJokes