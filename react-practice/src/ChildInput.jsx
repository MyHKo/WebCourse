import React, {useImperativeHandle, useRef} from "react";

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

export default ChildInput