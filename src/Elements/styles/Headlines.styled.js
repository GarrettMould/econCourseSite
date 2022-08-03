import styled from "styled-components";

export const Headline = styled.div.attrs((props) => ({
  fontSize: props.fontSize,
}))`
  font-size: ${(props) => props.fontSize};
  font-family: var(--lessEmphasizedText);
`;
