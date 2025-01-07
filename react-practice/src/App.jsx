import {useEffect, useState, useContext} from "react";
import React from "react"

const ColorContext = React.createContext();

function App() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Beep");
    const [inputValue, setInputValue] = useState("");
    const [color, setColor] = useState("green");


    useEffect(() => {
     console.log("counter", counter);
     return () => {
         console.log("clearing up");
     };
    }, [counter]);

  return (
      <>
          <div>{name} {counter}</div>
          <br/>
          <button onClick={() => {
              setCounter((prevState) => {
                return prevState + 1
              })
              if(color === "green")
                  setColor("blue")
              else
                  setColor("green")
          }}>Add One
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

          <ColorContext.Provider value={color}>
              <Child />
          </ColorContext.Provider>
      </>
  )
}

function Child() {
    const color = useContext(ColorContext)
    return (
        <h1 style={{ color }}>Child Header</h1>
    )
}

export default App
