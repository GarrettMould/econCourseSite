import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import { ContainerPadded } from "../Components/styles/Containers.styled";
import BannerTop from "../Elements/BannerTop";
import Header from "../Components/Header";
import Home from "../Components/Home";
import AllUnitsPage from "../Components/AllUnitsPage";
import UnitOverviewPage from "../Components/UnitOverviewPage";

import { courseInformation } from "../CourseInformation";
import AllUnitsPageMobile from "../Components/AllUnitsPageMobile";

const App = (props) => {
  const [courseInfo, setCourseInfo] = useState(courseInformation);
  const [selectedUnit, setSelectedUnit] = useState(2);
  const [unitTestLength, setUnitTestLength] = useState(0);
  const [unitTestScore, setUnitTestScore] = useState(0);
  const [unitTestScorePerc, setUnitTestScorePerc] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState(false);
  const [incorrectQuestionsList, setIncorrectQuestionsList] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const forwardedRef = useRef();

  // Event listener that runs when the window is resized and sets the deviceWidth to the current width

  useEffect(() => {
    handleWindowSizeChange();
  });

  const handleWindowSizeChange = () => {
    setDeviceWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWindowSizeChange);

  console.log(deviceWidth);

  // Variable that returns true if device width is less than 500 (use this for mobile styling)

  const isMobile = deviceWidth <= 500;

  console.log(isMobile);

  useEffect(() => {
    console.log(forwardedRef.current);
  });

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

  // Function to determine uncompleted questions on submission and highlight those questions
  const highlightUnanswered = () => {
    const questions = document.querySelectorAll(".questionCard");

    console.log(questions);

    questions.forEach((q) => {
      var inputElements = q.querySelectorAll("input:checked");
      console.log(inputElements);

      if (inputElements.length == 0) {
        const blah = q.closest(".questionCard");
        blah.classList.add("redBorder");
      } else {
        const blah = q.closest(".questionCard");
        blah.classList.remove("redBorder");
      }
    });
  };

  // Function to calculate the total score on submission of test (loops through all of the checked radio buttons and determines whether the value is true or false)

  const tallyScore = () => {
    var questionsLength = courseInfo[selectedUnit].unitPracticeTest.length;

    setUnitTestLength(questionsLength);

    var question = document.querySelectorAll(".option:checked");

    let localScore = unitTestScore;

    var incorrectQuestions = [];

    // Runs if all questions have been answered
    if (question.length == questionsLength) {
      question.forEach((q) => {
        if (q.value == "true") {
          localScore = localScore + 1;
        } else {
          //If the answer is incorrect, add that question to the list of incorrect questions
          const incorrectQuestion = q.closest(".questionCard");
          const incorrectQuestionID = q.closest(".questionCard").id;
          incorrectQuestions.push(incorrectQuestionID);
          incorrectQuestion.classList.add("red");
        }
        //Set the final score and set the test to finished (which causes resultsBox to be displayed)
        setUnitTestScore(localScore);
        setTestFinished(true);
      });

      setIncorrectQuestionsList(incorrectQuestions);

      // Run this if there are unanswered questions
    } else {
      setUnansweredQuestions(true);
      highlightUnanswered();
      forwardedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to reset test score and all related variables

  const resetTest = () => {
    setUnansweredQuestions(false);
    setIncorrectQuestionsList([]);
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
        <Header isMobile={isMobile}></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMobile={isMobile}
                changeUnitMainPage={changeUnitMainPage}
                courseInfo={courseInfo}
              ></Home>
            }
          />
          <Route
            path="/UnitOverviewPage"
            element={
              <UnitOverviewPage
                isMobile={isMobile}
                forwardedRef={forwardedRef}
                tallyScore={tallyScore}
                changeUnit={changeUnit}
                resetTest={resetTest}
                unansweredQuestions={unansweredQuestions}
                incorrectQuestionsList={incorrectQuestionsList}
                unitTestLength={unitTestLength}
                unitTestScorePerc={unitTestScorePerc}
                unitTestScore={unitTestScore}
                testFinished={testFinished}
                selectedUnit={selectedUnit}
                courseInfo={courseInfo}
              ></UnitOverviewPage>
            }
          />
        </Routes>
      </ContainerPadded>
    </div>
  );
};

export default App;
