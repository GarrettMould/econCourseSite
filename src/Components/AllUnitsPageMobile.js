import { Link } from "react-router-dom";

import { GridContainer, GridColumn, GridRow } from "./styles/Grid.styled";

import { FlexRow, FlexColumn } from "./styles/FlexContainers.styled";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faChartLine, faSackDollar, faLandmark, faGavel } from '@fortawesome/free-solid-svg-icons';

import { PaddingTop } from "./styles/Containers.styled";

import {
  UnitCard,
  UnitNumber,
  UnitName,
  UnitInfoContainerMobile,
  IconContainer
} from "./styles/AllUnitsPage.styled";

import { UnitButton } from "../Elements/styles/Buttons.styled";


const AllUnitsPageMobile = (props) => {
  const mappedUnits = props.courseInfo.map((unit, i) => {

    var icon; 

    if (i === 0) {
      icon = <IconContainer><FontAwesomeIcon icon={faChartLine} size="3x" /></IconContainer>
    } else if (i === 1)  {
      icon = <IconContainer><FontAwesomeIcon icon={faSackDollar} size="3x"/></IconContainer>
    } else if (i === 2) { 
      icon = <IconContainer><FontAwesomeIcon icon={faLandmark} size="3x"/></IconContainer>
    } else if (i === 3) { 
      icon = <IconContainer><FontAwesomeIcon icon={faGavel} size="3x"/></IconContainer>
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
              {(icon)}
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
      <GridContainer>
        <GridRow>
          {mappedUnits}
        </GridRow>
      </GridContainer>
    </>
  );
};

export default AllUnitsPageMobile;
