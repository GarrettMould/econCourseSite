import styled from "styled-components";

export const ResultsBox = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
  textColor: props.textColor,
}))`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 15px;

  div {
    padding: 2rem;
  }
  h2 {
    font-family: var(--emphasizedText);
    color: var(--primaryWhite);
    font-size: 2.5vw;
    text-align: center;
  }

  h3 {
    font-family: var(--lessEmphasizedText);
    color: var(--primaryWhite);
    font-size: 2vw;
    text-align: center;
  }

  span {
    font-family: var(--lessEmphasizedText);
    color: ${(props) => props.textColor};
  }
`;
