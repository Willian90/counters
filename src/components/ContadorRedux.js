import React, { useEffect } from 'react'
import { restar5, restar, reset, sumar, sumar5, users } from '../actions/contadorActions'
import { useSelector,useDispatch } from "react-redux";


const Contador=()=> { 
  
  const state = useSelector(state=>state.contador);


  console.log(state.data)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(users())
  }, [dispatch])
  
  
  return (
    <>
    <div className='contador'>
        <h2>Contador Redux</h2>
        <nav>
            <button onClick={()=>dispatch(sumar5())}>+5</button>
            <button onClick={()=>dispatch(sumar())}>+</button>
            <button onClick={()=>dispatch(reset())} disabled={(state.contador===0)?true:false}>0</button>
            <button onClick={()=>dispatch(restar())} disabled={(state.contador===0)?true:false}>-</button>
            <button onClick={()=>dispatch(restar5())} disabled={(state.contador<=4)?true:false}>-5</button>
      </nav>
        <h2>{state.contador} </h2>
    </div>
    </>
  )
}

export default Contador