import { ConceptBubble, ConceptName } from "./styles/UnitConceptList.styled";

import { FlexRow } from "../Components/styles/FlexContainers.styled";

const UnitConceptList = (props) => {
  let unitConcepts = props.courseInfo[props.selectedUnit].unitConcepts;

  //For each lesson in the unitLessons array, return a list item with a link to the PPT file
  const mappedUnitConcepts = unitConcepts.map((concept, i) => {
    //Set the bullet color and link color dynamically, based on the sub-topic of the lesson
    var backgroundColor;
    var borderColor;
    if (concept.subtopic === 1) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 195, 0, 0.5)";
    } else if (concept.subtopic === 2) {
      borderColor = "#004012";
      backgroundColor = "rgba(3, 255, 6, 0.5)";
    } else if (concept.subtopic === 3) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 3, 243, 0.5)";
    } else if (concept.subtopic === 4) {
      borderColor = "#004012";
      backgroundColor = "rgba(3, 42, 255, 0.5)";
    } else if (concept.subtopic === 0) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 3, 3, 0.5)";
    } else {
      borderColor = "#121212";
      backgroundColor = "rgba(18, 18, 18, 1)";
    }

    return (
      <ConceptBubble borderRadius={props.isMobile ? "10px" : "12px"} borderSize={props.isMobile ? "2px" : "3px"} fontSize={props.isMobile ? "3.5vw" : "1.4vw"}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      >
        <ConceptName>{concept.name}</ConceptName>
      </ConceptBubble>
    );
  });
  return (
    <FlexRow
      alignItems="center"
      width={props.isMobile ? "100%" : "85%"}
      flexWrap="wrap"
    >
      {mappedUnitConcepts}
    </FlexRow>
  );
};

export default UnitConceptList;
