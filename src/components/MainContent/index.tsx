import { ReactEventHandler, ReactNode, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useWidth } from "../../hooks/useWidth";
import { randomIntFromInterval } from "../../utils/random";
import { Checkbox } from "../Checkbox";
import { ThemeTogglerButton } from "../ThemeTogglerButton";
import {
  Container,
  Footer,
  TaskInput,
  FilterOption,
  FooterMobile,
} from "./style";

export interface Task {
  id: number;
  taskTitle: string;
  isCompleted: boolean;
}

interface Filters {
  all: boolean;
  active: boolean;
  completed: boolean;
}
export function MainContent() {
  const { theme } = useTheme();
  const width = useWidth();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectFilter, setSelectFilter] = useState([true, false, false]);

  function handleCreateNewTask() {
    if (!newTaskTitle) return;
    const newTask = {
      id: randomIntFromInterval(1, 100),
      taskTitle: newTaskTitle,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleUpdateTask(id: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    const tasksCopy = [...tasks];

    tasksCopy[taskIndex].isCompleted = !tasksCopy[taskIndex].isCompleted;

    setTasks(tasksCopy);
  }

  function handleRemoveTask(id: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const tasksCopy = [...tasks];

    tasksCopy.splice(taskIndex, 1);

    setTasks(tasksCopy);
  }

  function handleSelectFilter(e: any) {
    const newFilter = [false, false, false];

    newFilter[Number(e.target.dataset.id)] =
      !newFilter[Number(e.target.dataset.id)];
    setSelectFilter(newFilter);
  }

  function handleRemoveCompleted() {
    const newTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(newTasks);
  }
  return (
    <Container>
      <div className="title">
        <h1>TODO</h1>
        <ThemeTogglerButton />
      </div>
      <TaskInput
        theme={theme}
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateNewTask();
        }}
      >
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
        {selectFilter[0] &&
          tasks.map((task) => (
            <Checkbox
              key={task.id}
              updateTask={() => handleUpdateTask(task.id)}
              removeTask={() => handleRemoveTask(task.id)}
              task={task}
            >
              {task.taskTitle}
            </Checkbox>
          ))}
        {selectFilter[1] &&
          tasks
            .filter((task) => !task.isCompleted)
            .map((task) => (
              <Checkbox
                key={task.id}
                updateTask={() => handleUpdateTask(task.id)}
                removeTask={() => handleRemoveTask(task.id)}
                task={task}
              >
                {task.taskTitle}
              </Checkbox>
            ))}
        {selectFilter[2] &&
          tasks
            .filter((task) => task.isCompleted)
            .map((task) => (
              <Checkbox
                key={task.id}
                updateTask={() => handleUpdateTask(task.id)}
                removeTask={() => handleRemoveTask(task.id)}
                task={task}
              >
                {task.taskTitle}
              </Checkbox>
            ))}
      </div>

      <Footer theme={theme}>
        <div className="footer-container">
          <div className="total-items">{tasks.length} items left</div>
          {width > 375 && (
            <div className="filter-buttons">
              <FilterOption
                theme={theme}
                selected={selectFilter[0]}
                onClick={(e) => handleSelectFilter(e)}
                data-id="0"
              >
                All
              </FilterOption>
              <FilterOption
                theme={theme}
                selected={selectFilter[1]}
                onClick={(e) => handleSelectFilter(e)}
                data-id="1"
              >
                Active
              </FilterOption>
              <FilterOption
                theme={theme}
                selected={selectFilter[2]}
                onClick={(e) => handleSelectFilter(e)}
                data-id="2"
              >
                Completed
              </FilterOption>
            </div>
          )}
          <div
            className="clear-completed"
            onClick={() => handleRemoveCompleted()}
          >
            Clear Completed
          </div>
        </div>
      </Footer>
      {width <= 375 && (
        <FooterMobile theme={theme}>
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
