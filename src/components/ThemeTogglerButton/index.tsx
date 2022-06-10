import { Container } from "./style";
import { themes, useTheme } from "../../hooks/useTheme";

export function ThemeTogglerButton() {
  const { theme, setTheme } = useTheme();
  return (
    <Container
      src={theme.themeTogglerImage}
      alt="theme toggler button"
      onClick={() => {
        if (localStorage.getItem("theme") === null)
          localStorage.setItem("theme", JSON.stringify(themes.dark));
        else if (localStorage.getItem("theme") === JSON.stringify(themes.light))
          localStorage.setItem("theme", JSON.stringify(themes.dark));
        else if (localStorage.getItem("theme") === JSON.stringify(themes.dark))
          localStorage.setItem("theme", JSON.stringify(themes.light));

        setTheme(JSON.parse(localStorage.getItem("theme") || ""));
      }}
    />
  );
}
