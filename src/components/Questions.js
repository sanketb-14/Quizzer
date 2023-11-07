import Options from './Options'
import NextBtn from './NextBtn';

export default function Questions({ques,answer ,ind,numQues, dispatch}) {
    const {question,options,correctOption} = ques;
    console.log(numQues);
    
  return (
      <div className="card m-4 w-2/3  bg-base-100 shadow-xl">
          
          <div className="card-body">
              <h2 className="card-title">{question}</h2>
              <Options option={options} cOpt={correctOption} answer={answer} dispatch={dispatch} />
            
          
          </div>
          <NextBtn dispatch={dispatch} ans={answer} ind={ind} numQues={numQues} />

      </div>
  )
}
