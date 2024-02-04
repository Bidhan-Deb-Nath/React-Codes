import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux",
        completed: false
    }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todos = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todos);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? { text: action.payload } : todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.fill(todo => todo.id !== action.payload)
        },
        toggleComplete: () => { },
    }
});


export const { addTodo, updateTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;