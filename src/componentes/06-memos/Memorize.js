import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const {state: counter, increment } = useCounter(10);
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />

        <h1> Counter: <Small value={ counter }/> </h1>
        <button 
            className='btn btn-primary'
            onClick={increment}
        >
            +
        </button>
            
        <button
            className='btn btn-outline-primary ml-3'
            onClick={() => setShow(!show)}
        >
            Show/Hide { JSON.stringify(show)}
        </button>


        </div>
    )
}
