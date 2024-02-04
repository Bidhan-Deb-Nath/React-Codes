import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "todo",
    initialState:{
        todos:[{
            id : '1',
            text:'Buy groceries'
        }]
    },
    reducers:{
        addTodo:(state, action) =>{
            const todo = {
                id:nanoid(), 
                text:action.payload}
                state.todos.push(todo)
        }, 
        deleteTodo:(state, action)=>{
            return state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        }
        
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;