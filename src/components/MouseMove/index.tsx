import React, { useEffect, useState } from "react";

import "./styles.scss";

export default function Index() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="canvas">
      <div 
        className="follower"
        style={{
            // Smooth trailing movement
            left: position.x,
            top: position.y,
        }}
      />
    </div>
  );
}
