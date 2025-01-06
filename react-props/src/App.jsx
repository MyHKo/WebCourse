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

function Input(){
}

function App() {
    const name = useState([""])

  return (
      <Greetings name={name} style={{border: "solid red"}} aria-hidden></Greetings>
  )
}

export default App
