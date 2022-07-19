import ChangeUnitButton from "../Elements/ChangeUnitButton";
import { ChangeUnit } from "../Elements/styles/ChangeUnitButton.styled";
import SubmitButton from "../Elements/SubmitButton";
import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";
import AdditionalResources from "../Subcomponents/AdditionalResources";
import PPTFileList from "../Subcomponents/PPTFileList";
import UnitConceptList from "../Subcomponents/UnitConceptList";
import UnitPracticeTest from "../Subcomponents/UnitPracticeTest";

import { PaddingTop } from "./styles/Containers.styled";

const UnitOverviewPage = (props) => {
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
      <UnitOverviewHeadline
        text={`Unit ${unit} - Lesson Materials`}
      ></UnitOverviewHeadline>
      <PPTFileList
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></PPTFileList>
      <PaddingTop></PaddingTop>
      <UnitOverviewHeadline text="Unit Concepts"></UnitOverviewHeadline>
      <UnitConceptList
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></UnitConceptList>
      <PaddingTop></PaddingTop>
      <UnitOverviewHeadline text="Additional Resources"></UnitOverviewHeadline>
      <AdditionalResources
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></AdditionalResources>
      <PaddingTop></PaddingTop>

      <UnitPracticeTest
        tallyScore={props.tallyScore}
        resetTest={props.resetTest}
        unansweredQuestions={props.unansweredQuestions}
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
