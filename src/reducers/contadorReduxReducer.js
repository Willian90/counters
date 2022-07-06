import { DECREMENT, DECREMENT5, INCREMENT, INCREMENT5, RESET, FETCH } from "../components/types";


const initialState = {contador:0, data:[]};

export const contadorReduxReducer = (state = initialState, action) => {
  switch (action.type) {

  case INCREMENT5:
    return {...state, contador:state.contador + action.payload };
  case INCREMENT:
    return { ...state, contador:state.contador + 1 };
  case DECREMENT5:
    if(state.contador>4){
      return {...state, contador:state.contador - action.payload };
    }
    return state;

    case DECREMENT:
      if(state.contador>0){
        return {...state, contador:state.contador - 1 };
      }
      return state;
  case RESET:
    return { ...state, contador:0 };
  case FETCH:
    return { ...state, data:action.payload };

  default:
    return state
  }
}

