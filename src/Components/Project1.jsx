import { useState } from 'react';

export default function Project1(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handlePointerMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }
    return (
        <>
            <div
            onPointerMove={handlePointerMove}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh'
            }}>
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    transform: `translate(${x}px, ${y}px)`
                }} />
            </div>
        </>
    );
}