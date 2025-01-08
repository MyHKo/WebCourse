import {useEffect, useState, useContext, useReducer} from "react";
import React from "react"

const ColorContext = React.createContext();
const initialCounter = {
    counter: 0
}

const initialColor = {
    color: "green"
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

const colorReducer = (state, action) => {
    if(action.type === "SET"){
        return {
            ...state,
            color: action.color
        }
    }
}

function App() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Beep");
    const [inputValue, setInputValue] = useState("");
    const [color, setColor] = useState("green");
    const [counterState, dispatch] = useReducer(counterReducer, initialCounter);
    const [colorState, colorDispatch] = useReducer(colorReducer, initialColor)


    useEffect(() => {
     console.log("counter", counter);
     return () => {
         console.log("cleaning up");
     };
    }, [counterState]);

  return (
      <ColorContext.Provider value={{
          colorState: colorState,
          colorDispatch: colorDispatch
      }}>
      <div>
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
              if(colorState.color === "green"){
                  colorDispatch({type: "SET", color:"blue"})
              } else {
                  colorDispatch({type: "SET", color: "green"})
              }
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

          <Child/>

      </div>
    </ColorContext.Provider>
  )
}

function Child() {
    const { colorState } = useContext(ColorContext)
    return (
        <h1 style={{ color: colorState.color }}>Child Header</h1>
    )
}

export default App
