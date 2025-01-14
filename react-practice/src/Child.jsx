import React, {useContext, useImperativeHandle, useRef} from "react";
import {ColorContext} from "./App.jsx";

const ChildInput = React.forwardRef((props, forwardedRef) => {
    const localInputRef = useRef(null);

    useImperativeHandle(forwardedRef, () => {
        return {
            focusAndBlur: () => {
                localInputRef.current.focus()
                setTimeout(() => {
                    localInputRef.current.blur()
                }, 1000)
            }
        }
    })

    return (
        <input ref={localInputRef} />
    )
})

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