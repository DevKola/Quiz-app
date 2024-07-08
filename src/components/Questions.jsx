/* eslint-disable react/prop-types */
import ProgressBar from "./ProgressBar";
import Button from "./Button";
import Options from "./Options";

function Questions({
  questions,
  dispatch,
  numQuestions,
  answer,
  selectedOption,
  index,
  noAnswer,
}) {
  return (
    <div className="px-5 py-14 flex flex-col md:flex-row md:justify-center md:gap-36 gap-8">
      <div className="flex flex-col gap-2">
        <p className="italic text-xs text-slate-500">
          Question <span>{index + 1}</span> / {numQuestions}
        </p>
        <h1 className="text-4xl flex flex-col tracking-wide">
          {questions?.question}
        </h1>

        <ProgressBar
          numQuestions={numQuestions}
          index={index}
          answer={answer}
        />
      </div>

      <div className="w-full md:w-12/12 flex flex-col gap-5">
        <Options
          questions={questions}
          dispatch={dispatch}
          answer={answer}
          selectedOption={selectedOption}
        />

        <Button
          dispatch={dispatch}
          answer={answer}
          index={index}
          numQuestions={numQuestions}
          selectedOption={selectedOption}
          noAnswer={noAnswer}
        />
      </div>
    </div>
  );
}

export default Questions;
