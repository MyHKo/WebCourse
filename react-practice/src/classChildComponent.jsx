import {Component} from "react"

class ClassChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            name: "class Child"
        }
    }

    componentDidMount() {
        console.log("Component componentDidMount")
    }

    componentDidUpdate() {
        console.log("Component componentDidUpdate")
    }

    render(){


        return (
            <>
                <h1>This is a {this.state.name}</h1><br/>
                <p>This is a child counter state: {this.state.counter}</p><br/>
                <button onClick={() => {
                    this.setState(
                        {
                            ...this.state,
                            counter: this.state.counter + 1
                        }
                    )
                }}
                >+
                </button>
                <button onClick={() => {
                    this.setState(
                        {
                            ...this.state,
                            counter: this.state.counter - 1
                        }
                    )
                }}
                >-
                </button>
            </>
        )
    }
}

export default ClassChildComponent