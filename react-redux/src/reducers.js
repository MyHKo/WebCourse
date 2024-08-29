export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const initialState = {
    count: 0
}

export const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return { ...state, count: state.count + 1 }
    }
    if(action.type === 'DECREMENT'){
        return { ...state, count: state.count - 1 }
    }
}