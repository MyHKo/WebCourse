import './App.css'
import React from 'react'

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.initialName
        }
    }

    clickHandler = () => {
        this.setState({
            name: "Me"
        })
    }

    render() {
         return (
             <h1 className="greeting">
                 Hello, <i className="emphasize" onClick={this.clickHandler}>{this.state.name}</i>, Welcome!
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
            {this.state.show && <Greetings initialName="Victor"></Greetings>}
                </main>
            </>
        )
    }
}

export default App
