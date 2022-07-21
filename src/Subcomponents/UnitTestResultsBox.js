import {
  GridColumn,
  GridContainer,
  GridRow,
} from "../Components/styles/Grid.styled";

import { FlexRow } from "../Components/styles/FlexContainers.styled";
import { CloseResultsButton } from "../Elements/styles/Buttons.styled";
import { ResultsBox } from "./styles/UnitTestResultsBox.styled";
const UnitTestResultsBox = (props) => {
  let unit = props.courseInfo[props.selectedUnit].unitNumber;

  var missedQuestions = props.unansweredQuestionsList;
  console.log(missedQuestions);

  var backgroundColor;
  var borderColor;
  var textColor;
  if (unit == 1) {
    borderColor = "rgba(255, 195, 0, 0.2)";
    backgroundColor = "rgba(255, 195, 0, 0.5)";
    textColor = "rgba(255, 195, 0, 0.8)";
  } else if (unit == 2) {
    borderColor = "rgba(3, 255, 6, 0.2)";
    backgroundColor = "rgba(3, 255, 6, 0.5)";
    textColor = "#03ff06";
  } else if (unit == 3) {
    borderColor = "rgba(255, 3, 243, 0.2)";
    backgroundColor = "rgba(255, 3, 243, 0.5)";
    textColor = "#ff03f3";
  } else if (unit == 4) {
    borderColor = "rgba(3, 42, 255, 0.2)";
    backgroundColor = "rgba(3, 42, 255, 0.5)";
    textColor = "#032aff";
  } else {
    borderColor = "#121212";
    backgroundColor = "rgba(18, 18, 18, 1)";
    textColor = "white";
  }

  return (
    <GridContainer width="100%">
      <GridRow>
        <GridColumn size="6">
          <ResultsBox
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            textColor={textColor}
          >
            <div>
              <h2>Final Results</h2>
              <h3>
                {props.unitTestScore} out of {props.unitTestLength} correct -
                (&nbsp;
                {(props.unitTestScore / props.unitTestLength) * 100}%&nbsp;)
              </h3>
              <h3>
                <span>Missed Questions:</span>
              </h3>
              <h3>
                <span>{missedQuestions}</span>
              </h3>
              <CloseResultsButton onClick={props.resetTest}>
                Close
              </CloseResultsButton>
            </div>
          </ResultsBox>
        </GridColumn>
      </GridRow>
    </GridContainer>
  );
};

export default UnitTestResultsBox;
