import './App.css'
import {useState} from "react";

function Greetings(props){
    const { name } = props
    return (
        <h1 className="greeting" style={props.style}>
            Hello <i className="emphasize">{name}</i>, Welcome!
        </h1>
    )
}

function Input({ setName }){
    const [inputValue, setInputValue] = useState("")

    return (
        <>
        <input type={"text"} value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}/>
            <br />
        <button onClick={() => {
            setName(inputValue)
        }}>Enter</button>
        </>
    )
}

function App() {
    const [ name, setName ] = useState([""])

  return (
      <div >
          <Greetings name={name} style={{border: "solid red"}} aria-hidden></Greetings>
          <Input setName={setName} />
      </div>
  )
}

export default App
