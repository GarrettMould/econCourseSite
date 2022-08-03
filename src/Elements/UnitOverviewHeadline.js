import { Headline } from "./styles/Headlines.styled";
import { FlexRow } from "../Components/styles/FlexContainers.styled";
const UnitOverviewHeadline = (props) => {
  return (
    <FlexRow
      justifyCotent="center"
      alignItems="center"
      width="100%"
      padding={props.isMobile ? "3% 0% 6% 0%" : "3% 0% 2% 0%"}
    >
      <Headline fontSize={props.isMobile ? "7vw" : "3vw"}>
        {props.text}
      </Headline>
    </FlexRow>
  );
};

export default UnitOverviewHeadline;
