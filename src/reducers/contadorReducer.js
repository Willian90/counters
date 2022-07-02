import { Types } from "../actions";

export const initialState={
    contador:0
}

export const reducer=(state, action)=>{
        switch (action.type) {
            case Types.INCREMENT:
                return {contador:state.contador + 1};
            case Types.DECREMENT:
                return {contador: state.contador-1}
            case Types.INCREMENT5:
                return {contador:state.contador + action.payload};
            case Types.DECREMENT5:
                return {contador: state.contador-action.payload}
            case Types.RESET:
                return {contador: 0}
            default:
                return state;
                
        }
}