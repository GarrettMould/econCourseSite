import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ContainerPadded } from "../Components/styles/Containers.styled";
import BannerTop from "../Elements/BannerTop";
import Header from "../Components/Header";
import AllUnitsPage from "../Components/AllUnitsPage";
import UnitOverviewPage from "../Components/UnitOverviewPage";

import { courseInformation } from "../CourseInformation";

const App = (props) => {
  const [courseInfo, setCourseInfo] = useState(courseInformation);
  const [selectedUnit, setSelectedUnit] = useState(2);
  const [unitTestLength, setUnitTestLength] = useState(0);
  const [unitTestScore, setUnitTestScore] = useState(0);
  const [unitTestScorePerc, setUnitTestScorePerc] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState(false);

  // Function to change the selected unit
  const changeUnit = (e) => {
    console.log(e.currentTarget);
    e.preventDefault();
    e.currentTarget.id == "previous"
      ? setSelectedUnit(selectedUnit - 1)
      : setSelectedUnit(selectedUnit + 1);
  };

  // Change unit from main page (will need to add react router)
  const changeUnitMainPage = (e) => {
    var id = e.currentTarget.id;
    console.log(id);

    if (id == "1") {
      setSelectedUnit(0);
    } else if (id == "2") {
      setSelectedUnit(1);
    } else if (id == "3") {
      setSelectedUnit(2);
    } else if (id == "4") {
      setSelectedUnit(3);
    } else {
      setSelectedUnit(0);
      alert("Error");
    }
  };

  // Function to determine which questions are unanswered and add a red border to them
  const selectUnanswered = () => {
    var checkbox = document.querySelector(".option:checked");

    console.log(checkbox);

    var questionCard = document.querySelectorAll(".questionCard");

    console.log(questionCard);

    questionCard.forEach((q) => {
      console.log(q.children);
      if (q.hasChildNodes(checkbox)) {
        q.classList.add("redBorder");
      } else {
        console.log("blah");
      }
    });
  };

  selectUnanswered();

  // Function to calculate the total score on submission of test (loops through all of the checked radio buttons and determines whether the value is true or false)

  const tallyScore = () => {
    var questionsLength = courseInfo[selectedUnit].unitPracticeTest.length;

    setUnitTestLength(questionsLength);

    // Add a feature that identifies the incorrect or unanswered questions

    var question = document.querySelectorAll(".option:checked");

    var unanswered = document.querySelectorAll(
      "input[type=radio]:not(:checked)"
    );

    console.log(question);

    console.log(unanswered);

    let localScore = unitTestScore;

    if (question.length == questionsLength) {
      question.forEach((q) => {
        if (q.value == "true") {
          localScore = localScore + 1;
        }

        setUnitTestScore(localScore);
        setTestFinished(true);
      });
    } else {
      setUnansweredQuestions(true);
    }
  };

  // Function to reset test score and all related variables

  const resetTest = () => {
    setUnansweredQuestions(false);
    setTestFinished(false);
    setUnitTestScore(0);
    setUnitTestLength(0);
    setUnitTestScorePerc(0);

    var questionCard = document.querySelectorAll(".questionCard");

    questionCard.classList.remove("redBorder");
  };

  return (
    <div>
      <BannerTop text="This is NOT the official course website. Visit the Edmentum site for further information"></BannerTop>
      <ContainerPadded>
        <Header></Header>
        <AllUnitsPage
          changeUnitMainPage={changeUnitMainPage}
          courseInfo={courseInfo}
        ></AllUnitsPage>
        <UnitOverviewPage
          tallyScore={tallyScore}
          changeUnit={changeUnit}
          resetTest={resetTest}
          unansweredQuestions={unansweredQuestions}
          unitTestLength={unitTestLength}
          unitTestScorePerc={unitTestScorePerc}
          unitTestScore={unitTestScore}
          testFinished={testFinished}
          selectedUnit={selectedUnit}
          courseInfo={courseInfo}
        ></UnitOverviewPage>
      </ContainerPadded>
    </div>
  );
};

export default App;
