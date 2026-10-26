import { useMemo, useState } from "react";
import "./App.css";

function expensiveTask(num) {
  console.log("Inside Expensive Task");
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expensiveValue = useMemo(() => expensiveTask(input), [input]);
  // Note: useMemo only remembers the result for the most recent dependencies (the last input), not a history of all previous inputs. If input changes from 5 to 8 and then back to 5, it recalculates for 5 again instead of reusing the old result.
  return (
    <div className="container">
      <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <div className="count">count: {count}</div>
      <input
        type="number"
        name="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <div>Expensive Value is: {expensiveValue}</div>
    </div>
  );
}

export default App;
