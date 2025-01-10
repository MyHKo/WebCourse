import React, {useContext} from "react";
import {ColorContext} from "./App.jsx";

function Child() {
    const {colorState} = useContext(ColorContext)
    return (
        <h1 style={{color: colorState.color}}>Child Header</h1>
    )
}

export default Child