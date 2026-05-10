import { useMemo } from 'react';

import type { PaletteColor } from '../types/palette';

type VibeRectangleProps = {
  colors: PaletteColor[];
};

export const VibeRectangle = ({ colors }: VibeRectangleProps) => {
  const dots = useMemo(() => {
    return Array.from({ length: 65 }).map(() => ({
      top: Math.random() * 110 - 5,
      left: Math.random() * 110 - 5,
      size: Math.random() * 32 + 12,
      color: colors[Math.floor(Math.random() * colors.length)]?.hex ?? '#ccc',
      opacity: Math.random() * 0.5 + 0.3,
      blur: Math.random() * 3,
    }));
  }, [colors]);

  return (
    <div className="relative h-36 w-24 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-transform duration-500 ease-out group-hover:scale-110">
      <div className="absolute inset-0 opacity-10" style={{ backgroundColor: colors[0]?.hex ?? '#eee' }} />
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            filter: `blur(${dot.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};
