import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { users } from '../actions/contadorActions';


function Users() {

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.contador);

    useEffect(()=>{
        dispatch(users())
    },[dispatch])

  return (
    <><h2>FETCHING DATA WITH REDUX THUNK</h2>
    <div> {state.data && state.data.map((user,index)=><li key={index}> {user.name} </li>)}</div>
    </>
  )
}

export default Users