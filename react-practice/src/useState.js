import {useContext} from "react";

const ReactX = () => {
    const useState = (initialValue) => {
        let state = initialValue;

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
}

Component()