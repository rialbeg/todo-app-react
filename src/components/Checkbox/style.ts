import styled from "styled-components";
import { ThemeData } from "../../hooks/useTheme";
import { themes } from "../../hooks/useTheme";

interface CheckboxContainerProps {
  checked: boolean;
  theme: ThemeData;
}
export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  width: 100%;
  height: 35px;
  padding: 2rem;
  border-radius: 5px;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.inputBackgroundColor};

  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  height: 0;
  margin: -5px;
  padding: 0;
`;

export const Text = styled.label<CheckboxContainerProps>``;

export const StyledCheckbox = styled.label<CheckboxContainerProps>`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  background: linear-gradient(
    ${(props) =>
      props.checked ? "#57ddff" : props.theme.inputBackgroundColor},
    ${(props) => (props.checked ? "#c058f3" : props.theme.inputBackgroundColor)}
  );
  border: 1px solid grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    border-radius: 50px;
    border: double 1px transparent;
    background-image: linear-gradient(
        ${(props) =>
          props.checked ? "#57ddff" : props.theme.inputBackgroundColor},
        ${(props) =>
          props.checked ? "#c058f3" : props.theme.inputBackgroundColor}
      ),
      linear-gradient(var(--linear-gradient-begin), var(--linear-gradient-end));
    background-origin: border-box;
    background-clip: content-box, border-box;

    cursor: pointer;
  }
  img {
    display: ${(props) => (props.checked ? "flex" : "none")};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg)
      brightness(105%) contrast(68%);
  }
`;
