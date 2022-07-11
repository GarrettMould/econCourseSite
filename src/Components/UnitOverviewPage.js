import DropDownButton from "../Elements/DropDownButton";
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
      <DropDownButton></DropDownButton>
      <UnitOverviewHeadline text="Lesson Materials"></UnitOverviewHeadline>
      <PPTFileList
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></PPTFileList>
      <UnitOverviewHeadline text="Unit Concepts"></UnitOverviewHeadline>
      <UnitConceptList
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></UnitConceptList>
      <UnitOverviewHeadline text="Additional Resources"></UnitOverviewHeadline>
      <AdditionalResources
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></AdditionalResources>
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
