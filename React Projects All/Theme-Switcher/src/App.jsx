/** @format */

import { useState, useEffect } from "react";
import { ThemeContextProvider } from "./context/Theme";
import { Card } from "./components/Card";
import { Button } from "./components/Button";

export const App = () => {
  const [theme, setTheme] = useState("light");

  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    let get = document.querySelector("html");
    get.classList.remove("light", "dark");
    get.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContextProvider value={{ theme, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};
