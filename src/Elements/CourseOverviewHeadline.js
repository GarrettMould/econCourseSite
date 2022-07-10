import { Headline } from "./styles/Headlines.styled";
import { FlexRow } from "../Components/styles/FlexContainers.styled";

const CourseOverviewHeadline = (props) => {
  return (
    <FlexRow
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding="5% 0%"
    >
      <Headline fontSize="4.5vw">Course Overview</Headline>
    </FlexRow>
  );
};

export default CourseOverviewHeadline;
