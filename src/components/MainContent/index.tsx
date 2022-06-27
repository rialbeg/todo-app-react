import { useState } from "react";
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

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

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
  const [selectFilter, setSelectFilter] = useState<boolean[]>([
    true,
    false,
    false,
  ]);

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

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  }

  function handleFilterTasks(filter: boolean[]) {
    if (filter[0]) return tasks;
    else if (filter[1]) return tasks.filter((task) => !task.isCompleted);
    else if (filter[2]) return tasks.filter((task) => task.isCompleted);
    return tasks;
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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="taskList">
          {(provided) => (
            <div
              className="task-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {handleFilterTasks(selectFilter).map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={String(task.id)}
                  index={index}
                >
                  {(provided) => (
                    <Checkbox
                      updateTask={() => handleUpdateTask(task.id)}
                      removeTask={() => handleRemoveTask(task.id)}
                      task={task}
                      provided={provided}
                      innerRef={provided.innerRef}
                    >
                      {task.taskTitle}
                    </Checkbox>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/* <Droppable droppableId="taskList1">
          {(provided) => (
            <div
              className="task-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {selectFilter[1] &&
                tasks
                  .filter((task) => !task.isCompleted)
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={String(task.id)}
                      index={index}
                    >
                      {(provided) => (
                        <Checkbox
                          updateTask={() => handleUpdateTask(task.id)}
                          removeTask={() => handleRemoveTask(task.id)}
                          task={task}
                          provided={provided}
                          innerRef={provided.innerRef}
                        >
                          {task.taskTitle}
                        </Checkbox>
                      )}
                    </Draggable>
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="taskList2">
          {(provided) => (
            <div
              className="task-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {selectFilter[2] &&
                tasks
                  .filter((task) => task.isCompleted)
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={String(task.id)}
                      index={index}
                    >
                      {(provided) => (
                        <Checkbox
                          updateTask={() => handleUpdateTask(task.id)}
                          removeTask={() => handleRemoveTask(task.id)}
                          task={task}
                          provided={provided}
                          innerRef={provided.innerRef}
                        >
                          {task.taskTitle}
                        </Checkbox>
                      )}
                    </Draggable>
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable> */}
      </DragDropContext>
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
      <p className="end-note" style={{ color: theme.textColor }}>
        Drag and drop to reorder list
      </p>
    </Container>
  );
}
