import React, { useState } from "react";
import NumberBox from "./NumberBox";

const numArray = [1, 2, 3, 4, 5, 6];

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
  selectedNumber2,
  setSelectedNumber2,
}) => {
  const [toggleInput, setToggleInput] = useState(true);
  const [num, setNum] = useState("Primary");

  // const selectNumberHandler = (value) => {
  //   if (toggleInput) {
  //     if (value != selectedNumber && value != selectedNumber2) {
  //       setSelectedNumber(value);
  //     }
  //   } else if (value != selectedNumber) {
  //     setSelectedNumber2(value);
  //     setError("");
  //   } else {
  //     setError("Please select two Different Numbers");
  //     return;
  //   }
  //   setToggleInput((prev) => !prev);
  //   console.log(value, selectedNumber, selectedNumber2);
  // };
  const selectNumberHandler = (value) => {
    // First case: toggleInput is true, handle selection of the first number
    if (toggleInput) {
      if (value !== selectedNumber && value !== selectedNumber2) {
        setSelectedNumber(value);
        setError(""); // Clear error when valid selection
      } else {
        setError(
          "This number is already selected. Please choose a different one."
        );
        return;
      }
    } else {
      // Second case: toggleInput is false, handle selection of the second number
      if (value !== selectedNumber && value !== selectedNumber2) {
        setSelectedNumber2(value);
        setError(""); // Clear error when valid selection
      } else {
        setError("Please select two different numbers.");
        return;
      }
    }
    // Toggle the input flag after successful selection
    setToggleInput((prev) => !prev);
    setNum((prev) => {
      if (prev === "Primary") return "Backup";
      else return "Primary";
    });
  };

  return (
    <>
      <div className="flex flex-col items-end gap-4 sm:gap-5 md:gap-6">
        <p className="text-errorRed font-normal text-sm sm:text-sm md:text-base lg:text-lg">
          {error}
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-5">
          {numArray.map((value, idx) => (
            <NumberBox
              key={idx}
              number={value}
              onClick={() => selectNumberHandler(value)}
              isSelected={value === selectedNumber || value === selectedNumber2}
            />
          ))}
        </div>
        <p className="font-bold text-sm sm:text-base md:text-base lg:text-lg">
          {selectedNumber && selectedNumber2 ? (
            <>
              <span className="text-red-600">You can reselect </span>
              your{" "}
              <span className="text-red-600">
                {num}
                {/* {num === 1 ? "st" : "nd"} */}
              </span>{" "}
              Number
            </>
          ) : (
            <>
              Select your{" "}
              <span className="text-red-600">
                {num}
                {/* {num === 1 ? "st" : "nd"} */}
              </span>{" "}
              Number
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default NumberSelector;
