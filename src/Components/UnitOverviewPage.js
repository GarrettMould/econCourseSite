import DropDownButton from "../Elements/DropDownButton";
import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";
import PPTFileList from "../Subcomponents/PPTFileList";

const UnitOverviewPage = (props) => {
  return (
    <>
      <DropDownButton></DropDownButton>
      <UnitOverviewHeadline text="Lesson Materials"></UnitOverviewHeadline>
      <PPTFileList
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></PPTFileList>
    </>
  );
};

export default UnitOverviewPage;
