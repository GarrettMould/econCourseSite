import styled from "styled-components";

export const FlexRow = styled.div.attrs((props) => ({
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  padding: props.padding,
  width: props.width,
  flexWrap: props.flexWrap,
}))`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexWrap};
`;

export const FlexColumn = styled.div.attrs((props) => ({
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
}))`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;


