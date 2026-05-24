"use client";

import { useState } from "react";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

function generateShapes(count: number): Shape[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 60 + Math.random() * 120,
    delay: Math.random() * 10,
  }));
}

export default function FloatingShapes() {
  const [circles] = useState(() => generateShapes(4));
  const [diamonds] = useState(() => generateShapes(3));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((s) => (
        <div
          key={`c-${s.id}`}
          className="absolute animate-float-slow"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <div
            className="rounded-full border border-gold/5"
            style={{ width: s.size, height: s.size }}
          />
        </div>
      ))}
      {diamonds.map((s) => (
        <div
          key={`d-${s.id}`}
          className="absolute animate-float-medium"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <div
            className="border border-gold/5 rotate-45"
            style={{ width: s.size * 0.5, height: s.size * 0.5 }}
          />
        </div>
      ))}
    </div>
  );
}
