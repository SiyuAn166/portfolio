"use client";

import { useState } from 'react';

const CursorFocus = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };


  return (
    <>
      <div
        className="absolute w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none transition-transform duration-200 ease-out opacity-0"
        style={{ left: cursorPosition.x - 4, top: cursorPosition.y - 4 }}
      >
      </div>
      <div className="absolute inset-0" onMouseMove={handleMouseMove}></div>
    </>
  );
};

export default CursorFocus;
