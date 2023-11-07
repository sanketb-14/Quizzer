import { useEffect } from "react"


export default function Timer({dispatch,secondsRemaining}) {
    const min = Math.floor(secondsRemaining / 60)
    const sec = secondsRemaining % 60
    useEffect(function(){
       const id =  setInterval(()=> {
        dispatch({type:"tick"});

       },1000)
       return () => clearInterval(id)
    },[dispatch])
  return (
    <div className="btn btn-accent flex justify-start">
        <p>
            {min<10 && "0"}{min}:{sec} Remaining
        </p>
    </div>
  )
}
