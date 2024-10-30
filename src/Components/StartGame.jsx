import React from "react";
import { Button } from "./Button";

const StartGame = ({ toggle }) => {
  return (
    <div className="max-w-[1245px] m-auto h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 p-6 lg:p-0">
      <div className="w-52 h-52 lg:w-auto lg:h-auto mb-4 lg:mb-0 flex-shrink-0">
        <img
          src="/images/dicesLogo.png"
          alt="dice logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight lg:leading-[6rem]">
          LUCKY DUAL
        </h1>
        <div className="w-full flex justify-center lg:justify-end">
          <Button text="Play Now" onClick={toggle} />
        </div>
      </div>
    </div>
  );
};

export default StartGame;
