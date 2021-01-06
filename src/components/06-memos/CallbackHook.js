import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [Counter, setCounter] = useState(10);

    // const increment = () =>{
    //     setCounter( Counter + 1 );
    // }

    const increment = useCallback( (num) => {
           setCounter( c => c + num );
        },[ setCounter ]);

    useEffect(()=>{
        //???
    },[increment]);

    return (
        <div>
            <h1>useCallback Hook: { Counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}
