import { Copy } from 'lucide-react';

import type { PaletteColor } from '../../types/palette';

type ColorStoryCardProps = {
  color: PaletteColor;
  index: number;
  onCopy: (hex: string) => void;
};

export const ColorStoryCard = ({ color, index, onCopy }: ColorStoryCardProps) => {
  return (
    <div
      onClick={() => onCopy(color.hex)}
      className="group animate-in cursor-pointer fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        className="mb-3 h-32 rounded-2xl shadow-sm transition-transform group-hover:scale-[1.02]"
        style={{ backgroundColor: color.hex }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/10 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <Copy className="h-5 w-5" />
        </div>
      </div>
      <p className="truncate text-xs font-bold text-slate-700">{color.name}</p>
      <p className="font-mono text-[10px] uppercase text-slate-400">{color.hex}</p>
    </div>
  );
};
