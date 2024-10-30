import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="flex flex-col items-center w-32 h-28 md:36">
      <h1 className="text-6xl md:text-8xl font-medium">{score}</h1>
      <p className="text-base md:text-xl font-medium">Total Score</p>
    </div>
  );
};

export default TotalScore;
