import { Link } from "react-router-dom";

import UnitOverviewHeadline from "../Elements/UnitOverviewHeadline";
import AdditionalResources from "../Subcomponents/AdditionalResources";

import PPTFileList from "../Subcomponents/PPTFileList";
import UnitConceptList from "../Subcomponents/UnitConceptList";
import TakePracticeTestButton from "../Elements/TakePracticeTestButton";
import AdditionalResourcesCOPY from "../Subcomponents/AdditionalResourcesCOPY";

import { PaddingTop } from "./styles/Containers.styled";

const UnitOverviewPage = ({ forwardedRef, ...props }) => {
  var unit = props.courseInfo[props.selectedUnit].unitNumber;

  return (
    <>
      <PaddingTop top={props.isMobile ? "10%" : "3%"}></PaddingTop>
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
      <PaddingTop top={props.isMobile ? "8%" : "4%"}></PaddingTop>
      <UnitOverviewHeadline
        isMobile={props.isMobile}
        text={`Unit ${unit} - Additional Resources`}
      ></UnitOverviewHeadline>
      <AdditionalResourcesCOPY isMobile={props.isMobile}
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}></AdditionalResourcesCOPY>      
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <Link style={{ textDecoration: "none" }} className={props.courseInfo[unit].unitTestUnlocked ? "enabled-link" : "disabled-link"}to="/UnitTest"><TakePracticeTestButton selectedUnit={props.selectedUnit} onClick={props.resetTest}></TakePracticeTestButton></Link>
      
    </>
  );
};

export default UnitOverviewPage;
