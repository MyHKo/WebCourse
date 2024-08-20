import './App.css'

function Greetings(props){
    const { name } = props
    return (
        <h1 className="greeting">
            Hello <i className="emphasize">{name}</i>, Welcome!
        </h1>
    )
}

function App() {

  return (
      <Greetings name='Victor' style={{border: "solid red"}} aria-hidden></Greetings>
  )
}

export default App
