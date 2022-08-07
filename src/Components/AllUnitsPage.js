import { Link } from "react-router-dom";

import { PaddingTop } from "./styles/Containers.styled";


import { GridContainer, GridColumn, GridRow } from "./styles/Grid.styled";
import {
  UnitCard,
  UnitNumber,
  UnitName,
  UnitInfoContainer,
  IconContainer, 
  UnitIcon
} from "./styles/AllUnitsPage.styled";

import { UnitButton } from "../Elements/styles/Buttons.styled";

import unit1icon from "../Images/recession.png"
import unit2icon from "../Images/team.png"
import unit3icon from "../Images/government.png"
import unit4icon from "../Images/law.png"

const AllUnitsPage = (props) => {

  

  const mappedUnits = props.courseInfo.map((unit, i) => {

   
    var icon; 

    if (i === 0) {
      icon = <IconContainer><UnitIcon src={unit1icon} maxWidth="100px"></UnitIcon></IconContainer>
    } else if (i === 1)  {
      icon = <IconContainer><UnitIcon src={unit2icon}  maxWidth="100px"></UnitIcon></IconContainer>
    } else if (i === 2) { 
      icon = <IconContainer><UnitIcon src={unit3icon}  maxWidth="100px"></UnitIcon></IconContainer>
    } else if (i === 3) { 
      icon = <IconContainer><UnitIcon src={unit4icon}  maxWidth="100px"></UnitIcon></IconContainer>
    }
    
    return (
      <GridColumn size="3">
        <Link style={{ textDecoration: "none" }} className={unit.unitUnlocked ? "enabled-link" : "disabled-link"} to="/UnitOverviewPage">
          <UnitButton id={unit.unitNumber} onClick={props.changeUnitMainPage} >
            <UnitCard height="400px"
              backgroundColor={unit.unitBackgroundColor}
              borderColor={unit.unitBorderColor}
            >
              {icon}
              <UnitInfoContainer>
                <UnitNumber textAlign="center" fontSize="2.25vw">{unit.unitNumber}</UnitNumber>
                <UnitName width="90%" fontSize="1.75vw">{unit.unitName}</UnitName>
              </UnitInfoContainer>
            </UnitCard>
          </UnitButton>
        </Link>
      </GridColumn>
    );
  });
  return (
    <>
      <PaddingTop top={props.isMobile ? "8%" : "6%"}></PaddingTop>
      <GridContainer>
        <GridRow>{mappedUnits}</GridRow>
      </GridContainer>
    </>
  );
};

export default AllUnitsPage;
