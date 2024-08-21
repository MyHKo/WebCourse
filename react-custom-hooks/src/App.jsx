import './App.css'
import {createContext, useContext, useState} from "react";

const contextData ={
    number: 1,
    string: "Hello"
}

function useName(defaultValue){
    const [name, setName] = useState(defaultValue)
    function handleNameChange(newName){
        console.log(newName)
        if(newName.length > 10){
            setName(newName)
        } else {
            setName("Bib")
        }
    }
    return [name, handleNameChange]
}

const simpleContext = createContext();

function App() {

  return (
      <simpleContext.Provider value={contextData}>
    <div className="component-1 component">
        <SmallerComponent />
    </div>
      </simpleContext.Provider>
  )
}

function SmallerComponent() {
    const data = useContext(simpleContext);
    const [name, setName] = useName("Vitya")
    return (
        <div className="component">
            <p>Smaller Component {data.string} {name}</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                setName(e.target.elements.text.value);
                e.target.elements.text.value = ''
            }}>
                <input type="text" name="text"/>
                <button type="submit">
                    Change Name
            </button>
            </form>

        </div>
    )
}


export default App
