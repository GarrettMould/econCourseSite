import DropDownButton from "../Elements/DropDownButton";
import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";
import PPTFileList from "../Subcomponents/PPTFileList";
import UnitConceptList from "../Subcomponents/UnitConceptList";

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
    </>
  );
};

export default UnitOverviewPage;
