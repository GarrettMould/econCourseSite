import { Link } from "react-router-dom";

import { propTypes } from "react-bootstrap/esm/Image";
import {
  GridColumn,
  GridContainer,
  GridRow,
} from "../Components/styles/Grid.styled";

import { PaddingTop } from "../Components/styles/Containers.styled";

import { FlexRow } from "../Components/styles/FlexContainers.styled";
import { CloseResultsButton } from "../Elements/styles/Buttons.styled";
import { ResultsBox } from "./styles/UnitTestResultsBox.styled";
const UnitTestResultsBox = (props) => {
  let unit = props.courseInfo[props.selectedUnit].unitNumber;

  // Take the list of incorrect questions provided through props and format them to be display in the test results box

  var incorrectQuestions = props.incorrectQuestionsList;

  var incorrectQuestionsFinal = [];

  if (incorrectQuestions) {
    incorrectQuestions.forEach((q) => {
      var formatted = "Q" + q;
      incorrectQuestionsFinal.push(formatted);
    });
  }

  var displayIncorrectQuestions = incorrectQuestionsFinal.join(", ");

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
    <>
      <PaddingTop top="15%"></PaddingTop>
      <FlexRow width="100%" justifyContent="center" alignItems="center">
        <ResultsBox
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          textColor={textColor}
        >
          <div>
            <h2>Final Results</h2>
            <h3>
              {props.unitTestScore} out of {props.unitTestLength} correct &nbsp;
              - &nbsp;
              {(props.unitTestScore / props.unitTestLength) * 100}%&nbsp;
            </h3>
            <h4>
              <span>Missed Questions:</span>
            </h4>
            <h4>
              <span>{displayIncorrectQuestions}</span>
            </h4>
            <Link style={{ textDecoration: "none" }} to="/UnitOverviewPage">
              <CloseResultsButton onClick={props.resetTest}>
                Close
              </CloseResultsButton>
            </Link>
          </div>
        </ResultsBox>
      </FlexRow>
    </>
  );
};

export default UnitTestResultsBox;
