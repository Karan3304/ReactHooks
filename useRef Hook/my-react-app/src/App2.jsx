import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  function startTimer() {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h1>StopWatch : {time} seconds</h1>
      <button onClick={startTimer}>start</button>
      <br />
      <button onClick={stopTimer}>stop</button>
      <br />
      <button onClick={resetTimer}>reset</button>
      <br />
    </div>
  );
}

export default App;
