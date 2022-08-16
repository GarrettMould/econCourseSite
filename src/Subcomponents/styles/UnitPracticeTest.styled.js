import styled from "styled-components";

export const QuestionCard = styled.div.attrs((props) => ({
  textColor: props.textColor,
  borderColor: props.borderColor,
}))`
  display: flex;
  flex-direction: column;
  background-color: rgba(226, 212, 255, 0.3);
  border: 3px solid var(--primaryBlack);
  border-radius: 12px;
`;

export const QuestionAnswerContainer = styled.div`
  padding: 1.5rem;

  @media only screen and (max-width: 599px) {
    padding: 1.25rem 1rem 1rem 1.25rem;
  }
`;

export const QuestionText = styled.div.attrs((props) => ({ 
  textColor: props.textColor,
}))`
  font-family: var(--lessEmphasizedText);
  color: ${(props) => props.textColor};
  font-size: 2.25vw;
  padding-bottom: 1.5rem;

  @media only screen and (max-width: 599px) {
    font-size: 4vw;
  }
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--primaryBlack);
  font-weight: 400;
  font-size: 1.75vw;
  padding-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 599px) {
    font-size: 4vw;
  }
`;

export const OptionButton = styled.input.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
}))`
  appearance: none;
  position: relative;
  display: inline-block;
  background-color: var(--primaryWhite);
  height: 1.6em;
  width: 1.6em;
  border-radius: 100%;
  transition: all 0.2s ease-out;
  border: 2px solid rgba(197, 197, 197, 1);
  cursor: pointer;
  margin-right: 1rem;
  outline: none;

  :before {
    content: "";
    position: absolute;
    width: 0%;
    height: 0%;
    margin: auto;
    top: 50%;
    left: 0;
    right: 0;

    transform: translateY(-50%);
    background: rgba(226, 212, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    
  }

  &:checked {
    border: 2px solid var(--primaryBlack);
  }
  &:checked:before {
    content: "";
    position: absolute;
    width: 60%;
    height: 60%;
    margin: auto;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    background: var(--primaryBlack);
    opacity: 100%;
    border-radius: 100%;
    transition: opacity 0.3s ease;

    @media only screen and (max-width: 599px) {
      width: 60%;
      height: 60%;
    }
  }
`;

export const Message = styled.div`
  visibility: ${(props) => props.visibility};
  padding: ${(props) => props.padding};
  font-family: var(--lessEmphasizedText);
  color: #ef5350d5;
  font-size: ${(props) => props.fontSize};

  span {
    font-family: "CalibreRegular";
    color: #ef5350d5;
  }

  @media only screen and (max-width: 599px) {
    font-size: ${(props) => props.fontSizeMobile};
  }
`;
