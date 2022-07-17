import { StyledSubmitButton } from "./styles/Buttons.styled";
import { FlexRow } from "../Components/styles/FlexContainers.styled";
const SubmitButton = (props) => {
  return (
    <FlexRow justifyContent="center">
      <StyledSubmitButton>Submit</StyledSubmitButton>
    </FlexRow>
  );
};

export default SubmitButton;
