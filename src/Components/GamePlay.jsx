import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button } from "./Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [selectedNumber2, setSelectedNumber2] = useState(undefined);

  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateRandomeNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber || !selectedNumber2) {
      setError("You have to select any two numbers first");
      return;
    }
    setError("");

    const randomNumber = generateRandomeNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + 4);
    } else if (selectedNumber2 === randomNumber) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
    setSelectedNumber2(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setSelectedNumber2(undefined);
    setError("");
  };

  const showRulesHandler = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between px-4 lg:px-28 pt-16 pb-4">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          selectedNumber2={selectedNumber2}
          setSelectedNumber2={setSelectedNumber2}
        />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className=" flex flex-col items-center gap-2 mt-8">
        <Button text={"Reset Score"} isOutline={true} onClick={resetScore} />
        <Button
          text={showRules ? "Hide Rules" : "Show Rules"}
          onClick={showRulesHandler}
        />
      </div>
      {showRules && <Rules />}
    </>
  );
};

export default GamePlay;
