import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  let btnRef = useRef();
  function handleIncreament() {
    setCount(count + 1);
    val.current = val.current + 1;
    console.log("valie of val is : ", val);
  }

  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  useEffect(() => {
    console.log("Rendered again...!");
  }, []);

  return (
    <div>
      <button ref={btnRef} className="counter" onClick={handleIncreament}>
        Increment
      </button>
      <br />

      <button  onClick={changeColor}>
        Change color of first button
      </button>

      <div>count:{count}</div>
    </div>
  );
}

export default App;
