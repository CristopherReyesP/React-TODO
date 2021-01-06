import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter( 10 );
    const [Show, setShow] = useState(true);
    

    return (
        <div>
            <h1>Counter:  <Small value={counter}/></h1>
            <hr />

            <button
                className='btn btn-primary mr-3'
                onClick={ increment }
            >
                +1
            </button>

            <button 
                className='btn btn-outline-primary ml-3'
                onClick={ () => {
                    setShow( !Show );
                }}
            >
                Show/Hide { JSON.stringify( Show )}
            </button>
        </div>
    )
}
