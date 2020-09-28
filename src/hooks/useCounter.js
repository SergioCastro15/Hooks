import React, { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {
    const [state, setState] = useState(initialState);

    const increment = () => {
        setState(state + 1);
    }

    const decrement = () => {
        setState(state - 1);
    }

    const reset = () => {
        setState(initialState);
    }

    return {
        increment, // ref
        decrement, // ref,
        reset, //ref
        state // value
    }
}
