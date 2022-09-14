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
  padding: 2rem;

  @media only screen and (max-width: 599px) {
    padding: 1.25rem 1rem 1rem 1.25rem;
  }
`;

export const QuestionText = styled.div.attrs((props) => ({ 
  textColor: props.textColor,
}))`
  font-family: var(--lessEmphasizedText);
  color: ${(props) => props.textColor};
  font-size: 2vw;
  padding-bottom: 1.5rem;

  @media only screen and (max-width: 599px) {
    font-size: 4vw;
  }
`;

export const QuestionImage = styled.img`
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 599px) {
    max-width: 90%;
  }
`

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  color: var(--primaryBlack);
  font-weight: 400;
  font-size: 1.65vw;
  padding-bottom: 1.5rem;

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
  
  height: 1em;
  width: 1em;
  margin-right: 0.75em;
  
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
