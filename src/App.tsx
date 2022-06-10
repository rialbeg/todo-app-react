import { Background } from "./components/Background";
import { MainContent } from "./components/MainContent";
import { useTheme } from "./hooks/useTheme";
import { GlobaStyle } from "./styles/global";

export function App() {
  const { theme } = useTheme();
  // console.log(theme);

  return (
    <>
      <Background />
      <MainContent />
      <GlobaStyle backgroundColor={theme.backgroundColor} />
    </>
  );
}
