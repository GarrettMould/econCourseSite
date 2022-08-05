import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faChartLine, faSackDollar, faLandmark, faGavel } from '@fortawesome/free-solid-svg-icons';

import { PaddingTop } from "./styles/Containers.styled";


import { GridContainer, GridColumn, GridRow } from "./styles/Grid.styled";
import {
  UnitCard,
  UnitNumber,
  UnitName,
  UnitInfoContainer,
  IconContainer
} from "./styles/AllUnitsPage.styled";

import { UnitButton } from "../Elements/styles/Buttons.styled";


const AllUnitsPage = (props) => {

  

  const mappedUnits = props.courseInfo.map((unit, i) => {

    var icon; 

    if (i === 0) {
      icon = <IconContainer><FontAwesomeIcon icon={faChartLine} size="5x" /></IconContainer>
    } else if (i === 1)  {
      icon = <IconContainer><FontAwesomeIcon icon={faSackDollar} size="5x"/></IconContainer>
    } else if (i === 2) { 
      icon = <IconContainer><FontAwesomeIcon icon={faLandmark} size="5x"/></IconContainer>
    } else if (i === 3) { 
      icon = <IconContainer><FontAwesomeIcon icon={faGavel} size="5x"/></IconContainer>
    }
    
    return (
      <GridColumn size="3">
        <Link style={{ textDecoration: "none" }} className={unit.unitUnlocked ? "enabled-link" : "disabled-link"} to="/UnitOverviewPage">
          <UnitButton id={unit.unitNumber} onClick={props.changeUnitMainPage} >
            <UnitCard height="400px"
              backgroundColor={unit.unitBackgroundColor}
              borderColor={unit.unitBorderColor}
            >
              {(icon)}
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
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <GridContainer>
        <GridRow>{mappedUnits}</GridRow>
      </GridContainer>
    </>
  );
};

export default AllUnitsPage;
