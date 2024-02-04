import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todo-features/todoSlice";

export const store = configureStore({
    reducer: todoSlice
});