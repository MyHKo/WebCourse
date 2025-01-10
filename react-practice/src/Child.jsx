import React, {useContext} from "react";

function Child() {
    const {colorState} = useContext(ColorContext)
    return (
        <h1 style={{color: colorState.color}}>Child Header</h1>
    )
}

export default Child