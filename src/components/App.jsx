import { useEffect, useReducer, useState } from "react";
import "../App.css";

import Header from "./Header";
import LightDarkMode from "./LightDarkMode";
import Main from "./Main";
import Title from "./Title";
import Topics from "./Topics";
import Error from "./Error";
import Loader from "./Loader";
import Questions from "./Questions";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  getTopic: [],
  status: "loading",
  index: 0,
  answer: null,
  selectedOption: null,
  noAnswer: true,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, getTopic: action.payload, status: "active" };
    case "newAnswer":
      return {
        ...state,
        selectedOption: action.payload,
        answer: state.getTopic.at(0)?.questions.at(state.index)?.answer,
        // points:
        //   state.selectedOption?.at(0) === state.answer
        //     ? state.points + 1
        //     : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        selectedOption: null,
        noAnswer: false,
        points:
          state.selectedOption?.at(0) === state.answer
            ? state.points + 1
            : state.points,
      };

    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      break;
  }
}

function App() {
  const [
    {
      questions,
      status,
      index,
      getTopic,
      answer,
      selectedOption,
      points,
      noAnswer,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [toggleMode, setToggleMode] = useState(false);

  function handleToggle() {
    setToggleMode((toogle) => !toogle);
  }

  const numQuestions = getTopic.at(0)?.questions.length;

  useEffect(function () {
    fetch(`http://localhost:8000/quizzes`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      // eslint-disable-next-line no-unused-vars
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  function handleInput(inputEl) {
    if (!inputEl) return;
    dispatch({
      type: "start",
      payload: questions.filter((quizz) => quizz?.title === inputEl),
    });
  }

  console.log(getTopic.at(0));

  return (
    <div
      className={`w-full flex flex-col gap-1 ${
        toggleMode ? "bg-mobile-bg-dark" : "bg-mobile-bg-light"
      } bg-cover px-5 py-8  ${
        toggleMode ? "md:bg-tablet-bg-dark" : "md:bg-tablet-bg-light"
      }  md:bg-left-top ${
        toggleMode ? "lg:bg-desktop-bg-dark" : "lg:bg-desktop-bg-light"
      }  object-cover lg:h-screen h-fit  ${
        toggleMode ? "bg-[#313E51]" : "bg-white"
      }`}
    >
      <Header>
        <Title questions={getTopic.at(0)} toggleMode={toggleMode} />
        <LightDarkMode toggleMode={toggleMode} onToggle={handleToggle} />
      </Header>
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Topics
            onInput={handleInput}
            dispatch={dispatch}
            questions={questions}
            toggleMode={toggleMode}
          />
        )}

        {status === "active" && (
          <Questions
            questions={getTopic.at(0)?.questions?.at(index)}
            dispatch={dispatch}
            answer={answer}
            numQuestions={numQuestions}
            selectedOption={selectedOption}
            index={index}
            noAnswer={noAnswer}
            toggleMode={toggleMode}
          />
        )}
      </Main>
      {status === "finished" && (
        <FinishScreen
          numQuestions={numQuestions}
          questions={getTopic.at(0)}
          points={points}
          dispatch={dispatch}
          toggleMode={toggleMode}
        />
      )}
    </div>
  );
}

export default App;
