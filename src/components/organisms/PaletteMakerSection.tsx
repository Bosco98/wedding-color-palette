import { Palette, Pencil, Trash2 } from 'lucide-react';

import type { PaletteColor } from '../../types/palette';

type PaletteMakerSectionProps = {
  customColors: PaletteColor[];
  onAddColor: () => void;
  onRemoveColor: (index: number) => void;
  onUpdateColor: (index: number, key: keyof PaletteColor, value: string) => void;
};

export const PaletteMakerSection = ({
  customColors,
  onAddColor,
  onRemoveColor,
  onUpdateColor,
}: PaletteMakerSectionProps) => {
  return (
    <section className="animate-in slide-in-from-top-4 mb-12 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm fade-in">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-bold uppercase tracking-tighter text-slate-700">
          <Palette className="h-4 w-4 text-rose-400" /> Customize Your Colors
        </h3>
        <button
          onClick={onAddColor}
          disabled={customColors.length >= 8}
          className="rounded-full bg-rose-50 px-4 py-2 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-100 disabled:opacity-50"
        >
          + Add Color
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {customColors.map((color, index) => (
          <div
            key={index}
            className="group/item relative flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-colors hover:border-rose-200"
          >
            <div className="relative h-10 w-10 shrink-0">
              <input
                type="color"
                value={color.hex}
                onChange={(event) => onUpdateColor(index, 'hex', event.target.value)}
                className="h-full w-full cursor-pointer rounded-lg border-none bg-transparent p-0"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <Pencil className="h-3.5 w-3.5 rounded-full bg-white/40 p-0.5 text-black backdrop-blur-[2px]" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <input
                type="text"
                value={color.name}
                onChange={(event) => onUpdateColor(index, 'name', event.target.value)}
                className="w-full truncate border-none bg-transparent p-0 text-sm font-bold focus:ring-0"
                placeholder="Color Name"
              />
              <p className="mt-1 font-mono text-[10px] uppercase leading-none text-slate-400">{color.hex}</p>
            </div>
            <button
              onClick={() => onRemoveColor(index)}
              className="p-1 text-slate-300 transition-colors hover:text-red-400"
              title="Delete Color"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
