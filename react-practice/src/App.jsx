import {
    useEffect,
    useState,
    useContext,
    useReducer,
    useRef,
    useMemo,
    useCallback, Component
}
    from "react"
import React from "react"
import Child from "./Child.jsx";

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
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("Beep")
    const [counterState, dispatch] = useReducer(counterReducer, initialCounter)
    const [colorState, colorDispatch] = useReducer(colorReducer, initialColor)

    const nameRef = useRef(null)
    const colorRef = useRef(null)

    const counterSquareRoot = useMemo(() => {
        console.log("Square root was run")
        return Math.sqrt(counterState.counter)
    }, [counterState.counter])

    const logCounterValue = useCallback(() => {
        console.log("Call back was run")
    }, [counterState.counter])

    useEffect(() => {
     console.log("counter", counter)
     return () => {
         console.log("cleaning up")
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
                  dispatch({type: "INCREMENT"})
                  if (colorState.color === "green") {
                      colorDispatch({type: "SET", color: "blue"})
                  } else {
                      colorDispatch({type: "SET", color: "green"})
                  }
              }}>Add One
              </button>
              <br/>
              <input type={"text"} ref={nameRef}/>
              <br/>
              <button onClick={() => {
                  setName(nameRef.current.value)
              }}>Enter
              </button>
              <br/>
              <input type={"text"} ref={colorRef} placeholder={"Enter color"}/>
              <br/>
              <button onClick={() => {
                  colorDispatch({type: "SET", color: colorRef.current.value})
              }}>Enter
              </button>
              <p>{counterSquareRoot}</p>

              <Child/>

              <PureNestedComponent
              logCounterValue={logCounterValue}/>

          </div>
      </ColorContext.Provider>
  )
}

class PureNestedComponent extends React.Component {
    render() {
        this.props.logCounterValue();
        return (
            <h3>Pure Nested Component</h3>
        )
    }
}

export default App
