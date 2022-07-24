import ChangeUnitButton from "../Elements/ChangeUnitButton";
import { ChangeUnit } from "../Elements/styles/ChangeUnitButton.styled";
import SubmitButton from "../Elements/SubmitButton";
import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";
import AdditionalResources from "../Subcomponents/AdditionalResources";
import AdditionalResourcesMobile from "../Subcomponents/AdditionalResourcesMobile";

import PPTFileList from "../Subcomponents/PPTFileList";
import UnitConceptList from "../Subcomponents/UnitConceptList";
import UnitPracticeTest from "../Subcomponents/UnitPracticeTest";

import { PaddingTop } from "./styles/Containers.styled";

const UnitOverviewPage = ({ forwardedRef, ...props }) => {
  var unit = props.courseInfo[props.selectedUnit].unitNumber;

  return (
    <>
      <PaddingTop></PaddingTop>
      {props.selectedUnit >= 1 ? (
        <ChangeUnitButton
          type="previous"
          changeUnit={props.changeUnit}
          selectedUnit={props.selectedUnit}
          courseInfo={props.courseInfo}
        ></ChangeUnitButton>
      ) : (
        <div></div>
      )}
      {props.selectedUnit <= 2 ? (
        <ChangeUnitButton
          type="next"
          changeUnit={props.changeUnit}
          selectedUnit={props.selectedUnit}
          courseInfo={props.courseInfo}
        ></ChangeUnitButton>
      ) : (
        <div></div>
      )}
      <PaddingTop></PaddingTop>
      <PaddingTop></PaddingTop>
      <PaddingTop></PaddingTop>
      <UnitOverviewHeadline
        isMobile={props.isMobile}
        text={`Unit ${unit} - Lesson Materials`}
      ></UnitOverviewHeadline>
      <PPTFileList
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></PPTFileList>
      <PaddingTop></PaddingTop>
      <UnitOverviewHeadline
        isMobile={props.isMobile}
        text="Unit Concepts"
      ></UnitOverviewHeadline>
      <UnitConceptList
        isMobile={props.isMobile}
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></UnitConceptList>
      <PaddingTop></PaddingTop>
      <PaddingTop></PaddingTop>
      <PaddingTop></PaddingTop>
      <UnitOverviewHeadline
        isMobile={props.isMobile}
        text="Additional Resources"
      ></UnitOverviewHeadline>
      {props.isMobile ? (
        <AdditionalResourcesMobile
          isMobile={props.isMobile}
          selectedUnit={props.selectedUnit}
          courseInfo={props.courseInfo}
        ></AdditionalResourcesMobile>
      ) : (
        <AdditionalResources
          isMobile={props.isMobile}
          selectedUnit={props.selectedUnit}
          courseInfo={props.courseInfo}
        ></AdditionalResources>
      )}

      <PaddingTop></PaddingTop>
      <PaddingTop></PaddingTop>
      <PaddingTop></PaddingTop>
      <UnitPracticeTest
        isMobile={props.isMobile}
        forwardedRef={forwardedRef}
        tallyScore={props.tallyScore}
        resetTest={props.resetTest}
        unansweredQuestions={props.unansweredQuestions}
        incorrectQuestionsList={props.incorrectQuestionsList}
        unitTestLength={props.unitTestLength}
        unitTestScorePerc={props.unitTestScorePerc}
        unitTestScore={props.unitTestScore}
        testFinished={props.testFinished}
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></UnitPracticeTest>
    </>
  );
};

export default UnitOverviewPage;
