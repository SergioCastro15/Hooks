import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {
    const [counter, setcounter] = useState(10);

    // const increcement = () => {
    //     setcounter(counter + 1);
    // }

    const increcement = useCallback((num) => {
        setcounter( counter + num);
    }, [counter]);

    return (
        <div>
            <h1> useCallback Hook : { counter }</h1>
            <hr />

            <ShowIncrement increment = {increcement} />

        </div>
    )
}
