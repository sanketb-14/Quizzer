

function StartScreen({numQues,dispatch}) {
  return (
      <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
              <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Welcome to the react Quizz</h1>
                  <p className="py-6">{numQues} Question to check your react Mastery...</p>
                  <button onClick={()=>dispatch({type:"start"})} className="btn btn-primary">Get Started</button>
              </div>
          </div>
      </div>
  )
}

export default StartScreen