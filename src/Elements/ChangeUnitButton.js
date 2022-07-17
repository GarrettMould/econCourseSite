import { ChangeUnit } from "./styles/ChangeUnitButton.styled";

const ChangeUnitButton = (props) => { 

    console.log(props.courseInfo[props.selectedUnit].unitBorderColor)
    return ( 
        (props.type == "previous" ? <ChangeUnit type="previous" color={props.courseInfo[props.selectedUnit].unitBorderColor}><a href="#">&larr; Previous Unit</a></ChangeUnit> : <ChangeUnit type="next" color={props.courseInfo[props.selectedUnit].unitBorderColor}><a href="#">Next Unit &rarr;</a></ChangeUnit>)
    )
};

export default ChangeUnitButton; 

