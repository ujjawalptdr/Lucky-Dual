import React from "react";

const Rules = () => {
  return (
    // <div className="flex justify-center mt-4">
    //   <div className="max-w-[720px] max-h-[200px] bg-red-100 py-4 px-6 rounded-md">
    //     <h1 className="font-semibold text-lg">How to Play</h1>
    //     <div className="text-sm mt-2 font-medium">
    //       <p>
    //         Select a <b>primary</b> and <b>backup</b> number, then roll the die:
    //       </p>
    //       <p>
    //         If it matches your <b>primary</b>, score <b>double points</b>.
    //       </p>
    //       <p>
    //         If it matches your <b>backup</b>, score <b>equal points</b>.
    //       </p>
    //       <p>
    //         If neither match, <b>lose points equal to the roll</b>.
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="flex justify-center mt-4">
      <div className="max-w-[720px] bg-red-100 py-4 px-6 rounded-md shadow-lg">
        <h1 className="font-semibold text-lg text-center sm:text-left">
          How to Play
        </h1>
        <div className="text-sm mt-2 font-medium">
          <p>
            Select a <b>primary</b> and <b>backup</b> number, then roll the die.
          </p>
          <p>
            If it matches your <b>primary</b>, you got <b>4 points</b>.
          </p>
          <p>
            If it matches your <b>backup</b>, you got <b>2 points</b>.
          </p>
          <p>
            If neither matches, <b>you will lose 2 points</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
