import Header from "./Header";
import AllUnitsPage from "./AllUnitsPage";
import AllUnitsPageMobile from "./AllUnitsPageMobile";
const Home = (props) => {
  return (
    <>
      {props.isMobile ? (
        <AllUnitsPageMobile
          isMobile={props.isMobile}
          changeUnitMainPage={props.changeUnitMainPage}
          courseInfo={props.courseInfo}
        ></AllUnitsPageMobile>
      ) : (
        <AllUnitsPage
          isMobile={props.isMobile}
          changeUnitMainPage={props.changeUnitMainPage}
          courseInfo={props.courseInfo}
        ></AllUnitsPage>
      )}
    </>
  );
};

export default Home;
