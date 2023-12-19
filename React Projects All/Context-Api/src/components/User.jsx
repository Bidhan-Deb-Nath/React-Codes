/** @format */
import { useContext } from "react";
import UserContext from "../context/UserContext";

export const User = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h3>Please Login</h3>;
  return <h3>Wellcome: {user.username}</h3>;
};
