import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { users } from '../actions/contadorActions';


function Users() {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.contador);

    useEffect(()=>{
        dispatch(users())
    },[dispatch])

  return (
    <><h2>FETCHING DATA WITH REDUX THUNK</h2>
    <input type="search" name="search" onChange={(e)=>setSearch(e.target.value)}/>
    {search}
    <div> {state.data && state.data.filter(user=>{
          if(search===""){
            return user;
            }
            else if(user.name.toLowerCase().includes(search.toLowerCase())){
              return user;
            }
            
    })
    .map((user,index)=><li key={index}> {user.name} </li>)}</div>
    </>
  )
}

export default Users