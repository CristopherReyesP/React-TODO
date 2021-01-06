import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layouts = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [BoxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <>
            <h1>LayoutEffect</h1>
            <hr />
            <blockquote className="blockquote">
                <p className='mb-0' ref={pTag}> {quote} </p><br />
            </blockquote>

            <pre>
                {JSON.stringify(BoxSize,null,3)}
            </pre>

            <button className='btn btn-primary' onClick={increment}>Nuevo</button>
        </>
    )
}
