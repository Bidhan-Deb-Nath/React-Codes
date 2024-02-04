import { createContext, useContext } from "react";

export const ContextApi = createContext({
    todos: [{
        id: 1,
        text: 'Hello world!',
        completed: false
    }],
    addTodo: (id) => { },
    updateTodo: (id, todo) => { },
    removeTodo: (id) => { },
    toggleTodo: (id) => { }

});

export const ContextApiUse = () => {
    return useContext(ContextApi);
};


export const ContextApiProvider = ContextApi.Provider;