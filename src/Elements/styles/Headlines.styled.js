import styled from "styled-components";

export const Headline = styled.div.attrs((props) => ({
  fontSize: props.fontSize,
  textAlign: props.textAlign,
}))`
  font-size: ${(props) => props.fontSize};
  font-family: var(--lessEmphasizedText);
`;
