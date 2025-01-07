import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

  return (
    <>
        {counter}<br/>
        <button onClick={() => setCounter((prevState) => {
            return prevState + 1
        })}>Add One</button>
    </>
  )
}


export default App
