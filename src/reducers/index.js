import { combineReducers } from './node_modules/redux'; 
import { todoReducer } from './todoReducer';

const reducers = combineReducers({
    todoReducer: todoReducer
})


export default reducers;