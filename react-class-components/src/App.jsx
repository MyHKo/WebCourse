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
    state = {
        show: true
    }
    render() {
        return (<><main>
                <button onClick={() => {this.setState((prev) => ({show: !prev.show}))}}>Hide me</button>
            {this.state.show && <Greetings name="Victor"></Greetings>}
                </main>
            </>
        )
    }
}

export default App
