import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Beep");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
     console.log("counter", counter);
     return () => {
         console.log("Clearing everything up")
     };
    }, []);

  return (
      <>
          <div>{name} {counter}</div>
          <br/>
          <button onClick={() => setCounter((prevState) => {
              return prevState + 1
          })}>Add One
          </button>
          <br/>
          <input type={"text"} value={inputValue} onChange={(event) => {
              setInputValue(event.target.value)
          }}/>
          <br/>
          <button onClick={() => {
              setName(inputValue)
          }}>Enter
          </button>
      </>
  )
}


export default App
