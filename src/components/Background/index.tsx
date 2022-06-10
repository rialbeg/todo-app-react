import { useTheme } from "../../hooks/useTheme";
import { Container } from "./style";

export function Background() {
  const { theme } = useTheme();
  return <Container backgroundImage={theme.backgroundImage}></Container>;
}
