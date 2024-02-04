import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlices";

export const List = () => {
const dispatch = useDispatch();
const todos = useSelector((state) => state.todos);

  return (
    <>


   {todos.map(todo => (
     <li key={todo.id} className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{todo.text}
   <li className="w-full px-4 py-2 rounded-b-lg" onClick={() =>dispatch(deleteTodo(todo.id))}>Remove</li>
     </li>
   ))}



    </>
  )
}
