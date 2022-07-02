import { DECREMENT, DECREMENT5, INCREMENT, INCREMENT5, RESET, FETCH} from "../components/types";


export const sumar=()=>({type:INCREMENT});
export const sumar5=()=>({type:INCREMENT5, payload:5});
export const restar=()=>({type:DECREMENT});
export const restar5=()=>({type:DECREMENT5, payload:5});
export const reset=()=>({type:RESET});

const getFetch=(data)=>({type:FETCH, payload: data});

export const users=()=>async(dispatch)=>{
    let res = await fetch("https://api-express-mong.herokuapp.com/api/user");
    let data = await res.json();
    dispatch(getFetch(data));
}