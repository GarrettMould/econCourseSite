import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  font-family: var(--lessEmphasizedText);
  width: 90%;
  padding: 0.75rem 0rem 0.25rem 0rem;
  margin-bottom: 2rem;
  font-size: 2.5vw;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--primaryWhite);
  border: 3px solid rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  @media only screen and (max-width: 599px) {
    font-size: 5vw;
    width: 100%;
    padding: 0.5rem 0rem 0.15rem 0rem;
  }
`;

export const UnitButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

export const CloseResultsButton = styled.button`
  font-family: var(--emphasizedText);
  width: 100%;
  padding: 0.5rem 0rem 0.25rem 0rem;
  margin: 0.5rem 0rem 0.25rem 0rem;
  font-size: 1.5vw;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--primaryWhite);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  @media only screen and (max-width: 599px) {
    font-size: 3.5vw;
  }
`;
