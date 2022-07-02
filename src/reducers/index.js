import {combineReducers} from 'redux'
import { contadorReduxReducer } from './contadorReduxReducer'


const reducer = combineReducers({
    contador: contadorReduxReducer
});

export default reducer;

