import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ContainerPadded } from "../Components/styles/Containers.styled";
import Header from "../Components/Header";
import CourseOverviewHeadline from "../Elements/CourseOverviewHeadline";
import AllUnitsView from "../Components/AllUnitsView";

import { courseInformation } from "../CourseInformation";
import UnitPageHeadline from "../Elements/UnitPageHeadline";
import DropDownButton from "../Elements/DropDownButton";

const App = (props) => {
  const [courseInfo, setCourseInfo] = useState(courseInformation);
  return (
    <div>
      <ContainerPadded>
        <Header></Header>
        <CourseOverviewHeadline></CourseOverviewHeadline>
        <AllUnitsView courseInfo={courseInfo}></AllUnitsView>
        <DropDownButton></DropDownButton>
        <UnitPageHeadline text="Lesson Materials"></UnitPageHeadline>
      </ContainerPadded>
    </div>
  );
};

export default App;
