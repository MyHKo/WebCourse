let hooks = []
let index = 0;

const ReactX = () => {
    const useState = (initialValue) => {
        const localIndex = index
        index++

        if(hooks[localIndex] === undefined) {
            hooks[localIndex] = initialValue;
        }

        const setState = (newState) => {
            hooks[localIndex] = newState;
        }

        return [hooks[localIndex], setState];
    }

    const useEffect = (callback, dependencyArray) => {
        let hasChange = true;
        const oldDependencies = hooks[index]

        if(oldDependencies) {
            hasChange = false

            dependencyArray.forEach((item, index) => {
                const oldDependency = oldDependencies[index];
                const areTheSame = Object.is(item, oldDependency);

                if(!areTheSame) {
                    hasChange = true;
                }
            })
        }

        if(hasChange)
            callback();
        hooks[index] = dependencyArray;
        index++
    }


    return {
        useState,
        useEffect
    }
}

const resetIndex = () => {
    index = 0;
}

const { useState, useEffect } = ReactX();

const Component = () => {
    const [state, setState] = useState(1)
    const [name, setName] = useState("Bob")

    useEffect(() => {
        console.log("UseEffect was run")
    }, [name])

    console.log(state)
    console.log(name)
    if(state !== 2)
        setState(2)
    if(name === "Bob" && state === 2)
        setName("John")
}

Component()
resetIndex()
Component()
resetIndex()
Component()