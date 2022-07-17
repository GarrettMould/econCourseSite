import { Headline } from "./styles/Headlines.styled";
import { FlexRow } from "../Components/styles/FlexContainers.styled";
const UnitOverviewHeadline = (props) => {
  return (
    <FlexRow
      justifyCotent="center"
      alignItems="center"
      width="100%"
      padding="3% 0% 1% 0%"
    >
      <Headline fontSize="3vw">{props.text}</Headline>
    </FlexRow>
  );
};

export default UnitOverviewHeadline;
