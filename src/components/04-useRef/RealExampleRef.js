import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [Show, setShow] = useState(false);
    return (
        
        <div>
            <h1>RealExampleRef</h1>
            <hr></hr>
            { Show && <MultipleCustomHooks />}
            <br />
            <button 
                className='btn btn-primary mt-5'
                onClick={ () => {
                    setShow( !Show );
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
