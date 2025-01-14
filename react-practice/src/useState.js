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

const { useState } = ReactX();

const Component = () => {
    const [state, setState] = useState(1)

    console.log(state)
    setState(2)
}

Component()
Component()