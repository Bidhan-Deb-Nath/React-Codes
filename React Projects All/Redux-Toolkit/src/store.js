import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../src/features/todo/todoSlices"


export const store = configureStore({reducer:todoReducer});