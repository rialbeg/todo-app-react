import styled from "styled-components";

export const Container = styled.main`
  /* background: red; */
  max-width: 60rem;
  margin: -20rem auto;
  height: 30rem;

  div.title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 4rem;
      letter-spacing: 1rem;
      font-weight: 700;
      color: white;
      height: 4rem;
    }
  }
`;

export const TaskInput = styled.form`
  input {
    background: ${(props) => props.theme.inputBackgroundColor};
    margin-top: 40px;
  }
`;
