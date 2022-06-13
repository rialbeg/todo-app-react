import { ReactNode, useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
} from "./style";

import CheckIcon from "../../images/icon-check.svg";
import { ThemeData, useTheme } from "../../hooks/useTheme";

interface CheckBoxProps {
  children: ReactNode;
}

export function Checkbox({ children }: CheckBoxProps) {
  const [checked, setChecked] = useState(false);
  const { theme } = useTheme();

  function handleCheckboxChange() {
    setChecked(!checked);
  }
  return (
    <CheckboxContainer
      theme={theme}
      checked={checked}
      onClick={handleCheckboxChange}
    >
      <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
      <StyledCheckbox theme={theme} checked={checked}>
        <img alt="check icon" style={{ width: "15px" }} src={CheckIcon} />
      </StyledCheckbox>
      <Text checked={checked}>{children}</Text>
    </CheckboxContainer>
  );
}
