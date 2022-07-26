import { Link } from "react-router-dom";

import CourseOverviewHeadline from "../Elements/CourseOverviewHeadline";

import { GridContainer, GridColumn, GridRow } from "./styles/Grid.styled";
import {
  UnitCard,
  UnitNumber,
  UnitName,
  UnitInfoContainer,
} from "./styles/AllUnitsPage.styled";

import { UnitButton } from "../Elements/styles/Buttons.styled";

import { PaddingTop } from "./styles/Containers.styled";

const AllUnitsPage = (props) => {
  const mappedUnits = props.courseInfo.map((unit, i) => {
    return (
      <GridColumn size="3">
        <Link to="/UnitOverviewPage">
          <UnitButton id={unit.unitNumber} onClick={props.changeUnitMainPage}>
            <UnitCard
              backgroundColor={unit.unitBackgroundColor}
              borderColor={unit.unitBorderColor}
            >
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
