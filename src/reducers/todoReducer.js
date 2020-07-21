import * as types from '../actionTypes'; 


const initialState = {
    savedTodoItems: [
        "Make a todo list of all my todo lists",
        "Make a playlist for every possible occasion",
        "Stop checking phone compulsively"
    ]
}

export function todoReducer (state = initialState, action) {
    const savedTodoItems = state.savedTodoItems.slice(); 
}

