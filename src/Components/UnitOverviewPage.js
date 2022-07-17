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
  return (
    <>
    <PaddingTop></PaddingTop>
      <ChangeUnitButton type="previous" selectedUnit={props.selectedUnit} courseInfo={props.courseInfo}></ChangeUnitButton>
      <ChangeUnitButton type="next" selectedUnit={props.selectedUnit} courseInfo={props.courseInfo}></ChangeUnitButton>
      <PaddingTop></PaddingTop>
      <UnitOverviewHeadline text="Lesson Materials"></UnitOverviewHeadline>
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
      <UnitOverviewHeadline text="Unit Practice Test"></UnitOverviewHeadline>
      <UnitPracticeTest
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></UnitPracticeTest>
      <PaddingTop></PaddingTop>
      <SubmitButton></SubmitButton>
    </>
  );
};

export default UnitOverviewPage;
