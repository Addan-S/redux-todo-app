import * as types from './actionTypes';

export const addTodoItem = (itemToAdd) => {
    return({
        type: types.ADD_TODO_ITEM,
        payload: itemToAdd
    })
    
}