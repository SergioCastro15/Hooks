import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {
    const {state: counter, increment } = useCounter(10);
    const [show, setShow] = useState(false);
    // react solo memorizara y realizara la accion cuando la dependencia counter cambie
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            <h3> Counter: <small>{counter}</small> </h3>
            <h2>{ memoProcesoPesado}</h2>
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
