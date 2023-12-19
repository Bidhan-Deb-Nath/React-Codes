/** @format */
import { UserContextProvider } from "../src/context/UserContextProvider";
import { Login } from "./components/Login";
import { User } from "./components/User";
import "./App.css";
export const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <User />
    </UserContextProvider>
  );
};
