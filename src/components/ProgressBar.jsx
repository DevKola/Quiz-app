/* eslint-disable react/prop-types */
function ProgressBar({ numQuestions, index, answer }) {
  return (
    <div>
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
        size="md"
        color="red"
        className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-purple-700 [&::-moz-progress-bar]:bg-purple-700 w-full h-2"
      />
    </div>
  );
}

export default ProgressBar;
