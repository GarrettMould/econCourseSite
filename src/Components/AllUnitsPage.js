import CourseOverviewHeadline from "../Elements/CourseOverviewHeadline";

import { GridContainer, GridColumn, GridRow } from "./styles/Grid.styled";
import {
  UnitCard,
  UnitNumber,
  UnitName,
  UnitInfoContainer,
} from "./styles/AllUnitsView.styled";

import { PaddingTop } from "./styles/Containers.styled";

const AllUnitsView = (props) => {
  const mappedUnits = props.courseInfo.map((unit, i) => {
    return (
      <GridColumn size="3">
        <UnitCard backgroundColor={unit.unitColor}>
          <UnitInfoContainer>
            <UnitNumber>{unit.unitNumber}</UnitNumber>
            <UnitName>{unit.unitName}</UnitName>
          </UnitInfoContainer>
        </UnitCard>
      </GridColumn>
    );
  });
  return (
    <>
      <CourseOverviewHeadline></CourseOverviewHeadline>
      <GridContainer>
        <GridRow>{mappedUnits}</GridRow>
      </GridContainer>
    </>
  );
};

export default AllUnitsView;
