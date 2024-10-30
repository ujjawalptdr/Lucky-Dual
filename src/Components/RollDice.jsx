// import React, { useState } from "react";

// const RollDice = ({ currentDice, rollDice }) => {
//   return (
//     <div className="flex flex-col items-center mt-10 md:mt-5 lg:mt-0">
//       <div onClick={rollDice}>
//         <img
//           src={`/images/dice${currentDice}.png`}
//           alt={`dice_${currentDice}`}
//           className="h-36 sm:h-44 md:h-48 "
//         />
//       </div>
//       <p className="font-medium text-lg sm:text-xl pt-4">
//         Click on Dice to roll
//       </p>
//     </div>
//   );
// };

// export default RollDice;

import React, { useState } from "react";
import "../Styles/RollDice.css";

const DiceRoller = ({ currentDice, rollDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleRollDice = () => {
    setIsRolling(true);
    rollDice(); // Assuming this function updates `currentDice`

    // Remove the rolling class after the animation ends
    setTimeout(() => {
      setIsRolling(false);
    }, 500); // Match this duration to your animation duration
  };

  return (
    <div className="flex flex-col items-center mt-10 md:mt-5 lg:mt-0">
      <div onClick={handleRollDice}>
        <img
          src={`/images/dice${currentDice}.png`}
          alt={`dice_${currentDice}`}
          className={`h-36 sm:h-44 md:h-48 ${
            isRolling ? "rolling" : ""
          } cursor-pointer`}
        />
      </div>
      <p className="font-medium text-lg sm:text-xl pt-4">
        Click on Dice to roll
      </p>
    </div>
  );
};

export default DiceRoller;
