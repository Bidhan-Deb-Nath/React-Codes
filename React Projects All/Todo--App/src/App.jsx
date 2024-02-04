/** @format */

import { useState, useEffect } from "react";
import { Context } from "./context/Context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodo] = useState([]);

  const add = (todo) => {
    setTodo((previousValue) => {
      [{ id: Date.now(), ...todo }, ...previousValue];
    });
  };

  const update = (id, todo) =>
    setTodo((previousValue) =>
      previousValue.map((previousTodo) =>
        previousTodo.id === id ? todo : previousTodo
      )
    );

  const remove = (id) =>
    setTodo((previousValue) =>
      previousValue.filter((previousTodo) => previousTodo.id !== id)
    );

  const check = (id) =>
    setTodo((previousValue) =>
      previousValue.map((previousTodo) =>
        previousTodo === id
          ? { ...previousTodo, complete: !previousTodo.complete }
          : previousTodo
      )
    );

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Context.Provider value={{ todos, add, update, remove, check }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
