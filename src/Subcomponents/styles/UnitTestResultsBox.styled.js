import styled from "styled-components";

export const ResultsBox = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
  textColor: props.textColor,
}))`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(226, 212, 255, 0.3);
  border: 3px solid var(--primaryBlack);
  border-radius: 15px;

  div {
    padding: 2rem;
  }
  h2 {
    font-family: var(--emphasizedText);
    font-size: 3vw;
    text-align: center;
  }

  h3 {
    font-family: var(--lessEmphasizedText);
    font-size: 2.5vw;
    text-align: center;
  }

  h4 {
    font-family: var(--lessEmphasizedText);
    font-size: 2vw;
    text-align: center;
  }

  span {
    font-family: var(--lessEmphasizedText);
    color: rgba(130, 130, 130, 1);
  }

  @media only screen and (max-width: 599px) {
    width: 80%;

    h2 {
      font-size: 6vw;
    }

    h3 {
      font-size: 4.5vw;
    }

    h4 {
      font-size: 4.5vw;
    }
  }
`;
