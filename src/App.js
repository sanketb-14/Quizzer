import { useEffect, useReducer } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Loader from "./components/Loader"
import Error from "./components/Error"
import StartScreen from "./components/StartScreen"
import Questions from "./components/Questions"
import ProgressBar from "./components/ProgressBar"
import Finish from "./components/Finish"
import Timer from "./components/Timer"

const SEC_PER_QUES = 30 

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null
}
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: 'ready',

      }
    case "dataFail":
      return {
        ...state,
        status: 'failed',
      }
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining:state.questions.length * SEC_PER_QUES
      }
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null


      }
    case "finish":
      return{
        ...state,
        status:"finished",
        index:null,

      }  
    case "restart":
      return{
        ...initialState,
        questions:state.questions,
        status:"ready"
      } 
    case "tick":
      return{
        ...state,
        secondsRemaining:state.secondsRemaining - 1 ,
        status: state.secondsRemaining===0 ? state.status="finished" :state.status
      }   
    default:
      throw new Error("unknown actions")

  }

}
function App() {
  const [{ questions, status, index, answer, points ,secondsRemaining }, dispatch] = useReducer(reducer, initialState)
  const numQues = questions.length

  const totalPoint = questions.reduce((curr, prev) => curr + prev.points, 0)
  useEffect(function () {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/questions')
        const data = await res.json();
        dispatch({ type: 'dataReceived', payload: data })
      } catch (error) {
        dispatch({ type: 'dataFail' })
      }

    }
    fetchData()

  }, [])
  return (
    <div className=" bg-base-300 min-h-screen rounded-2xl ">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}


        {status === 'failed' && <Error />}
        {status === 'ready' && <StartScreen numQues={numQues} dispatch={dispatch} />}
        {status === "active" &&
          <>
            <ProgressBar ind={index} numQues={numQues} totalPoint={totalPoint} point={points} /> <Questions ques={questions[index]} ind={index} numQues={numQues} answer={answer} dispatch={dispatch} />
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
          </>

        }
        {status === "finished" && <Finish point={points} totalPoint={totalPoint} dispatch={dispatch}/>}



      </Main>

    </div>
  )
}

export default App
