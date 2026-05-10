import { LayoutGrid } from 'lucide-react';

import type { PaletteColor } from '../../types/palette';
import { SectionHeader } from '../atoms/SectionHeader';
import { VibeRectangle } from '../VibeRectangle';

type ThemeVibeSectionProps = {
  colors: PaletteColor[];
};

export const ThemeVibeSection = ({ colors }: ThemeVibeSectionProps) => {
  return (
    <section className="mb-16">
      <SectionHeader
        icon={<LayoutGrid className="h-4 w-4" />}
        title="Theme Vibe Cards"
        className="mb-8 text-slate-400"
      />
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="group flex flex-col items-center">
            <VibeRectangle colors={colors} />
            <span className="mt-4 text-[10px] font-medium uppercase tracking-widest text-slate-400">Vibe Variant 0{index}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
