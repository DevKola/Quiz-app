/* eslint-disable react/prop-types */
function Options({ questions, dispatch, answer, selectedOption }) {
  const hasAnswer = answer !== null;

  return (
    <div className="flex flex-col gap-5 md:w-full">
      {questions?.options.map((option, i) => (
        <button
          className={`group w-full border-2 border-transparent md:border-2 md:border-transparent bg-white flex items-center justify-between py-2 px-4 rounded-md shadow-lg hover:border-2 hover:border-purple-700 duration-300 ${
            hasAnswer &&
            answer === selectedOption?.at(0) &&
            i === selectedOption?.at(1) &&
            "border-green-700 md:border-green-700 "
          } ${
            hasAnswer &&
            answer !== selectedOption?.at(0) &&
            i === selectedOption?.at(1) &&
            "border-red-700 md:border-red-700"
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: [option, i] })}
          disabled={hasAnswer}
        >
          <div className="flex items-center gap-5">
            <span
              className={`bg-gray-100 py-2 px-3 text-slate-700 group-hover:bg-purple-700 group-hover:text-white duration-300 font-normal rounded-md
                ${
                  hasAnswer &&
                  answer === selectedOption?.at(0) &&
                  i === selectedOption?.at(1) &&
                  "bg-green-700 text-white"
                } ${
                hasAnswer &&
                answer !== selectedOption?.at(0) &&
                i === selectedOption?.at(1) &&
                "bg-red-700 text-white"
              }
                `}
            >
              {i === 0 && "A"}
              {i === 1 && "B"}
              {i === 2 && "C"}
              {i === 3 && "D"}
            </span>
            <span className="text-xl text-start">{option}</span>
          </div>

          <div>
            {hasAnswer &&
              answer === selectedOption?.at(0) &&
              i === selectedOption?.at(1) && (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="#26D782"
                      d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"
                    />
                  </svg>
                </span>
              )}

            {hasAnswer &&
              answer !== selectedOption?.at(0) &&
              i === selectedOption?.at(1) && (
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
              )}
          </div>
        </button>
      ))}
    </div>
  );
}

export default Options;
