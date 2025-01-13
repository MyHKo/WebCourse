import React, {useContext, useRef} from "react";
import {ColorContext} from "./App.jsx";

const ChildInput = (props) => {
    return (
        <input />
    )
}

function Child() {
    const {colorState} = useContext(ColorContext)
    const nestedInputRef = useRef(null)
    return (
        <>
        <ChildInput ref={nestedInputRef}/>
        <h1 style={{color: colorState.color}}>Child Header</h1>
        </>
    )
}

export default Child