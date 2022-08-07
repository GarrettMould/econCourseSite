import { FlexRow } from "../Components/styles/FlexContainers.styled";
import {
  GridColumn,
  GridRow,
  GridContainer,
} from "../Components/styles/Grid.styled";

import { ResourceCardCOPY, Padding } from "./styles/AdditionalResources.styled";

import { ConceptBubble,  ConceptName } from "./styles/UnitConceptList.styled";

const AdditionalResourcesCOPY = (props) => {
  let resources = props.courseInfo[props.selectedUnit].additionalResources;

  const mappedResources = resources.map((resource, i) => {
    console.log(resource);
    var backgroundColor;
    var borderColor;
    var textColor;
    if (resource.subtopic === 1) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 195, 0, 0.5)";
      textColor = "rgba(255, 195, 0, 1)";
    } else if (resource.subtopic === 2) {
      borderColor = "#004012";
      backgroundColor = "rgba(3, 255, 6, 0.5)";
      textColor = "rgba(3, 255, 6, 1)";
    } else if (resource.subtopic === 3) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 3, 243, 0.5)";
      textColor = "rgba(255, 3, 243, 1)";
    } else if (resource.subtopic === 4) {
      borderColor = "#004012";
      backgroundColor = "rgba(3, 42, 255, 0.5)";
      textColor = "rgba(3, 42, 255, 1)";
    } else if (resource.subtopic === 0) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 3, 3, 0.5)";
      textColor = "rgba(255, 3, 3, 1)";
    } else {
      borderColor = "#121212";
      backgroundColor = "rgba(18, 18, 18, 1)";
    }
    return (
      <GridColumn size={props.isMobile ? "12" : "10"}>
        <Padding height={props.isMobile ? "1.5px" : "2px"}>
        <ResourceCardCOPY paddingTop={i === 0 ? "0.5rem" : "5%"} color={textColor}>
          <div>
          <h3>{resource.type}</h3>
            <a href={resource.link}>
              <h1>{resource.name}</h1>
            </a>
            <p>{resource.summary}</p>
          </div>
        </ResourceCardCOPY>
        <FlexRow flexWrap="wrap">{resource.concepts.map((concept, i) => {
          return (
            <ConceptBubble borderRadius={props.isMobile ? "10px" : "15px"} borderSize={props.isMobile ? "2px" : "3px"} backgroundColor={backgroundColor} borderColor={borderColor}><ConceptName fontSize={props.isMobile ? "3.5vw" : "1.2vw"}>{concept.name}</ConceptName></ConceptBubble>
          ) 
        })}</FlexRow>
        </Padding>
      </GridColumn>
    );
  });
  return (
    <GridContainer width={props.isMobile ? "100%" : "100%"}>
      <GridRow>{mappedResources}</GridRow>
    </GridContainer>
  );
};

export default AdditionalResourcesCOPY;
