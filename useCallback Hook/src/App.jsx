import { useCallback, useState } from "react";
import "./App.css";
import ChildComp from "./components/ChildComp";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count => count + 1);
  }, []);
  // },[count]); new functio reference created on every count change

  return (
    <div>
      <div>count : {count}</div>
      <br />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />
      <div>
        <ChildComp buttonName="Click Me" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
