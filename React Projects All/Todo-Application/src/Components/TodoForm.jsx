/** @format */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const submitted = event => {
    event.preventDefault();
    // Dispatching input as a todo
    dispatch(addTodo(input));
    setInput("");

  };

  return (
    <div className="mt-5 py-8 px-4 max-w-xl mx-auto bg-white rounded-xl shadow-2xl">
      <form className="w-full" onSubmit={submitted}>
        <div className="md:items-center mb-6">
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-600"
              id="inline-full-name"
              type="text"
              placeholder="Enter Your Name"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="w-full">
            <button
              className="px-6 py-2 text-sm items-center text-sky-700 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              type='submit'
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
