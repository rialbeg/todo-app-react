import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { ThemeTogglerButton } from "../ThemeTogglerButton";
import { Container, TaskInput } from "./style";

export function MainContent() {
  const { theme } = useTheme();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  console.log(newTaskTitle);

  return (
    <Container>
      <div className="title">
        <h1>TODO</h1>
        <ThemeTogglerButton />
      </div>
      <TaskInput theme={theme}>
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </TaskInput>
    </Container>
  );
}
