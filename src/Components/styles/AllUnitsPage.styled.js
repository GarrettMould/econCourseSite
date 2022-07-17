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
  height: 600px;
  background-color: ${(props) => props.backgroundColor};
  border: 4px solid ${(props) => props.borderColor};
  border-radius: 15px; 
`;

export const UnitInfoContainer = styled.div`
  position: absolute;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UnitNumber = styled.div`
  font-size: 2.25vw;
  text-align: center;
  color: white;
  font-family: var(--emphasizedText);
`;

export const UnitName = styled.div`
  width: 90%;
  text-align: center;
  font-size: 1.75vw;
  color: white;
  font-family: var(--emphasizedText);
`;
