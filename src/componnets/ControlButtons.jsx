// ControlButtons.js
import React from "react";

const ControlButtons = ({
  isRunning,
  startStopHandler,
  lapHandler,
  resetHandler,
}) => {
  return (
    <div className="flex justify-around w-full">
      <button
        className=" p-[0.2rem]  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-[#fff] rounded-[1rem] flex justify-center items-center "
        onClick={startStopHandler}
      >
        <div className=" h-full w-full bg-[#2f3554] px-8 py-1 rounded-[1rem] flex justify-center items-center">
          {isRunning ? "Stop" : "Start"}
        </div>{" "}
      </button>
      <button
        className=" p-[0.2rem]  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-[#fff] rounded-[1rem] flex justify-center items-center "
        onClick={lapHandler}
        disabled={!isRunning}
      >
        <div className=" h-full w-full bg-[#2f3554] px-8 py-1 rounded-[1rem] flex justify-center items-center">
          Lap
        </div>
      </button>
      <button
        className=" p-[0.2rem]  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-[#fff] rounded-[1rem] flex justify-center items-center "
        onClick={resetHandler}
      >
        <div className=" h-full w-full bg-[#2f3554] px-8 py-1 rounded-[1rem] flex justify-center items-center">
          Reset
        </div>
      </button>
    </div>
  );
};

export default ControlButtons;
