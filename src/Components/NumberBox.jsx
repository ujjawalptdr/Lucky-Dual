import React from "react";

const NumberBox = ({ number, onClick, isSelected }) => {
  return (
    <>
      {isSelected ? (
        <div
          onClick={onClick}
          className={`w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 
                    flex justify-center items-center 
                    border-[1px] border-black 
                    bg-black text-white text-xl 
                    sm:text-xl md:text-2xl font-bold 
                    transition-transform duration-200 ease-in-out 
                    transform hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer`}
        >
          {number}
        </div>
      ) : (
        <div
          onClick={onClick}
          className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex justify-center items-center border-[1px] border-black text-xl sm:text-xl md:text-2xl font-bold transition-transform duration-200 ease-in-out 
                    transform hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
        >
          {number}
        </div>
      )}
    </>
  );
};

export default NumberBox;
