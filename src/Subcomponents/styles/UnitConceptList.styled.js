import styled from "styled-components";

export const ConceptBubble = styled.div.attrs((props) => ({
  color: props.color,
}))`
  background-color: ${(props) => props.color};
  color: var(--primaryWhite);
`;
