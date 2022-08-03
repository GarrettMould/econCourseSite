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
} from "./styles/UnitPracticeTest.styled";

import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";

import { PaddingTop } from "../Components/styles/Containers.styled";

import SubmitButton from "../Elements/SubmitButton";

import UnitTestResultsBox from "./UnitTestResultsBox";

const UnitPracticeTest = ({ forwardedRef, ...props }) => {
  let testQuestions = props.courseInfo[props.selectedUnit].unitPracticeTest;

  var unit = props.courseInfo[props.selectedUnit].unitNumber;

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
        <Form.Group>
          <QuestionCard
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            className="questionCard"
            key={question.questionNumber}
            id={question.questionNumber}
          >
            <QuestionAnswerContainer>
              <QuestionText>
                {question.questionNumber})&nbsp;{question.questionText}
              </QuestionText>

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
              </InputGroup>
            </QuestionAnswerContainer>
          </QuestionCard>
        </Form.Group>
      </GridColumn>
    );
  });

  return (
    <>
      <UnitOverviewHeadline
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
            ? "0.5rem 0rem 1.5rem 0rem"
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
      </Message>
      <GridContainer width="100%">
        <Form>
          <GridRow>{mappedTestQuestions}</GridRow>
        </Form>
      </GridContainer>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      {props.testFinished ? <Link style={{ textDecoration: "none" }} to="/UnitTestResults">
        <SubmitButton
          unitTestScore={props.unitTestScore}
          tallyScore={props.tallyScore}
        ></SubmitButton>
      </Link> : <SubmitButton
          unitTestScore={props.unitTestScore}
          tallyScore={props.tallyScore}
        ></SubmitButton>}
      
    </>
  );
};

export default UnitPracticeTest;
