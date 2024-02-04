/** @format */
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="mt-5 py-6 max-w-xl mx-auto bg-white rounded-xl shadow-2xl">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-2 text-center">
                User Name
              </th>
               <th scope="col" className="px-6 py-2">
              </th>
              <th scope="col" className="px-6 py-2 ">
                Actions
              </th>
            </tr>
          </thead>
          {todos.map((todo) => (
            <tbody key={todo.id}>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-center"
                >
                  {todo.text}
                </th>
                  <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-center"
                ></th>
                <td className="px-6 py-4 ">
                  <div className="w-full flex gap-2">
                    <button className="px-2 py-1 text-pretty text-green-500 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none">
                      Update
                    </button>

                    <button className="px-2 py-1 text-pretty text-red-500 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-red-500 hover:border-transparent focus:outline-none"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TodoList;
