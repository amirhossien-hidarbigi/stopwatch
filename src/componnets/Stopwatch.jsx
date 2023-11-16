// Stopwatch.js
import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import LapList from "./LapList";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startStopHandler = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const lapHandler = () => {
    setLaps(prevLaps => [...prevLaps, time]);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  return (
    <div className="w-full h-[100vh] bg-[#383e60] flex justify-center items-center">
      <div className="w-[27rem] h-[40rem] bg-[#2f3554] rounded-[30px] flex items-center shadow  flex-col p-4">
        <div className="relative w-[200px] h-[200px] mb-4">
          <CircularProgress progress={(time / 1000) * 100} />
          <Timer time={time} />
        </div>

        <ControlButtons
          isRunning={isRunning}
          startStopHandler={startStopHandler}
          lapHandler={lapHandler}
          resetHandler={resetHandler}
        />
        <LapList laps={laps} />
      </div>
    </div>
  );
};

export default Stopwatch;
