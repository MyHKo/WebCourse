import React, {useContext, useImperativeHandle, useRef} from "react";
import {ColorContext} from "./App.jsx";
import ChildInput from "./ChildInput.jsx";

//

function Child() {
    const {colorState} = useContext(ColorContext)
    const nestedInputRef = useRef(null)
    return (
        <>
            <ChildInput ref={nestedInputRef} />
            <h1 style={{ color: colorState.color }}>Child Header</h1>
            <button onClick={() => nestedInputRef.current.focusAndBlur()}>
                Focus and Blur
            </button>
        </>
    )
}

export default Child