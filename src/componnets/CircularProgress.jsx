import React from "react";

const CircularProgress = ({ progress }) => {
  const calculateDashOffset = () => {
    const circumference = 2 * Math.PI * 70;
    return circumference - (circumference * progress) / 100;
  };

  return (
    <svg className="-rotate-90 h-48 w-48">
      <circle
        r="70"
        cx="90"
        cy="90"
        className="fill-transparent stroke-[#2f3554] stroke-[8px]"
      ></circle>
      <circle
        r="70"
        cx="90"
        cy="90"
        className="border-none fill-transparent stroke-[#ffffff15] stroke-[10px] "
        style={{
          strokeDasharray: "135px",
          strokeDashoffset: calculateDashOffset(),
        }}
      ></circle>
    </svg>
  );
};

export default CircularProgress;
