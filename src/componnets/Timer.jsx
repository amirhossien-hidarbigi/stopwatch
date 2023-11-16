import React from "react";

const Timer = ({ time }) => {
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
    <p className="absolute top-[45%] left-[30%] text-[#fff] ">
      {formatTime(time)}
    </p>
  );
};

export default Timer;
