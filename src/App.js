import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>
        <p>
          Couter: <span>{count}</span>
        </p>
        <button onClick={handleIncre}>Incr</button>
      </div>
    </React.Fragment>
  );

  function handleIncre() {
    setCount(count + 1);
  }
}

export default App;
