/* eslint-disable react/prop-types */

const NoOfJokes = ({ count }) => {
    return (
        <>
            {
                count > 0
                    ? (<div
                        className={`${count> 9
                            ? 'no-of-jokes small'
                            : count === 6 || count === 9 ? 'underline no-of-jokes'
                            :'no-of-jokes'}`}
                    >
                        { count >10 ? 'FINISH' : count === 10 ? 'Last One' : count}</div>)
                    : null
            }
        </>
    )
}

export default NoOfJokes