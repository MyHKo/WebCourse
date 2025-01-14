let state;

const ReactX = () => {
    const useState = (initialValue) => {
        if(state === undefined) {
            state = initialValue;
        }

        const setState = (newState) => {
            state = newState;
        }

        return [state, setState];
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