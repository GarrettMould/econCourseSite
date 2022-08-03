import { Link } from "react-router-dom";

import ChangeUnitButton from "../Elements/ChangeUnitButton";
import { ChangeUnit } from "../Elements/styles/ChangeUnitButton.styled";
import SubmitButton from "../Elements/SubmitButton";
import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";
import AdditionalResources from "../Subcomponents/AdditionalResources";

import PPTFileList from "../Subcomponents/PPTFileList";
import UnitConceptList from "../Subcomponents/UnitConceptList";
import UnitPracticeTest from "../Subcomponents/UnitPracticeTest";
import TakePracticeTestButton from "../Elements/TakePracticeTestButton";

import { PaddingTop } from "./styles/Containers.styled";

const UnitOverviewPage = ({ forwardedRef, ...props }) => {
  var unit = props.courseInfo[props.selectedUnit].unitNumber;

  return (
    <>
      <PaddingTop top={props.isMobile ? "10%" : "5%"}></PaddingTop>
      <UnitOverviewHeadline
        isMobile={props.isMobile}
        text={`Unit ${unit} - Lesson Materials`}
      ></UnitOverviewHeadline>
      <PPTFileList
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></PPTFileList>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <UnitOverviewHeadline
        isMobile={props.isMobile}
        text={`Unit ${unit} - Important Concepts`}
      ></UnitOverviewHeadline>
      <UnitConceptList
        isMobile={props.isMobile}
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></UnitConceptList>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <UnitOverviewHeadline
        isMobile={props.isMobile}
        text={`Unit ${unit} - Additional Resources`}
      ></UnitOverviewHeadline>
      <AdditionalResources
        isMobile={props.isMobile}
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
      ></AdditionalResources>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <Link style={{ textDecoration: "none" }} to="/UnitTest"><TakePracticeTestButton onClick={props.resetTest}></TakePracticeTestButton></Link>
      
    </>
  );
};

export default UnitOverviewPage;
