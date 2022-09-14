import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";

import { InputGroup } from "react-bootstrap";

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
  Message,
  QuestionImage,
} from "./styles/UnitPracticeTest.styled";

import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";

import { PaddingTop } from "../Components/styles/Containers.styled";

import SubmitButton from "../Elements/SubmitButton";

import UnitTestResultsBox from "./UnitTestResultsBox";

const UnitPracticeTest = ({ forwardedRef, ...props }) => {

  console.log(props.testFinished);
  let testQuestions = props.courseInfo[props.selectedUnit].unitPracticeTest;

  var unit = props.courseInfo[props.selectedUnit].unitNumber;

  const mappedTestQuestions = testQuestions.map((question, i) => {
    var backgroundColor;
    var borderColor;
    if (question.subtopic === 1) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 195, 0, 0.5)";
    } else if (question.subtopic === 2) {
      borderColor = "#004012";
      backgroundColor = "rgba(3, 255, 6, 0.5)";
    } else if (question.subtopic === 3) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 3, 243, 0.5)";
    } else if (question.subtopic === 4) {
      borderColor = "#004012";
      backgroundColor = "rgba(3, 42, 255, 0.5)";
    } else if (question.subtopic === 0) {
      borderColor = "#004012";
      backgroundColor = "rgba(255, 3, 3, 0.5)";
    } else {
      borderColor = "#121212";
      backgroundColor = "rgba(18, 18, 18, 1)";
    }
    return (
      <GridColumn size="12">
        <Form.Group>
          <QuestionCard
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            className="questionCard"
            key={question.questionNumber}
            id={question.questionNumber}
          >
            <QuestionAnswerContainer>
              <QuestionText backgroundColor={backgroundColor}>
                {question.questionNumber})&nbsp;{question.questionText}
              </QuestionText>
              {question.image ? <QuestionImage src={question.image}></QuestionImage> : null}

              <InputGroup>
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
                    <div>
                    {question.options[0].name}
                    </div>
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

                  {question.options[2] ? <OptionLabel>
                    <OptionButton
                      backgroundColor={backgroundColor}
                      borderColor={borderColor}
                      className="option"
                      type="radio"
                      name={question.questionNumber}
                      value={question.options[2].isCorrect}
                    ></OptionButton>
                    {question.options[2].name}
                  </OptionLabel> : null}

                  {question.options[3] ? <OptionLabel>
                    <OptionButton
                      backgroundColor={backgroundColor}
                      borderColor={borderColor}
                      className="option"
                      type="radio"
                      name={question.questionNumber}
                      value={question.options[3].isCorrect}
                    ></OptionButton>
                    {question.options[3].name}
                  </OptionLabel> : null}
                </FlexColumn>
              </InputGroup>
            </QuestionAnswerContainer>
          </QuestionCard>
        </Form.Group>
      </GridColumn>
    );
  });

  var display; 

  {props.testFinished ? display =  <UnitTestResultsBox incorrectQuestionsList={props.incorrectQuestionsList}unitTestScore={props.unitTestScore} unitTestLength={props.unitTestLength} selectedUnit={props.selectedUnit} courseInfo={props.courseInfo} resetTest={props.resetTest}></UnitTestResultsBox> : display = <><UnitOverviewHeadline
  isMobile={props.isMobile}
  text={`Unit ${unit} - Practice Test`}
></UnitOverviewHeadline>
<Message
  ref={forwardedRef}
  visibility={props.unansweredQuestions === true ? "visible" : "hidden"}
  padding={
    props.unansweredQuestions === true && props.isMobile
      ? "0.25rem 0rem 1rem 0rem"
      : props.unansweredQuestions === true
      ? "0rem 0rem 2.5rem 0rem"
      : "0rem"
  }
  fontSize={
    props.unansweredQuestions && props.isMobile === true
      ? "4.5vw"
      : props.unansweredQuestions === true
      ? "2vw"
      : "0vw"
  }
>
  Reminder: <span>Answer all questions before submitting</span>
</Message><GridContainer width="100%">
  <Form>
    <GridRow>{mappedTestQuestions}</GridRow>
  </Form>
</GridContainer>
<PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
<SubmitButton
    unitTestScore={props.unitTestScore}
    tallyScore={props.tallyScore}
  ></SubmitButton></> 
}

  return (
    <>
      
      
      {display}
        
      
    </>
  );
};

export default UnitPracticeTest;
