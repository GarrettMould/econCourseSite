import styled from "styled-components";

export const UnitCard = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
  height: props.height,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 12px;
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

export const UnitNumber = styled.div.attrs((props) => ({
  fontSize: props.fontSize, 
  textAlign: props.textAlign,
}))`
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  color: var(--primaryBlack);
  font-family: var(--emphasizedText);
`;

export const UnitName = styled.div.attrs((props) => ({
  fontSize: props.fontSize, 
  width: props.width,
}))`
  width: ${(props) => props.width};
  text-align: center;
  font-size: ${(props) => props.fontSize}; 
  color: var(--primaryBlack);
  font-family: var(--lessEmphasizedText);
  
`;

export const UnitInfoContainerMobile = styled.div `
position: absolute;
  height: 30%;
  bottom: 5px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  

  
`
export const UnitIcon = styled.img.attrs((props) => ({
  maxWidth: props.maxWidth,
}))`
  max-width: ${(props) => props.maxWidth};
`
