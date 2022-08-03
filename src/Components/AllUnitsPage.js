import { Link } from "react-router-dom";

import { LockKey} from "phosphor-react";

import CourseOverviewHeadline from "../Elements/CourseOverviewHeadline";

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
    
    return (
      <GridColumn size="3">
        <Link style={{ textDecoration: "none" }} className={unit.unitUnlocked ? "enabled-link" : "disabled-link"} to="/UnitOverviewPage">
          <UnitButton id={unit.unitNumber} onClick={props.changeUnitMainPage} >
            <UnitCard
              backgroundColor={unit.unitBackgroundColor}
              borderColor={unit.unitBorderColor}
            >
              {unit.unitUnlocked  ? <></> : <IconContainer><LockKey size={60} color="#ffffff"/></IconContainer>}
              <UnitInfoContainer>
                <UnitNumber>{unit.unitNumber}</UnitNumber>
                <UnitName>{unit.unitName}</UnitName>
              </UnitInfoContainer>
            </UnitCard>
          </UnitButton>
        </Link>
      </GridColumn>
    );
  });
  return (
    <>
      <CourseOverviewHeadline
        isMobile={props.isMobile}
      ></CourseOverviewHeadline>
      <GridContainer>
        <GridRow>{mappedUnits}</GridRow>
      </GridContainer>
    </>
  );
};

export default AllUnitsPage;
