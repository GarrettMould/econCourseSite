import styled from "styled-components";

export const QuestionCard = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
}))`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 15px;
`;

export const QuestionAnswerContainer = styled.div`
  padding: 1.5rem;

  @media only screen and (max-width: 599px) {
    padding: 1.25rem 1rem 1rem 1.25rem;
  }
`;

export const QuestionText = styled.div`
  font-family: var(--emphasizedText);
  color: var(--primaryWhite);
  font-size: 2vw;
  padding-bottom: 1.5rem;

  @media only screen and (max-width: 599px) {
    font-size: 4vw;
  }
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--primaryWhite);
  font-family: var(--lessEmphasizedText);
  font-size: 1.5vw;
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
  height: 1.4em;
  width: 1.4em;
  border-radius: 100%;
  transition: all 0.2s ease-out;
  border: 1px solid rgba(197, 197, 197, 0.4);
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
    background: ${(props) => props.backgroundColor};
    opacity: 0;
    border-radius: 100%;
    transition: width 0.2s ease-out, height 0.2s ease-out;
  }

  &:checked {
    border: 1px solid rgba(197, 197, 197, 0.7);
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
    background: ${(props) => props.backgroundColor};
    opacity: 100%;
    border-radius: 100%;
    transition: opacity 0.3s ease;

    @media only screen and (max-width: 599px) {
      width: 80%;
      height: 80%;
    }
  }
`;

export const Message = styled.div`
  visibility: ${(props) => props.visibility};
  padding: ${(props) => props.padding};
  font-family: var(--lessEmphasizedText);
  color: red;
  font-size: ${(props) => props.fontSize};

  span {
    font-family: "CalibreRegular";
    color: red;
  }

  @media only screen and (max-width: 599px) {
    font-size: ${(props) => props.fontSizeMobile};
  }
`;
