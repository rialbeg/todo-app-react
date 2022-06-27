import { ReactNode, useEffect, useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
  Close,
} from "./style";

import CheckIcon from "../../images/icon-check.svg";
import CloseIcon from "../../images/icon-cross.svg";
import { useTheme } from "../../hooks/useTheme";
import { Task } from "../MainContent";
import { DraggableProvided } from "react-beautiful-dnd";

interface CheckBoxProps {
  children: ReactNode;
  updateTask: () => void;
  removeTask: () => void;
  task: Task;
  provided: DraggableProvided;
  innerRef: (element: HTMLElement | null | undefined) => any;
}

export function Checkbox({
  children,
  updateTask,
  removeTask,
  task,
  provided,
  innerRef,
}: CheckBoxProps) {
  const [checked, setChecked] = useState(false);
  const { theme } = useTheme();

  function handleCheckboxChange() {
    setChecked(!checked);
    updateTask();
  }

  useEffect(() => {
    if (task.isCompleted) setChecked(true);
  }, []);
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
    >
      <CheckboxContainer
        theme={theme}
        checked={checked}
        onClick={handleCheckboxChange}
      >
        <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
        <StyledCheckbox theme={theme} checked={checked}>
          <img alt="check icon" style={{ width: "1.5rem" }} src={CheckIcon} />
        </StyledCheckbox>
        <Text checked={checked} theme={theme}>
          {children}
        </Text>
      </CheckboxContainer>
      <Close
        className="closeIcon"
        alt="check icon"
        style={{ width: "1.5rem" }}
        src={CloseIcon}
        onClick={removeTask}
      />
    </div>
  );
}
