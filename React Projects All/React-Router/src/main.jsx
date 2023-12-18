/** @format */

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/main.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { User } from "./components/User/User.jsx";
import { Github } from "./components/Github/Github.jsx";
import { GithubInformations } from "./components/Github/GithubInformations.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" loader={GithubInformations} element={<Github />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
