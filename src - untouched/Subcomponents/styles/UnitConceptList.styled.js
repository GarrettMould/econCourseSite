import styled from "styled-components";

export const ConceptBubble = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
}))`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 15px;
  margin: 0.5rem 0.75rem 0.5rem 0;
`;

export const ConceptName = styled.div`
  color: var(--primaryWhite);
  font-size: 1.4vw;
  font-family: var(--emphasizedText);
  text-align: center;
  padding: 0.75rem 1rem 0.5rem 1rem;
`;
