import { Headline } from "./styles/Headlines.styled";
import { FlexRow } from "../Components/styles/FlexContainers.styled";
const UnitPageHeadline = (props) => {
  return (
    <FlexRow
      justifyCotent="center"
      alignItems="center"
      width="100%"
      padding="3% 0%"
    >
      <Headline fontSize="2.5vw">{props.text}</Headline>
    </FlexRow>
  );
};

export default UnitPageHeadline;
