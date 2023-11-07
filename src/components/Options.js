import React from 'react'

export default function Options({ option, answer, dispatch, cOpt }) {
    const hasAnswered = answer !== null
    
    return (
        <div className="card-actions justify-start mt-8">
            {option.map((opt, index) => {
                return (
                    <button className={` btn  ${index === answer ? "btn-primary" : "btn-info"} ${hasAnswered ? index === cOpt ? "btn-secondary" : "btn-accent" : "btn-info"} w-full `}  onClick={() => dispatch({ type: "newAnswer", payload: index })} key={opt} disabled={hasAnswered} >{opt}</button>

                )

            })}

        </div>
    )
}
