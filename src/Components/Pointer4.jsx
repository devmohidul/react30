import { useState } from "react";

export default function Pointer4() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", position: "relative" }}
        onPointerMove={handlePointerMove}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            borderRadius: "50%",
            position: "absolute",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
