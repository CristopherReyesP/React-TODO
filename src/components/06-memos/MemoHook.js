import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 3000 );
    const [Show, setShow] = useState(true);
    
    const memoPP = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:  <small>{counter}</small></h3>
            <hr />

            <p>{ memoPP }</p>

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
