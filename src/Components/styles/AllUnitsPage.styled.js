import styled from "styled-components";

export const UnitCard = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
`;

export const IconContainer = styled.div`
position: absolute;
top: 40%;  /* position the top  edge of the element at the middle of the parent */
left: 50%; /* position the left edge of the element at the middle of the parent */
transform: translate(-50%, -50%); /* This is a shorthand of translateX(-50%) and translateY(-50%) */
`

export const UnitInfoContainer = styled.div`
  position: absolute;
  height: 30%;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 599px) {
    bottom: 25px;
    height: auto;
  }
`;

export const UnitNumber = styled.div`
  font-size: 2.25vw;
  text-align: center;
  color: var(--primaryBlack);
  font-family: var(--lessEmphasizedText);

  @media only screen and (max-width: 599px) {
    font-size: 8vw;
  }
`;

export const UnitName = styled.div`
  width: 90%;
  text-align: center;
  font-size: 1.75vw;
  color: var(--primaryBlack);
  font-family: var(--lessEmphasizedText);

  @media only screen and (max-width: 599px) {
    font-size: 6.5vw;
  }
`;
