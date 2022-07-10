import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 1em;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1em;
`;

export const GridColumn = styled.div.attrs((props) => ({
  size: props.size,
  justifySelf: props.justifySelf,
}))`
  grid-column: span ${(props) => props.size} / auto;
  justify-self: ${(props) => props.justifySelf};
`;

export const Image = styled.img`
  max-width: 100%;
`;
