import { PPTList, ListItem } from "./styles/PPTFileList.styled";
const PPTFileList = (props) => {
  //Isolate the unitLessons array from the selected unit
  let unitLessons = props.courseInfo[props.selectedUnit].unitLessons;

  //For each lesson in the unitLessons array, return a list item with a link to the PPT file
  const mappedUnitLessons = unitLessons.map((lesson, i) => {
    //Set the bullet color and link color dynamically, based on the sub-topic of the lesson
    var bulletColor;
    if (lesson.subtopic == 1) {
      bulletColor = "#FFC300";
    } else if (lesson.subtopic == 2) {
      bulletColor = "#03FF06";
    } else if (lesson.subtopic == 3) {
      bulletColor = "#FF03F3";
    } else if (lesson.subtopic == 4) {
      bulletColor = "#032AFF";
    } else if (lesson.subtopic == 0) {
      bulletColor = "#FF0303";
    } else {
      bulletColor = "#121212";
    }
    console.log(bulletColor);
    return (
      <ListItem bulletColor={bulletColor}>
        <a href="#">{lesson.name}</a>
      </ListItem>
    );
  });
  return <PPTList>{mappedUnitLessons}</PPTList>;
};

export default PPTFileList;
