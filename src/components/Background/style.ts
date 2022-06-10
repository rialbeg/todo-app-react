import styled from "styled-components";

interface BackgroundStyleProps {
  backgroundImage: string;
}

export const Container = styled.div<BackgroundStyleProps>`
  background: url(${(props) => props.backgroundImage}) center center no-repeat;
  background-size: cover;
  height: 250px;
`;
