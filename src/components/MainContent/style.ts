import styled from "styled-components";

export const Container = styled.main`
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

  div.task-list {
    margin-top: 2rem;
    position: relative;
  }

  p.end-note {
    text-align: center;
    font-size: 1.3rem;
    margin-top: 40px;
  }
  @media (max-width: 550px) {
    max-width: 50rem;
  }
  @media (max-width: 450px) {
    max-width: 40rem;
  }
  @media (max-width: 350px) {
    max-width: 35rem;
  }
`;

export const TaskInput = styled.form`
  div.task-input {
    margin-top: 40px;
    padding: 2.2rem;
    width: 100%;
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;

    background: ${(props) => props.theme.inputBackgroundColor};
    border-radius: 5px;
    div.check-circle {
      width: 23px;
      height: 23px;
      background: ${(props) => props.theme.inputBackgroundColor};
      /* position: absolute;
      left: 25px;
      top: 18px; */
      /* margin-right: 48px; */
      border-radius: 50%;
      border: 1px solid;
      border-color: rgba(147, 148, 165, 0.3);
    }
    input {
      background: ${(props) => props.theme.inputBackgroundColor};
      width: 83%;
      border: none;
      border-radius: 5px;
      margin-left: 20px;
      caret-color: var(--bright-blue);
      color: ${(props) => props.theme.hoverColor};
      &::placeholder {
        color: ${(props) => props.theme.textColor};
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const Footer = styled.footer`
  background: ${(props) => props.theme.inputBackgroundColor};
  border-radius: 0 0 5px 5px;
  div.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    color: ${(props) => props.theme.textColor};
    padding: 15px 25px;
    opacity: 0.7;

    div.total-items {
    }
    div.filter-buttons {
      display: flex;
      gap: 12px;
    }

    div.clear-completed {
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }
`;

interface filterProps {
  selected: boolean;
}

export const FilterOption = styled.p<filterProps>`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.hoverColor};
  }
  color: ${(props) => (props.selected ? "#3a7bfd" : "")};
`;

export const FooterMobile = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  font-size: 1.6rem;
  color: ${(props) => props.theme.textColor};
  padding: 15px 25px;
  margin-top: 20px;

  background: ${(props) => props.theme.inputBackgroundColor};
  border-radius: 5px;
`;
