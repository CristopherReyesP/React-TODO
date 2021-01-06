import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [Coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = Coords;

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y };
            setCoords(coors);
        }
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Your are grate!</h3>
            <p>x: {x} y: {y}</p>
        </div>
    )
}
