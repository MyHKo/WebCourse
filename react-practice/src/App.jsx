import {
    useEffect,
    useState,
    useReducer,
    useRef,
    useMemo,
    useCallback,
    useDebugValue, useLayoutEffect,
}
    from "react"
import React from "react"
import Child from "./Child.jsx";
import ClassChildComponent from "./classChildComponent.jsx";

export const ColorContext = React.createContext();
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

function useLocalStorageValue(key, initialValue) {
    const [stateValue, setStateValue] = React.useState(() => {
        const storedValue = JSON.parse(localStorage.getItem(key));
        return storedValue || initialValue;
    })

    useDebugValue("useLocalStorageValue");

     const setStorageValue = (newValue) => {
        let valueToStore
         if(newValue instanceof Function)
             valueToStore = newValue(stateValue);
         else
             valueToStore = newValue;
        setStateValue(valueToStore);
         localStorage.setItem(key, JSON.stringify(valueToStore))
     }

     return [stateValue, setStorageValue]
}

function App() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("Beep")
    const [counterState, dispatch] = useReducer(counterReducer, initialCounter)
    const [colorState, colorDispatch] = useReducer(colorReducer, initialColor)
    const [objectState, setObjectState] = useLocalStorageValue("object",{
        property_1: "Property one",
        property_2: "Property two",
    })

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

    // useLayoutEffect(() => {
    //     document.body.style.backgroundColor = "#000"
    // }, []);

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
              <br />
              {objectState.property_1}
              <br />
              <button onClick={() => {
                  setObjectState({...objectState, property_1: "Property one updated"})
              }} >Update Property one</button>

              <ClassChildComponent />

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
