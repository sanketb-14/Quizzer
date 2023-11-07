

export default function NextBtn({dispatch , ans ,ind , numQues}) {
    if(ans === null) return null
    console.log(numQues);
  return (
    <div className="flex justify-end m-2">
      {ind !== numQues - 1 && <button className="btn btn-primary w-1/3  " onClick={() => dispatch({ type: "nextQuestion" })}>Next </button> }
      {ind === numQues - 1 && <button className="btn btn-primary w-1/3  " onClick={() => dispatch({ type: "finish" })}>Finish Test</button> }
  
    </div>
  )
}
