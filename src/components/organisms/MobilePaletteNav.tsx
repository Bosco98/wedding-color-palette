import { Heart, Menu, Plus, X } from 'lucide-react';

import { PALETTE_MAKER_TITLE } from '../../data/palettes';
import type { Palette as PaletteModel } from '../../types/palette';
import { PalettePreviewDots } from '../molecules/PalettePreviewDots';

type MobilePaletteNavProps = {
  isOpen: boolean;
  palettes: PaletteModel[];
  selectedTitle: string;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onSelectPalette: (palette: PaletteModel) => void;
  onSelectPaletteMaker: () => void;
};

export const MobilePaletteNav = ({
  isOpen,
  palettes,
  selectedTitle,
  onToggleMenu,
  onCloseMenu,
  onSelectPalette,
  onSelectPaletteMaker,
}: MobilePaletteNavProps) => {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-4 md:hidden">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 fill-rose-400 text-rose-400" />
          <span className="font-serif italic font-bold text-slate-700">Bubu Wedding Palette</span>
        </div>
        <button
          onClick={onToggleMenu}
          className="rounded-md p-2 hover:bg-slate-100"
          aria-label={isOpen ? 'Close palette menu' : 'Open palette menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-palette-menu"
          title={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-palette-menu" className="animate-in fixed inset-0 z-50 overflow-y-auto bg-white fade-in md:hidden">
          <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white p-6">
            <h2 className="text-xl italic">Select Palette</h2>
            <button onClick={onCloseMenu} className="text-3xl font-light">
              &times;
            </button>
          </div>
          <div className="grid gap-2 p-4">
            <button
              onClick={() => {
                onSelectPaletteMaker();
                onCloseMenu();
              }}
              className={`rounded-2xl border-2 border-dashed p-5 text-left transition-all ${
                selectedTitle === PALETTE_MAKER_TITLE ? 'border-rose-200 bg-rose-50 text-rose-700' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                <Plus className="h-4 w-4" /> Custom Palette Maker
              </div>
            </button>
            <div className="my-2 h-px bg-slate-100" />
            {palettes.map((palette) => (
              <button
                key={palette.title}
                onClick={() => {
                  onSelectPalette(palette);
                  onCloseMenu();
                }}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  selectedTitle === palette.title
                    ? 'border-rose-300 bg-rose-50 text-rose-700 shadow-sm'
                    : 'border-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold italic">{palette.title}</span>
                  <div className="flex -space-x-1">
                    <PalettePreviewDots colors={palette.colors} dotClassName="h-5 w-5 border border-white" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
