import { Headline } from "./styles/Headlines.styled";
import { FlexRow } from "../Components/styles/FlexContainers.styled";

const CourseOverviewHeadline = (props) => {
  return (
    <FlexRow
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding="5% 0% 3% 0%"
    >
      <Headline fontSize={props.isMobile ? "6vw" : "4vw"}>
        Course Overview
      </Headline>
    </FlexRow>
  );
};

export default CourseOverviewHeadline;
