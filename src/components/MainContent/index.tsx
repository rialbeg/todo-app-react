import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useWidth } from "../../hooks/useWidth";
import { Checkbox } from "../Checkbox";
import { ThemeTogglerButton } from "../ThemeTogglerButton";
import {
  Container,
  Footer,
  TaskInput,
  FilterOption,
  FooterMobile,
} from "./style";

export function MainContent() {
  const { theme } = useTheme();
  const { width } = useWidth();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  console.log(width);
  return (
    <Container>
      <div className="title">
        <h1>TODO</h1>
        <ThemeTogglerButton />
      </div>
      <TaskInput theme={theme} onSubmit={(e) => e.preventDefault()}>
        <div className="task-input">
          <div className="check-circle"></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </div>
      </TaskInput>
      <div className="task-list">
        <Checkbox>My huge long phrase description task oh my god</Checkbox>
        <Checkbox>Task 2</Checkbox>
        <Checkbox>Task 3</Checkbox>
      </div>

      <Footer theme={theme}>
        <div className="footer-container">
          <div className="total-items">5 items left</div>
          {width > 375 && (
            <div className="filter-buttons">
              <FilterOption theme={theme} selected={true}>
                All
              </FilterOption>
              <FilterOption theme={theme} selected={false}>
                Active
              </FilterOption>
              <FilterOption theme={theme} selected={false}>
                Complete
              </FilterOption>
            </div>
          )}
          <div className="clear-completed">Clear Completed</div>
        </div>
      </Footer>
      {width <= 375 && (
        <FooterMobile theme={theme}>
          {/* filter-buttons */}
          <FilterOption theme={theme} selected={true}>
            All
          </FilterOption>
          <FilterOption theme={theme} selected={false}>
            Active
          </FilterOption>
          <FilterOption theme={theme} selected={false}>
            Complete
          </FilterOption>
        </FooterMobile>
      )}
    </Container>
  );
}
