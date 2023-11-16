// LapList.js
import React from "react";

const LapList = ({ laps }) => {
  const formatTime = milliseconds => {
    const totalMilliseconds = milliseconds;
    const totalSeconds = Math.floor(totalMilliseconds / 60);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="w-full px-4 mt-5 overflow-y-auto no-scrollbar">
      <div className="flex gap-3 flex-col ">
        {laps.map((lap, index) => (
          <p
            className="bg-[#383e60] p-2 rounded-[1rem] flex justify-between px-10 text-[#fff]"
            key={index}
          >
            <span className=" text-[#757575]">Lap {index + 1}</span>
            <span>{formatTime(lap)}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LapList;
