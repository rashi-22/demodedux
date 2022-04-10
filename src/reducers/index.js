import {combineReducers} from 'redux'
import { todoReducer } from './todoReducer';
import { sReducer } from './studentReducer';


const rootReducer=combineReducers({
    todo: todoReducer,
    student: sReducer
})

export default rootReducer;