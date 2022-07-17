import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { InputGroup } from "react-bootstrap";

const DropDownButton = (props) => {
  return (
    <InputGroup>
      <DropdownButton
        variant="outline-secondary"
        title="Unit"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="#">Unit 1</Dropdown.Item>
        <Dropdown.Item href="#">Unit 2</Dropdown.Item>
        <Dropdown.Item href="#">Unit 3</Dropdown.Item>
        <Dropdown.Item href="#">Unit 4</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
};

export default DropDownButton;
