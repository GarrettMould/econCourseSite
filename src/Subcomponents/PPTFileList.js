import { PPTList, ListItem } from "./styles/PPTFileList.styled";
const PPTFileList = (props) => {
  //Isolate the unitLessons array from the selected unit
  let unitLessons = props.courseInfo[props.selectedUnit].unitLessons;

  

  //For each lesson in the unitLessons array, return a list item with a link to the PPT file
  const mappedUnitLessons = unitLessons.map((lesson, i) => {
    //Set the bullet color and link color dynamically, based on the sub-topic of the lesson
    var color;
    if (lesson.subtopic === 1) {
      color = "rgba(255, 195, 0, 0.25)";
    } else if (lesson.subtopic === 2) {
      color = "rgba(3, 255, 6, 0.25)";
    } else if (lesson.subtopic === 3) {
      color = "rgba(255, 3, 243, 0.25)";
    } else if (lesson.subtopic === 4) {
      color = "rgba(3, 42, 255, 0.25)";
    } else if (lesson.subtopic === 0) {
      color = "rgba(255, 3, 3, 0.25)";
    } else {
      color = "#121212";
    }
    
    
    return (
      <ListItem color={color} key={i}>
        <a href={lesson.link} target="_blank" rel="noreferrer">{lesson.name}</a>
      </ListItem>
    );
  });
  return <PPTList>{mappedUnitLessons}</PPTList>;
};

export default PPTFileList;
