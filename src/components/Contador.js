import React, { useReducer } from 'react'
import { initialState, reducer } from '../reducers/contadorReducer';

function Contador() {


const [state, dispatch] = useReducer(reducer, initialState);
const sumar5=()=>dispatch({type:"INCREMENT5", payload:5});
const sumar=()=>dispatch({type:"INCREMENT"});
const restar=()=>dispatch({type:"DECREMENT"});
const restar5=()=>dispatch({type:"DECREMENT5",payload:5});
const reset=()=>dispatch({type:"RESET"});
    
  return (
    <div className='contador'>
        <h2>Contador</h2>
        <nav>
            <button onClick={sumar5}>+5</button>
            <button onClick={sumar}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={restar}>-</button>
            <button onClick={restar5}>-5</button>
        </nav>
        <h2>{state.contador}</h2>
    </div>
  )
}

export default Contador