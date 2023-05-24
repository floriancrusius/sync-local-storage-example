import React from "react";
import { useNumber } from "./utils/hooks";
import "./App.css";
const App = () => {
  const { number, setNumber } = useNumber();
  return (
    <div className="container">
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </div>
  );
};
export default App;
