import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ThemeContextType } from "../types";

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(window.localStorage.getItem("themeMode")); 
  window.localStorage.setItem("themeMode", theme as string); // storing in the local storage

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    );
    window.localStorage.setItem("themeMode", theme as string);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
