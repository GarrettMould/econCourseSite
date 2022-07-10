import styled from "styled-components";

export const BasicContainer = styled.div`
  max-width: 100%;
`;

export const ContainerPadded = styled.div`
  max-width: 100%;
  padding: 0 50px;
  margin: 0 auto;

  @media only screen and (max-width: 599px) {
    padding: 0 30px;
  }
`;

export const PaddingTop = styled.div`
  padding-top: 5%;
`;