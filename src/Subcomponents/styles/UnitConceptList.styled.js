import styled from "styled-components";

export const ConceptBubble = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
  borderSize: props.borderSize,
  borderRadius: props.borderRadius,
}))`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.borderSize} solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  margin: 0.5rem 0.75rem 0.5rem 0;
`;

export const ConceptName = styled.div.attrs((props) => ({ 
  fontSize: props.fontSize,
}))`
  color: var(--primaryBlack);
  font-size: ${(props) => props.fontSize}; 
  font-family: var(--lessEmphasizedText);
  text-align: center;
  padding: 0.75rem 1rem 0.5rem 1rem;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  @media only screen and (max-width: 599px) {
    font-size: ${(props) => props.fontSize}; 
    padding: 0.5rem 0.75rem 0.25rem 0.75rem;
  }
`;
