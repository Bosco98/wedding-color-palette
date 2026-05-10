import { Share2, Sparkles } from 'lucide-react';

import { PALETTE_MAKER_TITLE } from '../../data/palettes';

type PaletteHeroProps = {
  title: string;
  selectedTitle: string;
  isSharing: boolean;
  onShare: () => void;
};

export const PaletteHero = ({ title, selectedTitle, isSharing, onShare }: PaletteHeroProps) => {
  return (
    <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="text-center md:text-left">
        <div className="mb-2 flex items-center justify-center gap-2 text-rose-400 md:justify-start">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Visual Directory</span>
        </div>
        <h2 className="mb-2 text-4xl tracking-tight text-slate-800 md:text-6xl">{title}</h2>
        <p className="text-lg italic text-slate-500">
          {selectedTitle === PALETTE_MAKER_TITLE
            ? 'Design your own signature wedding aesthetic.'
            : 'Abstract vibes and live inspiration for guest attire.'}
        </p>
      </div>

      <button
        onClick={onShare}
        disabled={isSharing}
        className="mx-auto flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-bold text-white shadow-lg transition-all active:scale-95 hover:bg-slate-800 md:mx-0"
      >
        {isSharing ? <Sparkles className="h-4 w-4 animate-spin" /> : <Share2 className="h-4 w-4" />}
        Share Palette
      </button>
    </header>
  );
};
