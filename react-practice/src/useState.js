let state = []
let index = 0;

const ReactX = () => {
    const useState = (initialValue) => {
        const localIndex = index
        index++

        if(state[localIndex] === undefined) {
            state[localIndex] = initialValue;
        }

        const setState = (newState) => {
            state[localIndex] = newState;
        }

        return [state[localIndex], setState];
    }


    return {
        useState
    }
}

const resetIndex = () => {
    index = 0;
}

const { useState } = ReactX();

const Component = () => {
    const [state, setState] = useState(1)
    const [name, setName] = useState("Bob")

    console.log(state)
    console.log(name)
    setState(2)
    setName("John")
}

Component()
resetIndex()
Component()