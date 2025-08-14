import { useState } from "react";

export default function Pointer4() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handlePointerMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
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
            transform: `translate(${x}px, ${y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
