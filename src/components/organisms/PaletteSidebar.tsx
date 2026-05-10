import { Heart, Plus } from 'lucide-react';

import { PALETTE_MAKER_TITLE } from '../../data/palettes';
import type { Palette } from '../../types/palette';
import { PalettePreviewDots } from '../molecules/PalettePreviewDots';

type PaletteSidebarProps = {
  palettes: Palette[];
  selectedTitle: string;
  onSelectPalette: (palette: Palette) => void;
  onSelectPaletteMaker: () => void;
};

export const PaletteSidebar = ({
  palettes,
  selectedTitle,
  onSelectPalette,
  onSelectPaletteMaker,
}: PaletteSidebarProps) => {
  return (
    <aside className="hidden w-72 flex-col overflow-hidden border-r border-slate-200 bg-white md:flex">
      <div className="flex items-center gap-2 border-b border-slate-100 p-6">
        <Heart className="h-5 w-5 fill-rose-400 text-rose-400" />
        <h1 className="text-lg font-serif italic tracking-tight text-slate-700">Bubu Wedding Palette</h1>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        <button
          onClick={onSelectPaletteMaker}
          className={`mb-4 flex w-full items-center gap-2 rounded-lg border-2 border-dashed px-4 py-3 text-left text-sm transition-all ${
            selectedTitle === PALETTE_MAKER_TITLE
              ? 'border-rose-200 bg-rose-50 font-bold text-rose-700'
              : 'border-slate-200 text-slate-500 hover:bg-slate-50'
          }`}
        >
          <Plus className="h-4 w-4" />
          <span>Palette Maker</span>
        </button>

        <div className="mx-2 mb-4 h-px bg-slate-100" />

        {palettes.map((palette) => (
          <button
            key={palette.title}
            onClick={() => onSelectPalette(palette)}
            className={`group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm transition-all ${
              selectedTitle === palette.title
                ? 'bg-rose-50 font-semibold text-rose-700 shadow-sm'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>{palette.title}</span>
            <div className="opacity-40 group-hover:opacity-100">
              <PalettePreviewDots colors={palette.colors} />
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
};
