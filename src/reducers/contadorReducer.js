import { Types } from "../actions";

export const initialState={
    contador:0
}

export const reducer=(state, action)=>{
        switch (action.type) {
            case Types.INCREMENT:
                return {contador:state.contador + 1};
            case Types.DECREMENT:
                if(state.contador>0){
                    return {contador: state.contador-1}
                }
                return state;
            case Types.DECREMENT5:
                if(state.contador>=5){
                    return {contador:state.contador - action.payload}
                }
                return state;
                
            case Types.INCREMENT5:
                return {contador: state.contador+action.payload}
            case Types.RESET:
                return {contador: 0}
            default:
                return state;
                
        }
}