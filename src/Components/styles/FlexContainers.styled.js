import styled from "styled-components";

export const FlexRow = styled.div.attrs((props) => ({
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  padding: props.padding,
  width: props.width,
}))`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
`;

export const FlexColumn = styled.div.attrs((props) => ({
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
}))`
  display: flex;
  flex-direction: column;
  justify-conent: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
