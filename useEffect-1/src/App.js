import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("b4 handler", count);
    setCount((counter) => counter + 1); //counter is the prev value b4 updation
    console.log("after handler", count);
  }
  useEffect(() => {
    console.log("after render", count);
  }, []);
  console.log("before render", count);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

//TANAYS
// export default function App() {
//   const [counter, setCounter] = useState(0);

//   function clickHandler() {
//     console.log("from handler", counter);
//     setCounter((count) => count + 1);
//     console.log("from handler 2", counter);
//   }

//   useEffect(() => {
//     console.log("after render", counter);
//   });

//   console.log("just before the render", counter);
//   return (
//     <div className="App">
//       <h1 className="app-header">{counter}</h1>
//       <button onClick={clickHandler}>+</button>
//     </div>
//   );
// }
