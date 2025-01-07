import {useEffect, useState, useContext, useReducer} from "react";
import React from "react"

const ColorContext = React.createContext();
const initialCounter = {
    counter: 0
}

const counterReducer = (state, action) => {
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
}

function App() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Beep");
    const [inputValue, setInputValue] = useState("");
    const [color, setColor] = useState("green");
    const [counterState, dispatch] = useReducer(counterReducer, initialCounter);


    useEffect(() => {
     console.log("counter", counter);
     return () => {
         setColor((prevState) => {
         if(prevState === "green"){
             return "blue"
         }
             return "green"
         })
     };
    }, [counterState]);

  return (
      <>
          <div>{name} {counterState.counter}</div>
          <br/>
          {/*<button onClick={() => {*/}
          {/*    setCounter((prevState) => {*/}
          {/*      return prevState + 1*/}
          {/*    })*/}
          {/*}}>Add One*/}
          {/*</button>*/}
          <button onClick={() => {
              dispatch({ type: "INCREMENT" })
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
              <Child/>
          </ColorContext.Provider>
      </>
  )
}

function Child() {
    const color = useContext(ColorContext)
    return (
        <h1 style={{color}}>Child Header</h1>
    )
}

export default App
