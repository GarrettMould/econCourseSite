import { Link } from "react-router-dom";

import { GridContainer, GridColumn, GridRow } from "./styles/Grid.styled";

import { FlexRow, FlexColumn } from "./styles/FlexContainers.styled";


import unit1icon from "../Images/recession.png"
import unit2icon from "../Images/team.png"
import unit3icon from "../Images/government.png"
import unit4icon from "../Images/law.png"

import { PaddingTop } from "./styles/Containers.styled";

import {
  UnitCard,
  UnitNumber,
  UnitName,
  UnitInfoContainerMobile,
  IconContainer, 
  UnitIcon
} from "./styles/AllUnitsPage.styled";

import { UnitButton } from "../Elements/styles/Buttons.styled";


const AllUnitsPageMobile = (props) => {
  const mappedUnits = props.courseInfo.map((unit, i) => {

    
    var icon; 

    if (i === 0) {
      icon = <IconContainer><UnitIcon src={unit1icon} maxWidth="65px"></UnitIcon></IconContainer>
    } else if (i === 1)  {
      icon = <IconContainer><UnitIcon src={unit2icon} maxWidth="65px"></UnitIcon></IconContainer>
    } else if (i === 2) { 
      icon = <IconContainer><UnitIcon src={unit3icon} maxWidth="65px"></UnitIcon></IconContainer>
    } else if (i === 3) { 
      icon = <IconContainer><UnitIcon src={unit4icon} maxWidth="65px"></UnitIcon></IconContainer>
    }
    
    return (
      <GridColumn size="12">
        <Link style={{ textDecoration: "none" }} className={unit.unitUnlocked ? "enabled-link" : "disabled-link"} to="UnitOverviewPage">
          <UnitButton id={unit.unitNumber} onClick={props.changeUnitMainPage}>
            <UnitCard 
              height="200px"
              backgroundColor={unit.unitBackgroundColor}
              borderColor={unit.unitBorderColor}
            >
              {icon}
              <FlexRow width="100%" justifyContent="space-between">
                <UnitInfoContainerMobile>
                  <UnitNumber textAlign="left" fontSize="4vw">Unit {unit.unitNumber}</UnitNumber>
                  <UnitName width="100%" fontSize="5vw">{unit.unitName}</UnitName>
                </UnitInfoContainerMobile>
              </FlexRow>
            </UnitCard>
          </UnitButton>
        </Link>
      </GridColumn>
      
    );
  });
  return (
    <>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <GridContainer paddingBottom="10%">
        <GridRow>
          {mappedUnits}
        </GridRow>
      </GridContainer>
    </>
  );
};

export default AllUnitsPageMobile;
