import { createContext, ReactNode, useContext, useState } from "react";
import lightBackground from "../images/bg-desktop-light.jpg";
import darkBackground from "../images/bg-desktop-dark.jpg";
import lightTogglerImg from "../images/icon-moon.svg";
import darkTogglerImg from "../images/icon-sun.svg";

export interface ThemeData {
  backgroundColor: string;
  backgroundImage: string;
  themeTogglerImage: string;
  inputBackgroundColor: string;
}

interface ThemeContextData {
  theme: ThemeData;
  setTheme: (theme: ThemeData) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}
export const themes = {
  light: {
    backgroundColor: "#FAFAFA",
    backgroundImage: lightBackground,
    themeTogglerImage: lightTogglerImg,
    inputBackgroundColor: "#FFFFFF",
  },
  dark: {
    backgroundColor: "#181824",
    backgroundImage: darkBackground,
    themeTogglerImage: darkTogglerImg,
    inputBackgroundColor: "#25273C",
  },
};

//cria-se um contexto padrão
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = (props: ThemeProviderProps) => {
  const storageTheme =
    localStorage.getItem("theme") === null
      ? themes.light
      : JSON.parse(localStorage.getItem("theme") || "");
  // console.log(storageTheme);
  const [theme, setTheme] = useState<ThemeData>(storageTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
}
