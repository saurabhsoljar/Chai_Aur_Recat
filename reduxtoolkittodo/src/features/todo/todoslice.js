import{createsSlice, nanoid} from '@reduxjs/toolkit';

const initialState ={
    todos: [{id:1, text:"hello world"}]
}

// function sayHello(){
//     console.log("hello world");
// }

export const todoSlice = createsSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo ={
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:()=>{},
    }
})