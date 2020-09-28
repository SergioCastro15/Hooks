import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterWithCustomHook = () => {
    const { 
        increment, 
        decrement, 
        reset, 
        state
    } = useCounter(520);
    return (
        <>
            <h1> Counter with Hook: { state }</h1>
            <hr />

            <button className='btn' onClick={() => increment(2)}> + 1</button>
            <button className='btn' onClick={reset}> Reset</button>
            <button className='btn' onClick={() => decrement(2)}> - 1</button>
        </>
    )
}
