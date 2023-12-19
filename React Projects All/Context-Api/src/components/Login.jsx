/** @format */

import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handler = (event) => {
    event.preventDefault();
    setUser(userName, password);
    console.log(userName, password);
  };
  return (
    <div>
      <h1>Login Form</h1>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />{" "}
      <button onClick={handler}>Submit</button>
    </div>
  );
};
