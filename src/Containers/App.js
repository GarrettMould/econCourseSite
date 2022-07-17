import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ContainerPadded } from "../Components/styles/Containers.styled";
import BannerTop from "../Elements/BannerTop";
import Header from "../Components/Header";
import AllUnitsPage from "../Components/AllUnitsPage";
import UnitOverviewPage from "../Components/UnitOverviewPage";

import { courseInformation } from "../CourseInformation";

const App = (props) => {
  const [courseInfo, setCourseInfo] = useState(courseInformation);
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [selectedUnitLessons, setSelectedUnitLessons] = useState(null);

  return (
    <div>
      <BannerTop text="This is NOT the official course website. Visit the Edmentum site for further information"></BannerTop>
      <ContainerPadded>
        <Header></Header>
        <AllUnitsPage courseInfo={courseInfo}></AllUnitsPage>
        <UnitOverviewPage
          selectedUnit={selectedUnit}
          courseInfo={courseInfo}
        ></UnitOverviewPage>
      </ContainerPadded>
    </div>
  );
};

export default App;
