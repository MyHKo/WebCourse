import './App.css'
import React from 'react'

class Greetings extends React.Component {
    render() {
         return (
             <h1 className="greeting">
                 Hello, <i className="emphasize">{this.props.name}</i>, Welcome!
             </h1>
         )
    }
}

class App extends React.Component{
    render() {
        return (
            <Greetings name="Victor"></Greetings>
        )
    }
}

export default App
