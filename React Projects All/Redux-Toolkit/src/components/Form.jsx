// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todo/todoSlices";


// export const Form = () => {
//   const [input, setInput] = useState('');
//   const dispatch = useDispatch();

//   const add = event =>{
//     event.preventDefault();
//     dispatch(addTodo(input))
//     setInput('');
//   }
//   return (
// <div className="w-full max-w-xs">
//   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={add}>
//     <div className="mb-4">
//     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" 
//     value={input}
//     onChange={setInput(event => event.target.value)}/>
//     </div>

//     <div className="flex items-center justify-between">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//         Add
//       </button>
//     </div>
//   </form>
//     </div>
//   )
// }


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlices";

export const Form = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const add = event => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={add}>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            value={input}
            onChange={event => setInput(event.target.value)} 
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
