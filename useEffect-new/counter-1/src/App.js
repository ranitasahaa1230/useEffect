import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("after render", counter);
  }, []);
  console.log("just b4 the render", counter);

  function increment() {
    console.log("from increment", counter);
    setCounter((count) => count + 1);
    console.log("after increment", counter);
  }
  function decrement() {
    setCounter((count) => count - 1);
    console.log("from decrement", counter);
  }

  // const counterFunc = (operation) => {
  //   if(operation==="add"){
  //     setCounter((prev) => prev + 1);
  //   }else if(operation==="subtract"){
  //     setCounter((prev) => prev - 1);
  //   }
  // };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {/* <button onClick={() => counterFunc(add)}>+</button>
      <button onClick={() => counterFunc(subtract)}>-</button> */}
    </div>
  );
}

// export default function App() {
//   const [counter, setCounter] = useState(0)

//   useEffect(() => {
//     console.log('from useEffect...', counter)
//   })

//   function incrementClickHandler() {
//     setCounter((counter) => {
//       console.log('from click handler...', counter)
//       return counter + 1
//     })
//   }

//   console.log('before render...', counter)

// initial: b4 render,0 ; from useEffect...,0;
// after click:from clickhandler, 0; b4 render,1 ; from useEffect...,1;

//   return (
//     <div className='App'>
//       <h1>{counter} </h1>
//       <button onClick={incrementClickHandler}>Increment </button>
//     </div>
//   )
// }
