

export default function Finish({point , totalPoint,dispatch}) {
const percent = (point / totalPoint)*100;
  return (
    <div className="card fle flex-col justify-center items-center">
        <p className="btn btn-accent w-full m-8">
              You have got <strong>{point}/{totalPoint} points .({Math.ceil(percent)}%)</strong>
        </p>
    <button className="btn btn-primary" onClick={()=>dispatch({type:"restart"})}>Restart Quizz</button>
    </div>
  )
}
