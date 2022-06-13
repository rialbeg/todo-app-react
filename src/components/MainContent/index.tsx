import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Checkbox } from "../Checkbox";
import { ThemeTogglerButton } from "../ThemeTogglerButton";
import { Container, TaskInput } from "./style";

export function MainContent() {
  const { theme } = useTheme();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <Container>
      <div className="title">
        <h1>TODO</h1>
        <ThemeTogglerButton />
      </div>
      <TaskInput theme={theme} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </TaskInput>
      <Checkbox>Instagram</Checkbox>
    </Container>
  );
}
