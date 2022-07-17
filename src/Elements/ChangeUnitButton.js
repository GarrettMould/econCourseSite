import { ChangeUnit } from "./styles/ChangeUnitButton.styled";

const ChangeUnitButton = (props) => {
  return props.type == "previous" ? (
    <ChangeUnit
      id="previous"
      type="previous"
      onClick={props.changeUnit}
      color={props.courseInfo[props.selectedUnit].unitSolidColor}
    >
      <a href="#">&larr; Previous Unit</a>
    </ChangeUnit>
  ) : (
    <ChangeUnit
      id="next"
      type="next"
      onClick={props.changeUnit}
      color={props.courseInfo[props.selectedUnit].unitSolidColor}
    >
      <a href="#">Next Unit &rarr;</a>
    </ChangeUnit>
  );
};

export default ChangeUnitButton;
