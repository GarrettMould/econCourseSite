import { FlexColumn } from "../Components/styles/FlexContainers.styled";

import {
  GridContainer,
  GridColumn,
  GridRow,
} from "../Components/styles/Grid.styled";

import {
  QuestionCard,
  QuestionText,
  AnswerOption,
  QuestionAnswerContainer,
  OptionButton,
  OptionLabel,
} from "./styles/UnitPracticeTest.styled";

const UnitPracticeTest = (props) => {
  let testQuestions = props.courseInfo[props.selectedUnit].unitPracticeTest;

  const mappedTestQuestions = testQuestions.map((question, i) => {
    var backgroundColor;
    var borderColor;
    if (question.subtopic == 1) {
      borderColor = "#FFC300";
      backgroundColor = "rgba(255, 195, 0, 0.5)";
    } else if (question.subtopic == 2) {
      borderColor = "#03FF06";
      backgroundColor = "rgba(3, 255, 6, 0.5)";
    } else if (question.subtopic == 3) {
      borderColor = "#FF03F3";
      backgroundColor = "rgba(255, 3, 243, 0.5)";
    } else if (question.subtopic == 4) {
      borderColor = "#032AFF";
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
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[0].id}
                ></OptionButton>
                {question.options[0].name}
              </OptionLabel>

              <OptionLabel>
                <OptionButton
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[1].id}
                ></OptionButton>
                {question.options[1].name}
              </OptionLabel>

              <OptionLabel>
                <OptionButton
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[2].id}
                ></OptionButton>
                {question.options[2].name}
              </OptionLabel>

              <OptionLabel>
                <OptionButton
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                  type="radio"
                  name={question.questionNumber}
                  value={question.options[3].id}
                ></OptionButton>
                {question.options[3].name}
              </OptionLabel>
            </FlexColumn>
          </QuestionAnswerContainer>
        </QuestionCard>
      </GridColumn>
    );
  });
  return (
    <GridContainer width="100%">
      <GridRow>{mappedTestQuestions}</GridRow>
    </GridContainer>
  );
};

export default UnitPracticeTest;
