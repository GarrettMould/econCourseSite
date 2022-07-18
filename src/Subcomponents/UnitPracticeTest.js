import { FlexColumn } from "../Components/styles/FlexContainers.styled";

import {
  GridContainer,
  GridColumn,
  GridRow,
} from "../Components/styles/Grid.styled";

import {
  QuestionCard,
  QuestionText,
  QuestionAnswerContainer,
  OptionButton,
  OptionLabel,
} from "./styles/UnitPracticeTest.styled";

import { PaddingTop } from "../Components/styles/Containers.styled";

import SubmitButton from "../Elements/SubmitButton";

import UnitTestResultsBox from "./UnitTestResultsBox";

const UnitPracticeTest = (props) => {
  let testQuestions = props.courseInfo[props.selectedUnit].unitPracticeTest;

  const mappedTestQuestions = testQuestions.map((question, i) => {
    var backgroundColor;
    var borderColor;
    if (question.subtopic == 1) {
      borderColor = "rgba(255, 195, 0, 0.2)";
      backgroundColor = "rgba(255, 195, 0, 0.5)";
    } else if (question.subtopic == 2) {
      borderColor = "rgba(3, 255, 6, 0.2)";
      backgroundColor = "rgba(3, 255, 6, 0.5)";
    } else if (question.subtopic == 3) {
      borderColor = "rgba(255, 3, 243, 0.2)";
      backgroundColor = "rgba(255, 3, 243, 0.5)";
    } else if (question.subtopic == 4) {
      borderColor = "rgba(3, 42, 255, 0.2)";
      backgroundColor = "rgba(3, 42, 255, 0.5)";
    } else if (question.subtopic == 0) {
      borderColor = "#FF0303";
      backgroundColor = "rgba(255, 3, 3, 0.5)";
    } else {
      borderColor = "#121212";
      backgroundColor = "rgba(18, 18, 18, 1)";
    }
    return (
      <GridColumn size="12">
        <QuestionCard
          backgroundColor={backgroundColor}
          borderColor={borderColor}
        >
          <QuestionAnswerContainer>
            <QuestionText>
              {question.questionNumber})&nbsp;{question.questionText}
            </QuestionText>
            <FlexColumn>
              <OptionLabel>
                <OptionButton
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                  className="option"
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[0].isCorrect}
                ></OptionButton>
                {question.options[0].name}
              </OptionLabel>

              <OptionLabel>
                <OptionButton
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                  className="option"
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[1].isCorrect}
                ></OptionButton>
                {question.options[1].name}
              </OptionLabel>

              <OptionLabel>
                <OptionButton
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                  className="option"
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[2].isCorrect}
                ></OptionButton>
                {question.options[2].name}
              </OptionLabel>

              <OptionLabel>
                <OptionButton
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                  className="option"
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[3].isCorrect}
                ></OptionButton>
                {question.options[3].name}
              </OptionLabel>
            </FlexColumn>
          </QuestionAnswerContainer>
        </QuestionCard>
      </GridColumn>
    );
  });

  var display;

  {
    props.testFinished == true
      ? (display = (
          <>
            <PaddingTop></PaddingTop>
            <UnitTestResultsBox
              resetTest={props.resetTest}
              unitTestLength={props.unitTestLength}
              unitTestScorePerc={props.unitTestScorePerc}
              unitTestScore={props.unitTestScore}
              selectedUnit={props.selectedUnit}
              courseInfo={props.courseInfo}
            ></UnitTestResultsBox>
          </>
        ))
      : (display = (
          <>
            <GridContainer width="100%">
              <GridRow>{mappedTestQuestions}</GridRow>
            </GridContainer>
            <PaddingTop></PaddingTop>
            <SubmitButton
              unitTestScore={props.unitTestScore}
              tallyScore={props.tallyScore}
            ></SubmitButton>
          </>
        ));
  }
  return display;
};

export default UnitPracticeTest;
