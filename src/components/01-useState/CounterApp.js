import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [State, setState] = useState({
        Counter1: 10,
        Counter2: 20
    });

    const { Counter1, Counter2 } = State;

    return (
        <>
            <h1>Counter 1 { Counter1 }</h1>
            <h1>Counter 2 { Counter2 }</h1>
            <hr></hr>

            <button 
            className="btn btn-primary"
            onClick={ () => {
                setState({
                    ... State,
                    Counter1: Counter1 + 1,
                });
            }}
            >
                +1
            </button>

        </>
    )
}
