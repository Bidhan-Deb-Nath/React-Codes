/** @format */
import { useContext, createContext } from "react";

export const Context = createContext({
  todos: [
    {
      id: "1",
      text: "Buy groceries",
      complete: false,
    },
  ],
  add: () => { },
  update: () => { },
  remove: () => { },
  check: () => {}
});

export const useTodo = () => {
  return useContext(Context);
};
