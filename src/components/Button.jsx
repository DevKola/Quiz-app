/* eslint-disable react/prop-types */
function Button({ dispatch, answer, index, numQuestions }) {
  const hasAnswer = answer !== null;

  if (index < numQuestions - 1)
    return (
      <>
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="bg-purple-700 hover:bg-purple-400 text-white py-3 rounded-md"
          disabled={!hasAnswer}
        >
          {!answer && "Submit Answer"}
          {answer && "Next Question"}
        </button>

        {/* {noAnswer === false && (
          <p className="flex items-center justify-center gap-3 text-red-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#EE5454"
                  d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
                />
              </svg>
            </span>
            Please select an answer
          </p>
        )} */}
      </>
    );

  if (index === numQuestions - 1)
    return (
      <>
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="bg-purple-700 hover:bg-purple-400 text-white py-3 rounded-md"
          disabled={!hasAnswer}
        >
          {!answer && "Submit Answer"}
          {answer && "Finish"}
        </button>

        {/* {noAnswer && (
          <p className="flex items-center justify-center gap-3 text-red-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#EE5454"
                  d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
                />
              </svg>
            </span>
            Please select an answer
          </p>
        )} */}
      </>
    );
}

export default Button;
