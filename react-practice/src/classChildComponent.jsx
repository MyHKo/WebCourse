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
                <h1>This is a {this.state.name}</h1>
                <p>This is a child counter state: {this.state.counter}</p>
                <button
                    onClick={() =>
                        this.setState(prevState => ({ ...prevState, counter: prevState.counter + 1 }))
                    }
                >
                    +
                </button>
                <button
                    onClick={() =>
                        this.setState(prevState => ({ ...prevState, counter: prevState.counter - 1 }))
                    }
                >
                    -
                </button>
            </>
        );

    }
}

export default ClassChildComponent