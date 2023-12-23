/** @format */

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
