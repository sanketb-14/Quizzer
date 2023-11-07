import { useReducer } from "react";
const initialState = {
  count:0,
  step:1
}

function reducer(state, action) {
  switch (action.type ) {
    case 'inc':
      return ({...state , count:state.count + state.step})
    case 'dec':
      return ({...state , count:state.count - state.step})
    case 'setCount':
      return ({...state , count:action.payload})
    case 'defStep':
      return ({...state , step:action.payload}) 
    case 'reset':
      return (initialState)      
  
    default:
      throw new Error('Unknown action');
  }

}
function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
 const {count , step} = state

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({ type: 'dec' })
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: 'inc' })
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({type:'defStep', payload: Number(e.target.value)});
  };

  const reset = function () {
    // setCount(0);
    dispatch({type:'reset'})
  };

  return (
    <div className="flex flex-col items-center ">
      <div lassName="  ">
        <input
          className="input "
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span className="font-bold ">{step}</span>
      </div>

      <div >
        <button className="btn btn-secondary m-4 font-bold text-2xl" onClick={dec}>-</button>
        <input value={count} onChange={defineCount} className="input input-bordered" />
        <button className="btn btn-secondary m-4 font-bold text-2xl" onClick={inc}>+</button>
      </div>

      <p className="font-semibold text-primary">{date.toDateString()}</p>

      <div>
        <button className="btn btn-accent" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
