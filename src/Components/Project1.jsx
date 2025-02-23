import { useState } from 'react';

export default function Project1(){
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const handlePointerMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
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
                    transform: `translate(${position.x}px, ${position.y}px)`
                }} />
            </div>
        </>
    );
}