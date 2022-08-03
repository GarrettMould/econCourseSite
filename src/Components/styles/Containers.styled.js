import styled from "styled-components";

export const BasicContainer = styled.div`
  max-width: 100%;
`;

export const ContainerPadded = styled.div`
  min-height: 100vh;
  max-width: 100%;
  padding: 0 50px 30px 50px;
  margin: 0 auto;

  @media only screen and (max-width: 599px) {
    padding: 0 30px;
  }
`;

export const PaddingTop = styled.div.attrs((props) => ({
  top: props.top,
}))`
  padding-top: ${(props) => props.top};
`;
