import React from "react";

export const Button = ({ text, onClick, isOutline }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-[200px] lg:max-w-[240px] py-2 px-4 text-base rounded-md 
    transition-transform duration-200 ease-in-out active:scale-95 
    hover:scale-105 md:hover:scale-110 
    ${
      isOutline
        ? "bg-transparent text-black border border-black hover:bg-black hover:text-white"
        : "bg-black text-white border border-transparent hover:border-black hover:bg-white hover:text-black"
    }
    hover:shadow-lg`}
    >
      {text}
    </button>
  );
};
