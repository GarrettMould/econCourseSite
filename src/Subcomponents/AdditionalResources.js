import {
  GridColumn,
  GridRow,
  GridContainer,
} from "../Components/styles/Grid.styled";
import { ResourceCard } from "./styles/AdditionalResources.styled";

const AdditionalResources = (props) => {
  let resources = props.courseInfo[props.selectedUnit].additionalResources;

  const mappedResources = resources.map((resource, i) => {
    var backgroundColor;
    var borderColor;
    var textColor;
    if (resource.subtopic === 1) {
      borderColor = "rgba(255, 195, 0, 0.2)";
      backgroundColor = "rgba(255, 195, 0, 0.5)";
      textColor = "rgba(255, 195, 0, 1)";
    } else if (resource.subtopic === 2) {
      borderColor = "rgba(3, 255, 6, 0.2)";
      backgroundColor = "rgba(3, 255, 6, 0.5)";
      textColor = "rgba(3, 255, 6, 1)";
    } else if (resource.subtopic === 3) {
      borderColor = "rgba(255, 3, 243, 0.2)";
      backgroundColor = "rgba(255, 3, 243, 0.5)";
      textColor = "rgba(255, 3, 243, 1)";
    } else if (resource.subtopic === 4) {
      borderColor = "rgba(3, 42, 255, 0.2)";
      backgroundColor = "rgba(3, 42, 255, 0.5)";
      textColor = "rgba(3, 42, 255, 1)";
    } else if (resource.subtopic === 0) {
      borderColor = "rgba(255, 3, 3, 0.2)";
      backgroundColor = "rgba(255, 3, 3, 0.5)";
      textColor = "rgba(255, 3, 3, 1)";
    } else {
      borderColor = "#121212";
      backgroundColor = "rgba(18, 18, 18, 1)";
    }
    return (
      <GridColumn size={props.isMobile ? "6" : "3"}>
        <ResourceCard
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          textColor={textColor}
        >
          <div>
            <a href={resource.link}>
              <h1>{resource.name}</h1>
            </a>
            <h3>{resource.type}</h3>
            <p>{resource.summary}</p>
          </div>
        </ResourceCard>
      </GridColumn>
    );
  });
  return (
    <GridContainer width={props.isMobile ? "100%" : "100%"}>
      <GridRow>{mappedResources}</GridRow>
    </GridContainer>
  );
};

export default AdditionalResources;
