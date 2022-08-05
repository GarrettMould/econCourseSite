import { StyledSubmitButton } from "./styles/Buttons.styled";
import { FlexRow } from "../Components/styles/FlexContainers.styled";
const TakePracticeTestButton = (props) => {
  return (
    <FlexRow justifyContent="center">
      <StyledSubmitButton onClick={props.tallyScore}>Unit Practice Test &nbsp; &rarr;</StyledSubmitButton>
    </FlexRow>
  );
};

export default TakePracticeTestButton;
